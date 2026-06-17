import User from '../models/User.js';
import { generateToken, cookieOptions, isProd } from '../utils/generateToken.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const sanitizeUser = (user) => ({
  _id: user._id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  bio: user.bio,
  role: user.role || 'user',
  followers: user.followers,
  following: user.following,
  createdAt: user.createdAt,
});

export const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please provide name, email, and password');
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error('Password must be at least 6 characters');
  }

  const existing = await User.findOne({ email });
  if (existing) {
    res.status(400);
    throw new Error('User already exists with this email');
  }

  const user = await User.create({ name, email, password, role: 'user' });
  const token = generateToken(user._id);
  // determine if the request is secure (handles reverse proxies like Render/Vercel)
  const reqIsSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';
  // detect if this is a cross-site request (frontend origin differs from API)
  const origin = req.get('origin') || '';
  const requestBase = `${req.protocol}://${req.get('host')}`;
  const isCrossSite = origin && origin !== requestBase;

  // If cross-site or in production, set SameSite=None so the browser will send cookies
  // across sites. Browsers require Secure when SameSite=None, so ensure secure flag is set.
  const sameSiteFlag = isCrossSite || isProd ? 'none' : 'lax';
  const secureFlag = reqIsSecure || isProd;

  res.cookie('token', token, { ...cookieOptions, secure: secureFlag, sameSite: sameSiteFlag });
  res.status(201).json(sanitizeUser(user));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email and password');
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password');
  }

  const token = generateToken(user._id);
  const reqIsSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';
  const origin = req.get('origin') || '';
  const requestBase = `${req.protocol}://${req.get('host')}`;
  const isCrossSite = origin && origin !== requestBase;
  const sameSiteFlag = isCrossSite || isProd ? 'none' : 'lax';
  const secureFlag = reqIsSecure || isProd;
  res.cookie('token', token, { ...cookieOptions, secure: secureFlag, sameSite: sameSiteFlag });
  res.json(sanitizeUser(user));
});

export const logout = asyncHandler(async (req, res) => {
  const reqIsSecure = req.secure || req.headers['x-forwarded-proto'] === 'https';
  const origin = req.get('origin') || '';
  const requestBase = `${req.protocol}://${req.get('host')}`;
  const isCrossSite = origin && origin !== requestBase;
  const sameSiteFlag = isCrossSite || isProd ? 'none' : 'lax';
  const secureFlag = reqIsSecure || isProd;
  res.clearCookie('token', { httpOnly: true, secure: secureFlag, sameSite: sameSiteFlag });
  res.json({ message: 'Logged out successfully' });
});

export const getMe = asyncHandler(async (req, res) => {
  res.json(sanitizeUser(req.user));
});

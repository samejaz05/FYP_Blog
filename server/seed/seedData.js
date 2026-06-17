export const SEED_PASSWORD = 'Password123!';

export const adminUser = {
  name: 'Site Admin',
  email: 'admin@ink-echo.app',
  password: SEED_PASSWORD,
  role: 'admin',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  bio: 'Platform administrator for Ink & Echo.',
};

export const users = [
  {
    name: 'Elena Vasquez',
    email: 'elena@seed.ink-echo.app',
    password: SEED_PASSWORD,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    bio: 'Essayist and slow-living advocate. I write about attention, craft, and the quiet art of noticing.',
  },
  {
    name: 'Marcus Chen',
    email: 'marcus@seed.ink-echo.app',
    password: SEED_PASSWORD,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Software engineer by day, systems thinker always. Exploring how we build tools that respect human pace.',
  },
  {
    name: 'Amara Okafor',
    email: 'amara@seed.ink-echo.app',
    password: SEED_PASSWORD,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    bio: 'Travel writer and photographer. Chasing golden hour on every continent.',
  },
  {
    name: 'James Whitfield',
    email: 'james@seed.ink-echo.app',
    password: SEED_PASSWORD,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Former librarian. I review books, interview authors, and argue that reading is a form of travel.',
  },
];

export const blogs = [
  {
    authorEmail: 'elena@seed.ink-echo.app',
    title: 'The Case for Writing by Hand in a Digital Age',
    category: 'Writing',
    tags: ['writing', 'creativity', 'mindfulness'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1455398979734-638b19723162?w=1200&h=630&fit=crop',
    content: `
      <p>There is a particular friction to pen on paper that keyboards have engineered away. The slight drag of a nib, the micro-pause between letters — these tiny resistances force the mind to slow down. And slowness, I've found, is where clarity lives.</p>
      <h2>Why friction helps thinking</h2>
      <p>When I switched back to a notebook for first drafts, my sentences grew shorter and my arguments sharper. I wasn't typing faster than I could think. I was thinking at the speed of my hand.</p>
      <blockquote><p>The best ideas rarely arrive fully formed. They need time to unfold — and handwriting grants that time.</p></blockquote>
      <h3>A simple practice to try</h3>
      <ul>
        <li>Keep a dedicated notebook for morning pages — three pages, no editing.</li>
        <li>Transfer only the strongest paragraphs to your digital draft.</li>
        <li>Notice which ideas survive the translation; those are worth keeping.</li>
      </ul>
      <p>You don't need to abandon your laptop. Use handwriting as a filter, not a replacement. The screen is for shaping; the page is for discovering.</p>
      <h3>How to integrate handwriting into modern workflows</h3>
      <p>Set a short window each morning for handwritten notes, then scan or transcribe the most promising lines into a digital inbox. Tools like phone cameras or simple scanning apps make this low-friction. Over time you'll build a living archive of half-formed ideas that can be reworked without the pressure to publish.</p>
      <h3>Examples from practice</h3>
      <p>I once rescued a paragraph that had lived unnoticed in a notebook for months; after polishing it became the lede for a widely-shared essay. The notebook acted as a reservoir — not every fragment turns into something, but the ones that do are often far better than first drafts typed under deadline.</p>
      <p>In short: treat handwriting as a deliberate constraint that generates material for your digital work, rather than as an old-fashioned alternative.</p>
      <h3>Extended thoughts</h3>
      <p>Over time, the habit of collecting fragments will change how you think about projects. You begin to notice patterns: recurring images, metaphors, or questions that hint at larger essays. Those patterns are the seeds of sustained work.</p>
      <p>Don't worry if most entries never leave the notebook. The value is in the accumulation — a supply of attention-shaped material you can refine when the time is right.</p>
    `,
  },
  {
    authorEmail: 'elena@seed.ink-echo.app',
    title: 'Building a Reading Ritual That Actually Sticks',
    category: 'Culture',
    tags: ['reading', 'habits', 'slow-living'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb794f0e?w=1200&h=630&fit=crop',
    content: `
      <p>We treat reading like a virtue to aspire to rather than a pleasure to protect. No wonder our book lists grow while our finished count stays flat.</p>
      <h2>Anchor reading to an existing habit</h2>
      <p>I read for twenty minutes after making coffee on weekdays. The kettle boils; I open a book. The ritual doesn't depend on motivation — it depends on sequence.</p>
      <h2>Lower the barrier</h2>
      <p>Keep one book on your nightstand, one in your bag, one on the kitchen counter. Visibility beats willpower. A book you can't see is a book you won't read.</p>
      <p>Start with ten pages. Most nights you'll read more. Some nights you won't. Both outcomes are fine.</p>
      <h3>Make reading social</h3>
      <p>Share short notes about what you read with a friend or in a small group. A quick message about a favorite paragraph gives the practice social reinforcement and creates reasons to read that extend beyond personal discipline.</p>
      <h3>Choose books that invite re-reading</h3>
      <p>Read books that reward slow attention — essays, short novels, or books with strong thematic coherence. These provide more mileage for the time invested and make habits feel more rewarding.</p>
      <h3>Extended thoughts</h3>
      <p>Consider keeping a short reading log: a sentence about why a passage mattered and one follow-up question. Over months this log becomes a map of your intellectual curiosity and will help you choose future reading with more intention.</p>
      <p>Remember: consistency outperforms intensity. A little reading every day compounds into a substantial body of thought.</p>
    `,
  },
  {
    authorEmail: 'marcus@seed.ink-echo.app',
    title: 'Why Your Side Project Needs Boring Technology',
    category: 'Technology',
    tags: ['programming', 'startups', 'architecture'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop',
    content: `
      <p>Every year there's a new framework promising to revolutionize how we build. Most side projects die not from technical limits but from the energy spent learning tools instead of solving problems.</p>
      <h2>The stack I keep returning to</h2>
      <p>PostgreSQL or MongoDB. Express or a minimal API layer. React if I need a UI. That's it. I know these tools well enough to debug at 11 p.m. when nothing works.</p>
      <blockquote><p>Exciting technology is a tax on focus. Pay it only when the problem demands it.</p></blockquote>
      <h3>Questions before you reach for something new</h3>
      <ol>
        <li>Have I shipped something with my current stack in the last six months?</li>
        <li>Will this tool save me time after the learning curve, or just delay launch?</li>
        <li>Can I hire or collaborate with someone who already knows it?</li>
      </ol>
      <p>Boring technology lets you stay in problem-solving mode. For a side project, that's the only mode that matters.</p>
      <h3>When to introduce new tools</h3>
      <p>Introduce a new technology when the expected long-term savings outweigh the upfront cost, or when the project genuinely requires capabilities your current stack cannot provide. Test new tools in small, isolated spikes rather than rewriting large sections of your codebase.</p>
      <h3>Practical checklist</h3>
      <ul>
        <li>Prototype quickly to validate value.</li>
        <li>Keep the integration surface small.</li>
        <li>Document decisions so you (or future collaborators) understand why the change was made.</li>
      </ul>
      <h3>Extended thoughts</h3>
      <p>Technical choices have social costs: ramp-up time, hiring friction, and maintenance overhead. If your goal is learning rather than shipping, accept those costs consciously. Otherwise, prioritize stability and developer familiarity.</p>
      <p>When you do introduce a new tool, treat it like a feature: give it acceptance criteria, tests, and a rollback plan.</p>
    `,
  },
  {
    authorEmail: 'marcus@seed.ink-echo.app',
    title: 'Designing APIs for Humans, Not Just Clients',
    category: 'Technology',
    tags: ['api', 'developer-experience', 'backend'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop',
    content: `
      <p>RESTful conventions are a starting point, not a finish line. The developers integrating with your API are users too — and their experience determines adoption as much as any feature list.</p>
      <h2>Name things consistently</h2>
      <p>Pick plural nouns for collections, singular IDs for resources, and stick to them. <code>/api/blogs/:id/comments</code> beats a dozen one-off endpoints that made sense in isolation.</p>
      <h2>Errors should teach</h2>
      <p>Return messages that explain what went wrong and how to fix it. "Validation failed: email is required" beats "400 Bad Request" every time.</p>
      <p>Good API design is empathy encoded in HTTP status codes. Your future self — debugging at 2 a.m. — will thank you.</p>
      <h3>Versioning and deprecation</h3>
      <p>Plan for change. Adopt a clear versioning strategy and communicate deprecations early. Provide migration guides and maintain compatibility layers when practical so clients are not surprised.</p>
      <h3>Developer ergonomics</h3>
      <p>Provide examples, a small SDK, or a Postman collection. These artifacts lower the bar for integration and make your API feel polished and approachable.</p>
      <h3>Extended thoughts</h3>
      <p>APIs live in an ecosystem of clients. Make it easy for others to run quick experiments against your endpoints and reward contributions by keeping documentation in the same repo as code. Integration is social engineering as much as technical work.</p>
      <p>Good telemetry and clear error messages reduce support load and make deprecation less painful.</p>
    `,
  },
  {
    authorEmail: 'amara@seed.ink-echo.app',
    title: '48 Hours in Lisbon: A Photographer\'s Field Guide',
    category: 'Travel',
    tags: ['travel', 'photography', 'europe'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&h=630&fit=crop',
    content: `
      <p>Lisbon rewards early mornings. The tram lines are empty, the light is soft on the azulejo tiles, and the miradouros belong to you alone.</p>
      <h2>Day one: Alfama and Graça</h2>
      <p>Start at Miradouro da Senhora do Monte before breakfast. Walk downhill through Alfama's narrow lanes — shoot vertically, embrace the shadows. End at Time Out Market for lunch, not dinner; the crowds are manageable at noon.</p>
      <h2>Day two: Belém and the river</h2>
      <p>The Jerónimos Monastery facade is best in late afternoon sidelight. Walk the riverfront toward the Discoveries Monument. Golden hour here reflects off the Tagus like liquid amber.</p>
      <blockquote><p>Travel photography isn't about capturing everything. It's about capturing the feeling of being there.</p></blockquote>
      <p>Pack light. One body, one prime lens. Lisbon's hills will remind you why.</p>
      <h3>Practical shooting tips</h3>
      <p>Bring a small reflector or a portable diffuser for portraits in narrow alleys. Use a wide aperture for subject isolation and keep ISO low for cleaner highlights. Scout locations in the morning to find compositions that avoid midday crowds.</p>
      <h3>Where to eat and rest</h3>
      <p>Look for small tasca-style restaurants away from the main square for fresher food and friendlier prices. Sit with a pastel de nata and an espresso, watch the street life, and let the city provide the rhythm for your day.</p>
      <h3>Extended thoughts</h3>
      <p>Travel photography rewards patience. Spend an hour in a single square and notice how light and people change; the cumulative frames will give you a richer narrative than a scattershot approach. Edit ruthlessly — the best travel sets are often small.</p>
      <p>Respect local rhythms; slowing down will reveal portraits and moments you can't find from a checklist.</p>
    `,
  },
  {
    authorEmail: 'amara@seed.ink-echo.app',
    title: 'The Art of Packing One Carry-On for a Month Abroad',
    category: 'Travel',
    tags: ['travel', 'minimalism', 'packing'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=630&fit=crop',
    content: `
      <p>I spent three years traveling with a 40-liter backpack and a hard rule: if I can't carry it up four flights of stairs alone, it doesn't come.</p>
      <h2>The capsule wardrobe formula</h2>
      <p>Three tops, two bottoms, one layer, one dress or alternative — all in a cohesive palette. Wash sink-side every few days. Nobody remembers that you wore the same jacket in Prague and Porto.</p>
      <h3>What stays home</h3>
      <ul>
        <li>"Just in case" items — you can buy them there.</li>
        <li>More than two pairs of shoes.</li>
        <li>Full-size toiletries in the age of travel minis.</li>
      </ul>
      <p>Freedom isn't having everything you might need. It's needing only what you have.</p>
      <h3>Packing checklist</h3>
      <ul>
        <li>One versatile jacket</li>
        <li>Two pairs of pants/skirts</li>
        <li>Three tops that mix and match</li>
        <li>Lightweight towel and travel soap</li>
        <li>Compact power adapter and cable organizer</li>
      </ul>
      <p>Before you zip your bag, lay everything out and ask if each item can do double duty. If not, consider leaving it behind. The fewer items you carry, the more options you have for spontaneous movement.</p>
      <h3>Extended thoughts</h3>
      <p>Packing small trains you mind to prioritize experiences over objects. When you travel light, you spend less time managing gear and more time noticing place. That shift in attention often becomes the lasting memory of a trip.</p>
      <p>If you're nervous, practice a two-day trip with the same bag — you'll quickly learn what you truly need.</p>
    `,
  },
  {
    authorEmail: 'james@seed.ink-echo.app',
    title: 'Ten Novels That Changed How I Read',
    category: 'Books',
    tags: ['books', 'literature', 'reading-list'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=630&fit=crop',
    content: `
      <p>Some books entertain. Others rearrange the furniture in your mind. These ten did the latter for me — not a definitive canon, but a personal map of how my taste evolved.</p>
      <h2>Where I'd start if I were you</h2>
      <p><strong>Beloved</strong> by Toni Morrison taught me that prose can hold grief and beauty in the same sentence. <strong>2666</strong> by Roberto Bolaño showed me that scale itself can be a narrative device.</p>
      <h2>The overlooked middle</h2>
      <p>Don't skip mid-career works in favor of debuts and masterpieces. <strong>The Evening and the Morning</strong> isn't Follett's best-known book, but it's where I learned how research can breathe without showing off.</p>
      <p>Make your own list. Argue with mine. That's the point.</p>
      <h3>How to read these books</h3>
      <p>Approach them with a notebook. Record passages that surprise you and questions that form as you read. Revisit those notes after a few weeks — seeing what stuck helps you discover how a book changed your thinking.</p>
      <h3>Further reading</h3>
      <p>If you liked any of these, try pairing them with essays by contemporary critics to see how the conversation around the book has evolved. Libraries and university syllabi are great sources for curated companion reading lists.</p>
      <h3>Extended thoughts</h3>
      <p>Reading deeply changes slowly. Revisit a book after a year and you'll notice different passages rising to the surface. Keep track of those shifts — they're clues to how your taste and thinking mature.</p>
      <p>Share reading notes with friends; conversations often illuminate blind spots in your interpretation.</p>
    `,
  },
  {
    authorEmail: 'james@seed.ink-echo.app',
    title: 'Interview Notes: On the Future of Public Libraries',
    category: 'Culture',
    tags: ['libraries', 'community', 'books'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&h=630&fit=crop',
    content: `
      <p>I sat down with Dr. Helen Marsh, director of the Riverside Public Library system, to ask a question that sounds simple and isn't: what is a library for in 2026?</p>
      <h2>More than books on shelves</h2>
      <p>"We're the last truly democratic indoor space in many neighborhoods," she said. "No purchase required. No membership tier. Just walk in."</p>
      <p>Riverside now hosts job-search clinics, ESL conversation groups, and a seed library for urban gardeners. Circulation of physical books is steady; digital lending is up forty percent.</p>
      <blockquote><p>People don't come only for information. They come to be around other people who value it.</p></blockquote>
      <p>Support your local branch. Use it. The metrics that keep the lights on start with foot traffic.</p>
      <h3>Funding and community partnerships</h3>
      <p>Dr. Marsh emphasized diverse funding sources: municipal budgets, small grants, and partnerships with local nonprofits. Libraries that cultivate relationships with schools and community centers tend to have more resilient programs.</p>
      <h3>Getting involved</h3>
      <p>Volunteer, donate gently-used books, or propose a program. Small contributions of time or materials can unlock new offerings for a neighborhood, and libraries often welcome community-driven ideas.</p>
      <h3>Extended thoughts</h3>
      <p>Libraries are resilient when they become hubs for other community services — literacy programs, job training, maker spaces. Think about programming that bridges generations and skills; those interconnections are what keep libraries relevant.</p>
      <p>When you support a library, you support the civic scaffolding that makes other community projects possible.</p>
    `,
  },
  {
    authorEmail: 'marcus@seed.ink-echo.app',
    title: 'Draft: Rethinking Authentication Flows (Unpublished)',
    category: 'Technology',
    tags: ['security', 'draft'],
    status: 'draft',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=630&fit=crop',
    content: `
      <p>This is a work-in-progress draft exploring passwordless auth, session management, and cookie security patterns for modern SPAs.</p>
      <h2>Outline</h2>
      <ul>
        <li>httpOnly cookies vs. localStorage tokens</li>
        <li>Refresh token rotation</li>
        <li>CSRF considerations with SameSite policies</li>
      </ul>
      <p>More to come...</p>
    `,
  },
  {
    authorEmail: 'elena@seed.ink-echo.app',
    title: 'On Keeping a Little Notebook: Tiny Practices, Big Payoffs',
    category: 'Writing',
    tags: ['writing', 'notebook', 'practice'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=630&fit=crop',
    content: `
      <p>I keep a small notebook in the back pocket of my jeans. It is unassuming and collapses into itself after a few days of use; the pages soften and the spine forgets its original angle. This humble object has altered how I notice details.</p>
      <h2>Three short rules</h2>
      <ol>
        <li>Write one sentence about something you saw today.</li>
        <li>If an idea wants a second sentence, give it one immediately.</li>
        <li>Every Sunday, transfer one item into your digital drafts.</li>
      </ol>
      <p>These rules keep the practice light but generative. The notebook is not a repository of finished thoughts; it is a place to store the raw material of attention. Over months, these fragments accrete into themes — obsessions you didn't know you had.</p>
      <h3>Why the smallness matters</h3>
      <p>Large tools invite formality. A blank doc with a title creates pressure. A pocket notebook invites failure and curiosity. The cost of a bad sentence is tiny, and the permission to fail freely leads to surprising generosity in what you try.</p>
      <p>Try it for a month: one sentence a day. At the end, you'll have thirty openings; a generous set of starts beats perfection every time.</p>
    `,
  },
  {
    authorEmail: 'amara@seed.ink-echo.app',
    title: 'The Slow Web: How to Make the Internet a Little Kinder to Attention',
    category: 'Culture',
    tags: ['web', 'attention', 'design'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop',
    content: `
      <p>The phrase "slow web" is a provocation rather than a manifesto: what if we designed interfaces that encouraged patience, depth, and context instead of velocity and churn?</p>
      <h2>Principles for kinder interfaces</h2>
      <ul>
        <li>Prefer permanence over ephemera — make it easy to save and return.</li>
        <li>Design for resumption, not interruption — help users pick up where they left off.</li>
        <li>Limit the frictionless amplification of outrage — give time and context before sharing.</li>
      </ul>
      <p>Practically, this can look like fewer push notifications, better bookmarking tools, and interfaces that summarize long conversations rather than making every reply a tiny event. The slow web is not about slowness for its own sake; it's about building spaces that sustain attention.</p>
      <h3>Case study: a reading list</h3>
      <p>On one site I use, saved articles appear in a single list with a reading-estimate label and a "pick up where you left off" marker. I read more and feel less compelled to skim everything. Small design choices like these change behavior across time.</p>
      <p>We cannot rewire the entire internet overnight. But we can choose, project by project, to reward depth. Start by asking: what does mastery look like in this interface? Then design for it.</p>
    `,
  },
  {
    authorEmail: 'marcus@seed.ink-echo.app',
    title: 'A Practical Guide to Revision: How to Make Anything Better',
    category: 'Writing',
    tags: ['revision', 'editing', 'craft'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1483794344563-d27a8d38bc8b?w=1200&h=630&fit=crop',
    content: `
      <p>Revision is where most work actually happens. The first draft is an excavation; the second draft is architecture. If you're impatient for results, learn to love the slow accretion of improvements.</p>
      <h2>Five revision passes</h2>
      <ol>
        <li>Structure: are the sections in the best order?</li>
        <li>Argument: does each paragraph contribute to the central claim?</li>
        <li>Clarity: replace jargon and long sentences.</li>
        <li>Rhythm: vary sentence length for flow.</li>
        <li>Micro-edit: tighten verbs and trim excess words.</li>
      </ol>
      <p>Work through these passes separately. Trying to do them all at once will only flatten the gains. By isolating goals you can measure progress: after the Structure pass you should be able to sketch the piece from memory and know which parts still wobble.</p>
      <h3>Techniques that help</h3>
      <p>Read the piece aloud, print it on paper, and give yourself a day before each pass. When in doubt, delete: removal is often more revealing than addition. Finally, recruit a reader for a single question — do they understand the point in the first two paragraphs?</p>
      <p>Revision is less glamorous than invention, but it's the craft that turns good ideas into work that lasts.</p>
    `,
  },
  {
    authorEmail: 'james@seed.ink-echo.app',
    title: 'On Community Reading Groups: How Small Gatherings Scale Curiosity',
    category: 'Culture',
    tags: ['reading', 'community', 'books'],
    status: 'published',
    coverImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=630&fit=crop',
    content: `
      <p>Reading groups are one of the most underrated forms of civic infrastructure. A handful of curious people meeting monthly can sustain attention, generate recommendations, and create accountability for reading ambitions.</p>
      <h2>Tips for small, durable groups</h2>
      <ul>
        <li>Limit size to 8-10 people to preserve conversation depth.</li>
        <li>Rotate facilitation so no one person bears all the work.</li>
        <li>Mix formats: sometimes discuss a chapter, sometimes an essay, sometimes a theme.</li>
      </ul>
      <p>The social rhythm of a reading group creates permission to read slowly. Members borrow recommendations, but they also push one another into unfamiliar territory. The social cost of not finishing one month’s book is lower than the private shame of abandoning a solitary reading project — and that friction turns into sustained experimentation.</p>
      <p>Start small. Invite three earnest readers and set a single rule: show up having read a passage you want to talk about. The rest grows from there.</p>
    `,
  },
];

/** Index by author email: which other user emails they follow */
export const followGraph = {
  'elena@seed.ink-echo.app': ['james@seed.ink-echo.app', 'amara@seed.ink-echo.app'],
  'marcus@seed.ink-echo.app': ['elena@seed.ink-echo.app'],
  'amara@seed.ink-echo.app': ['elena@seed.ink-echo.app', 'james@seed.ink-echo.app'],
  'james@seed.ink-echo.app': ['amara@seed.ink-echo.app', 'marcus@seed.ink-echo.app'],
};

/** Likes: user email -> blog titles they liked */
export const likes = {
  'elena@seed.ink-echo.app': ['48 Hours in Lisbon: A Photographer\'s Field Guide', 'Ten Novels That Changed How I Read'],
  'marcus@seed.ink-echo.app': ['The Case for Writing by Hand in a Digital Age', 'Interview Notes: On the Future of Public Libraries'],
  'amara@seed.ink-echo.app': ['Building a Reading Ritual That Actually Sticks', 'Why Your Side Project Needs Boring Technology'],
  'james@seed.ink-echo.app': ['The Art of Packing One Carry-On for a Month Abroad', 'Designing APIs for Humans, Not Just Clients'],
};

/** Bookmarks: user email -> blog titles */
export const bookmarks = {
  'elena@seed.ink-echo.app': ['Ten Novels That Changed How I Read'],
  'marcus@seed.ink-echo.app': ['Designing APIs for Humans, Not Just Clients'],
  'amara@seed.ink-echo.app': ['48 Hours in Lisbon: A Photographer\'s Field Guide', 'The Art of Packing One Carry-On for a Month Abroad'],
  'james@seed.ink-echo.app': ['Building a Reading Ritual That Actually Sticks', 'Interview Notes: On the Future of Public Libraries'],
};

export const SEED_EMAIL_DOMAIN = '@seed.ink-echo.app';

export const PROFILE = {
  name: 'Hatake Kakashi',
  realName: 'Manojkumar D',
  first: 'MANOJ',
  last: 'KUMAR D',
  title: 'KAKASHI',
  subtitle: 'UNMASKED',
  role: 'Full Stack MERN Developer',
  summary:
    'Full Stack MERN Developer with hands-on experience building responsive web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in developing client projects and creating workflow automations using n8n and API integrations. Passionate about building scalable, user-friendly applications and efficient automation solutions.',
  email: 'vijaymanoj0000@gmail.com',
  phone: '+91 9159843416',
  github: 'https://github.com/manojkumar-mern',
  linkedin: 'https://www.linkedin.com/in/manoj-kumar-d-513253293',
  livePortfolio: 'https://manoj-portfolio-mern.vercel.app',
  resume: '/Manoj_Resume.pdf',
};

export type ProfileId = 'recruiter' | 'developer' | 'hackathon' | 'browsing';
export const VIEWERS: { id: ProfileId; name: string; color: string; icon: 'eye' | 'kunai' | 'leaf' | 'shuriken'; line: string }[] = [
  { id: 'recruiter', name: 'Recruiter', color: '#e50914', icon: 'eye', line: 'Looking for your next full stack hire? You picked the right show.' },
  { id: 'developer', name: 'Developer', color: '#2f6fed', icon: 'kunai', line: 'Fellow developer — the source code of every mission is on GitHub.' },
  { id: 'hackathon', name: 'Collaborator', color: '#f5b301', icon: 'shuriken', line: 'Need a developer who ships client projects & n8n automations? Let’s connect.' },
  { id: 'browsing', name: 'Just Browsing', color: '#1db954', icon: 'leaf', line: 'Grab some popcorn. The mask comes off in a few scrolls.' },
];

// Subtitles shown while the hero "plays" (keyed by hero scroll progress)
export const SUBTITLES: { from: number; to: number; text: string; sfx?: boolean }[] = [
  { from: 0.05, to: 0.22, text: 'Everyone keeps asking what’s under the mask.' },
  { from: 0.22, to: 0.38, text: 'Fine. Just this once.' },
  { from: 0.38, to: 0.55, text: 'No more missions. No more shadows.' },
  { from: 0.55, to: 0.72, text: 'These days… I ship code.' },
  { from: 0.72, to: 0.905, text: 'Full Stack MERN Developer. Shall we begin?' },
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Client Projects' },
  { value: 9, suffix: '+', label: 'Projects Built' },
  { value: 86, suffix: '%', label: 'B.Sc (Comp Sci)' },
  { value: 93, suffix: '%', label: 'HSC (12th Grade)' },
];

export const TOP10 = [
  { name: 'React.js', genre: 'Frontend', hue: 195 },
  { name: 'Node.js', genre: 'Backend', hue: 120 },
  { name: 'Express.js', genre: 'Backend', hue: 30 },
  { name: 'MongoDB', genre: 'Database', hue: 140 },
  { name: 'JavaScript (ES6+)', genre: 'Language', hue: 48 },
  { name: 'n8n Automation', genre: 'Automation', hue: 15 },
  { name: 'REST APIs', genre: 'Backend', hue: 0 },
  { name: 'Tailwind CSS', genre: 'Frontend', hue: 180 },
  { name: 'Mongoose', genre: 'Database', hue: 160 },
  { name: 'Zoho CRM', genre: 'Tools', hue: 215 },
];

export const SKILL_GENRES = [
  { name: 'Frontend', items: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML 5', 'CSS 3'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'API Integration'] },
  { name: 'Database', items: ['MongoDB', 'Mongoose'] },
  { name: 'Automation', items: ['n8n', 'Workflow Automation', 'WhatsApp API', 'Email Integration'] },
  { name: 'Tools', items: ['Git', 'Zoho CRM', 'Postman'] },
  { name: 'Languages', items: ['JavaScript (ES6+)', 'Tamil', 'English'] },
];

export const EPISODES = [
  {
    id: 'marathon',
    ep: 1,
    name: 'Marathon Event Platform',
    tagline: 'End-to-end race coordination & automated flows.',
    still: '/stills/masked.jpg',
    tint: '#e50914',
    rank: 'S-Rank',
    match: 99,
    url: 'https://github.com/manojkumar-mern',
    desc: 'Developed a full-stack marathon platform with event management, participant registration, event details, and responsive interfaces. Integrated n8n automation with WhatsApp, Email, APIs, and Zoho CRM to automate communication, data flow, and workflows.',
    genres: ['MERN Stack', 'n8n Automation', 'Event Platform'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'n8n', 'Zoho CRM', 'WhatsApp API', 'REST APIs', 'Tailwind CSS'],
  },
  {
    id: 'aruvitours',
    ep: 2,
    name: 'Aruvi Tours — Travel & Tourism',
    tagline: 'Curated adventures with dynamic tour booking.',
    still: '/stills/face.jpg',
    tint: '#2f6fed',
    rank: 'S-Rank',
    match: 97,
    url: 'https://github.com/manojkumar-mern',
    desc: 'Developed a responsive travel platform featuring group tours, fixed departures, luxury packages, destination information, enquiry forms, and contact integration. Built reusable React components and integrated backend services to manage dynamic tour content, enquiries, and user interactions.',
    genres: ['Travel-Tech', 'Full Stack', 'Web Platform'],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'photostudio',
    ep: 3,
    name: 'Photo Studio — Photography',
    tagline: 'Visual portfolio & interactive client enquiry flow.',
    still: '/stills/kunai.jpg',
    tint: '#f5b301',
    rank: 'S-Rank',
    match: 96,
    url: 'https://github.com/manojkumar-mern',
    desc: 'Developed a photography platform with service categories, package details, booking/enquiry flow, testimonials, and responsive UI. Implemented an interactive enquiry workflow allowing users to select photography formats and submit their requirements.',
    genres: ['Creative', 'UI/UX', 'Full Stack'],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs'],
  },
];

export const AWARDS = [
  { laurel: 'CLIENT EXCELLENCE', title: '5+ Client Projects', sub: 'Ethiroli Pvt. Ltd. · Full Stack Web Developer' },
  { laurel: 'ACADEMIC MERIT', title: '86% B.Sc & 93% HSC', sub: 'Sengunthar Arts & Science · AKV School' },
  { laurel: 'WORKFLOW AUTOMATION', title: 'n8n & CRM Workflows', sub: 'WhatsApp · Email · Zoho CRM Integration' },
];

export const CERTS = [
  { by: 'Ethiroli Pvt. Ltd.', title: 'Full Stack Developer Internship', hue: 0 },
  { by: 'NoviTech Pvt. Ltd.', title: 'FullStack Development and AI', hue: 195 },
  { by: 'LiveWire · Besant Technologies', title: 'Python Internship', hue: 50 },
  { by: 'n8n & APIs', title: 'Workflow & CRM Integration', hue: 140 },
  { by: 'React.js & Node.js', title: 'Full Stack MERN Architecture', hue: 215 },
  { by: 'MongoDB', title: 'Database & Mongoose Modeling', hue: 120 },
  { by: 'Postman & Git', title: 'REST APIs & Version Control', hue: 25 },
  { by: 'Sengunthar Arts & Science College', title: 'B.Sc Computer Science (86%)', hue: 270 },
];

export const SEASONS = [
  {
    label: 'Season 1',
    name: 'The Schooling Arc',
    years: '2018 – 2021',
    episodes: [
      {
        title: 'SSLC (10th) & HSC (12th)',
        where: 'AKV Matric Hr Sec School',
        note: 'Scored 86% in SSLC (10th) and 93% in HSC (12th).',
        still: '/stills/pull.jpg',
      },
    ],
  },
  {
    label: 'Season 2',
    name: 'The Degree Arc',
    years: '2021 – 2024',
    episodes: [
      {
        title: 'B.Sc in Computer Science',
        where: 'Sengunthar Arts & Science College',
        note: 'Graduated with 86% aggregate score.',
        still: '/stills/vest.jpg',
      },
    ],
  },
  {
    label: 'Season 3',
    name: 'The Industry Arc',
    years: '2024 – Present',
    episodes: [
      {
        title: 'Full Stack Web Developer',
        where: 'Ethiroli Pvt. Ltd. · Mar 1 – Aug 31',
        note: 'Contributed to 5+ client projects using React.js, Node.js, Express.js, and MongoDB. Built n8n automation workflows integrating WhatsApp, Email, APIs, and Zoho CRM.',
        still: '/stills/hand.jpg',
      },
    ],
  },
];

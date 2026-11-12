// Static mock data. No API is used anywhere in this project.
// All titles / captions / copy below are copied from the SERIES design.

export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const genres = ["Action", "Drama", "Thriller", "Sci-Fi", "Crime", "Adventure"];

const byslug = new Map();
const add = (title, genre, type, i) => {
  const slug = slugify(title);
  if (!byslug.has(slug)) {
    byslug.set(slug, {
      title,
      slug,
      hue: (i * 47) % 360,
      type,
      year: 2008 + (i % 16),
      rating: (7 + ((i * 3) % 25) / 10).toFixed(1),
      genre,
    });
  }
  return byslug.get(slug);
};

const baseTitles = [
  "Joker", "Dune", "Titanic", "You", "Fight Club", "The Traitors",
  "Demon Slayer", "Inception", "Gladiator", "Oppenheimer", "Interstellar",
  "The Batman", "Parasite", "Whiplash", "Avatar", "Tenet", "Arrival",
  "Se7en", "Heat", "Drive", "Narcos", "Dark", "Ozark", "Mindhunter",
  "Game Of Thrones", "Breaking Bad", "Journey to the West",
];
baseTitles.forEach((t, i) => add(t, genres[i % genres.length], i % 2 === 0 ? "movie" : "series", i));

// ---- poster rows (exact order and captions from the design) ----
const rowDefs = [
  { name: "FEATURED", genre: "Drama", titles: ["STAR WARS: The Last Jedi", "Weird Hotels", "JOKER:The World is a Stage", "The Lost City of Z", "High school in jakarta", "Visions"] },
  { name: "ACTION", genre: "Action", titles: ["JOKER:The World is a Stage", "BATMAN: Unmask the Truth", "STAR WARS: The Last Jedi", "The Lost City of Z", "STAR WARS: The Last Jedi", "AVENGERS: INFINITY WAR"] },
  { name: "HORROR", genre: "Horror", titles: ["ANNABELLE", "TALK TO ME", "THE NUN", "US", "THE SHINING", "MAN IN THE DARK"] },
  { name: "SCI-FY", genre: "Sci-Fi", titles: ["DUNE: THE ORIGINS", "THE MARTIAN", "Star Trek", "Blade runner", "Interstellar", "Inception"] },
  { name: "DRAMA", genre: "Drama", titles: ["The Terminal", "Monster", "LA LA LAND", "I Can Only Imagine", "The Shape of Water", "The Greatest Showman"] },
  { name: "ROMANTIC", genre: "Romance", titles: ["We Live in Time", "The Idea of You", "TITANIC", "Nos Etoiles Contaires", "The Notebook", "Before Sunrise"] },
  { name: "CRIME", genre: "Crime", titles: ["PHOTOCOPIER", "YOU", "GLASS", "VISIONS", "High School in Jakarta", "Inconnu"] },
];

let n = baseTitles.length;
export const rows = rowDefs.map((r) => ({
  name: r.name,
  items: r.titles.map((t) => add(t, r.genre, "movie", n++)),
}));

export const catalog = [...byslug.values()];
export const movies = catalog.filter((t) => t.type === "movie");
export const series = catalog.filter((t) => t.type === "series");

// ---- recently watched ----
export const recent = [
  { id: "ds-s2e2", title: "S2.E2 : Demon Slayer", progress: 38 },
  { id: "ds-s2e5", title: "S2.E5 : Demon slayer", progress: 26 },
  { id: "ds-s2e6", title: "S2.E6 : Demon Slayer", progress: 26 },
  { id: "ds-s2e4", title: "S2.E4 : Demon Slayer", progress: 26 },
  { id: "got-s2e5", title: "S2.E5 : Game Of Thrones", progress: 30 },
  { id: "got-s2e4", title: "S2.E4: Game Of Thrones", progress: 30 },
  { id: "bb-s1e2", title: "S1.E2 : Breaking Bad", progress: 30 },
  { id: "bb-s1e1", title: "S1.E1: Breaking Bad", progress: 30 },
];

// ---- search dropdown ----
export const searchHistory = ["demon slayer", "fight club", "game of thrones", "journey to the west"];

// ---- hero banners per page ----
export const heroes = {
  series: {
    slug: "demon-slayer",
    label: "SERIES",
    title: "DEMON SLAYER: KIMETSU NO YAIBA",
    text: "A family is attacked by demons and only two members survive – Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    tag: "ANIME",
    years: "2019-2025",
    rating: "8.6/10",
    playHref: "/title/demon-slayer",
  },
  movie: {
    slug: "fight-club",
    label: "MOVIE",
    title: "THE FIGHT CLUB",
    text: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    tag: "DRAMA",
    years: "1999",
    rating: "8.8/10",
    playHref: "/title/fight-club",
  },
  tvshow: {
    slug: "the-traitors",
    label: "TV SHOW",
    title: "THE TRAITORS",
    text: "A group of strangers gather in a remote castle, where hidden traitors secretly work to eliminate the faithful one by one.",
    tag: "REALITY",
    years: "2022-2025",
    rating: "7.8/10",
    playHref: "/title/the-traitors",
  },
};

// ---- FAQ ----
export const faqs = [
  { q: "How is my data protected?", a: "We use industry-standard encryption for your account and payment details, and we never sell your personal information." },
  { q: "Can I share my account with family/friends?", a: "Yes. Your plan lets you stream on several devices at the same time. Share it only with people you trust and keep your password private." },
  { q: "What should I do if I notice suspicious activity?", a: "Change your password right away, sign out of all devices from your account settings, and contact Zuno support so we can secure your account." },
  { q: "How can I contact Zuno support?", a: "Use the Contact Us page and send us a message. Our team replies as soon as possible." },
  { q: "Do you offer 24/7 customer service?", a: "Yes. Our support team is available around the clock to help with billing, playback and account questions." },
];

// ---- plans ----
export const plans = [
  { name: "BASIC PLAN", price: 9, features: ["1 device at a time", "SD (480p) quality", "Limited content library", "Ad-supported", "No offline downloads"] },
  { name: "STANDARD PLAN", price: 19, features: ["2 devices at a time", "HD (1080p) quality", "Full content library", "Ad-free streaming", "Offline downloads available"] },
  { name: "PREMIUM PLAN", price: 29, features: ["8 devices at a time", "Ultra HD (4K) + HDR quality", "early releases", "Ad-free streaming", "Offline downloads available", "Priority customer support"] },
];

// ---- title page episodes ----
export const episodes = [
  { n: 1, title: "Cruelty", time: "24m", text: "A young boy's quiet life is shattered and he begins a long journey of training and resolve." },
  { n: 2, title: "Trainer Sakonji Urokodaki", time: "24m", text: "Under a strict master, he learns that strength is built through patience and discipline." },
  { n: 3, title: "Sabito and Makomo", time: "24m", text: "Two mysterious allies test his limits before the final trial that decides his path." },
  { n: 4, title: "Final Selection", time: "24m", text: "Surrounded by danger, he must survive the night and prove he is ready to carry on." },
  { n: 5, title: "My Own Steel", time: "24m", text: "A new blade, a new mission, and a first step into the wider world he has to protect." },
];

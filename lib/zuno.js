// Design data for the ZUNO pages, taken from the Figma file (frame width 977px).
// No API is used anywhere: everything here is static.

// 1 design pixel -> CSS length (scales with the page width, see app/zuno.css)
export const u = (n) => `calc(${n} * var(--px))`;

export const NAV = [
  { label: "All movies", href: "/movies", w: 75 },
  { label: "Tv shows", href: "/tvshows", w: 71 },
  { label: "Web series", href: "/series", w: 72 },
];

export const RECENT_SEARCHES = [
  "demon slayer",
  "fight club",
  "game of thrones",
  "journey to the west",
];

/* ---------------- hero banners ---------------- */

const TAG_DESC_SERIES =
  "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.";

export const heroes = {
  series: {
    label: "SERIES",
    lines: [{ t: "DEMON SLAYER:", h: 31 }, { t: "KIMETSU NO YAIBA" }],
    desc: TAG_DESC_SERIES,
    tag: "ANIME",
    years: "2019-2025",
    imdb: "8.6/10",
    gap: 13,
    bg: { src: "/images/89552.png", box: { left: 0, top: 0, w: 977, h: 550 } },
    badge: { src: "/images/e68eb.png", left: 655, top: 230, w: 221.667, h: 210 },
  },
  movie: {
    label: "MOVIE",
    lines: [{ t: "THE FIGHT", h: 31 }, { t: "CLUB" }],
    desc: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    tag: "MOVIE",
    tagW: 31,
    years: "2008-2013",
    imdb: "9.6/10",
    gap: 10,
    bg: { src: "/images/a6796.png", box: { left: 0, top: -8, w: 977, h: 550 } },
  },
  tv: {
    label: "TV SHOW",
    lines: [{ t: "THE TRAITORS" }],
    desc: "Contestants in the game move into a majestic castle and work as a team to complete a series of dramatic and challenging missions to earn money for the prize pot. Some contestants are loyal, some are traitors.",
    tag: "SHOW",
    years: "2019-2025",
    imdb: "7.6/10",
    gap: 8,
    groupGap: 11,
    bg: {
      src: "/images/aba35.png",
      box: { left: 0, top: -19, w: 988, h: 533 },
      inner: { left: "-10.61%", top: 0, width: "120.72%", height: "125.89%" },
    },
    badge: { src: "/images/de59d.png", left: 586, top: 256, w: 354, h: 107, shadow: true },
  },
};

/* ---------------- poster rows ---------------- */

// layer: image placed inside the 134x178 poster box (offsets/size in design px)
const L = (hash, l, t, w, h, inner) => ({ src: `/images/${hash}.png`, l, t, w, h, inner });
const P = (caption, ...layers) => ({ caption, layers });

export const genreRows = [
  {
    name: "FEATURED", mt: 24, h: 220, headGap: 9, capGap: 7, arrow: [889, 94],
    items: [
      P("STAR WARS: The Last Jedi", L("f0b8b", 0, -1, 139, 206)),
      P("Weird Hotels", L("aecab", -3.74, 0, 142.499, 178.074)),
      P("JOKER:The World is a Stage", L("d1bc8", -1.5, 0, 135.675, 178.074)),
      P("The Lost City of Z", L("b146f", 0, -5, 139, 204)),
      P("High school in jakarta", L("ee479", -8.45, -0.13, 149, 186)),
      P("Visions", L("54df4", 0, -24.96, 136, 203)),
    ],
  },
  {
    name: "ACTION", mt: 24, h: 223, headGap: 10, capGap: 9, arrow: [889, 98],
    items: [
      P("JOKER:The World is a Stage", L("d1bc8", -1.94, -1.09, 138, 180)),
      P("BATMAN: Unmask the Truth", L("aecab", -3.74, 0, 142.499, 178.074), L("ebde7", -3.56, -2.09, 139, 212)),
      P("STAR WARS: The Last Jedi", L("f0b8b", 0, -1, 134, 199)),
      P("The Lost City of Z", L("b146f", 0, -6, 140, 205)),
      P("STAR WARS: The Last Jedi", L("879b1", -1, -18, 143, 214)),
      P("AVENGERS: INFINITY WAR", L("b9232", -8, -10.96, 148, 218)),
    ],
  },
  {
    name: "HORROR", mt: 23, h: 222, headGap: 12, capGap: 6, arrow: [889, 89],
    items: [
      P("ANNABELLE", L("ca83d", -8, -10, 150, 198, { h: "111.59%", t: "-1.86%" })),
      P("TALK TO ME", L("e3376", -3.37, -10.09, 138, 207)),
      P("THE NUN", L("9d411", -2.22, -14.09, 138.844, 206)),
      P("US", L("a413d", -4.23, -29.09, 143, 214)),
      P("THE SHINING", L("7d429", -4.67, -19.09, 144, 216)),
      P("MAN IN THE DARK", L("b5e0f", 0, 0, 134, 178)),
    ],
  },
  {
    name: "SCI-FY", mt: 24, h: 219, headGap: 10, capGap: 5, arrow: [889, 94],
    items: [
      P("DUNE: THE ORIGINS", L("a9319", 0, -5, 139, 206)),
      P("THE MARTIAN", L("c6fa6", -3.74, 0, 142.499, 178.074)),
      P("Star Trek", L("0b6c8", 0, 0, 134, 178), L("b633f", -1.5, 0, 135.675, 178.074)),
      P("Blade runner", L("66620", 0, -9, 142, 208)),
      P("INTERSTELLER", L("498bf", -8.45, -0.13, 149, 186)),
      P("INCEPTION", L("06cd8", -2, -24.96, 136, 203)),
    ],
  },
  {
    name: "DRAMA", mt: 21, h: 219, headGap: 10, capGap: 5, arrow: [889, 98],
    items: [
      P("The Terminal", L("162da", 0, -4, 138, 205)),
      P("Monster", L("5532a", -3.74, 0, 142.499, 178.074)),
      P("LA LA LAND", L("fa6c1", -1.5, 0, 135.675, 178.074)),
      P("I CAN ONLY IMAGINE", L("2aba9", 0, -5, 139, 204)),
      P("THE SHAPE OF WATER", L("0c276", -8.45, -0.13, 149, 186)),
      P("THE GREATEST SHOWMAN", L("47cbf", 0, -11.96, 136, 203)),
    ],
  },
  {
    name: "ROMANTIC", mt: 25, h: 219, headGap: 10, capGap: 5, arrow: [888, 93],
    items: [
      P("We Live In Time", L("1cf21", 0, -1, 134, 199)),
      P("THE IDEA OF YOU", L("023e3", -3.74, 0, 142.499, 178.074)),
      P("TITANIC", L("5058c", -1.5, 0, 135.675, 178.074)),
      P("Nos Etoiles Contaires", L("b6e4b", 0, -3, 135, 199)),
      P("THE NOTEBOOK", L("fc4c5", -8.45, -0.13, 149, 186)),
      P("Before Sunrise", L("66cbf", 0, -24.96, 136, 203)),
    ],
  },
  {
    name: "CRIME", mt: 26, h: 222, headGap: 10, capGap: 8, arrow: [889, 94], shadowTitle: true,
    items: [
      P("PHOTOCOPIER", L("e8c13", -4, -16, 138, 204)),
      P("YOU", L("6df91", -3.74, 0, 142.499, 178.074)),
      P("GLASS", L("b271d", -1.5, 0, 135.675, 178.074)),
      P("VISIONS", L("54df4", -4, -9, 139, 203)),
      P("HIGH SCHOOL IN JAKARTA", L("ee479", -8.45, -0.13, 149, 186)),
      P("Inconnu", L("ff130", -13.1, -38.96, 160, 217)),
    ],
  },
];

/* ---------------- recently watched ---------------- */

export const recentlyWatched = [
  { t: "S2.E2 : Demon Slayer", img: "e491d", w: 211 },
  { t: "S2.E5 : Demon slayer ", img: "b0836", w: 211 },
  { t: "S2.E6 : Demon Slayer", img: "ed157", w: 212 },
  { t: "S2.E4 : Demon Slayer", img: "ec0cc", w: 211 },
  { t: "S2.E5 : Game Of Thrones", img: "35baf", w: 211 },
  { t: "S2.E4: Game Of Thrones", img: "459ee", w: 211 },
  { t: "S1.E2 : Breaking Bad", img: "2667c", w: 212 },
  { t: "S1.E1: Breaking Bad", img: "14267", w: 211 },
];

/* ---------------- FAQ ---------------- */

export const faqItems = [
  { q: "How is my data protected?", a: "Your account details and viewing history are encrypted and are never shared with third parties without your permission." },
  { q: " Can I share my account with family/friends?", a: "Yes. Your plan decides how many devices can stream at the same time. Please keep your password private." },
  { q: "What should I do if I notice suspicious activity?", a: "Change your password right away and contact Zuno support so we can secure your account." },
  { q: "How can I contact Zuno support?", a: "Use the Contact us page in the footer and our team will get back to you." },
  { q: "Do you offer 24/7 customer service?", a: "Our help centre is available all day, and Premium members get priority customer support." },
];

/* ---------------- plans ---------------- */

export const planCards = [
  {
    name: "BASIC PLAN", price: "$9", w: 288, gap: 31, listGap: 4, priceTop: 72,
    items: ["1 device at a time", "SD (480p) quality", "Limited content library", "Ad-supported", "No offline downloads"],
  },
  {
    name: "STANDARD PLAN", price: "$19", w: 289, gap: 31, listGap: 5, priceTop: 71,
    items: ["2 devices at a time", "HD (1080p) quality", "Full content library", "Ad-free streaming", "Offline downloads available"],
  },
  {
    name: "PREMIUM PLAN", price: "$29", w: 288, gap: 21, listGap: 5, priceTop: 68,
    items: ["8 devices at a time", "Ultra HD (4K) + HDR quality", "early releases", "Ad-free streaming", "Offline downloads available", "Priority customer support"],
  },
];

/* ---------------- free-trial banner collage ---------------- */
// [left, top, wrapperW, wrapperH, posterW, posterH, image]; every poster is rotated -14.78deg
export const trialCollage = [
  [360.63, -23.7, 169.391, 214.056, 125.509, 188.263, "6df91"],
  [505.71, -59.43, 168.782, 211.748, 125.509, 185.876, "f0b8b"],
  [402.25, 135.39, 154.576, 175.938, 120.222, 150.235, "aecab"],
  [547.34, 98.31, 168.782, 211.748, 125.509, 185.876, "5842f"],
  [588.96, 256.05, 161.385, 183.717, 125.509, 156.886, "ee479"],
  [464.08, -217.16, 171.262, 221.146, 125.509, 195.596, "e8c13"],
  [440.4, 295.25, 163.386, 191.302, 125.509, 164.73, "d1bc8"],
  [607.2, -254.93, 169.217, 213.396, 125.509, 187.581, "54df4"],
  [648.83, -97.19, 168.782, 211.748, 125.509, 185.876, "2dc42"],
  [690.45, 60.54, 169.438, 214.213, 125.515, 188.424, "879b1"],
  [319, -181.44, 168.347, 210.099, 125.509, 184.17, "b146f"],
  [754.66, -293.85, 168.782, 211.748, 125.509, 185.876, "a1736"],
  [796.29, -136.11, 168.782, 211.748, 125.509, 185.876, "b9232"],
  [837.92, 21.63, 167.085, 205.317, 125.509, 179.225, "b271d"],
  [732.08, 218.28, 170, 216.364, 125.509, 190.651, "ebde7"],
];
// the second copy of the collage is the first one moved by this offset
export const trialCollageShift = [-611, 60.85];

/* ---------------- footer text ---------------- */

export const footerText = {
  p1Bold: "At Zuno",
  p1: ", we believe entertainment should be limitless, personal, and always within reach. Our platform brings together the best of movies, web series, live shows, and originals—curated for every mood and every screen.",
  p2: "With a sleek, user-friendly experience, Zuno is more than just streaming—it’s about connecting people with stories that inspire, thrill, and entertain. Whether you love binge-worthy dramas, blockbuster films, or fresh original content, Zuno is your destination for endless entertainment.",
  p3: "Join us, and discover a world where stories never stop.",
};

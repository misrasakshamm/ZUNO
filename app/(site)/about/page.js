import BackButton from "@/components/BackButton";

export const metadata = { title: "About Us – ZUNO" };

const features = [
  {
    title: "Seamless Video Playback",
    text: "Our adaptive streaming adjusts quality automatically to your connection, so playback stays smooth on mobile data, Wi-Fi or a big-screen TV. You can also pick a quality yourself whenever you like.",
  },
  {
    title: "Smart Search",
    text: "Find what you want in seconds. Search is tuned for speed and accuracy, with instant results by title and genre, so you spend less time looking and more time watching.",
  },
  {
    title: "Friendly User Interface",
    text: "ZUNO is designed to feel simple. Clear menus, tidy rows and one-tap playback make it easy for anyone to browse, whatever their device or experience.",
  },
  {
    title: "Hot Content Catalogue",
    text: "From blockbuster movies to binge-worthy web series and anime, our library covers every mood and is refreshed every week with new and trending titles.",
  },
  {
    title: "Originals",
    text: "We invest in original stories made for ZUNO. Bold ideas, fresh voices and unforgettable characters you will not find anywhere else.",
  },
];

export default function AboutPage() {
  return (
    <div className="container page-pad about">
      <BackButton />
      <h1 className="about-title">About Us</h1>
      <p className="about-lead">
        ZUNO is an online video streaming platform for movies, TV shows and web series. Our
        mission is to put limitless, personal entertainment within reach on every screen, with a
        growing catalogue, clean design and plans that stay simple.
      </p>

      <h2 className="about-sub">A Video Experience Like No Other</h2>
      <div className="about-list">
        {features.map((f) => (
          <div key={f.title} className="about-item">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

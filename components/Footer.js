import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="zfoot">
      <div className="zfoot-grid">
        <div className="zfoot-brand">
          <Logo />
          <p>
            <b>At Zuno,</b> we believe entertainment should be limitless, personal, and always
            within reach. Our platform brings together the best of movies, web series, live shows,
            and originals—curated for every mood and every screen.
          </p>
          <p>
            With a sleek, user-friendly experience, Zuno is more than just streaming—it’s about
            connecting people with stories that inspire, thrill, and entertain. Whether you love
            binge-worthy dramas, blockbuster films, or fresh original content, Zuno is your
            destination for endless entertainment. Join us, and discover a world where stories
            never stop.
          </p>
        </div>

        <div className="zfoot-col">
          <h4>Features</h4>
          <ul>
            <li><Link href="/movies">Movies</Link></li>
            <li><Link href="/tvshows">TV Shows</Link></li>
            <li><Link href="/series">Web Series</Link></li>
          </ul>
          <h4 className="gap">AVAILAIBLE ON</h4>
          <div className="zfoot-icons left">
            <a href="#" aria-label="Google Play">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M4.5 2.4v19.2L14.2 12z" /><path d="M16 10.2l3.9 1.9a.9.9 0 0 1 0 1.6L16 13.8 14.9 12z" /><path d="M5.2 1.8l10.2 5.5-2.2 2.2z" /><path d="M5.2 22.2l10.2-5.5-2.2-2.2z" /></svg>
            </a>
            <a href="#" aria-label="App Store">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round"><path d="M12 3L5 20M12 3l7 17M7.5 14h9M4 20h5" /></svg>
            </a>
          </div>
        </div>

        <div className="zfoot-col">
          <h4>Support</h4>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/#faq">Help centre</Link></li>
            <li><a href="#">Terms and Condition</a></li>
          </ul>
        </div>

        <div className="zfoot-col follow">
          <h4>Follow us</h4>
          <div className="zfoot-icons">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12z" /></svg>
            </a>
            <a href="#" aria-label="X">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" aria-label="Google" className="dim">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
            </a>
          </div>
          <p className="designed"><b>DESIGNED</b> by Suryansh</p>
        </div>
      </div>
    </footer>
  );
}

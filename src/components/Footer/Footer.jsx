import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <span>© {year} Samrat Alam</span>
        <span className="site-footer__meta">
          Dhaka, Bangladesh · <a href="#main">Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
}

import './styles.css';

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <p>&copy; {year} Academia DP. Todos los derechos reservados.</p>
        <div className="footer__social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

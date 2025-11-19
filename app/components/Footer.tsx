
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Rentop</h3>
          <p>Location de véhicules simple et rapide à travers la France.</p>
          <div className="social-links">
            <a className="social-icon" href="#" aria-label="Twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a className="social-icon" href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a className="social-icon" href="#" aria-label="Instagram">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Liens</h3>
          <ul>
            <li><a href="/#offers">Offres</a></li>
            <li><a href="/#categories">Catégories</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: contact@rentop.example</li>
            <li>Téléphone: +33 1 23 45 67 89</li>
            <li>Paris, France</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Rentop. Tous droits réservés.
      </div>
    </footer>
  );
}
import type { Route } from "./+types/home";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import citadineImg from "../assets/images/citadines.webp";
import suvImg from "../assets/images/suv.jpg";
import berlineImg from "../assets/images/berline.jpg";
import electriqueImg from "../assets/images/electrique.jpg";
import peugeot208Img from "../assets/images/peugeot208.jpg";
import renaultCapturImg from "../assets/images/renaultCaptur.jpg";
import teslaModel3Img from "../assets/images/teslaModel3.jpg";
import { Link } from "react-router";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rentop - accueil" },
    { name: "description", content: "Bienvenue sur Rentop, votre plateforme de location en ligne." },
  ];
}

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Homepage */}
      <div id="homepage">
        {/* Hero Section */}
        <section className="hero">
          <h1>Louez la voiture parfaite</h1>
          <p>Des milliers de véhicules disponibles à travers la France</p>
          <Link to="/search" className="hero-btn">Commencer la recherche</Link>
        </section>

        {/* Top Offers Section */}
        <section id="offers" className="top-offers">
          <div className="container">
            <h2 className="section-title">Offres du Moment</h2>
            <p className="section-subtitle">Profitez de nos meilleures promotions</p>
            <div className="offers-grid">
              <div className="offer-card">
                <div className="offer-image">
                  <span className="offer-badge">-20%</span>
                  <img src={peugeot208Img} alt="Peugeot 208" />
                </div>
                <div className="offer-content">
                  <h3>Peugeot 208</h3>
                  <div className="offer-category">Citadine • 2023</div>
                  <div className="offer-features">
                    <span>👤 5 places</span>
                    <span>⚙️ Manuelle</span>
                    <span>❄️ Clim</span>
                  </div>
                  <div className="offer-price-section">
                    <div className="offer-price">40€<span>/jour</span></div>
                    <Link to="/detail/1" className="offer-btn">Voir</Link>
                  </div>
                </div>
              </div>

              <div className="offer-card">
                <div className="offer-image">
                  <span className="offer-badge">-15%</span>
                  <img src={renaultCapturImg} alt="Renault Captur" />
                </div>
                <div className="offer-content">
                  <h3>Renault Captur</h3>
                  <div className="offer-category">SUV Compact • 2024</div>
                  <div className="offer-features">
                    <span>👤 5 places</span>
                    <span>⚙️ Auto</span>
                    <span>📱 GPS</span>
                  </div>
                  <div className="offer-price-section">
                    <div className="offer-price">55€<span>/jour</span></div>
                    <Link to="/detail/2" className="offer-btn">Voir</Link>
                  </div>
                </div>
              </div>

              <div className="offer-card">
                <div className="offer-image">
                  <span className="offer-badge">-25%</span>
                  <img src={teslaModel3Img} alt="Tesla Model 3" />
                </div>
                <div className="offer-content">
                  <h3>Tesla Model 3</h3>
                  <div className="offer-category">Électrique • 2024</div>
                  <div className="offer-features">
                    <span>👤 5 places</span>
                    <span>⚡ Électrique</span>
                    <span>🚀 Sport</span>
                  </div>
                  <div className="offer-price-section">
                    <div className="offer-price">120€<span>/jour</span></div>
                    <Link to="/detail/3" className="offer-btn">Voir</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="categories">
          <div className="container">
            <h2 className="section-title">Nos Catégories</h2>
            <p className="section-subtitle">Choisissez le véhicule qui correspond à vos besoins</p>
            <div className="category-grid">
              <div className="category-card">
                <img src={citadineImg} alt="Citadines" />
                <h3>Citadines</h3>
                <p>Parfait pour la ville et les courts trajets</p>
                <div className="category-price">À partir de 35€/jour</div>
              </div>
              <div className="category-card">
                <img src={suvImg} alt="SUV" />
                <h3>SUV</h3>
                <p>Espace et confort pour toute la famille</p>
                <div className="category-price">À partir de 65€/jour</div>
              </div>
              <div className="category-card">
                <img src={berlineImg} alt="Berlines" />
                <h3>Berlines</h3>
                <p>Élégance et performance réunies</p>
                <div className="category-price">À partir de 85€/jour</div>
              </div>
              <div className="category-card">
                <img src={electriqueImg} alt="Électriques" />
                <h3>Électriques</h3>
                <p>Conduisez écologique et économique</p>
                <div className="category-price">À partir de 75€/jour</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="reviews">
          <div className="container">
            <h2 className="section-title">Avis Clients</h2>
            <p className="section-subtitle">Ce que nos clients pensent de nous</p>
            <div className="reviews-grid">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👨</div>
                  <div className="review-info">
                    <h4>Marc Dupont</h4>
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="review-text">"Excellent service ! La voiture était propre et en parfait état. Le processus de réservation était très simple. Je recommande vivement Rentop pour toutes vos locations."</p>
                <div className="review-date">Il y a 2 jours</div>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👩</div>
                  <div className="review-info">
                    <h4>Sophie Martin</h4>
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="review-text">"Très satisfaite de ma location ! Prix compétitifs et service client réactif. J'ai pu prolonger ma réservation facilement. Une expérience sans souci du début à la fin."</p>
                <div className="review-date">Il y a 5 jours</div>
              </div>

              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar">👨</div>
                  <div className="review-info">
                    <h4>Pierre Dubois</h4>
                    <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="review-text">"Première location avec Rentop et certainement pas la dernière ! Voiture récente, équipée et très agréable à conduire."</p>
                <div className="review-date">Il y a 1 semaine</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">Questions, réservations ou assistance — contactez-nous</p>

            <div className="contact-grid">
              <div className="contact-info">
                <p><strong>Email:</strong> contact@rentop.example</p>
                <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                <p><strong>Adresse:</strong> 10 Rue de l'Exemple, Paris, France</p>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-field">
                  <input type="text" name="name" placeholder="Votre nom" required />
                </div>
                <div className="form-field">
                  <input type="email" name="email" placeholder="Votre email" required />
                </div>
                <div className="form-field">
                  <textarea name="message" placeholder="Votre message" rows={5} required />
                </div>
                <button className="hero-btn" type="submit">Envoyer</button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
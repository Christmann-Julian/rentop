import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import peugeot208Img from "../assets/images/peugeot208.jpg";
import type { Route } from "./+types/detail";
import "../assets/styles/detail.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rentop - détail" },
  ];
}

export default function Detail() {
  const { carId } = useParams();
  const [car, setCar] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!carId) {
      setError("ID manquant");
      setLoading(false);
      return;
    }

    fetch("../car.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const ct = res.headers.get("content-type") || "";
        if (!ct.includes("application/json")) throw new Error("Réponse non JSON");
        return res.json();
      })
      .then((cars: any[]) => {
        const found = cars.find((c) => String(c.id) === String(carId));
        if (!found) setError("Véhicule introuvable");
        else setCar(found);
      })
      .catch((err) => setError(String(err)))
      .finally(() => setLoading(false));
  }, [carId]);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="container">Chargement…</div>
        <Footer />
      </main>
    );
  }

  if (error || !car) {
    return (
      <main>
        <Navbar />
        <div className="container">
          Erreur: {error || "Véhicule introuvable"} — <Link to="/search">Retour</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="detail-page container">
        <Link to="/search" className="back-link">← Retour</Link>

        <div className="detail-card">
          <div className="detail-image">
            <img src={car.image || peugeot208Img} alt={`${car.make} ${car.model}`} />
          </div>

          <div className="detail-info">
            <h1>{car.make} {car.model}</h1>
            <p className="detail-category">{car.category}</p>

            <div className="detail-features">
              <span><i className="fas fa-users" /> {car.seats} places</span>
              <span><i className="fas fa-cog" /> {car.transmission}</span>
              <span><i className="fas fa-gas-pump" /> {car.motor}</span>
            </div>

            {car.description && <p className="detail-description">{car.description}</p>}

            <div className="detail-price">
              <strong>{car.pricePerDay}€</strong> <span>/ jour</span>
            </div>


            <div className="detail-actions">
              <button className="btn-primary">{car.phone}</button>
              <Link to="/search" className="btn-secondary">Retour aux résultats</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
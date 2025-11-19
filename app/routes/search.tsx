import { useMemo, useState } from "react";
import type { Route } from "./+types/search";
import "../assets/styles/search.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import peugeot208Img from "../assets/images/peugeot208.jpg";
import carsData from "../..//public/car.json";
import { Link } from "react-router";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rentop - Recherche" },
    { name: "description", content: "Recherchez et filtrez les véhicules disponibles." },
  ];
}

export default function Search() {
  const [filters, setFilters] = useState({
    q: "",
    category: "",
    priceMin: "",
    priceMax: "",
    seat: "",
    transmission: "",
    motor: "",
  });

  const [sortBy, setSortBy] = useState("relevance");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({
      q: "",
      category: "",
      priceMin: "",
      priceMax: "",
      seat: "",
      transmission: "",
      motor: "",
    });
    setSortBy("relevance");
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const filteredCars = useMemo(() => {
    const results = (carsData as any[]).filter((c) => {
      const q = filters.q.trim().toLowerCase();
      if (q) {
        const combined = `${c.make} ${c.model}`.toLowerCase();
        if (!combined.includes(q)) return false;
      }

      if (filters.category && c.category !== filters.category) return false;
      if (filters.transmission && c.transmission !== filters.transmission) return false;
      if (filters.motor && c.motor !== filters.motor) return false;

      if (filters.seat) {
        const seatNum = Number(filters.seat);
        if (!isNaN(seatNum) && c.seats < seatNum) return false;
      }

      if (filters.priceMin) {
        const min = Number(filters.priceMin);
        if (!isNaN(min) && c.pricePerDay < min) return false;
      }

      if (filters.priceMax) {
        const max = Number(filters.priceMax);
        if (!isNaN(max) && c.pricePerDay > max) return false;
      }

      return true;
    });

    const sorted = results.slice();
    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else if (sortBy === "asc") {
      sorted.sort((a, b) => a.make.localeCompare(b.make));
    } else if (sortBy === "desc") {
      sorted.sort((a, b) => b.make.localeCompare(a.make));
    }

    return sorted;
  }, [filters, sortBy]);

  return (
    <main>
      <Navbar />

      <div className="search-page">
        <div className="container">

          {/* Layout 2 colonnes */}
          <div className="search-layout">

            {/* Colonne Filtres */}
            <div className="filters-column">
              <div className="filter-bar">
                <div className="filter-group">
                  <label htmlFor="q">Rechercher</label>
                  <input
                    type="text"
                    id="q"
                    name="q"
                    placeholder="Marque, modèle..."
                    value={filters.q}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="category">Catégorie</label>
                  <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
                    <option value="">Toutes</option>
                    <option value="citadine">Citadine</option>
                    <option value="suv">SUV</option>
                    <option value="berline">Berline</option>
                    <option value="electrique">Électrique</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label htmlFor="seat">Places (min)</label>
                  <input
                    type="number"
                    id="seat"
                    name="seat"
                    placeholder="5"
                    value={filters.seat}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="priceMin">Prix min (€/jour)</label>
                  <input
                    type="number"
                    id="priceMin"
                    name="priceMin"
                    placeholder="0"
                    value={filters.priceMin}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="priceMax">Prix max (€/jour)</label>
                  <input
                    type="number"
                    id="priceMax"
                    name="priceMax"
                    placeholder="200"
                    value={filters.priceMax}
                    onChange={handleFilterChange}
                  />
                </div>

                <div className="filter-group">
                  <label htmlFor="transmission">Transmission</label>
                  <select id="transmission" name="transmission" value={filters.transmission} onChange={handleFilterChange}>
                    <option value="">Toutes</option>
                    <option value="manuelle">Manuelle</option>
                    <option value="automatique">Automatique</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label htmlFor="motor">Moteur</label>
                  <select id="motor" name="motor" value={filters.motor} onChange={handleFilterChange}>
                    <option value="">Toutes</option>
                    <option value="essence">Essence</option>
                    <option value="diesel">Diesel</option>
                    <option value="electrique">Électrique</option>
                    <option value="hybride">Hybride</option>
                  </select>
                </div>

                <div className="filter-actions">
                  <button className="btn-reset" onClick={handleReset}>
                    <i className="fas fa-redo"></i> Réinitialiser
                  </button>
                </div>
              </div>
            </div>

            {/* Résultats à droite */}
            <div className="results-column">
              <div className="sort-bar">
                <span>Trier par :</span>
                <select value={sortBy} onChange={handleSortChange}>
                  <option value="relevance">Pertinence</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="asc">Ordre croissant</option>
                  <option value="desc">Ordre décroissant</option>
                </select>
              </div>
              <div className="search-results">
                <p className="results-count">{filteredCars.length} véhicules disponibles</p>

                <div className="offers-grid">
                  {filteredCars.map((car: any) => (
                    <div className="offer-card" key={car.id}>
                      <div className="offer-image">
                        <img src={car.image || peugeot208Img} alt={`${car.make} ${car.model}`} />
                      </div>
                      <div className="offer-content">
                        <h3>{car.make} {car.model}</h3>
                        <p className="offer-category">{car.category}</p>
                        <div className="offer-features">
                          <span><i className="fas fa-users"></i> {car.seats} places</span>
                          <span><i className="fas fa-cog"></i> {car.transmission}</span>
                          <span><i className="fas fa-gas-pump"></i> {car.motor}</span>
                        </div>
                        <div className="offer-price-section">
                          <div className="offer-price">{car.pricePerDay}€ <span>/jour</span></div>
                          <Link to={`/detail/${car.id}`} className="offer-btn">Voir</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredCars.length === 0 && <p>Aucun véhicule ne correspond aux filtres.</p>}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
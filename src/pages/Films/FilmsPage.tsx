import { useState } from 'react';
import './FilmsPage.css';

const FILTERS = ['All Films', 'Weddings', 'Elopements', 'Engagement', 'International'];

const FILMS = [
  { id: 1, couple: 'Emma & Luca', location: 'Lake Como, Italy', duration: '4:32', category: 'Weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80' },
  { id: 2, couple: 'Priya & Rohan', location: 'Jaipur, India', duration: '3:48', category: 'International', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80' },
  { id: 3, couple: 'Sofia & Mateo', location: 'Santorini, Greece', duration: '5:10', category: 'Elopements', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=80' },
  { id: 4, couple: 'Ava & Marco', location: 'Tuscany, Italy', duration: '6:22', category: 'Weddings', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=900&q=80' },
  { id: 5, couple: 'Nadia & Sam', location: 'Maldives', duration: '3:15', category: 'Elopements', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80' },
  { id: 6, couple: 'Clara & Ben', location: 'New York, USA', duration: '4:55', category: 'Engagement', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80' },
  { id: 7, couple: 'Mei & Kenji', location: 'Kyoto, Japan', duration: '5:30', category: 'International', img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80' },
  { id: 8, couple: 'Isabelle & Thomas', location: 'Provence, France', duration: '7:01', category: 'Weddings', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=80' },
];

export default function FilmsPage() {
  const [activeFilter, setActiveFilter] = useState('All Films');

  const filtered = activeFilter === 'All Films'
    ? FILMS
    : FILMS.filter(f => f.category === activeFilter);

  return (
    <div className="films-page">
      {/* Hero */}
      <section className="films-hero">
        <div className="container">
          <span className="section-label">
            <span className="gold-line" />
            Our Work
          </span>
          <h1 className="films-hero__title">
            Stories told in<br /><em>light & motion</em>
          </h1>
          <p className="films-hero__sub">
            Browse our collection of wedding films, each one a unique document of love.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="films-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`films-filter-btn${activeFilter === f ? ' active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="container">
        <div className="films-grid">
          {filtered.map(film => (
            <div key={film.id} className="film-card">
              <img
                className="film-card__thumb"
                src={film.img}
                alt={`${film.couple} wedding film`}
                loading="lazy"
              />
              <div className="film-card__overlay" />

              {/* Play button */}
              <div className="film-card__play">
                <div className="film-card__play-icon" />
              </div>

              {/* Meta */}
              <div className="film-card__meta">
                <div>
                  <div className="film-card__couple">{film.couple}</div>
                  <div className="film-card__location">{film.location}</div>
                </div>
                <div className="film-card__duration">{film.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
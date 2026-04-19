import { useState } from 'react';
import './FilmsPage.css';

const FILTERS = ['All Films', 'Weddings', 'Pre-Wedding', 'Sangeet & Mehendi', 'Destination'];

const FILMS = [
  { id: 1, couple: 'Meera & Arjun', location: 'Udaipur, Rajasthan', duration: '4:32', category: 'Weddings', img: 'https://images.unsplash.com/photo-1612833609284-e763f6b47f38?w=1000&q=80' },
  { id: 2, couple: 'Priya & Rohan', location: 'Jaipur, Rajasthan', duration: '3:48', category: 'Destination', img: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=700&q=80' },
  { id: 3, couple: 'Ananya & Vikram', location: 'Jodhpur, Rajasthan', duration: '5:10', category: 'Weddings', img: 'https://images.unsplash.com/photo-1610173827006-d5d8c4f699ea?w=700&q=80' },
  { id: 4, couple: 'Kavya & Dev', location: 'Mysore, Karnataka', duration: '6:22', category: 'Weddings', img: 'https://images.unsplash.com/photo-1617275249641-322ed29db98c?w=900&q=80' },
  { id: 5, couple: 'Nisha & Karan', location: 'Goa', duration: '3:15', category: 'Destination', img: 'https://images.unsplash.com/photo-1583939411023-14783179e581?w=600&q=80' },
  { id: 6, couple: 'Divya & Rahul', location: 'Mumbai, Maharashtra', duration: '4:55', category: 'Sangeet & Mehendi', img: 'https://images.unsplash.com/photo-1620735692151-26a7e0748429?w=600&q=80' },
  { id: 7, couple: 'Siya & Aditya', location: 'Varanasi, UP', duration: '5:30', category: 'Pre-Wedding', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80' },
  { id: 8, couple: 'Pooja & Nikhil', location: 'Coorg, Karnataka', duration: '7:01', category: 'Destination', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1600&q=80' },
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
            From intimate Mehendi evenings to grand Baraat arrivals — every ceremony, every emotion, beautifully captured.
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
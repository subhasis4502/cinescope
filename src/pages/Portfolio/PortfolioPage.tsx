import './PortfolioPage.css';

const PORTFOLIO = [
  { id: 1, couple: 'Emma & Luca', location: 'Lake Como, Italy', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80' },
  { id: 2, couple: 'Priya & Rohan', location: 'Jaipur, India', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80' },
  { id: 3, couple: 'Ava & Marco', location: 'Tuscany, Italy', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=700&q=80' },
  { id: 4, couple: 'Nadia & Sam', location: 'Maldives', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=80' },
  { id: 5, couple: 'Sofia & Mateo', location: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=80' },
  { id: 6, couple: 'Clara & Ben', location: 'New York, USA', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=700&q=80' },
  { id: 7, couple: 'Mei & Kenji', location: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=700&q=80' },
  { id: 8, couple: 'Isabelle & Thomas', location: 'Provence, France', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=80' },
  { id: 9, couple: 'Layla & Omar', location: 'Dubai, UAE', img: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=700&q=80' },
  { id: 10, couple: 'Rina & David', location: 'Cape Town, SA', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=80' },
  { id: 11, couple: 'Zara & Alex', location: 'Amsterdam, NL', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80' },
  { id: 12, couple: 'Lily & James', location: 'Cornwall, UK', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=700&q=80' },
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <span className="section-label">
            <span className="gold-line" />
            Portfolio
          </span>
          <h1 className="portfolio-hero__title">
            Every frame,<br /><em>a feeling</em>
          </h1>
          <p className="portfolio-hero__sub">
            A collection of moments from weddings across the world.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="portfolio-grid">
          {PORTFOLIO.map(item => (
            <div key={item.id} className="portfolio-item">
              <img src={item.img} alt={`${item.couple} wedding`} loading="lazy" />
              <div className="portfolio-item__overlay">
                <div className="portfolio-item__label">
                  <div className="portfolio-item__couple">{item.couple}</div>
                  <div className="portfolio-item__location">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
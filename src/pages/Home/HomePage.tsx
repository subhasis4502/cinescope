import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

/* ─── Data ────────────────────────────────────────── */

const FEATURES = [
  {
    id: 'a',
    variant: 'a',
    title: 'Cinematic Storytelling',
    desc: 'Every frame is composed with intention — capturing the raw emotion and beauty of your wedding day through a cinematic lens.',
    icon: '✦',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80',
  },
  {
    id: 'b',
    variant: 'b',
    title: 'Same-Day Edits',
    desc: 'A highlight reel delivered at your reception — so you can relive the magic before the night ends.',
    icon: '◈',
    image: null,
  },
  {
    id: 'c',
    variant: 'c',
    title: 'Real-Time Drone Coverage',
    desc: 'Breathtaking aerial perspectives that place your love story within the grandeur of its setting.',
    icon: '◎',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80',
  },
  {
    id: 'd',
    variant: 'd',
    title: 'Extended Feature Films',
    desc: 'Full-length wedding films crafted with documentary-style precision.',
    icon: '▷',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80',
  },
];

const COUPLES = [
  { id: 1, names: 'Ava & Marco', size: 'sm', img: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&q=80' },
  { id: 2, names: 'Priya & Rohan', size: 'md', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80' },
  { id: 3, names: 'Emma & Luca', size: 'lg', img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80' },
  { id: 4, names: 'Soph & James', size: 'md', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400&q=80' },
  { id: 5, names: 'Mia & Carlos', size: 'sm', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80' },
];

const INITIAL_CENTERED_COUPLE_ID = COUPLES[Math.floor(COUPLES.length / 2)].id;

const QUOTES = [
  {
    id: 1,
    text: 'Watching our film for the first time made me cry all over again. Every glance, every laugh — perfectly caught. We\'ll treasure this forever.',
    name: 'Priya & Rohan',
    detail: 'Jaipur Palace Wedding · 2024',
    img: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=100&q=80',
  },
  {
    id: 2,
    text: 'The team was invisible on the day — we completely forgot they were there. But every single moment made it into the film.',
    name: 'Emma & Luca',
    detail: 'Lake Como Elopement · 2024',
    img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&q=80',
  },
  {
    id: 3,
    text: 'We\'ve shown this film to everyone. It doesn\'t just show our wedding — it shows who we are. That\'s the real gift.',
    name: 'Ava & Marco',
    detail: 'Tuscany Villa Wedding · 2023',
    img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&q=80',
  },
];

const SERVICES = [
  { num: '01', name: 'Wedding Feature Film', desc: 'A full-length cinematic narrative of your wedding day — from morning prep to the last dance.' },
  { num: '02', name: 'Highlight Film', desc: '3–5 minute cinematic highlights. Perfect for sharing, made for rewatching.' },
  { num: '03', name: 'Elopement Films', desc: 'Intimate, documentary-style coverage for couples who write their own rules.' },
  { num: '04', name: 'Engagement Sessions', desc: 'A short film that tells the story of where you are — right before forever begins.' },
  { num: '05', name: 'Same-Day Edit', desc: 'A real-time highlight delivered at your reception. The room stops. Every time.' },
];

const STATS = [
  { num: '350', suffix: '+', label: 'Weddings Filmed', isImage: false },
  { num: null, isImage: true, img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&q=80' },
  { num: '8', suffix: '+', label: 'Years of Experience', isImage: false },
  { num: null, isImage: true, img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80' },
  { num: null, isImage: true, img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80' },
  { num: '98', suffix: '%', label: 'Couples Recommend Us', isImage: false },
  { num: null, isImage: true, img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80' },
  { num: '20', suffix: '+', label: 'Countries Covered', isImage: false },
];

/* ─── Intersection Observer Hook ─────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Component ──────────────────────────────────── */

export default function HomePage() {
  const featuresSection = useInView();
  const statsSection = useInView();
  const testimonialsSection = useInView();
  const servicesSection = useInView();
  const testimonialsStripRef = useRef<HTMLDivElement>(null);
  const [centeredCoupleId, setCenteredCoupleId] = useState(INITIAL_CENTERED_COUPLE_ID);

  useEffect(() => {
    const strip = testimonialsStripRef.current;
    if (!strip) return;

    let frameId = 0;

    const updateCenteredCard = () => {
      frameId = 0;

      const cards = Array.from(
        strip.querySelectorAll<HTMLElement>('[data-couple-card="true"]')
      );

      if (!cards.length) return;

      const stripRect = strip.getBoundingClientRect();
      const stripCenter = stripRect.left + stripRect.width / 2;

      let closestId = INITIAL_CENTERED_COUPLE_ID;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(stripCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = Number(card.dataset.coupleId);
        }
      });

      setCenteredCoupleId((prev) => (prev === closestId ? prev : closestId));
    };

    const requestCenteredCardUpdate = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateCenteredCard);
    };

    const middleCard = strip.querySelector<HTMLElement>(
      `[data-couple-id="${INITIAL_CENTERED_COUPLE_ID}"]`
    );

    if (middleCard) {
      const centeredOffset =
        middleCard.offsetLeft - (strip.clientWidth - middleCard.offsetWidth) / 2;

      strip.scrollTo({
        left: Math.max(centeredOffset, 0),
        behavior: 'auto',
      });
    }

    requestCenteredCardUpdate();

    strip.addEventListener('scroll', requestCenteredCardUpdate, { passive: true });
    window.addEventListener('resize', requestCenteredCardUpdate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      strip.removeEventListener('scroll', requestCenteredCardUpdate);
      window.removeEventListener('resize', requestCenteredCardUpdate);
    };
  }, []);

  return (
    <div className="home-page">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__video-wrap">
          {/* Replace src with your actual hero video */}
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1800&q=85"
            alt="Wedding cinematic hero"
          />
        </div>
        <div className="hero__overlay" />

        <div className="hero__content container">
          <div className="hero__stat">
            <span className="hero__stat-number">98</span>
            <span className="hero__stat-symbol">%</span>
          </div>
          <p className="hero__tagline">Couples who recommend us</p>

          <h1 className="hero__headline">
            Your love story, told in <em>moving pictures</em>
          </h1>

          <div className="hero__actions">
            <Link to="/films" className="btn-primary">
              Watch Our Films
              <span>→</span>
            </Link>
            <Link to="/contact" className="btn-ghost">
              <span className="play-icon">▷</span>
              Inquire Now
            </Link>
          </div>
        </div>

        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll</span>
        </div>

        <div className="hero__badges">
          {['Worldwide Travel', 'Cinematic 4K', 'Drone Coverage', 'Same-Day Edits', 'Dolby Audio'].map(b => (
            <div key={b} className="hero__badge">
              <span className="hero__badge-dot" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES BENTO ── */}
      <section
        className="features"
        ref={featuresSection.ref}
        style={{ opacity: featuresSection.inView ? 1 : 0, transition: 'opacity 0.8s ease' }}
      >
        <div className="container">
          <div className="features__header">
            <span className="section-label">
              <span className="gold-line" />
              What We Create
            </span>
            <h2 className="features__title">
              Crafted for the couples<br />who feel everything
            </h2>
            <p className="features__subtitle">
              From the first glance to the final dance — we capture the texture of your day with documentary heart and cinematic vision.
            </p>
          </div>

          <div className="features__grid">
            {FEATURES.map((f, i) => (
              <div
                key={f.id}
                className={`feature-card feature-card--${f.variant}`}
                style={{
                  animation: featuresSection.inView
                    ? `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s both`
                    : 'none'
                }}
              >
                {f.image && (
                  <>
                    <div className="feature-card__media">
                      <img src={f.image} alt={f.title} loading="lazy" />
                    </div>
                    <div className="feature-card__overlay" />
                  </>
                )}
                <div className="feature-card__body">
                  <span className="feature-card__icon">{f.icon}</span>
                  <h3 className="feature-card__title">{f.title}</h3>
                  <p className="feature-card__desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="stats"
        ref={statsSection.ref}
      >
        <div className="container">
          <div className="stats__grid">
            {STATS.map((s, i) =>
              s.isImage ? (
                <div
                  key={i}
                  className="stat-card stat-card--image"
                  style={{
                    animation: statsSection.inView
                      ? `scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both`
                      : 'none'
                  }}
                >
                  <img src={s.img} alt="Wedding photography" loading="lazy" />
                </div>
              ) : (
                <div
                  key={i}
                  className="stat-card"
                  style={{
                    animation: statsSection.inView
                      ? `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both`
                      : 'none'
                  }}
                >
                  <div className="stat-card__number">
                    {s.num}<span className="stat-card__suffix">{s.suffix}</span>
                  </div>
                  <div className="stat-card__label">{s.label}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="testimonials"
        ref={testimonialsSection.ref}
      >
        <div className="container">
          <div className="testimonials__header">
            <span className="section-label">
              <span className="gold-line" />
              Loved by Couples
            </span>
            <h2 className="testimonials__title">
              Trusted by couples<br />around the world
            </h2>
            <p className="testimonials__subtitle">
              From intimate elopements to grand celebrations — every story deserves to be felt.
            </p>
          </div>

          {/* Photo strip */}
          <div className="testimonials__strip" ref={testimonialsStripRef}>
            {COUPLES.map((c, i) => (
              <div
                key={c.id}
                className={`couple-card couple-card--${c.size}${centeredCoupleId === c.id ? ' is-centered' : ''}`}
                data-couple-card="true"
                data-couple-id={c.id}
                style={{
                  animation: testimonialsSection.inView
                    ? `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s both`
                    : 'none'
                }}
              >
                <img src={c.img} alt={c.names} loading="lazy" />
                <div className="couple-card__overlay" />
                {centeredCoupleId === c.id && (
                  <div className="couple-card__names">{c.names}</div>
                )}
              </div>
            ))}
          </div>

          {/* Quotes */}
          <div className="testimonials__quotes">
            {QUOTES.map((q, i) => (
              <div
                key={q.id}
                className="quote-card"
                style={{
                  animation: testimonialsSection.inView
                    ? `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.15}s both`
                    : 'none'
                }}
              >
                <span className="quote-card__mark">"</span>
                <p className="quote-card__text">{q.text}</p>
                <div className="quote-card__author">
                  <img src={q.img} alt={q.name} className="quote-card__avatar" />
                  <div>
                    <div className="quote-card__name">{q.name}</div>
                    <div className="quote-card__detail">{q.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED FILM ── */}
      <section className="featured-film">
        <div className="container">
          <div className="featured-film__header">
            <span className="section-label">
              <span className="gold-line" />
              Featured Film
            </span>
            <h2 className="featured-film__title">Watch a love story unfold</h2>
          </div>

          {/* Replace href with your Vimeo/YouTube embed or video */}
          <a
            className="featured-film__player"
            href="https://vimeo.com/your-film-id"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="featured-film__thumb"
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=85"
              alt="Featured wedding film thumbnail"
            />
            <div className="featured-film__overlay">
              <div className="featured-film__play-btn">
                <div className="featured-film__play-icon" />
              </div>
            </div>
            <div className="featured-film__meta">
              <div className="featured-film__couple">Emma & Luca</div>
              <div className="featured-film__location">Lake Como, Italy · Summer 2024</div>
            </div>
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        className="services"
        ref={servicesSection.ref}
      >
        <div className="container">
          <div className="services__inner">
            <div className="services__content">
              <span className="section-label">
                <span className="gold-line" />
                What We Offer
              </span>
              <h2 className="services__title">
                Films that keep<br />your day alive
              </h2>

              {SERVICES.map((s, i) => (
                <div
                  key={s.num}
                  className="service-item"
                  style={{
                    animation: servicesSection.inView
                      ? `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.1}s both`
                      : 'none'
                  }}
                >
                  <span className="service-item__num">{s.num}</span>
                  <div>
                    <div className="service-item__name">{s.name}</div>
                    <div className="service-item__desc">{s.desc}</div>
                  </div>
                  <span className="service-item__arrow">→</span>
                </div>
              ))}
            </div>

            <div className="services__visual">
              <img
                className="services__image-main"
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=85"
                alt="Wedding videography"
                loading="lazy"
              />
              <div className="services__image-badge" style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem' }}>
                <div className="services__badge-number">350<span style={{ color: 'var(--color-gold)' }}>+</span></div>
                <div className="services__badge-label">Films Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container container--narrow">
          <div className="cta-banner__inner">
            <p className="cta-banner__eyebrow">forever starts</p>
            <h2 className="cta-banner__title">
              Let's film your<br />love story
            </h2>
            <p className="cta-banner__sub">
              Limited dates available for 2025 & 2026. Reach out to check availability and start planning.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: '0.75rem' }}>
              Check Availability  →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

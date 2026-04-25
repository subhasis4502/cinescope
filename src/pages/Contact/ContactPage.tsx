import { useState, type FormEvent } from 'react';
import './ContactPage.css';

const CONTACT_DETAILS = [
  {
    label: 'Email',
    sub: 'Contact us by email and we will respond shortly.',
    value: 'cinescopeeditstudio@gmail.com',
    href: 'mailto:cinescopeeditstudio@gmail.com',
  },
  {
    label: 'Phone',
    sub: 'Call us on weekdays from 9 AM to 6 PM.',
    value: '+91 980-4444-244',
    href: 'tel:+919804444244',
  },
  {
    label: 'Mobile',
    sub: 'WhatsApp available on weekdays from 9 AM to 8 PM.',
    value: '+91 980-4444-244',
    href: 'tel:+919804444244',
  },
  {
    label: 'Office',
    sub: 'Visit us at our studio by appointment.',
    value: '42 Film Street\nNew York, NY 10001',
    href: null,
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  weddingDate: string;
  venue: string;
  package: string;
  message: string;
  privacy: boolean;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '',
    weddingDate: '', venue: '', package: '', message: '', privacy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Wire up to your form service (Formspree, Netlify, etc.)
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero__inner">

            {/* ── Left: Info ── */}
            <div className="contact-info">
              <div className="contact-info__eyebrow">
                <span className="section-label">
                  <span className="gold-line" />
                  Get in Touch
                </span>
              </div>

              <h1 className="contact-info__title">
                We'd love to<br />hear from <em>you</em>
              </h1>

              <p className="contact-info__desc">
                Whether you're planning your wedding or just curious, we're here. Fill out the form and we'll reply within 24 hours.
              </p>

              <div className="contact-details">
                {CONTACT_DETAILS.map(d => (
                  <div key={d.label} className="contact-detail">
                    <span className="contact-detail__label">{d.label}</span>
                    <span className="contact-detail__sub">{d.sub}</span>
                    {d.href ? (
                      <a href={d.href} className="contact-detail__value">{d.value}</a>
                    ) : (
                      <span className="contact-detail__value" style={{ whiteSpace: 'pre-line' }}>{d.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <div className="form-success__icon">✦</div>
                  <h2 className="form-success__title">Message Received</h2>
                  <p className="form-success__msg">
                    Thank you for reaching out. We'll be in touch within 24 hours to discuss your wedding film.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="contact-form__heading">Write us a message</h2>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name row */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">
                          First name <span className="required">*</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          name="firstName"
                          placeholder="Jane"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Last name <span className="required">*</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          name="lastName"
                          placeholder="Smith"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                      <label className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        placeholder="jane@email.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Date + Venue */}
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Wedding Date</label>
                        <input
                          className="form-input"
                          type="date"
                          name="weddingDate"
                          value={form.weddingDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Venue / Location</label>
                        <input
                          className="form-input"
                          type="text"
                          name="venue"
                          placeholder="Lake Como, Italy"
                          value={form.venue}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Package */}
                    <div className="form-group">
                      <label className="form-label">Package Interest</label>
                      <select
                        className="form-select"
                        name="package"
                        value={form.package}
                        onChange={handleChange}
                      >
                        <option value="">Select a package...</option>
                        <option value="highlight">Highlight Film</option>
                        <option value="feature">Feature Film</option>
                        <option value="elopement">Elopement Film</option>
                        <option value="engagement">Engagement Session</option>
                        <option value="sameday">Same-Day Edit</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label className="form-label">
                        Message <span className="required">*</span>
                      </label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        placeholder="Tell us about your wedding day..."
                        required
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Privacy */}
                    <div className="form-checkbox-wrap">
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={form.privacy}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-checkbox-label" htmlFor="privacy">
                        I agree to the <a href="#">Privacy Policy</a> and consent to being contacted about my inquiry.
                      </label>
                    </div>

                    <button className="form-submit" type="submit">
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
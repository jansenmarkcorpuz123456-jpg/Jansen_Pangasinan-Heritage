import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-container">

          <p className="eyebrow">
            Discover • Preserve • Celebrate
          </p>

          <h1>
            Discover the
            <br />
            <span>Heritage of Pangasinan</span>
          </h1>

          <p>
            Explore the rich history, culture, traditions, landmarks,
            local food, and stories that make Pangasinan unique.
          </p>

          <div className="hero-buttons">
            <Link href="/heritage" className="btn-primary">
              Explore Heritage →
            </Link>

            <Link href="/Places" className="btn-secondary">
              Explore Places 
            </Link>
          </div>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="section">
        <div className="section-container">

          <p className="section-label">
            Our Province
          </p>

          <h2 className="section-title">
            A province rich in history and culture
          </h2>

          <p className="section-description">
            Pangasinan is home to diverse communities, historical landmarks,
            cultural traditions, festivals, local food, and beautiful
            natural destinations.
          </p>


          {/* FEATURES */}
          <div className="feature-grid">

            <Link href="/heritage" className="feature-card">
              <div className="feature-icon">🏛️</div>

              <h3>Heritage</h3>

              <p>
                Discover the history, traditions, festivals,
                and cultural identity of Pangasinan.
              </p>

              <span className="card-link">
                Explore Heritage →
              </span>
            </Link>


            <Link href="/Places" className="feature-card">
              <div className="feature-icon">🗺️</div>

              <h3>Places</h3>

              <p>
                Explore famous destinations, landmarks,
                and places throughout Pangasinan.
              </p>

              <span className="card-link">
                Explore Places →
              </span>
            </Link>


            <Link href="/About" className="feature-card">
              <div className="feature-icon">📖</div>

              <h3>About</h3>

              <p>
                Learn more about the purpose and vision
                of Pangasinan Heritage.
              </p>

              <span className="card-link">
                Learn More →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta">
        <h2>
          Explore the Story of Pangasinan
        </h2>

        <p>
          Discover the places, people, traditions, and stories
          that shape the identity of our province.
        </p>

        <Link href="/heritage" className="cta-button">
          Start Exploring →
        </Link>
      </section>

    </main>
  );
}
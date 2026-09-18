import Link from "next/link";

export default function HeritagePage() {
  return (
    <main>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-container">

          <p className="eyebrow">
            Discover Our Past
          </p>

          <h1>
            Heritage of Pangasinan
          </h1>

          <p>
            Learn about the history, traditions, culture,
            festivals, and identity of Pangasinan.
          </p>

        </div>
      </section>


      {/* HERITAGE CONTENT */}
      <section className="section">
        <div className="section-container">

          <div className="content-grid">

<img
  src="/images/heritage.jpg"
  alt="Pangasinan Heritage"
  className="content-image"
/>

            <div className="content-text">

              <p className="section-label">
                Our Heritage
              </p>

              <h2>
                Preserving the stories of Pangasinan
              </h2>

              <p>
                Pangasinan has a rich cultural heritage shaped by
                generations of communities, traditions, historical
                events, and local practices.
              </p>

              <p>
                This section presents information about the province's
                cultural identity, traditional practices, festivals,
                food, historical landmarks, and other elements that
                contribute to Pangasinan's heritage.
              </p>

            </div>

          </div>


          {/* HERITAGE CARDS */}
          <div className="feature-grid">

            {/* HISTORY */}
            <Link
              href="/heritage/History"
              className="feature-card"
            >
              <div className="feature-icon">
                🏺
              </div>

              <h3>
                History
              </h3>

              <p>
                Explore important events and historical stories
                connected to Pangasinan.
              </p>

              <span className="card-link">
                Explore History →
              </span>
            </Link>


            {/* TRADITIONS */}
            <Link
              href="/heritage/Tradition"
              className="feature-card"
            >
              <div className="feature-icon">
                🎭
              </div>

              <h3>
                Traditions
              </h3>

              <p>
                Discover traditional practices and customs
                passed down through generations.
              </p>

              <span className="card-link">
                Explore Traditions →
              </span>
            </Link>


            {/* FESTIVALS */}
            <Link
              href="/heritage/Festival"
              className="feature-card"
            >
              <div className="feature-icon">
                🎉
              </div>

              <h3>
                Festivals
              </h3>

              <p>
                Learn about celebrations and festivals
                that showcase Pangasinan culture.
              </p>

              <span className="card-link">
                Explore Festivals →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta">

        <h2>
          Want to explore Pangasinan?
        </h2>

        <p>
          Visit some of the province's most interesting destinations.
        </p>

        <Link
          href="/Places"
          className="cta-button"
        >
          Explore Places →
        </Link>

      </section>

    </main>
  );
}
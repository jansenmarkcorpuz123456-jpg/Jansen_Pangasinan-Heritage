export default function AboutPage() {
  return (
    <main>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-container">

          <p className="eyebrow">
            About the Website
          </p>

          <h1>
            About Pangasinan Heritage
          </h1>

          <p>
            A digital platform created to showcase and promote
            the rich heritage of Pangasinan.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="section">
        <div className="section-container">

          <div className="content-grid">

            <img
              src="/images/pangasinan.jpg"
              alt="Pangasinan"
              className="content-image"
            />

            <div className="content-text">

              <p className="section-label">
                Our Purpose
              </p>

              <h2>
                Discover. Preserve. Celebrate.
              </h2>

              <p>
                Pangasinan Heritage is a digital platform designed
                to provide information about the history, culture,
                traditions, landmarks, and places of Pangasinan.
              </p>

              <p>
                The website aims to make information about the
                province's heritage more accessible while helping
                promote appreciation for its cultural identity.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* MISSION */}
      <section className="section">
        <div className="section-container">

          <div className="feature-grid">

            <div className="feature-card">

              <div className="feature-icon">
                🔎
              </div>

              <h3>
                Discover
              </h3>

              <p>
                Make information about Pangasinan's history,
                culture, and destinations easier to explore.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                🏛️
              </div>

              <h3>
                Preserve
              </h3>

              <p>
                Help document and promote the province's
                cultural heritage for future generations.
              </p>

            </div>


            <div className="feature-card">

              <div className="feature-icon">
                ❤️
              </div>

              <h3>
                Celebrate
              </h3>

              <p>
                Showcase the unique identity, traditions,
                people, and places of Pangasinan.
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
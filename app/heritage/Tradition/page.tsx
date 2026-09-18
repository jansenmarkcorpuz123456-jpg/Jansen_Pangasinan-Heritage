import Link from "next/link";

export default function TraditionPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="page-header">
        <div className="page-header-container">

          <p className="eyebrow">
            Pangasinan Heritage
          </p>

          <h1>
            Traditions of Pangasinan
          </h1>

          <p>
            Discover the customs, practices, and cultural traditions
            passed down through generations.
          </p>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="section">
        <div className="section-container">

          <div className="content-text">

            <p className="section-label">
              Our Traditions
            </p>

            <h2>
              Culture Passed from Generation to Generation
            </h2>

            <p>
              Pangasinan's culture is reflected in the everyday
              practices of its people. Family gatherings, local
              celebrations, food, music, crafts, and community
              traditions all contribute to the province's identity.
            </p>

            <p>
              These traditions continue to connect younger
              generations with the stories and experiences of their
              ancestors.
            </p>

          </div>


          {/* TRADITION 1 */}
          <div className="heritage-story">

            <img
              src="/Jansen_Pangasinan-Heritage/images/Tradition 1.jpg"
              alt="Bani, Pangasinan"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                01
              </span>

              <h3>
                Community and Family Traditions
              </h3>

              <p>
                Strong family relationships and community
                cooperation remain important parts of life in
                Pangasinan. Gatherings and celebrations provide
                opportunities for families and neighbors to share
                food, stories, and experiences.
              </p>

            </div>

          </div>


          {/* TRADITION 2 */}
          <div className="heritage-story reverse">

            <img
              src="/Jansen_Pangasinan-Heritage/images/Tradition 2.jpg"
              alt="Traditional community"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                02
              </span>

              <h3>
                Food and Local Practices
              </h3>

              <p>
                Local food is another important part of Pangasinan
                culture. Traditional dishes and locally produced
                ingredients are often shared during gatherings,
                celebrations, and family occasions.
              </p>

            </div>

          </div>


          {/* TRADITION 3 */}
          <div className="heritage-story">

            <img
              src="/Jansen_Pangasinan-Heritage/images/Tradition 3.jpg"
              alt="Sual, Pangasinan"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                03
              </span>

              <h3>
                Life by the Sea
              </h3>

              <p>
                Coastal communities in Pangasinan have developed
                traditions connected to fishing and life near the
                sea. These practices have become an important part
                of the livelihood and identity of many communities.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta">

        <h2>
          Experience Pangasinan Culture
        </h2>

        <p>
          Explore the festivals that bring the province's traditions
          to life.
        </p>

        <Link
          href="/heritage"
          className="cta-button"
        >
          ← Back to Heritage
        </Link>

      </section>

    </main>
  );
}
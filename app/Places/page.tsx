import Link from "next/link";

export default function PlacesPage() {
  return (
    <main>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-container">

          <p className="eyebrow">
            Explore Pangasinan
          </p>

          <h1>
            Places of Pangasinan
          </h1>

          <p>
            Discover beautiful destinations, historical landmarks,
            cultural sites, and cities across the province.
          </p>

        </div>
      </section>


      {/* PLACES */}
      <section className="section">
        <div className="section-container">

          <p className="section-label">
            Featured Destinations
          </p>

          <h2 className="section-title">
            Discover the places
          </h2>

          <p className="section-description">
            Explore some of the well-known places in Pangasinan.
            Click a destination to learn more.
          </p>


          <div className="card-grid">

            {/* BOLINAO */}
            <Link href="/places/bolinao" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/bolinao.jpg"
                alt="Bolinao, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Bolinao
                </h3>

                <p>
                  Discover the coastal beauty, waterfalls,
                  beaches, caves, and natural attractions of Bolinao.
                </p>

                <span className="card-link">
                  Explore Bolinao →
                </span>

              </div>

            </Link>

{/* SUAL */}
            <Link href="/places/Sual" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Sual.jpg"
                alt="Bani, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Sual
                </h3>

                <p>
                  Explore the coastal beauty, rich history, and natural wonders of Sual.
                </p>

                <span className="card-link">
                  Explore Sual →
                </span>

              </div>

            </Link>

{/* BANI */}
            <Link href="/places/Bani" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Bani.jpg"
                alt="Bani, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Bani
                </h3>

                <p>
                  Explore the coastal beauty, historic landmarks, scenic landscapes, and natural wonders of Bani
                </p>

                <span className="card-link">
                  Explore Bani →
                </span>

              </div>

            </Link>

{/* Agno */}
            <Link href="/places/Agno" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Agno.jpg"
                alt="Agno, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Agno
                </h3>

                <p>
                  Discover the coastal beauty, scenic landscapes, waterfalls, and natural wonders of Agno.
                </p>

                <span className="card-link">
                  Explore Agno →
                </span>

              </div>

            </Link>

{/* Dasol */}
            <Link href="/places/Dasol" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Dasol.jpg"
                alt="Dasol, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Dasol
                </h3>

                <p>
                  Discover the coastal beauty, pristine beaches, scenic islands, and natural wonders of Dasol
                
                </p>

                <span className="card-link">
                  Explore Dasol →
                </span>

              </div>

            </Link>

{/* Anda */}
            <Link href="/places/Anda" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Anda.jpg"
                alt="Anda, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Anda
                </h3>

                <p>
                  Discover the coastal beauty, pristine beaches, scenic islands, and rich heritage of Anda.
                </p>

                <span className="card-link">
                  Explore Anda →
                </span>

              </div>

            </Link>

{/* Infanta */}
            <Link href="/places/Infanta" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Infanta.jpg"
                alt="Infanta, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Infanta
                </h3>

                <p>
                  Discover the natural beauty, scenic landscapes, coastal charm, and rich heritage of Infanta.
                </p>

                <span className="card-link">
                  Explore Infanta →
                </span>

              </div>

            </Link>

{/* Burgos */}
            <Link href="/places/Burgos" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Burgos.jpg"
                alt="Burgos, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Burgos
                </h3>

                <p>
                  Experience the peaceful charm, beautiful landscapes, coastal scenery, and natural wonders of Burgos.
                </p>

                <span className="card-link">
                  Explore Burgos →
                </span>

              </div>

            </Link>

{/* Natividad */}
            <Link href="/places/Natividad" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/Natividad.jpg"
                alt="Natividad, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Natividad
                </h3>

                <p>
                  Experience the serene beauty, lush landscapes, scenic rivers, and natural attractions of Natividad.
                </p>

                <span className="card-link">
                  Explore Natividad →
                </span>

              </div>

            </Link>

{/* San Fabian */}
            <Link href="/places/San Fabian" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/San Fabian.jpg"
                alt="San Fabian, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  San Fabian
                </h3>

                <p>
                  Experience the coastal charm, beautiful beaches, scenic landscapes, and rich heritage of San Fabian.
                </p>

                <span className="card-link">
                  Explore San Fabian →
                </span>

              </div>

            </Link>

            {/* LINGAYEN */}
            <Link href="/places/lingayen" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/lingayen.jpg"
                alt="Lingayen, Pangasinan"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Lingayen
                </h3>

                <p>
                  Explore the historic capital of Pangasinan,
                  known for its beach, history, and cultural sites.
                </p>

                <span className="card-link">
                  Explore Lingayen →
                </span>

              </div>

            </Link>


            {/* DAGUPAN */}
            <Link href="/places/dagupan" className="card">

              <img
                src="/Jansen_Pangasinan-Heritage/images/dagupan.jpg"
                alt="Dagupan City"
                className="card-image"
              />

              <div className="card-content">

                <h3>
                  Dagupan
                </h3>

                <p>
                  Experience the city's culture, local food,
                  Bangus industry, and vibrant communities.
                </p>

                <span className="card-link">
                  Explore Dagupan →
                </span>

              </div>

            </Link>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta">
        <h2>
          More places to discover
        </h2>

        <p>
          Pangasinan has many destinations waiting to be explored.
        </p>
      </section>

    </main>
  );
}
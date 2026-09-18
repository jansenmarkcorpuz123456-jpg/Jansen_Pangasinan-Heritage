import Link from "next/link";

export default function HistoryPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="page-header">
        <div className="page-header-container">
          <p className="eyebrow">
            Pangasinan Heritage
          </p>

          <h1>
            History of Pangasinan
          </h1>

          <p>
            Discover the history, places, and stories that shaped
            Pangasinan through generations.
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="section">
        <div className="section-container">

          <div className="content-text">
            <p className="section-label">
              Our History
            </p>

            <h2>
              The Story of Pangasinan
            </h2>

            <p>
              Pangasinan has a long and fascinating history shaped
              by communities, traditions, trade, and important
              historical events.
            </p>

            <p>
              The province has played an important role in the
              history of Northern Luzon. Its coastal location,
              fertile lands, and rivers helped communities develop
              agriculture, fishing, and trade.
            </p>

            <p>
              Today, the historical identity of Pangasinan can still
              be seen through its old towns, landmarks, churches,
              traditions, and stories passed down from one generation
              to another.
            </p>
          </div>


          {/* HISTORY IMAGE 1 */}
          <div className="heritage-story">

            <img
              src="/images/Lingayen 1.jpg"
              alt="Lingayen, Pangasinan"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                01
              </span>

              <h3>
                Lingayen and the Heart of Pangasinan
              </h3>

              <p>
                Lingayen has long been an important center of
                Pangasinan's political and cultural life. As the
                provincial capital, it continues to represent an
                important part of the province's identity and history.
              </p>

            </div>

          </div>


          {/* HISTORY IMAGE 2 */}
          <div className="heritage-story reverse">

            <img
              src="/images/Dagupan 1.jpg"
              alt="Dagupan City"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                02
              </span>

              <h3>
                Dagupan and the Growth of Trade
              </h3>

              <p>
                Dagupan developed as an important commercial center
                in Pangasinan. Its rivers and access to surrounding
                communities helped support fishing, agriculture,
                transportation, and local trade.
              </p>

            </div>

          </div>


          {/* HISTORY IMAGE 3 */}
          <div className="heritage-story">

            <img
              src="/images/History 2.jpg"
              alt="Pangasinan landscape"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                03
              </span>

              <h3>
                A Province Shaped by Generations
              </h3>

              <p>
                The story of Pangasinan is not only found in major
                historical events. It is also found in the everyday
                lives of its people, from farming and fishing to
                family traditions and community celebrations.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* BACK BUTTON */}
      <section className="cta">

        <h2>
          Discover More of Pangasinan
        </h2>

        <p>
          Explore the traditions and festivals that continue to
          preserve the province's cultural identity.
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
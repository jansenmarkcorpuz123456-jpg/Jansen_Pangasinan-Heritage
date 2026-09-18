import Link from "next/link";

export default function FestivalPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="page-header">
        <div className="page-header-container">

          <p className="eyebrow">
            Pangasinan Heritage
          </p>

          <h1>
            Festivals of Pangasinan
          </h1>

          <p>
            Discover the celebrations that showcase the culture,
            traditions, and identity of Pangasinan.
          </p>

        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="section">

        <div className="section-container">

          <div className="content-text">

            <p className="section-label">
              Our Festivals
            </p>

            <h2>
              Celebrating the Spirit of Pangasinan
            </h2>

            <p>
              Festivals are an important part of Pangasinan's
              cultural life. They bring communities together to
              celebrate their history, traditions, local products,
              and shared identity.
            </p>

            <p>
              Throughout the year, different communities hold
              celebrations featuring music, dancing, food, parades,
              cultural presentations, and other activities.
            </p>

          </div>


          {/* FESTIVAL 1 */}
          <div className="heritage-story">

            <img
              src="/images/Pista'y Dayat.jpg"
              alt="Pangasinan Festival"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                01
              </span>

              <h3>
                Pista'y Dayat
              </h3>

              <p>
                Pista'y Dayat is a major celebration in Pangasinan
                that highlights the province's connection to the sea.
                The celebration features various activities that
                bring communities together while recognizing the
                importance of coastal life and local culture.
              </p>

            </div>

          </div>


          {/* FESTIVAL 2 */}
          <div className="heritage-story reverse">

            <img
              src="/images/Bangus.jpg"
              alt="Lingayen celebration"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                02
              </span>

              <h3>
                Bangus Festival
              </h3>

              <p>
                The Bangus Festival celebrates Dagupan's famous
                milkfish industry. The event highlights the
                importance of bangus to the city's livelihood,
                food culture, and local identity.
              </p>

            </div>

          </div>


          {/* FESTIVAL 3 */}
          <div className="heritage-story">

            <img
              src="/images/Talong.jpg"
              alt="Bolinao, Pangasinan"
              className="heritage-story-image"
            />

            <div className="heritage-story-text">

              <span className="story-number">
                03
              </span>

              <h3>
                Talong Festival
              </h3>

              <p>
                he Talong Festival is an annual celebration in Villasis, Pangasinan, honoring the town’s agricultural heritage and its reputation as the “Vegetable Bowl of Pangasinan.” 
                The festival was first introduced in 2005 under the leadership of then-Mayor Nonato Abrenica to promote Villasis as a major producer of eggplant and other vegetables.

                 The celebration serves as a thanksgiving for the farmers’ bountiful harvests while promoting the importance of agriculture to the local economy. 
                 Over the years, activities such as the Pinakbet sa Kawa, Talong Cookfest, Farmers’ Day, and street dancing competitions have become highlights of the festival.

                 Today, the Talong Festival continues to bring together farmers, residents, and visitors in celebrating Villasis’ agricultural products, 
                  especially its famous eggplants, while showcasing the creativity, culture, and unity of the community.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta">

        <h2>
          Explore the Heritage of Pangasinan
        </h2>

        <p>
          Go back and discover more about the province.
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
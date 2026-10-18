import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Our story</span>
          <h2>About Coffee Tracker</h2>
        </div>
      </div>

      <div className="card about-card">
        <p>
          Coffee Tracker is the first website dedicated to tracking coffee in Iraq —
          collecting every coffee brand, bean origin, and drink type in one place.
        </p>
        <p>
          We list the coffee shops people actually visit, the drinks they keep
          ordering, and let the community like the items they think deserve the
          spotlight. Whether you want to learn what an Americano is, buy a bag of
          fresh beans, or find out where to get the best iced Spanish latte in town,
          Coffee Tracker is built to answer that.
        </p>
        <p>
          This is a growing, community-driven project — the more people explore,
          rate, and share, the more accurate the rankings become.
        </p>
      </div>
    </section>
  );
}

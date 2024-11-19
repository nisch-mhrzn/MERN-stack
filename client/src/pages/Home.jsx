import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the Best IT Company</p>
              <h1>Welcome to Nischal Technologies </h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Nischal
                Technologies, we specialize in providing innovative IT services
                and solutions tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn"> Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn"> Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
        
      </main>
      <Analytics/>

        <section className="section-hero">
          <div className="container grid grid-two-cols">
          <div className="hero-image">
              <img
                src="/images/design.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today </h1>
              <p>
               Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let&apos;s discuss how Nischal Technologies can help your business thrive in the digital age</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn"> Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn"> Learn More</button>
                </a>
              </div>
            </div>
          
          </div>
        </section>
    </>
  );
};

import React from "react";

export default function About() {
  return (
    <div className="about-bg">
      {/* Top wave for a vibrant intro */}
      <div className="about-top-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffe0c6" d="M0,40 C480,120 960,0 1440,60 L1440,0 L0,0Z" />
        </svg>
      </div>
      {/* Hero section */}
      <section className="about-hero">
        <h1 className="about-title">
          <span className="about-title-main">About U-Juice</span>
          <span className="about-title-highlight">Fresh. Local. Bold.</span>
        </h1>
        <p className="about-desc">
          <span className="about-desc-highlight">Celebrating freshness since day one!</span><br />
          <span className="about-desc-sub">
            We believe summer should be enjoyed <b>all year round</b>—with every glass, every bite, every smile.
          </span>
        </p>
      </section>{/* Loyal Employees Section */}
      <section className="about-employees">
        <h2 className="about-employees-title">Our Loyal Employees</h2>
        <div className="about-employees-cards">
          <div className="about-employee-card">
            <div className="about-employee-photo">
              {/* You can replace with local image if desired */}
              <img src="https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/employee-1.PNG" alt="Trisha - Smoothie Specialist" />
            </div>
            <div className="about-employee-info">
              <div className="about-employee-name">Trisha Chen</div>
              <div className="about-employee-role">Smoothie Specialist</div>
              <div className="about-employee-desc">
                Trisha has been blending up magic for a while. Her secret? A smile and a splash of creativity in every cup.
              </div>
            </div>
          </div>
          <div className="about-employee-card">
            <div className="about-employee-photo">
              <img src="https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/employee-2.PNG" alt="Patricia - Juice Barista" />
            </div>
            <div className="about-employee-info">
              <div className="about-employee-name">Patricia Wernli</div>
              <div className="about-employee-role">Juice Barista</div>
              <div className="about-employee-desc">
                Patricia brings energy and experience to every shift. She is known for her legendary watermelon juice and friendly service!
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className="about-story">
        <h2 className="about-story-title">Our Story</h2>
        <p className="about-story-text">
          U-Juice started with a simple idea: <span className="about-story-bold">bring people together over vibrant, healthy drinks</span>. 
          From our first blend in Zurich to today, we’ve never stopped exploring new flavors and celebrating the joy of fresh fruit.
        </p>
        <p className="about-story-text about-story-highlight">
          <b>Join us</b> on our journey to make every day a little bit smoother!
        </p>
      </section>
      {/* Space underneath story */}
      <div style={{ height: "2em" }}></div>
      
      {/* Bottom wave for visual finish */}
      <div className="about-bottom-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b2f7ef" d="M0,30 C400,120 1040,0 1440,70 L1440,100 L0,100Z" />
        </svg>
      </div>
    </div>
  );
}
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="masthead">
        <div className="masthead-content">
          <img src="/logo.png" alt="logo" />
          <h1 className="header">we design and build great looking websites</h1>
          <div className="call-to-action-container">
            <a href="/get-quote.html">
              <div className="btn-action btn-primary">get quote</div>
            </a>
            <a href="/portfolio.html">
              <div className="btn-action btn-info">see our work</div>
            </a>
          </div>
        </div>
      </div>

      <hr className="masthead-plate" />

      <section className="pitch">
        <article className="pitch-text">
          <h3>Detail Focused</h3>
          <span className="subtext">the small things matter</span>

          <h3>Sharp Designs</h3>
          <span className="subtext">clean and elegant</span>

          <h3>Intuitive UX</h3>
          <span className="subtext">subtle, familiar, yet impressive</span>
        </article>
        <article className="pitch-video">
          <img src="/MacbookMockupDev.png" alt="computer" />
        </article>
      </section>

      <section className="core-values">
        <div className="section-segway">more about our values</div>
        <h2>At MPD, we share three core values</h2>
        <div className="core-values-container">
          <article>
            <h3>Detail Focused</h3>
            <p>
              We’re dedicated to every facet of your project, from design to
              development to implementation. We are meticulous about the small
              things, because we think they matter.
            </p>
          </article>
          <article>
            <h3>Sharp Designs</h3>
            <p>
              The better our designs look, the more professional you’ll look. We
              pride ourselves in creating clean and elegant designs that help
              your business stand out.
            </p>
          </article>
          <article>
            <h3>Intuitive UX</h3>
            <p>
              Experience is everything. So we’ll make sure that every
              interaction with your website is smooth and intuitive and creates
              a lasting impression with your clients.
            </p>
          </article>
        </div>
        <a href="/portfolio.html">
          <div className="btn-action btn-info">see our work</div>
        </a>
      </section>

      <section className="testimonials">
        <h2>What others are saying about MPD</h2>
        <div className="testimonial-cards-container">
          <div className="testimonial-card">
            <blockquote>
              Matt gets the design and development relationship that makes for
              the best product output. He also has a natural sense of leadership
              and can step up when needed or dig into the details.
            </blockquote>
            <cite>
              <img src="/masheen-logo.png" alt="masheen" />
              <div className="citation">
                <strong>- Bill & Andrea Moschella</strong>
                <br />
                <span className="company">Masheen</span>
              </div>
            </cite>
          </div>
          {/* <div className="testimonial-card">
            <blockquote>
              MPD did a great job giving us a new website that looks clean and
              modern. They responded to every request quickly and created
              exactly what we wanted.
            </blockquote>
            <cite>
              <img src="./assets/nsbc-logo.png" alt="masheen" />
              <div className="citation">
                <strong>- Darren King</strong>
                <br />
                <span className="company">North Stafford Baptist Church</span>
              </div>
            </cite>
          </div> */}
        </div>
      </section>
    </>
  );
}

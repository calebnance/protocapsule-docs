import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout description="Helping design technology teams internally share, iterate, and user test... all in one place.">
      <main role="main">
        <section className="ui-section-hero">
          <div className="ui-layout-container">
            <div className="ui-layout-column-6 ui-layout-column-center">
              <h1>Ideate better.</h1>
              <p className="ui-text-intro">
                Helping working teams <strong>internally</strong> share,
                iterate, and user test... all in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="ui-section-feature">
          <div className="ui-layout-container">
            <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
              <div className="ui-component-card">
                <div className="ui-component-card--info">
                  <h3>One app</h3>
                  <p className="ui-text-intro">
                    Encapsulate all of your <strong>React Native/Expo</strong>{" "}
                    apps and microinteractions in one place.
                  </p>
                </div>
                <img
                  src="img/protocapsule-apps.png"
                  loading="lazy"
                  alt="protocapsule apps screen"
                />
              </div>
              <div className="ui-component-card">
                <img
                  src="img/protocapsule-overview.png"
                  loading="lazy"
                  alt="protocapsule overview"
                />
                <div className="ui-component-card--info">
                  <h3>Quick prototyping</h3>
                  <p className="ui-text-intro">
                    React Native/Expo is one of the fastest ways to get
                    prototypes in the hands of working teams and user testers.
                  </p>
                </div>
              </div>
              <div className="ui-component-card">
                <div className="ui-component-card--info">
                  <h3>Full Apps + Customization</h3>
                  <p className="ui-text-intro">
                    Your user testing team can quickly change the User's name in
                    app, and is accessible across all apps, bringing a more
                    personalized touch.
                  </p>
                </div>
                <img
                  src="img/protocapsule-music-app-half.png"
                  loading="lazy"
                  alt="protocapsule music app"
                />
              </div>
              <div className="ui-component-card">
                <img
                  src="img/protocapsule-microinteractions.png"
                  loading="lazy"
                  alt="protocapsule microinteractions screen"
                />
                <div className="ui-component-card--info">
                  <h3>Microinteractions</h3>
                  <p className="ui-text-intro">
                    Maybe you don't have a full end-to-end experience you want
                    to test, just a few options of a specific Microinteraction,
                    there is a place for that too!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ui-section-close">
          <div className="ui-layout-container">
            <div className="ui-layout-column-6 ui-layout-column-center">
              <h2>Improve your workflow.</h2>
              <br />
              <div className="ui-component-cta ui-layout-flex">
                <a
                  href="https://gum.co/protocapsule"
                  role="link"
                  aria-label="buy protocapsule"
                  className="ui-component-button ui-component-button-normal ui-component-button-primary ui-component-button-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Buy Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function ContributionComponent() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={` Bhukamatha`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <div className="scroll"></div>
      <main className="home_contribution">
        <section id="section-contribution" className="cls-contribution">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              id="contribution"
              style={{
                width: "70%",
                textAlign: "center",
                border: "2px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                margin: "15px",
              }}
            >
              <h2>Contribution</h2>
              <p>
                <strong>
                  Thank you for expressing interest in contributing to Surveyor
                  Stories and their associated projects
                </strong>
              </p>
              <p>
                We want to clarify that while we greatly appreciate
                contributions, we do not offer any monetary compensation.
                Instead, we welcome passionate individuals who are willing to
                offer their skills, expertise, or resources to support our
                initiatives.
              </p>
              <p>
                Your valuable contributions towards{" "}
                <strong>Surveyor Stories</strong> will help uphold and enrich{" "}
                <strong>without any expectation</strong> of financial rewards.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  minHeight: "80vh",
                }}
              >
                <iframe
                  src="https://forms.zohopublic.in/surveyorstories1/form/Bhukamathafeedback/formperma/Jf625-2PIOzRg62I1cRdcihdhCY7SO-4wfXULv-r1tk"
                  width="640"
                  height="1300"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ContributionComponent;

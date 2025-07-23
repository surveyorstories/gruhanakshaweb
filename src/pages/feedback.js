import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './feedback.module.css'; // Optional: Custom CSS

const Feedback = () => {
  return (
    <Layout
      title="Feedback and Error Reporting"
      description="Help us improve our documentation by reporting errors or suggesting improvements."
    >
      <main className={styles.feedbackContainer}>
        <div className={styles.headerSection}>
          <h1>Feedback and Error Reporting</h1>
          <p>
            We are committed to improving our documentation, but we need your help! If you encounter
            any errors or have suggestions, please let us know.
          </p>
        </div>

        <section className={styles.feedbackFormSection}>
        

          {/* Zoho Survey Form Embed */}
          <iframe
            aria-label="Bhukamatha feedback"
            frameBorder="0"
            style={{ height: '500px', width: '99%', border: 'none' }}
            src="https://forms.zohopublic.in/surveyorstories1/form/Bhukamathafeedback/formperma/Jf625-2PIOzRg62I1cRdcihdhCY7SO-4wfXULv-r1tk"
          ></iframe>
          
        </section>
      </main>
    </Layout>
  );
};

export default Feedback;

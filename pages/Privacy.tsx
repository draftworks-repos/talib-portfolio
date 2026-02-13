import "./Privacy.css";

const Privacy: React.FC = () => {
  return (
    <main className="privacy-wrapper">
      <div className="privacy-container">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-effective">Effective Date: [Insert Date]</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            When you interact with this website, we may collect the following
            information:
          </p>

          <h3>Contact Form Information</h3>
          <ul>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Message Content</li>
          </ul>

          <h3>Scheduling Information (Calendly)</h3>
          <p>
            If you book a meeting through Calendly, your information is
            processed by Calendly according to their privacy policy.
          </p>

          <h3>Technical Data</h3>
          <p>
            Basic analytics data such as browser type, device information, and
            usage patterns may be collected for performance and security.
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to inquiries</li>
            <li>To schedule meetings</li>
            <li>To discuss potential projects</li>
            <li>To improve website performance</li>
            <li>To maintain security</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Storage</h2>
          <p>
            Information submitted through the contact form may be stored in a
            secure database. While reasonable security measures are used, no
            system can guarantee complete security.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Services</h2>
          <ul>
            <li>Calendly (meeting scheduling)</li>
            <li>Hosting provider (website infrastructure)</li>
          </ul>
          <p>
            These third-party services operate under their own privacy policies.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            Personal data is retained only as long as necessary for
            communication or legal obligations.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your data by
            contacting us through the website.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated periodically. Continued use of
            this website constitutes acceptance of any updates.
          </p>
        </section>

        <footer className="privacy-footer">
          Talib Ali © 2026 all rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default Privacy;

import "./Terms.css";

const Terms: React.FC = () => {
  return (
    <main className="terms-wrapper">
      <div className="terms-container">
        <h1 className="terms-title">Terms & Conditions</h1>
        <p className="terms-effective">Effective Date: [Insert Date]</p>

        <section>
          <h2>1. Use of This Website</h2>
          <p>
            This website is a personal portfolio and informational platform. By
            accessing this website, you agree to use it only for lawful
            purposes.
          </p>
          <ul>
            <li>No unauthorized access attempts</li>
            <li>No disruption of services</li>
            <li>No misuse of forms or scheduling systems</li>
          </ul>
        </section>

        <section>
          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including design, code, text, graphics,
            and branding, is the intellectual property of the website owner
            unless otherwise stated.
          </p>
          <p>
            You may not copy, reproduce, distribute, or reuse content without
            written permission.
          </p>
        </section>

        <section>
          <h2>3. Contact Form & Communication</h2>
          <p>
            Submitting information through the contact form does not create a
            client relationship.
          </p>
          <p>
            Any project engagement will require a separate written agreement.
          </p>
        </section>

        <section>
          <h2>4. Scheduling</h2>
          <p>
            Meeting bookings made through Calendly are subject to availability.
            The website owner reserves the right to reschedule or decline
            meetings when necessary.
          </p>
        </section>

        <section>
          <h2>5. No Guarantees</h2>
          <p>
            The content on this website is provided for informational purposes
            only. No guarantees are made regarding:
          </p>
          <ul>
            <li>Project availability</li>
            <li>Service outcomes</li>
            <li>Continuous uptime</li>
          </ul>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, the website owner shall not
            be liable for indirect, incidental, or consequential damages arising
            from use of this website.
          </p>
        </section>

        <section>
          <h2>7. External Links</h2>
          <p>
            This website may contain links to third-party websites. We are not
            responsible for the content or privacy practices of those websites.
          </p>
        </section>

        <section>
          <h2>8. Modifications</h2>
          <p>
            These Terms & Conditions may be updated at any time. Continued use
            of the website constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws applicable in the
            jurisdiction where the website owner operates.
          </p>
        </section>

        <footer className="terms-footer">
          Talib Ali © 2026 all rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default Terms;

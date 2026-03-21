
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Finance Guide</h2>
          <p>
            Learn finance in the simplest way — budgeting, saving, investing and more.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Core Concepts</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        
        <div className="footer-links">
          <h3>Topics</h3>
          <ul>
            <li>Budgeting</li>
            <li>Saving</li>
            <li>Investing</li>
            <li>Debt</li>
          </ul>
        </div>


        <div className="footer-contact">
          <h3>Connect</h3>
          <p>Email: abhyanshu@email.com</p>
          <p>Made with ❤️ in India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Finance Guide | All Rights Reserved</p>
      </div>
      
    </footer>
  );
}

export default Footer;
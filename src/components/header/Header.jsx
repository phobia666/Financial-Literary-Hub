
import './Header.css'
const Header = () => {
  return (
    <div className='head' id="home">
        <div className='header'>
            <div className="title">
                <h1>FINANCIAL LITERARY HUB</h1>
                <p>Master money management with bite-sized guides on budgeting, investing, inflation, and more.</p>
            </div>
            <nav className="nav" aria-label="Main">
                <a href="#home">Home</a>
                <a href="#core-concepts">Core Concepts</a>
                <a href="#terms">Terms</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </div>
        <div className="hero-fullscreen">
            <div className="jai-hind-overlay">
                <div className="jai-hind-slide-in">
                <div className="jai-hind-box">
                    <p className="jai-hind-text">JAI HIND!</p>
                    <p className="jai-hind-subtext">Hi, I’m Abhyanshu [U25CH117] — here to guide you through the basics of finance in the simplest way possible. From budgeting and saving to understanding debt and investing, this platform is designed to help you take control of your money step by step.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
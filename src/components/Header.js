// Importing the CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'

// Creating the Header Function
function Header ({ dark, children }) {
  // Just messing around with a dark/light toggle on the navbar - coming from the App.js componenet
    dark = !!dark ? "dark" : "light"
    return (
        <header data-bs-theme="dark">
          {/* Adding the Navbar at the top but with no real functionality */}
        <div class={`navbar navbar-${dark} bg-${dark} shadow-sm`}>
          <div class="nav-container">
            <a href="/" class="navbar-brand d-flex align-items-center">
                <img 
                src="/cv.png" 
                alt="cv logo" 
                width="60px"
                className="me-2"
                />
                {/* Bringing in the name on the navbar */}
                {children}
            </a>
          </div>
        </div>
      </header>
    )
}

// Exporting the Header function
export default Header
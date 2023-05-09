// Importing some CSS
import '../index.css'

// Creating a Sidebar Function with props
function Sidebar ({name, description, email, phone, portfolio, image}) {
    return (
        // Got the sidebar from a template off Bootstrap
        <div class="col-md-3 col-lg-5 sidebar">
            <div className="py-3">
                {/* Adding the information and data */}
                <img className="rounded" src="/profile.jpg" alt="profile"/>
                <h1 class="fw-light name">{name}</h1>
                <p class="lead text-body-secondary subheading">{description}</p>
                <p class="lead text-body-secondary"><strong>Email:</strong> {email}</p>
                <p class="lead text-body-secondary"><strong>Phone:</strong> {phone}</p>
                <p class="lead text-body-secondary"><strong>Portfolio:</strong> {portfolio}</p>
            </div>
        </div>
    )
}

// Exporting the Sidebar
export default Sidebar
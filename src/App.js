// Importing various functions and modules
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import details from './schemas/detailsSchema';
import about from './schemas/aboutSchema';
import skills from './schemas/skillsSchema';
import work from './schemas/workSchema';
import education from './schemas/educationSchema';

// Changing the text of the Title on the tab
window.document.title = `${details.name} - CV`;

// The main App function
function App() {
  return (
    <div className="App">
      {/* Adding in the nav bar */}
      <Header dark={true}>{details.name}</Header>
      {/* The main part of the page */}
      <main className="main">
        {/* Bringing in the Sidebar with the cv details */}
        <Sidebar
          name={details.name}
          description={details.description}
          email={details.email}
          phone={details.phone}
          portfolio={details.portfolio}
        />
        {/* The bulk of the information brought in from schemas */}
        <header>
          {/* About Section */}
          <div className="about">
            <div class="section-header">
              <img className="icons" src="/about.png" alt="about icon"/>
              <h1 className="headings">{about.title}</h1>
            </div>
            {about.text}
          </div>
          {/* Work Section */}
          <div className="work">
          <div class="section-header">
              <img className="icons" src="/work.png" alt="about icon"/>
              <h1 className="headings">{work.title}</h1>
            </div>
            <p>{work.role}</p>
            <p>{work.date}</p>
            <p>{work.text}</p>
          </div>
          {/* Education Section */}
          <div className="education">
          <div class="section-header">
              <img className="icons" src="/education.png" alt="about icon"/>
              <h1 className="headings">{education.title}</h1>
            </div>
            <p>{education.place}</p>
            <p>{education.date}</p>
            <p>{education.text}</p>
          </div>
          {/* Skills Section and using a map function to print out a list in the Schema */}
          <div className="skills-container">
          <div class="section-header">
              <img className="icons" src="/skills.png" alt="about icon"/>
              <h1 className="headings">{skills.title}</h1>
            </div>
            {/* Map Function */}
            {skills.text.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;

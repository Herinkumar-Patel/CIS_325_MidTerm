import { Link, Route, Routes } from 'react-router-dom'

function DogPage() {
  return (
    <div className="page">
      <section className="hero dog-hero">
        <div className="content">
          <p className="tag">Project 3</p>
          <h1>Golden Retriever: The Best Dog a Person Can Have</h1>
          <p className="lead">
            Golden Retrievers are loving, loyal, smart, and fun. They make amazing pets for
            families, students, and active dog owners because they are friendly, easy to
            train, and always ready to spend time with their people.
          </p>
          <div className="highlights">
            <div className="panel">
              <h2>Why This Dog Is the Best</h2>
              <ul>
                <li>Very friendly and trustworthy</li>
                <li>Great with families and children</li>
                <li>Easy to train and eager to please</li>
                <li>Perfect for an active lifestyle</li>
              </ul>
              <Link className="primary-btn" to="/resume">
                Open Resume Page
              </Link>
            </div>
            <div className="panel image-panel">
              <img
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80"
                alt="Golden Retriever"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ResumePage() {
  return (
    <div>
      <header className="hero resume-hero">
        <div className="content hero-grid">
          <div>
            <p className="tag resume-tag">Personal Resume Page</p>
            <h1>Herinkumar Patel</h1>
            <p className="lead">
              Master’s student focused on learning modern web development,
              problem-solving, and building practical software projects.
            </p>
            <div className="contact-row">
              <a href="tel:+12709633298">+1 (270) 963-3298</a>
              <a href="mailto:jowen22@murraystate.edu">jowen22@murraystate.edu</a>
            </div>
            <a className="primary-btn" href="mailto:jowen22@murraystate.edu">
              Contact Me
            </a>
          </div>
          <div className="panel intro-card">
            <h2>Professional Summary</h2>
            <p>
              I am a motivated graduate student currently pursuing my master’s degree. I am
              interested in technology, software development, and creating clean,
              user-friendly digital experiences. Although I do not have formal job
              experience yet, I am actively developing my skills through academic work,
              hands-on practice, and personal projects.
            </p>
          </div>
        </div>
      </header>

      <main className="content main-content">
        <section className="panel">
          <h2>Dream Job</h2>
          <p>
            My dream job is to work as a software developer in a collaborative and
            innovative company where I can design useful applications, continue growing my
            technical skills, and contribute to real-world solutions. I want a role that
            allows me to solve meaningful problems, work with modern tools, and build
            products that make life easier for users.
          </p>
        </section>

        <section className="grid-two">
          <article className="panel">
            <h2>Education</h2>
            <ul>
              <li><strong>Master’s Degree (In Progress)</strong> — Graduate Student</li>
              <li>Focused on technology, programming, and applied software skills</li>
              <li>Building experience through coursework and project-based learning</li>
            </ul>
          </article>

          <article className="panel">
            <h2>Experience</h2>
            <ul>
              <li>No formal job experience yet</li>
              <li>Developing practical experience through academic projects</li>
              <li>Learning HTML, CSS, JavaScript, React, and modern web tools</li>
            </ul>
          </article>
        </section>

        <section className="grid-two">
          <article className="panel">
            <h2>Clubs, Activities, and Groups</h2>
            <ul>
              <li>Graduate student academic community</li>
              <li>Technology and programming learning activities</li>
              <li>Collaborative class projects and presentations</li>
            </ul>
          </article>

          <article className="panel">
            <h2>Skills</h2>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React and front-end fundamentals</li>
              <li>Problem-solving and continuous learning</li>
              <li>Team collaboration and communication</li>
            </ul>
          </article>
        </section>

        <div className="back-wrap">
          <Link className="secondary-btn" to="/">
            Back to Best Dog Page
          </Link>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DogPage />} />
      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  )
}

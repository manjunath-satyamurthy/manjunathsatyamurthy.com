import React, { Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


const Home = React.lazy(() => import("./pages/Home"));
const ContactMe = React.lazy(() => import("./pages/ContactMe"));
const Credits = React.lazy(() => import("./pages/Credits"));
const Education = React.lazy(() => import("./pages/Education"));
const Login = React.lazy(() => import("./pages/Login"));
const Photos = React.lazy(() => import("./pages/Photos"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Resume = React.lazy(() => import("./pages/Resume"));
const Technologies = React.lazy(() => import("./pages/Technologies"));
const WorkHistory = React.lazy(() => import("./pages/WorkHistory"));

export default function App() {

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent)

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className={menuOpen ? "menu open" : "menu close"} onClick={() => setMenuOpen(!menuOpen)}>
        <NavLink exact activeClassName="active" className="menu-link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/technologies">Technologies</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/work-history">Work History</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/education">Education</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/projects">Projects</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/resume">Resume</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/photos">Photos</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/contact-me">Contact me</NavLink>
        <NavLink exact activeClassName="active" className="menu-link" to="/credits">Credits</NavLink>
      </div>
      <div className="padded-div">
        <button onTouchEnd={() => setMenuOpen(!menuOpen)} id="menu-toggle" className="icon-btn toggle no-select" style={{ display: isMobile ? "inline" : "none" }}>
          <i className="fa fa-bars" style={{ fontWeight: "bold", fontSize: "5em", color: "white" }}></i>
        </button>
        <Suspense
          fallback={<p style={{ display: "none" }}>Loading...</p>}
        >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/technologies">
              <Technologies />
            </Route>
            <Route path="/work-history">
              <WorkHistory />
            </Route>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/contact-me">
              <ContactMe />
            </Route>
            <Route path="/credits">
              <Credits />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
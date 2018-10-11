import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />

    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home! ;-P</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Projects = ({ match }) => (
  <div>
    <h2>Projects</h2>
    <ul>
      <li><Link to={`${match.url}/global`}>Global Consultoria</Link></li>
      <li><Link to={`${match.url}/mundo-psicodelico`}>Mundo Psicodélico</Link></li>
      <li><Link to={`${match.url}/dr-nutrition`}>DR. Nutrition</Link></li>
    </ul>

    <Route path={`${match.path}/:projectId`} component={Project} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Selecione um projeto! ;-)</h3>}
    />
  </div>
);

const Project = ({ match }) => (
  <div>
    <h3>{match.params.projectId}</h3>
  </div>
)

export default BasicExample;
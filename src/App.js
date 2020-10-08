import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, IndexRoute, Switch, Link, IndexLink, Redirect } from 'react-router-dom'

//pages
import MainPage from './pages';
import ArticlesPage from './pages/articles';
import Panier from './pages/panier';
import InfosPratiques from './pages/infos-pratiques';
import NotFoundPage from './pages/404';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/articles/:category?" component={ArticlesPage} />
        <Route exact path="/panier" component={Panier} />
        <Route exact path="/infospratiques" component={InfosPratiques} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

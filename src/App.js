
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Resumes from "./pages/Resumes";
import Portfolios from "./pages/Portfolios";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogDetails from "./pages/BlogDetails";
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-176707724-1');
    ReactGA.set({ siteSpeedSampleRate: 100});
    ReactGA.pageview('/HomePage');
}

function App() {
  initializeReactGA();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/portfolios" component={Portfolios} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

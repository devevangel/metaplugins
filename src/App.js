import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
// Pages
import HomePage from "./pages/HomePage/HomePage";
import PluginPage from "./pages/PluginPage/PluginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
// import BackgroundVideo from "./components/BackgroundVideo";
// <BackgroundVideo />
// <div className="overlay" />

// Components

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/plugin/:id" component={PluginPage} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;

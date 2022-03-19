import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import PluginPage from "./pages/PluginPage/PluginPage";
import AdminPage from "./pages/AdminPage/AdminPage";

// Components
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/plugin" component={PluginPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </div>
  );
};

export default App;

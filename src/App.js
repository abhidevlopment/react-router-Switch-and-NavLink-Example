import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container pt-5">
        <Alert text={'Это уведомление-предупреждение'} type={'warning'} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

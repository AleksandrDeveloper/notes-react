import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import AlertState from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FirebaseState";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <FirebaseState> 
      <AlertState>
        <NavBar />
        <div className="container pt-5">
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </AlertState>
    </FirebaseState>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import Quiz from "./pages/quiz/Quiz";

function App() {
  const userExists = localStorage.getItem("user");
  const isAuthenticated = userExists;

  return (
    <div className="app">
      <div className="app_body">
        <Switch>
          <Route exact path={"/"}>
            <Redirect to={isAuthenticated ? "/quiz" : "/login"}></Redirect>
          </Route>
          <Route path={"/login"} component={LoginPage} />
          <Route path={"/quiz"} component={Quiz} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

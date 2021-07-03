import React from "react";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/Login";
import Quiz from "./pages/quiz/Quiz";
import AddQuestionSet from "./pages/quiz/components/addQuestionSet/AddQuestionSet";
import Questions from "./pages/quiz/components/questions/Questions";

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
          <Route path={'/addQuestionSet'} component={AddQuestionSet} />
          <Route path={'/questions'} component={Questions} />
        </Switch>
      </div>
    </div>
  );
}

export default App;

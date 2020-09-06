import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ArticleDetails from "./components/articles/ArticleDetails";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import CreateArticle from "./components/articles/CreateArticle";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar />
              <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/article/:id" component={ArticleDetails} />
                  <Route path="/login" component={LogIn}/>
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/create" component={CreateArticle}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;

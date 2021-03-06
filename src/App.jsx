import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/main/dashboard/Dashboard";
import ArticleDetails from "./components/main/ArticleDetails";
import LogIn from "./components/main/auth/LogIn";
import SignUp from "./components/main/auth/SignUp";
import CreateArticle from "./components/main/CreateArticle";
import UpdateArticle from "./components/main/UpdateArticle";
import UserInfo from "./components/main/UserInfo";

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
                  <Route path="/update/:id" component={UpdateArticle} />
                  <Route path="/info" component={UserInfo} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;

import React from "react";

import "./App.css";
import { Switch, Route,Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  //console.log(props1.match.params.topicId)
  return (
    <div>
      <h1>Topic Detail Page</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

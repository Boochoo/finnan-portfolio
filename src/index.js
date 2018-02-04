import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import { BrowserRouter as Router, Route } from "react-router-dom";

//import HeaderList from "./components/HeaderList";

ReactDOM.render(
  /*   <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={HeaderList} />
      <Route path="/skills" component={HeaderList} />
      <Route path="/experience" component={HeaderList} />
      <Route path="/education" component={HeaderList} />
    </div>
  </Router>, */
  <App />,
  document.getElementById("root")
);
registerServiceWorker();

import React from 'react';
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";



import indexRoutes from "./routes/index.js";

const hist = createBrowserHistory();

const mountNode = document.getElementById('root')



ReactDOM.render(
<Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
    mountNode);


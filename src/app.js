import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my Dashboard
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my Add
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my Edit
  </div>
);

const HelpPage = () => (
  <div>
    This is from my Help
  </div>
);

const PageNotFound = () => (
  <div>
    Error 404 - Page not found :(
  </div>
);

const routes = (
  // BroserRouter has to have ONLY one child
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

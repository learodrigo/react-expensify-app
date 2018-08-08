import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is from my Dashboard
  </div>
);

const createExpensePage = () => (
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
    <h3>Error 404 - Page not found :(</h3>
    <Link to="/">Dashboard</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <Link to="/">Dashboard</Link>
    <Link to="/create">Create expense</Link>
    <Link to="/edit">Edit expense</Link>
    <Link to="/help">Help</Link>
  </header>
);

const routes = (
  // BroserRouter has to have ONLY one child
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={createExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

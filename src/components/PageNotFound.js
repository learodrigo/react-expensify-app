import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h3>Error 404 - Page not found :(</h3>
    <Link to="/">Dashboard</Link>
  </div>
);

export default PageNotFound;
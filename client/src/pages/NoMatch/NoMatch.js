import React from "react";
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <div>404 Page Not Found</div>
    <Link to="/"> Go back to home </Link>
  </div>
);

export default NoMatch;

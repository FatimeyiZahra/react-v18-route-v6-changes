import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div>Body</div>
      <ul>
        <li>
          <Link to="/app">App</Link>
        </li>
        <li>
          <Link to="/whatever">go to the whatever page</Link>
        </li>
      </ul>
    </>
  );
};

export default Body;

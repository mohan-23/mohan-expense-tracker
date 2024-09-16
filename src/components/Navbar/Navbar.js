import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul class="nav">
        <Link to="add">Add Form</Link>
      </ul>
      <ul>
        <Link to="display">Display</Link>
      </ul>
    </div>
  );
};

export default Navbar;

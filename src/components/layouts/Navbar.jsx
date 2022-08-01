import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

function Navbar({ title }) {
  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <Link to="" className="btn btn-ghost normal-case text-xl text-slate-50">
          <FaGithub className="mr-3 h-6 sm:h-9"></FaGithub>
          {title}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-semibold text-slate-50">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

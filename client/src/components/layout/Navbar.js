import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles"><i class="fas fa-terminal"></i> Developers</Link>
      </li>
      <li>
        <Link to="/posts"><i className="fas fa-paper-plane" /> Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-bars" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul class="nav-links">
      <li> 
        <Link to="/profiles"><i class="fas fa-terminal"></i> Developers</Link>
      </li>
      <li>
        <Link to="/register"><i class="fas fa-user-plus"></i> Sign Up</Link>
      </li>
      <li>
        <Link to="/login"><i class="fas fa-sign-in-alt"></i>  Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i class="fab fa-dev fa-lg"></i> BOOK
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);

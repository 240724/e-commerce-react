import { Link, NavLink } from "react-router-dom";
const Navbar = ({ cardTotal }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg fixed-top bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/jewelery">
                Jewelery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/electronics"
              >
                Electronics
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gender
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/women">
                    Women's Clothings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/men">
                    Men's Clothings
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button className="btn btn-xl btn-success nav-cart">
            Sepetim
            <span className="badge text-bg-danger ms-2">{cardTotal}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

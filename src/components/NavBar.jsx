import { Navbar} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      className="navbar navbar-light navbar-expand-lg border-bottom mb-3"
      style={{ zIndex: "4" }}
    >
      <Navbar.Brand className="navbar-brand">
        <img
          src="logo.png"
          className="navbar-brand-img"
          alt="..."
          style={{ width: "20rem", paddingLeft:"5rem"}}
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;

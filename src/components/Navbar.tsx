import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ShoppingCart from "../assets/shopping-cart.svg";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          className="rounded-circle"
          variant="outline-primary">
          <img src={ShoppingCart} width={25} height={25} alt="shopping cart icon" />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center "
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: "0",
              right: "0",
              transform: "translate(25%, 25%)",
            }}>
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;

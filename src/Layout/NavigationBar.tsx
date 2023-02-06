import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/esm/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext, UpdateThemeContext } from "../Contexts/ThemeProvider";
import "./styles/NavigationBar.css";

function NavigationBar(): JSX.Element {
  const { updateTheme } = useContext(UpdateThemeContext)!;
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Navbar
      fixed="top"
      bg={isDarkMode ? "dark" : "white"}
      variant={isDarkMode ? "dark" : "white"}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand>
          <NavLink
            className={
              isDarkMode ? "NavigationLink-dark-mode" : "NavigationLink"
            }
            to={"/"}
          >
            B!og.
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => navigate("/")}
              className={`navlink ${
                isDarkMode ? "NavigationLink-dark-mode" : "NavigationLink"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/register")}
              className={`navlink ${
                isDarkMode ? "NavigationLink-dark-mode" : "NavigationLink"
              }`}
            >
              Register
            </Nav.Link>
          </Nav>
          <Nav>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={
                  <DarkModeIcon
                    style={{ color: isDarkMode ? "white" : "black" }}
                  />
                }
                onChange={updateTheme}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

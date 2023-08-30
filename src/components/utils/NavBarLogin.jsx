import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSearchNavigate from "../../hooks/useSearchNavigate";
import useDebouncedSearchParams from "../../hooks/useDebouncedSearchParams";

const NavBarLogin = () => {
  const searchNavigate = useSearchNavigate({ delay: 250 });
  const [searchParams, setSearchParams] = useDebouncedSearchParams({}, 1000);

  const handleChange = ({ target }) => {
    const keyword = target.value;

    if (location.pathname === "/products") {

      setSearchParams(prevSearchParams => {
        prevSearchParams.set("page", 1);
        prevSearchParams.set("keyword", keyword);
        return prevSearchParams;
      });

    } else {
      searchNavigate({ pathname: "/products", searchParams: { keyword } });
    }
  };

  return (
    <>
      <Navbar expand="sm" sticky="top" variant="dark" className="bg-dark py-0   top-0 shadow-sm ">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <i className="fab fa-shopify fa-3x  text-danger " />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="border text-light  " />
          <Navbar.Collapse >
            <Nav className="me-auto my-1 my-sm-0" />
            <div className="d-flex flex-grow-1 pb-3 pb-sm-0">
              <Form.Control
                type="search"
                defaultValue={location.pathname === "/products" ? searchParams.get("keyword") : null}
                onChange={handleChange}
                placeholder="ابحث ..."
                className="me-3 text-center shadow-none border-0 rounded-0"
                aria-label="ابحث"
              />
              <Link to="/login" className="text-white text-decoration-none  d-flex align-items-center me-3">
                <i className="far fa-circle-user fs-3 me-1" />دخول
              </Link>
              <Link to="/cart" className="text-white d-flex
              text-decoration-none align-items-center ">
                <i className="fas fa-cart-shopping fs-3 me-1" />العربة
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarLogin;

import { NavLink } from "react-bootstrap";
import AboutScreen from "../screens/about";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const navigate=useNavigate()
    const AboutScreenHandler=()=>{
        navigate("/about")
    }
    const categoryHandler=()=>{
        navigate("/category")
    }
    const productsHandler=()=>{
        navigate("/products")
    }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-primary">
        <div className="container-fluid">
          <ul className="navbar-nav">
          <li className="nav-item">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-platform-5718900-4778962.png" alt="logo icon" width={"50px"} height={"50px"} />
            </li>
            <li className="nav-item">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"category"} onClick={categoryHandler}>Categories </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={"products"} onClick={productsHandler}>Products </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"about"} onClick={AboutScreenHandler}>About </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavbarComponent;

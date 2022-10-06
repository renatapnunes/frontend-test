import { NavLink } from "react-router-dom";

import logo from "@/assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo studio ghibli" />
      <nav>
        <NavLink to={"/"}>
          <h4>Home</h4>
        </NavLink>
        <NavLink to={"/about"}>
          <h4>About</h4>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

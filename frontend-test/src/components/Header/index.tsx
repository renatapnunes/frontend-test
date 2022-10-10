import logo from "@/assets/logo.png";

import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <img src={logo} alt="logo studio ghibli" />
      <nav>
        <S.Navlink to={"/"} data-testid="home-link">
          <h3>Home</h3>
        </S.Navlink>
        <S.Navlink to={"/about"} data-testid="about-link">
          <h3>About</h3>
        </S.Navlink>
      </nav>
    </S.Header>
  );
}

export default Header;

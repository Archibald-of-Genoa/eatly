import { Logo } from "../Logo";
import { MenuItem } from "../MenuItem";
import { HeaderMenu, HeaderStyled } from "./Header.styled";

export function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderMenu>
        <MenuItem to="/recipies">Recipes</MenuItem>
        <a
          href="#faq"
          style={{
            color: "#606060",
            fontSize: "18px",
            fontWeight: "500",
            textDecoration: "none",
          }}
        >FAQ</a>
        <MenuItem to="/blog">Blog</MenuItem>
      </HeaderMenu>
    </HeaderStyled>
  );
}

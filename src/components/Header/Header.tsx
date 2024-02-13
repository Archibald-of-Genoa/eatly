import { Logo } from "../Logo";
import { MenuItem } from "../MenuItem";
import { HeaderMenu, HeaderStyled } from "./Header.styled";

export function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderMenu>
        <MenuItem href="#/recipes">Recipes</MenuItem>
        <MenuItem href="#/blog">Blog</MenuItem>
      </HeaderMenu>
    </HeaderStyled>
  );
}

import { Logo } from "../Logo";
import { MenuItem } from "../MenuItem";
import { HeaderMenu, HeaderStyled } from "./Header.styled";
import { Blog } from "../Blog/Blog"


export function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderMenu>
        <MenuItem href="#/recipes">Recipes</MenuItem>
        <MenuItem href=" ">Blog</MenuItem>
      </HeaderMenu>
    </HeaderStyled>
  );
}

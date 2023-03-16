import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { NavStyled } from "./SharedLayout.styled";
import { LinkStyled } from "./SharedLayout.styled";

const SharedLayout = () => { 

    return (
        <div>  
        <header>
      <NavStyled>
        <LinkStyled to="/">Home</LinkStyled>
        <LinkStyled to="/movies">Movies</LinkStyled>
      </NavStyled>
            </header>
            <Outlet />
            </div>
    );
};

export default SharedLayout;
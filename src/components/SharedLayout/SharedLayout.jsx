import { Outlet } from "react-router-dom";
import { NavStyled } from "./SharedLayout.styled";
import { LinkStyled } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => { 

  return (
    <div>
      <header>
        <NavStyled>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </NavStyled>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
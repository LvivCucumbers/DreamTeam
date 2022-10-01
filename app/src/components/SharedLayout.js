import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

export function SharedLayout() {

  const StyledLink = styled(NavLink)`
    color: black;
    &.active {
      color: orange;
    }
  `;

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <StyledLink to="/" end>
                                Home
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/starships">starships</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/movies">Movie</StyledLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
            </Suspense>
            #here footer
        </>
    );
}
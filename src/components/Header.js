import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <h1>Recipe App</h1>
      <Links>
        <Link to="/">Home</Link>
      </Links>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8b400;
  h1 {
    font-size: 1.5rem;
  }
`;

const Links = styled.div`
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
  }
`;

export default Header;

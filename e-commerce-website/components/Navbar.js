import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>WELCOME</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>HOME</StyledLink>
        </Link>
        <Link href='/about' passHref>
          <StyledLink>ABOUT</StyledLink>
        </Link>
        <Link href='/contact' passHref>
          <StyledLink>CONTACT</StyledLink>
          </Link>
          <Link href='/product' passHref>
          <StyledLink>PRODUCT</StyledLink>
          </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
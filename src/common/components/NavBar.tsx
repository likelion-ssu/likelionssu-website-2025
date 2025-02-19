import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import media from "../../common/styles/media";
import IcClose from "./../assets/ic_close.svg?react";

interface NavBarProps {
  onClose: () => void;
}

const NavBar = ({ onClose }: NavBarProps) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <Overlay onClick={handleClose}>
      <NavBarContainer $isClosing={isClosing} onClick={e => e.stopPropagation()}>
        <IcClose onClick={handleClose} />
        <NavList>
          <li>
            <Link to="/about#aboutus-section" onClick={handleClose}>
              ABOUT
            </Link>
            <p>
              <Link to="/about#activity-section" onClick={handleClose}>
                Roadmap
              </Link>
              <br />
              <Link to="/about#team-section" onClick={handleClose}>
                Management Team
              </Link>
            </p>
          </li>

          <li>
            <Link to="/part" onClick={handleClose}>
              PART
            </Link>
            <p>
              <span onClick={handleClose}>Project Manager</span>
              <br />
              <span onClick={handleClose}>Product Designer</span>
              <br />
              <span onClick={handleClose}>Frontend Developer</span>
              <br />
              <span onClick={handleClose}>Backend Developer</span>
            </p>
          </li>

          <li>
            <Link to="/project" onClick={handleClose}>
              PROJECT
            </Link>
          </li>

          <li>
            <Link to="/recruit" onClick={handleClose}>
              RECRUIT
            </Link>
          </li>
        </NavList>
      </NavBarContainer>
    </Overlay>
  );
};

export default NavBar;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 200;
`;

const NavBarContainer = styled.div<{ $isClosing: boolean }>`
  border: 2px solid #1a1a1a;
  background: #000;
  width: 34rem;
  height: 100vh;
  padding: 4.9rem 0 0 3.3rem;

  ${({ $isClosing }) =>
    $isClosing
      ? css`
          animation: ${slideOut} 0.3s ease-out forwards;
        `
      : css`
          animation: ${slideIn} 0.3s ease-out forwards;
        `}

  ${media.small`
    width: 100vw;
  `};
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 3rem 0;
  font-size: 1.8rem;
  font-family: "SUIT Variable";
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 0.9rem;

  li {
    color: #fff;

    ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle2)}
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-feature-settings: "calt" off;

    ${({ theme }) => theme.mixins.font(theme.fonts.Suit.body3)}
    line-height: 2;
    margin-top: 1.4rem;
  }
`;

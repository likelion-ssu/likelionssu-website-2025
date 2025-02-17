import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import IcClose from "./../assets/ic_close.svg?react";

interface NavBarProps {
  onClose: () => void;
}

const NavBar = ({ onClose }: NavBarProps) => {
  // 네비바 열렸을 때 스크롤 금지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Overlay onClick={onClose}>
      <NavBarContainer onClick={e => e.stopPropagation()}>
        <IcClose onClick={onClose} />
        <NavList>
          <li>
            <Link to="/about">ABOUT</Link>
            <p>
              <Link to="/about#activity-section">Roadmap</Link>
              <br />
              <Link to="/about#team-section">Management Team</Link>
            </p>
          </li>

          <li>
            {/* part 링크로 수정 */}
            <Link to="/">PART</Link>
            <p>
              Project Manager
              <br />
              Product Designer
              <br />
              Frontend Developer
              <br />
              Backend Developer
            </p>
          </li>

          <li>
            {/* project 링크로 수정 */}
            <Link to="/">PROJECT</Link>
          </li>

          <li>
            <Link to="/recruit">RECRUIT</Link>
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

const NavBarContainer = styled.div`
  border: 2px solid #1a1a1a;
  background: #000;
  width: 34rem;
  height: 100vh;
  padding: 4.9rem 0 0 3.3rem;
  animation: ${slideIn} 0.3s ease-out;
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

    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.44px;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-feature-settings: "calt" off;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2;
    letter-spacing: 0.32px;
    margin-top: 1.4rem;
  }
`;

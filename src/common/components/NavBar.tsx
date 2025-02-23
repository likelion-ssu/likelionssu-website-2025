import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import media from "../../common/styles/media";
import IcClose from "./../assets/ic_close.svg?react";
import useRoleStore from "../../Part/store/useRoleStore";
import IcArrow from "../../common/assets/arrow_down.svg?react";
interface NavBarProps {
  onClose: () => void;
}

const roleMap: Record<number, "pm" | "de" | "fe" | "be"> = {
  1: "pm",
  2: "de",
  3: "fe",
  4: "be"
};

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

  const navigate = useNavigate();
  const { setRole } = useRoleStore();

  const handlePartClick = (id: number) => {
    const role = roleMap[id];
    if (role) {
      setRole(role);
      handleClose();
      navigate("/part");
    }
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
                Activity
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
              <span onClick={() => handlePartClick(1)}>Project Manager</span>
              <br />
              <span onClick={() => handlePartClick(2)}>Product Designer</span>
              <br />
              <span onClick={() => handlePartClick(3)}>Frontend Developer</span>
              <br />
              <span onClick={() => handlePartClick(4)}>Backend Developer</span>
            </p>
          </li>

          <li>
            <Link to="/project" onClick={handleClose}>
              PROJECT
            </Link>
          </li>

          <li>
            <Link to="/recruit" onClick={handleClose}>
              <RecruitBtn>
                RECRUIT
                <IcArrowStyled />
              </RecruitBtn>
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
  z-index: 1000;
`;

const NavBarContainer = styled.div<{ $isClosing: boolean }>`
  border: 2px solid #1a1a1a;
  background: #000;
  width: 34rem;
  height: 100vh;
  padding: 3.5rem 6.5rem 0 3.3rem;
  display: flex;
  flex-direction: column;
  align-items: end;

  ${({ $isClosing }) =>
    $isClosing
      ? css`
          animation: ${slideOut} 0.3s ease-out forwards;
        `
      : css`
          animation: ${slideIn} 0.3s ease-out forwards;
        `}

  ${media.small`
    width: 70vw;
    align-items: end;
    padding: 2rem 3rem 0 3.3rem;
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
  width: 100%;
  position: relative;
  li {
    color: #fff;

    ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle2)}

    ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Suit.body1)}
  `};
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-feature-settings: "calt" off;

    ${({ theme }) => theme.mixins.font(theme.fonts.Suit.body3)}
    line-height: 2;
    margin-top: 1.4rem;

    ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Suit.body4)}
    line-height: 2;

  `};
  }

  span {
    cursor: pointer;
  }
`;

const RecruitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -1rem;

  padding: 1rem 1.8rem;
  gap: 1rem;
  border-radius: 30px;
  border: none;

  background: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(90deg, #6df5ff 0%, #bab0ff 100%);

  color: white;
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle2)}

  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 30px;
    padding: 0.2rem;
    background: linear-gradient(90deg, #6df5ff, #bab0ff);

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
  }

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Suit.body1)}
  `};
`;

const IcArrowStyled = styled(IcArrow)`
  path {
    stroke: rgba(186, 176, 255, 1);
  }
  width: 2.4rem;
  height: 2.4rem;

  ${media.small`
    width: 2rem;
  height: 2rem;
  `};
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Logo from "/public/logo.svg?react";
import IcMenu from "../assets/ic_menu.svg?react";
import { useCountDownStore } from "../../common/components/CountDown";
import NavBar from "./NavBar";
import media from "../../common/styles/media";

interface TopBarProps {
  type?: string;
}

const TopBar = ({ type }: TopBarProps) => {
  const { isExpired } = useCountDownStore();
  const isRecruitActive = type === "recruit" && !isExpired;

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <TopBarContainer $isRecruit={isRecruitActive} $type={type}>
        <Link to="/">
          <LogoContainer>
            <Logo style={{ width: "2rem" }} />
            LIKELION SOONGSIL
          </LogoContainer>
        </Link>
        <BtnContainer>
          {type !== "recruit" && (
            <Link to="/recruit">
              <ApplyBtn>13기 지원하기</ApplyBtn>
            </Link>
          )}
          <IcMenuStyled onClick={() => setIsNavOpen(true)} />
        </BtnContainer>
      </TopBarContainer>

      {isNavOpen && <NavBar onClose={() => setIsNavOpen(false)} />}
    </>
  );
};

export default TopBar;

const TopBarContainer = styled.div<{ $isRecruit: boolean; $type?: string }>`
  position: ${({ $type }) => ($type === "project" ? "sticky" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10rem;
  padding: 5rem 5.6rem;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);

  ${media.small`
    height: 6rem;
    padding: 0.5rem 2rem;
  `};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle2)}

  gap: 0.8rem;
  padding: 1rem auto;
  height: 5rem;

  ${media.small`
    font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  `};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;

  ${media.small`
  gap: 2rem;

  `};
`;

const IcMenuStyled = styled(IcMenu)`
  path {
    fill: "white";
  }

  ${media.small`
  width:3rem;
  `};
`;

const ApplyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16.2rem;
  padding: 1.4rem 2.4rem;
  gap: 1rem;
  border-radius: 30px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(96deg, #6df5ff -0.2%, #8079b4 96.8%);

  color: var(--Basic-White, #fff);
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;

  ${media.small`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 8rem;
    padding: 0.8rem 1rem;
    gap: 3.113px;
    border-radius: 20px;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
      linear-gradient(90deg, #6DF5FF 0%, #8079B4 100%);

    font-size: 1rem;
    font-weight: 400;
  `};
`;

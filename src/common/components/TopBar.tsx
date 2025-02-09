import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../public/logo.svg?react";
import IcMenu from "../assets/ic_menu.svg?react";

const TopBar = () => {
  return (
    <TopBarContainer>
      <Link to="/">
        <LogoContainer>
          <Logo style={{ width: "2rem" }} />
          LIKELION SOONGSIL
        </LogoContainer>
      </Link>
      <BtnContainer>
        <ApplyBtn>13기 지원하기</ApplyBtn>
        <IcMenu />
      </BtnContainer>
    </TopBarContainer>
  );
};

export default TopBar;

const TopBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 12rem;
  padding: 5rem 5.6rem;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  font-family: "SUIT Variable";
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
  gap: 0.8rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 3.5rem;
`;

const ApplyBtn = styled.button`
  color: var(--Basic-White, #fff);

  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  width: 16.2rem;
  padding: 1.4rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(96deg, #6df5ff -0.2%, #8079b4 96.8%);
`;

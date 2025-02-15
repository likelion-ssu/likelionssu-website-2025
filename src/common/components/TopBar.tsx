import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Logo from "../../../public/logo.svg?react";
import IcMenu from "../assets/ic_menu.svg?react";
import { useCountDownStore } from "../../common/components/CountDown";
import NavBar from "./NavBar";

interface TopBarProps {
  type?: string;
}

const TopBar = ({ type }: TopBarProps) => {
  const { isExpired } = useCountDownStore();
  const isRecruitActive = type === "recruit" && !isExpired;

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <TopBarContainer $isRecruit={isRecruitActive}>
        <Link to="/">
          <LogoContainer $isRecruit={isRecruitActive}>
            <Logo style={{ width: "2rem" }} />
            LIKELION SOONGSIL
          </LogoContainer>
        </Link>
        <BtnContainer>
          {type !== "recruit" && <ApplyBtn>13기 지원하기</ApplyBtn>}
          <IcMenuStyled $isRecruit={isRecruitActive} onClick={() => setIsNavOpen(true)} />
        </BtnContainer>
      </TopBarContainer>

      {isNavOpen && <NavBar onClose={() => setIsNavOpen(false)} />}
    </>
  );
};

export default TopBar;

const TopBarContainer = styled.div<{ $isRecruit: boolean }>`
  position: absolute;
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

  background: ${({ $isRecruit }) =>
    $isRecruit
      ? "transparent"
      : "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"};
`;

const LogoContainer = styled.div<{ $isRecruit: boolean }>`
  display: flex;
  align-items: center;
  color: ${({ $isRecruit }) => ($isRecruit ? "black" : "#fff")};

  font-family: "SUIT Variable";
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;
  gap: 0.8rem;
  padding: 1rem auto;
  height: 5rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 3.5rem;
`;

const IcMenuStyled = styled(IcMenu)<{ $isRecruit: boolean }>`
  path {
    fill: ${({ $isRecruit }) => ($isRecruit ? "black" : "white")};
  }
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

import styled, { keyframes } from "styled-components";
import BgImg from "../assets/BgImg.jpg";
import BgPhrase from "../assets/BgPhrase.svg?react";
import { motion } from "framer-motion";
import TopBar from "../../common/components/TopBar";
import { aboutUsDesktopText } from "../constants/aboutUsText";
import { aboutUsMobileText } from "../constants/aboutUsText";
import { useEffect, useState } from "react";
import media from "../../common/styles/media";

const AboutUsSection = () => {
  const [text, setText] = useState(aboutUsDesktopText);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 639) {
        setText(aboutUsMobileText);
      } else {
        setText(aboutUsDesktopText);
      }
    };

    window.addEventListener("resize", update);

    update();

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <BG
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* absolute한 투명한 top bar */}
      <TopBar />
      {/* 실제 공간을 차지하는 투명한 div */}
      <TransparentTop />
      <BGBottom>
        <StyledBgPhrase>
          <BgPhrase />
        </StyledBgPhrase>
        <Description>
          {text.map((item, index) =>
            typeof item === "string" ? (
              <span key={index}>{item} </span>
            ) : (
              <BoldDescription key={index}>{item.bold} </BoldDescription>
            )
          )}
        </Description>
      </BGBottom>
    </BG>
  );
};

export default AboutUsSection;

const BG = styled(motion.div)`
  width: 100%;
  height: 100vh;

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용

  background: url(${BgImg});
  background-size: cover;
  background-size: center;

  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    background: #000000;
    z-index: -1;
    inset: 0;
    opacity: 0.6;
  }

  ${media.small`
    width: 100%;
    height: auto;
    
    background: none;
    background-size: contain;
    background-repeat: no-repeat;

    justify-content: flex-start;

    &::after {
      content: none; 
    }
    `}
`;

const TransparentTop = styled.div`
  width: 100%;
  height: 10rem;
  background-color: transparent;
  // 실제 top bar의 사이즈와 동일하게 정의

  ${media.small`
    background-color: black;
  `}
`;

const BGBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);

  ${media.medium`
    gap: 1rem;
  `}

  ${media.small`
    min-height: 30rem;
    max-height: 35rem;

    justify-content: center;
    align-items: flex-start;

    position: relative;

     background: url(${BgImg});
    background-size: contain;
    background-repeat: no-repeat;

    &::after {
      height: 100%;
      content: "";
      position: absolute;
      bottom: 0;

      background: linear-gradient(0deg, rgba(0,0,0,1) 30%,  rgba(0,0,0,0.1) 100%);

      z-index: 0;
      
      inset: 0;
  }
  `}
`;

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const StyledBgPhrase = styled(BgPhrase)`
  animation: ${fadeInOut} 2s linear 1;

  ${media.small`
    height: 10rem;

    z-index: 1;
  `}
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  padding-left: 4rem;
  padding-bottom: 3.13rem;

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  white-space: pre-wrap;

  word-break: keep-all;
  line-height: 3.5rem;

  z-index: 1;

  ${media.small`
    padding: 2rem;

    ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
    line-height: 2rem;
  `}
`;

const BoldDescription = styled.span`
  font-weight: 700;
`;

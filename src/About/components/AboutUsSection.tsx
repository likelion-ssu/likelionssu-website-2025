import styled, { keyframes } from "styled-components";
import BgImg from "../assets/BgImg.jpg";
import BgPhrase from "../assets/BgPhrase.svg?react";
import { motion } from "framer-motion";
import TopBar from "../../common/components/TopBar";
import { aboutUsDesktopText } from "../constants/aboutUsText";
import { aboutUsMobileText } from "../constants/aboutUsText";
import { useEffect, useRef, useState } from "react";
import media from "../../common/styles/media";

const AboutUsSection = () => {
  const [text, setText] = useState(aboutUsDesktopText);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
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
      <TopBar />
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

  ${media.large`
    &::after {
      content: "";
      position: absolute;
      background: #000000;
      z-index: -1;
      inset: 0;
      opacity: 0.6;
    }`}

  ${media.medium`
      background-size: contain;
    background-repeat: no-repeat;
    height: 100vh;

    &::after {
      content: "";
      position: absolute;
      background: #000000;
      z-index: -1;
      inset: 0;
      opacity: 0.6;
    }
    `}
`;

const BGBottom = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);

  @media (max-width: 768px) {
    top: 0;
    justify-content: flex-start;
    gap: 1rem;

    padding-top: 1.5rem;
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  /* width: 108rem; */
  padding-left: 4rem;
  padding-bottom: 3.13rem;

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
  white-space: pre-wrap;

  word-break: keep-all;
  line-height: 3.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const BoldDescription = styled.span`
  font-weight: 700;
`;

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const StyledBgPhrase = styled(BgPhrase)`
  animation: ${fadeInOut} 3s ease-in-out 1;
`;

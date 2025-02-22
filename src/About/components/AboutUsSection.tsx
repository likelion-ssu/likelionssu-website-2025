import styled, { keyframes, DefaultTheme } from "styled-components";
import BgImg from "../assets/BgImg.jpg";
import BgPhrase from "../assets/BgPhrase.png";
import { motion } from "framer-motion";
import media from "../../common/styles/media";
import { aboutUsShortText, aboutUsText } from "../constants/aboutUsText";
import { useEffect, useState } from "react";

const AboutUsSection = () => {
  const [text, setText] = useState(aboutUsText);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth > 1048) setText(aboutUsText);
      else setText(aboutUsShortText);
    };

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <BG
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BGBottom>
        <StyledBgPhrase src={BgPhrase} />
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

const BG = styled(motion.div).attrs({ id: "aboutus-section" })`
  width: 100%;
  min-height: 100vh;

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용

  background: url(${BgImg});
  background-size: cover;
  background-size: center;

  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
   /* 초기화 */
   scroll-snap-align: none;
   scroll-snap-stop: normal;

    min-height: auto;
    
    background: none;
    background-size: cover;
    background-repeat: no-repeat;

    justify-content: flex-start;

    &::after {
      content: none; 
    }
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

  position: relative;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);

  ${media.medium`
    gap: 5rem;
  `}

  ${media.small`
    height: auto;
    margin-top: 5rem;
    max-height: 40rem;
    min-height: 35rem;

    justify-content: flex-start;
    padding-top: 5rem;
    align-items: flex-start;

    position: relative;

     background: url(${BgImg});
    background-size: contain;
    background-repeat: no-repeat;

    &::after {
      height: auto;
      max-height: 40rem;
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

const StyledBgPhrase = styled.img`
  animation: ${fadeInOut} 2s linear 1;
  object-fit: cover;
  width: 100%;

  ${media.small`

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
  line-height: 3rem;

  z-index: 1;

  ${media.small`
    padding: 2rem;

    ${({ theme }: { theme: DefaultTheme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
    line-height: 2rem;
  `}
`;

const BoldDescription = styled.span`
  font-weight: 700;
`;

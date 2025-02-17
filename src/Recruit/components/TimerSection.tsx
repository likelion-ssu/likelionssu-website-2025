import styled from "styled-components";
import { motion } from "framer-motion";
import { RefObject } from "react";
import IcArrow from "../../common/assets/arrow_down.svg?react";
import TopBar from "../../common/components/TopBar";
import media from "../../common/styles/media";

interface TimerSectionProps {
  snapContainerRef: RefObject<HTMLDivElement>;
}

const TimerSection = ({ snapContainerRef }: TimerSectionProps) => {
  const handleScrollDown = () => {
    if (snapContainerRef.current) {
      const container = snapContainerRef.current;
      const sectionHeight = window.innerHeight;

      container.scrollBy({ top: sectionHeight, behavior: "smooth" });
    }
  };
  return (
    <>
      <BGC
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TopBar type="recruit" />
        <TitleWrapper>
          <Title>13th SSU BABYLION RECRUITING 13th SSU BABYLION RECRUITING</Title>
        </TitleWrapper>
        <TextContainer>
          <TextLarge>지금은 모집기간이 아닙니다</TextLarge>
          <TextSmall>
            13기 모집이 완료되었습니다. <br /> 2026년 3월에 예정된 14기 모집에 지원해주세요.
          </TextSmall>
        </TextContainer>
        <TitleWrapper>
          <TitleRight>BABYLION RECRUITING 13th SSU BABYLION RECRUITING 13th SSU </TitleRight>
        </TitleWrapper>
        <ArrowWrapper>
          <IcArrowStyled onClick={handleScrollDown} />
        </ArrowWrapper>
      </BGC>
    </>
  );
};

export default TimerSection;

const BGC = styled(motion.div)`
  background: linear-gradient(90deg, #1a1a1a 35.78%, #000 100%);
  width: 100%;
  height: 100vh;
  min-height: 85rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const Title = styled.p`
  font-family: "SUIT Variable";
  font-size: 9.8rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  background: linear-gradient(90deg, rgba(32, 250, 254, 0.2) 0%, rgba(177, 177, 254, 0.2) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  display: inline-block;
  background-size: 100vw auto;

  ${media.small`
    position: absolute;
    font-size: 4rem;  
    writing-mode: vertical-rl;  
    white-space: nowrap;
    transform: rotate(180deg); 
    left: 5rem;
    top: 0rem;
    transform-origin: left center;
  `};
`;

const TitleRight = styled(Title)`
  ${media.small`
    transform: rotate(360deg);
    right: 0rem;
    left: auto;
    transform-origin: right center;
  `};
`;

const TextContainer = styled.div`
  padding: 15.1rem 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5rem;

  ${media.small`
    gap: 2rem;
    padding: 0;
    display: flex;
  flex-direction: column;
  align-items: center;
  `};
`;

const TextLarge = styled.p`
  color: #fff;
  font-size: 6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4rem;

  ${media.small`
    font-size: 2.6rem;
  `};
`;

const TextSmall = styled.p`
  color: #fff;
  font-feature-settings: "calt" off;

  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Pretendard.body7)}
  `};
`;

const IcArrowStyled = styled(IcArrow)`
  position: fixed;
  bottom: 4.8rem;
  transform: rotate(90deg);
  cursor: pointer;
  path {
    stroke: #fff;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

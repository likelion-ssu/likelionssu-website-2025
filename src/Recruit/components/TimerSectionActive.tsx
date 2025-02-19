import styled from "styled-components";
import Shadow from "../assets/timer_shadow.svg?react";
import useCountDown from "../../common/components/CountDown";
import { motion } from "framer-motion";
// import TopBar from "../../common/components/TopBar";
import IcArrow from "../../common/assets/arrow_down.svg?react";
import { RefObject } from "react";
import media from "../../common/styles/media";

interface TimerSectionActiveProps {
  snapContainerRef: RefObject<HTMLDivElement>;
}

const TimerSectionActive = ({ snapContainerRef }: TimerSectionActiveProps) => {
  const { days, hours, minutes, seconds } = useCountDown();

  // 스크롤 버튼
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
        {/* <TopBar type="recruit" /> */}
        <TitleWrapper>
          <Title>13th SSU BABYLION RECRUITING 13th SSU BABYLION RECRUITING</Title>
        </TitleWrapper>
        <TimerContainer>
          <TimerTitle>모집 마감까지</TimerTitle>
          <TimerSection>
            <TimeBox>
              <Name>DAYS</Name>
              {days < 10 ? `0${days}` : days}
              <ShadowIC />
            </TimeBox>
            :
            <TimeBox>
              <Name>HOURS</Name>
              {hours < 10 ? `0${hours}` : hours}
              <ShadowIC />
            </TimeBox>
            <Colon>:</Colon>
            <TimeBox>
              <Name>MINUTES</Name>
              {minutes < 10 ? `0${minutes}` : minutes}
              <ShadowIC />
            </TimeBox>
            :
            <TimeBox>
              <Name>SECONDS</Name>
              {seconds < 10 ? `0${seconds}` : seconds}
              <ShadowIC />
            </TimeBox>
          </TimerSection>
          <TimerTitle>
            숭실대 멋쟁이사자처럼은 <Blue>지금 서류 모집 중</Blue>
          </TimerTitle>
          <ApplyBtn>지원 서류 작성하기</ApplyBtn>
        </TimerContainer>
        <TitleWrapper>
          <TitleRight>BABYLION RECRUITING 13th SSU BABYLION RECRUITING 13th SSU </TitleRight>
        </TitleWrapper>
        <IcArrowStyled onClick={handleScrollDown} />
      </BGC>
    </>
  );
};

export default TimerSectionActive;

const BGC = styled(motion.div)`
  background: linear-gradient(180deg, #f3f7fb 61.94%, #d6e3ff 100%);
  width: 100%;
  height: 100vh;
  min-height: 85rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;

  ${media.small`
    scroll-snap-align: none;
    scroll-snap-stop: normal;
   `};
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
    
    background: linear-gradient(180deg, rgba(32, 250, 254, 0.2) 0%, rgba(177, 177, 254, 0.2) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: auto 100%;
    background-position: top;
  `};
`;

const TitleRight = styled(Title)`
  ${media.small`
    transform: rotate(360deg);
    right: 0rem;
    left: auto;
    transform-origin: right center;
    
    background: linear-gradient(180deg, rgba(32, 250, 254, 0.2) 0%, rgba(177, 177, 254, 0.2) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: auto 100%;
    background-position: top;
  `};
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin: 3.6rem auto;
`;

const TimerTitle = styled.p`
  color: #1a1a1a;
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4rem;

  ${media.small`
    font-size: 1.8rem;
    margin-bottom:4rem
  `};
`;

const Blue = styled.span`
  background: linear-gradient(180deg, #50b3ff 0%, #177bc8 113.75%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline;
`;

const TimerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: #000;
  text-align: center;
  font-family: "SUIT Variable";
  font-size: 10rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  flex-wrap: wrap;

  ${media.small`
    font-size: 6rem;
    gap: 0.1rem;
  `};
`;

const Colon = styled.span`
  ${media.small`
    display: none;
  `};
`;

const ApplyBtn = styled.button`
  border-radius: 10px;
  background: #1a1a1a;
  color: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  padding: 1.8rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${media.small`
    font-size: 1.4rem;
    padding: 1.6rem 3.4rem;
  `};
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  width: 17rem;
`;

const Name = styled.p`
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: "SUIT Variable";
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.44px;

  ${media.small`
    font-size: 1.4rem;
    `};
`;

const IcArrowStyled = styled(IcArrow)`
  position: fixed;
  bottom: 4.8rem;
  transform: rotate(90deg);
  cursor: pointer;
  width: 3rem;
  path {
    stroke: #000;
  }
`;

const ShadowIC = styled(Shadow)`
  ${media.small`
    height:2.1rem
    `};
`;

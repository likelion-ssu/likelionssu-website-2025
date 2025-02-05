import styled from "styled-components";
import Shadow from "../assets/timer_shadow.svg?react";

const Timer = () => {
  return (
    <>
      <BGC>
        <TitleWrapper>
          <Title>13th SSU BABYLION RECRUITING 13th SSU BABYLION RECRUITING</Title>
        </TitleWrapper>
        <TimerContainer>
          <TimerTitle>모집 마감까지</TimerTitle>
          <TimerSection>
            <TimeBox>
              <Name>DAYS</Name>
              03
              <Shadow />
            </TimeBox>
            :
            <TimeBox>
              <Name>HOURS</Name>
              15 <Shadow />
            </TimeBox>
            :
            <TimeBox>
              <Name>MINUTES</Name>
              20
              <Shadow />
            </TimeBox>
          </TimerSection>
          <TimerTitle>
            숭실대 멋쟁이사자처럼은 <Blue>지금 서류 모집 중</Blue>
          </TimerTitle>
          <ApplyBtn>지원 서류 작성하기</ApplyBtn>
        </TimerContainer>
        <TitleWrapper>
          <Title>BABYLION RECRUITING 13th SSU BABYLION RECRUITING 13th SSU </Title>
        </TitleWrapper>
      </BGC>
    </>
  );
};

export default Timer;

const BGC = styled.div`
  background: linear-gradient(180deg, #f3f7fb 61.94%, #d6e3ff 100%);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  background-size: 100vw auto; // 그라데이션 크기
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  margin: 3.6rem auto;
`;

const TimerTitle = styled.p`
  color: #1a1a1a;
  text-align: center;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4rem;
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
  gap: 3rem;
  color: #000;
  text-align: center;
  font-family: "SUIT Variable";
  font-size: 12rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
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
`;

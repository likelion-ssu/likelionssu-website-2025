import styled from "styled-components";

const TimerSection = () => {
  return (
    <>
      <BGC>
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
          <Title>BABYLION RECRUITING 13th SSU BABYLION RECRUITING 13th SSU </Title>
        </TitleWrapper>
      </BGC>
    </>
  );
};

export default TimerSection;

const BGC = styled.div`
  background: linear-gradient(90deg, #1a1a1a 35.78%, #000 100%);
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

const TextContainer = styled.div`
  padding: 18rem 5.6rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5rem;
`;

const TextLarge = styled.p`
  color: #fff;
  font-size: 6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4rem;
`;

const TextSmall = styled.p`
  color: #fff;
  font-feature-settings: "calt" off;

  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

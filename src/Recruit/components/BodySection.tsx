import styled from "styled-components";

import Circle from "../assets/Circle.svg?react";
import Arrow from "../../common/assets/arrow_down.svg?react";

import { skillDataWithIcons, partDataWithIcons, stepData } from "../constants";

const Body = () => {
  return (
    <BGC>
      {/* 인재상 */}
      <BoxContainer>
        <Title>숭실대 멋쟁이사자처럼은 이런 사람을 원해요</Title>
        <CardSection>
          {skillDataWithIcons.map(({ id, icon: Icon, title, text }) => (
            <SkillCard key={id}>
              {Icon ? <Icon /> : null} {/*아이콘 있을 때만 렌더링 되도록 */}
              <Text>
                <Title>{title}</Title>
                <CardText>{text}</CardText>
              </Text>
            </SkillCard>
          ))}
        </CardSection>
      </BoxContainer>

      {/* 모집 파트 */}
      <BoxContainer>
        <Title>모집 파트</Title>
        <PartSection>
          {partDataWithIcons.map(({ id, name, icon: Icon }) => (
            <PartCard key={id}>
              <Arrow />
              <PartBox>
                <PartName>{name}</PartName>
                {Icon ? <Icon /> : null}
              </PartBox>
            </PartCard>
          ))}
        </PartSection>
      </BoxContainer>

      {/* 모집 절차 */}
      <BoxContainer>
        <Title>모집 절차</Title>
        <CircleContainer>
          {stepData.map(({ id, title, date }) => (
            <CircleContent key={id}>
              <Circle />
              <CircleTextContainer>
                <CircleTitle>{title}</CircleTitle>
                <CircleDate>{date}</CircleDate>
              </CircleTextContainer>
            </CircleContent>
          ))}
        </CircleContainer>
      </BoxContainer>

      {/* 지원하기 */}
      <ApplyContainer>
        <LineBox bottomBorder />
        <ApplyBox>
          <Title>지금 바로 지원하세요</Title>
          <ApplyBtn>지원 서류 작성하기</ApplyBtn>
        </ApplyBox>
        <LineBox topBorder />
      </ApplyContainer>
    </BGC>
  );
};

export default Body;

const BGC = styled.div`
  width: 100%;
  padding: 16rem 0 34rem 0;
`;

const BoxContainer = styled.div`
  margin-bottom: 26rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

// 인재상
const CardSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 8rem;
  align-items: center;
  justify-content: center;
`;

const SkillCard = styled.div`
  width: 32rem;
  height: 40rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.08) 55.49%,
    rgba(255, 255, 255, 0.04) 100%
  );
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  text-align: left;
  gap: 1.8rem;
  margin: 0 5.5rem 2.6rem 2.6rem;
`;

const CardText = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.16px;
`;
// 파트
const PartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 8rem;
`;

const PartCard = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 30rem;
  height: 20rem;
  flex-shrink: 0;
  border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.08) 55.49%,
    rgba(255, 255, 255, 0.04) 100%
  );
`;
const PartName = styled.p`
  color: #fff;
  font-feature-settings: "calt" off;

  /* font-family: "SUIT Variable"; */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.4px;
  text-align: left;
`;

const PartBox = styled.div`
  display: flex;
  align-items: end;
  padding: 0 0.8rem;
`;
// 모집 절차
const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 8rem;
`;
const CircleContent = styled.div`
  position: relative;
`;

const CircleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.6rem;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircleTitle = styled.p`
  color: #fff;
  text-align: center;

  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4rem;
`;

const CircleDate = styled.p`
  color: #fff;
  text-align: center;
  font-feature-settings: "calt" off;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 3.2rem;
  letter-spacing: -0.18px;
`;

// 지원
const ApplyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const LineBox = styled.div<{ topBorder?: boolean; bottomBorder?: boolean }>`
  position: relative;
  flex: 1;
  height: 7.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;

  &::before {
    content: ${({ topBorder }) => (topBorder ? '""' : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.4) 100%);
  }

  &::after {
    content: ${({ bottomBorder }) => (bottomBorder ? '""' : "none")};
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, #fff 100%);
  }
`;

const ApplyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 25rem;
  margin: 0 4rem;
`;

const ApplyBtn = styled.button`
  display: flex;
  padding: 1.8rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 10px;
  background: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
`;

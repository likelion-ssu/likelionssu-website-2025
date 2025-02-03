import styled from "styled-components";

import Skill_1 from "../assets/skill_1.svg?react";
import Skill_2 from "../assets/skill_2.svg?react";
import Skill_3 from "../assets/skill_3.svg?react";

import Arrow from "../../common/assets/arrow_down.svg?react";
import Part_PM from "../assets/part_PM.svg?react";
import Part_PD from "../assets/Part_PD.svg?react";
import Part_FE from "../assets/Part_FE.svg?react";
import Part_BE from "../assets/Part_BE.svg?react";

import Circle from "../assets/Circle.svg?react";

const Body = () => {
  return (
    <>
      <BGC>
        {/* 인재상 */}
        <BoxContainer>
          <Title>숭실대 멋쟁이사자처럼은 이런 사람을 원해요</Title>
          <CardSection>
            <SkillCard>
              <Skill_1 style={{ marginTop: "5.4rem", marginBottom: "1.4rem" }} />
              <Text>
                <Title>열정</Title>
                <CardText>
                  다양한 프로젝트에 참여하고자 하는 <br />
                  열정과 탐구심을 가진 분들을 환영해요.
                </CardText>
              </Text>
            </SkillCard>
            <SkillCard>
              <Skill_2 style={{ marginTop: "5.4rem", marginBottom: "1.4rem" }} />
              <Text>
                <Title>협업</Title>
                <CardText>
                  서로의 강점을 살려 협력하며 프로젝트를 <br />
                  이끌어갈 인재를 기다리고 있어요.
                </CardText>
              </Text>
            </SkillCard>
            <SkillCard>
              <Skill_3 style={{ marginTop: "5.4rem", marginBottom: "1.4rem" }} />
              <Text>
                <Title>책임</Title>
                <CardText>
                  일정을 지키고 결과물을 책임감 있게
                  <br />
                  완성할 수 있는 사람을 원해요.
                </CardText>
              </Text>
            </SkillCard>
          </CardSection>
        </BoxContainer>

        {/* 모집 파트 */}
        <BoxContainer>
          <Title>모집 파트</Title>
          <PartSection>
            <PartCard>
              <Arrow style={{ float: "right" }} />
              <PartBox>
                <PartName>
                  PROJECT
                  <br />
                  MANAGER
                </PartName>
                <Part_PM />
              </PartBox>
            </PartCard>

            <PartCard>
              <Arrow style={{ float: "right" }} />
              <PartBox>
                <PartName>
                  PRODUCT
                  <br />
                  DESIGN
                </PartName>
                <Part_PD />
              </PartBox>
            </PartCard>

            <PartCard>
              <Arrow style={{ float: "right" }} />
              <PartBox>
                <PartName>
                  FRONTEND
                  <br />
                  DEVELOPER
                </PartName>
                <Part_FE />
              </PartBox>
            </PartCard>

            <PartCard>
              <Arrow style={{ float: "right" }} />
              <PartBox>
                <PartName>
                  BACKEND
                  <br />
                  DEVELOPER
                </PartName>
                <Part_BE />
              </PartBox>
            </PartCard>
          </PartSection>
        </BoxContainer>

        {/* 로드맵 */}
        <BoxContainer>
          <Title>13기 활동 로드맵</Title>
        </BoxContainer>

        {/* 모집 절차 */}
        <BoxContainer>
          <Title>모집 절차</Title>
          <CircleContainer>
            <CircleContent>
              <Circle />
              <CircleTextContainer>
                <CircleTitle>지원서 제출</CircleTitle>
                <CircleDate>2.24(월) - 3.5(수)</CircleDate>
              </CircleTextContainer>
            </CircleContent>

            <CircleContent>
              <Circle />
              <CircleTextContainer>
                <CircleTitle>프리코스 시청</CircleTitle>
                <CircleDate>2.24(월) - 3.10(월)</CircleDate>
              </CircleTextContainer>
            </CircleContent>

            <CircleContent>
              <Circle />
              <CircleTextContainer>
                <CircleTitle>서류 결과</CircleTitle>
                <CircleDate>3.8(토)</CircleDate>
              </CircleTextContainer>
            </CircleContent>

            <CircleContent>
              <Circle />
              <CircleTextContainer>
                <CircleTitle>면접 평가</CircleTitle>
                <CircleDate> 3.10(월) - 3.12(수)</CircleDate>
              </CircleTextContainer>
            </CircleContent>

            <CircleContent>
              <Circle />
              <CircleTextContainer>
                <CircleTitle>최종 결과 발표</CircleTitle>
                <CircleDate>3.14(금)</CircleDate>
              </CircleTextContainer>
            </CircleContent>
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
    </>
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

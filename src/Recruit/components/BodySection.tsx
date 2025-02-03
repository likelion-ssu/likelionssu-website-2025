import styled from "styled-components";
import Skill_1 from "../assets/skill_1.svg?react";
import Skill_2 from "../assets/skill_2.svg?react";
import Skill_3 from "../assets/skill_3.svg?react";

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
        </BoxContainer>

        {/* 로드맵 */}
        <BoxContainer>
          <Title>13기 활동 로드맵</Title>
        </BoxContainer>

        {/* 모집 절차 */}
        <BoxContainer>
          <Title>모집 절차</Title>
        </BoxContainer>

        {/* 지원하기 */}
        <ApplyContainer>
          <Title>지금 바로 지원하세요</Title>
          <ApplyBtn>지원 서류 작성하기</ApplyBtn>
        </ApplyContainer>
      </BGC>
    </>
  );
};

export default Body;

const BGC = styled.div`
  /* background: linear-gradient(180deg, #f3f7fb 61.94%, #d6e3ff 100%); */
  width: 100%;
  /* height: 100vh; */
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
  /* text-align: center; */
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

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
`;
// 파트

// 모집 절차

// 지원
const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
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

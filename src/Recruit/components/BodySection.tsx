import styled from "styled-components";
import Circle from "../assets/Circle.svg?react";
import Arrow from "../../common/assets/arrow_down.svg?react";
import { skillDataWithIcons, partDataWithIcons, stepData } from "../constants";
import { useCountDownStore } from "../../common/components/CountDown";
import { motion } from "framer-motion";
import media from "../../common/styles/media";

const Body = () => {
  const { isExpired } = useCountDownStore();
  console.log("isExpired:", isExpired);

  return (
    <BGC
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 인재상 */}
      <BoxContainer>
        <Title>숭실대 멋쟁이사자처럼은 이런 사람을 원해요</Title>
        <CardSection>
          {skillDataWithIcons.map(({ id, icon: Icon, title, text }) => (
            <SkillCard key={id}>
              {Icon ? <SkillIcon as={Icon} /> : null}
              {/*아이콘 있을 때만 렌더링 되도록 */}
              <Text>
                <TextBody4>{title}</TextBody4>
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
              <ArrowIC />
              <PartBox>
                <PartName>{name}</PartName>
                {Icon ? <PartIcon as={Icon} /> : null}
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
              <CircleIC />
              <CircleTextContainer>
                <CircleTitle>{title}</CircleTitle>
                <CircleDate>{date}</CircleDate>
              </CircleTextContainer>
            </CircleContent>
          ))}
        </CircleContainer>
      </BoxContainer>
      {isExpired ? (
        ""
      ) : (
        // {/* 지원하기 */}
        <ApplyContainer>
          <LineBox $bottomBorder />
          <ApplyBox>
            <ApplyTitle>지금 바로 지원하세요</ApplyTitle>
            <ApplyBtn>지원 서류 작성하기</ApplyBtn>
          </ApplyBox>
          <LineBox $topBorder />
        </ApplyContainer>
      )}
    </BGC>
  );
};

export default Body;

const BGC = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 26rem;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  width: 100%;
  padding-top: 16rem;

  ${media.small`
    gap: 4rem;
    padding-top: 7rem;
    scroll-snap-align: none;
    scroll-snap-stop: normal;
  `};
`;

const BoxContainer = styled.div`
  text-align: center;
`;

const TextBody4 = styled.p`
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
`;

const Title = styled.p`
  margin-bottom: 8rem;
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.subtitle3)}

  ${media.small`
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: -0.16px;
    margin-bottom: 2rem;
  `};
`;

// 인재상
const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${media.small`
    flex-direction: column;
    gap: 1.4rem;
  `};
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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

  ${media.small`
    width: 33rem;
    height: 12rem;
    border-radius: 5.94px;
    display: flex;
    flex-direction: row;
  `};
`;

const SkillIcon = styled.div`
  width: 20rem;
  height: 20rem;

  ${media.small`
    width: 8rem;
    height: 8rem;
  `};
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1.8rem;

  width: 25rem;
  margin: 0 5.5rem 2.6rem 2.6rem;

  ${media.small`
    width: 20rem;
    gap: 1rem;
    margin: 2.4rem 2.5rem 2.4rem 2rem;
  `};
`;

const CardText = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.16px;

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Pretendard.body7)}
  `};
`;

// 파트
const PartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${media.small`
    flex-wrap: wrap;
    gap: 1rem;
  `};
`;

const PartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  width: 30rem;
  height: 20rem;
  flex-shrink: 0;
  border-radius: 10px;
  padding: 2rem;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.08) 55.49%,
    rgba(255, 255, 255, 0.04) 100%
  );

  ${media.small`
    width: 16rem;
    height: 11rem;
  `};
`;

const PartName = styled.p`
  text-align: left;
  font-feature-settings: "calt" off;

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.body1)}
  line-height: normal;

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Suit.body5)}
  `};
`;

const PartIcon = styled.div`
  width: 14.5rem;
  height: 14.5rem;

  ${media.small`
    width: 6rem;
    height: 6rem;
  `};
`;

const ArrowIC = styled(Arrow)`
  width: 1.6rem;
  height: 0.9rem;

  ${media.small`
    width: 2rem;
    height: 2rem;
  `};
`;

const PartBox = styled.div`
  display: flex;
  align-items: end;
`;

// 모집 절차
const CircleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${media.small`
    gap: 1.4rem;
  `};
`;

const CircleContent = styled.div`
  position: relative;
`;

const CircleIC = styled(Circle)`
  width: 25rem;
  height: 25rem;

  ${media.small`
    width: 10rem;
    height: 10rem;
  `};
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

  ${media.small`
    gap: 0.4rem;
  `};
`;

const CircleTitle = styled.p`
  color: #fff;
  text-align: center;
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.subtitle2)}

  ${media.small`
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2rem;
  `};
`;

const CircleDate = styled(TextBody4)`
  ${media.small`
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
  `};
`;

// 지원
const ApplyContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 34rem;

  ${media.small`
    padding-bottom: 10rem;
  `};
`;

const LineBox = styled.div<{ $topBorder?: boolean; $bottomBorder?: boolean }>`
  position: relative;
  flex: 1;
  height: 7.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -1rem;

  &::before {
    content: ${({ $topBorder }) => ($topBorder ? '""' : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0.4) 100%);
  }

  &::after {
    content: ${({ $bottomBorder }) => ($bottomBorder ? '""' : "none")};
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
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 25rem;
  margin: 0 4rem;

  ${media.small`
    width: 18rem;
  `};
`;

const ApplyBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem 3rem;
  gap: 1rem;
  border-radius: 10px;
  background: #fff;
  font-size: 1.8rem;
  font-weight: 600;

  ${media.small`
    font-size: 1.4rem;
    padding: 1.6rem 3.4rem;
  `};
`;

const ApplyTitle = styled(Title)`
  margin-bottom: 0;
`;

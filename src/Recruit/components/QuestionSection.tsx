import { useState } from "react";
import styled from "styled-components";
import { questionData } from "../constants/questionData";
import { motion } from "framer-motion";
import Footer from "../../common/components/Footer";
import media from "../../common/styles/media";

const QuestionSection = () => {
  const [showAll, setShowAll] = useState(false); // 기본 세개

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <BG
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BGC>
          <Title>자주묻는 질문</Title>
          <QuestionWrapper>
            {(showAll ? questionData : questionData.slice(0, 3)).map(({ id, question, answer }) => (
              <QuestionContainer key={id}>
                <Q>Q.</Q>
                <QuestionBox>
                  <Question>{question}</Question>
                  <Answer>{answer}</Answer>
                </QuestionBox>
              </QuestionContainer>
            ))}
          </QuestionWrapper>

          {!showAll && <MoreBtn onClick={handleShowMore}>더보기</MoreBtn>}
        </BGC>
        <Footer />
      </BG>
    </>
  );
};

export default QuestionSection;

const BGC = styled.div`
  background: #f6f7f9;
  color: black;
  width: 100%;
  padding: 8.9rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BG = styled(motion.div)`
  scroll-snap-align: start;
  scroll-snap-stop: always;

  ${media.small`
    scroll-snap-align: none;
    scroll-snap-stop: normal;
   `};
`;
const Title = styled.div`
  color: #1a1a1a;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  width: 120rem;

  ${media.small`
    color: var(--90, #1A1A1A);
text-align: center;
font-feature-settings: 'calt' off;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 26px; /* 162.5% */
letter-spacing: -0.16px;
  `};
`;

const QuestionWrapper = styled.div`
  margin: 6.1rem 0;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.14);

  ${media.small`
    margin:2rem 0;
    `};
`;

const QuestionContainer = styled.div`
  display: flex;
  width: 120rem;
  gap: 1.6rem;
  padding: 4rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.14);

  ${media.small`
  width:35rem;
  padding: 2.4rem 0 1.6rem 0;
  `};
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  ${media.small`
    gap: 1rem;
    `};
`;

const Question = styled.div`
  color: #000;
  margin-top: 0.5rem;
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Pretendard.body6)}
  `};
`;

const Answer = styled.div`
  color: rgba(0, 0, 0, 0.6);
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Pretendard.body7)}
  `};
`;

const MoreBtn = styled.button`
  padding: 1.8rem 4rem;
  border-radius: 10px;
  font-family: Pretendard;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  ${media.small`
  padding: 1.6rem 3.4rem;
  font-size: 1.4rem;
  margin-bottom:31.6rem;
  `};
`;

const Q = styled.p`
  font-size: 3rem;
  font-weight: 600;

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Pretendard.body5)}
  `};
`;

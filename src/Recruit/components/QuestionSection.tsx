import { useState } from "react";
import styled from "styled-components";
import { questionData } from "../constants/questionData";

const QuestionSection = () => {
  const [showAll, setShowAll] = useState(false); // 기본 세개

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <BGC>
        <Title>자주묻는 질문</Title>
        <QuestionWrapper>
          {(showAll ? questionData : questionData.slice(0, 3)).map(({ id, question, answer }) => (
            <QuestionContainer key={id}>
              <p style={{ fontSize: "3rem", fontWeight: "600" }}>Q.</p>
              <QuestionBox>
                <Question>{question}</Question>
                <Answer>{answer}</Answer>
              </QuestionBox>
            </QuestionContainer>
          ))}
        </QuestionWrapper>

        {!showAll && <MoreBtn onClick={handleShowMore}>더보기</MoreBtn>}
      </BGC>
    </>
  );
};

export default QuestionSection;

const BGC = styled.div`
  background: #f6f7f9;
  color: black;
  width: 100%;
  padding: 8.9rem 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #1a1a1a;
  font-size: 4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  width: 120rem;
`;

const QuestionWrapper = styled.div`
  margin: 6.1rem 0;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.14);
`;

const QuestionContainer = styled.div`
  display: flex;
  width: 120rem;
  gap: 1.6rem;
  padding: 4rem 0;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.14);
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const Question = styled.div`
  color: #000;
  margin-top: 0.5rem;

  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Answer = styled.div`
  color: rgba(0, 0, 0, 0.6);

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.18px;
`;

const MoreBtn = styled.button`
  padding: 1.8rem 4rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

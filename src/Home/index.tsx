import styled from "styled-components";
import bgImg from "./assets/background.png";
import Arrow_IC from "./assets/ic_arrow_up_right.svg?react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/about`);
  };

  return (
    <>
      <BgImgWrapper />
      <BgWrapper />
      <MainContainer>
        <TextContainer>
          <Title>Possibility To Reality,</Title>
          <SubTitle>숭실대학교 멋쟁이사자처럼에서 실현하세요!</SubTitle>
        </TextContainer>
      </MainContainer>
      <MainBtnContainer>
        <MainBtn onClick={onClick}>
          <BtnTopContainer>
            <BtnTitle>PART</BtnTitle>
            <Arrow_IC />
          </BtnTopContainer>
          <BtnCaption>파트별 소개와 세션 개요 알아보기</BtnCaption>
        </MainBtn>
        <MainBtn>
          <BtnTopContainer>
            <BtnTitle>PART</BtnTitle>
            <Arrow_IC />
          </BtnTopContainer>
          <BtnCaption>파트별 소개와 세션 개요 알아보기</BtnCaption>
        </MainBtn>
        <MainBtn>
          <BtnTopContainer>
            <BtnTitle>PART</BtnTitle>
            <Arrow_IC />
          </BtnTopContainer>
          <BtnCaption>파트별 소개와 세션 개요 알아보기</BtnCaption>
        </MainBtn>
      </MainBtnContainer>
    </>
  );
};

export default Home;

const BgImgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;

  z-index: -1;
`;

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: -1;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  margin: 0 8.5rem;
  margin-top: 50.3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Title = styled.div`
  /* font-family: "SUIT Variable"; */
  font-size: 6rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  background: linear-gradient(90deg, #1cffff 0%, #74c8ff 48.5%, #bab0ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.div`
  /* font-family: Pretendard; */
  color: white;
  font-size: 3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const MainBtnContainer = styled.div`
  display: flex;
  gap: 4rem;

  width: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 5.1rem 8.5rem 8rem 8.5rem;
`;

const MainBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  flex-direction: column;
  justify-content: center;

  width: 45rem;
  height: 12rem;
  padding: 2rem 2.2rem;

  background: rgba(255, 255, 255, 0.1);

  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, rgba(94, 94, 94, 0.22) 34.44%, rgba(0, 52, 148, 0.7) 100%);
  }
`;

const BtnTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const BtnTitle = styled.div`
  /* font-family: "SUIT Variable"; */
  color: white;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06rem;
`;

const BtnCaption = styled.div`
  /* font-family: Pretendard; */
  color: white;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.018rem;
`;

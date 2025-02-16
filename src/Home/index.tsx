import styled from "styled-components";
import bgImg from "./assets/background.png";
import { mainBtns } from "./constants/mainBtns";
import MainBtn from "./components/MainBtn";
import ThreeScene from "./components/ThreeScene";

const Home = () => {
  return (
    <>
      <BgImgWrapper />
      <BgWrapper />
      <ThreeSceneWrapper>
        <ThreeScene />
      </ThreeSceneWrapper>
      <MainContainer>
        <TextContainer>
          <Title>Possibility To Reality,</Title>
          <SubTitle>숭실대학교 멋쟁이사자처럼에서 실현하세요!</SubTitle>
        </TextContainer>
      </MainContainer>

      <MainBtnContainer>
        {mainBtns.map((btn, index) => (
          <MainBtn key={index} title={btn.title} caption={btn.caption} to={btn.to} />
        ))}
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
  font-family: "SUIT Variable";
  font-size: 6rem;
  font-weight: 800;

  background: linear-gradient(90deg, #1cffff 0%, #74c8ff 48.5%, #bab0ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.subtitle3)}
  color: ${({ theme }) => theme.colors.White};
`;

const MainBtnContainer = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  padding: 5.1rem 8.5rem 8rem 8.5rem;
`;

const ThreeSceneWrapper = styled.div``;

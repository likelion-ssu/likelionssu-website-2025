import styled from "styled-components";
import { mainBtns } from "./constants/mainBtns";
import MainBtn from "./components/MainBtn";
import TopBar from "../common/components/TopBar";
import Footer from "../common/components/Footer";

const Home = () => {
  return (
    <>
      <TopBar type="home" />
      <Container>
        <MainContainer>
          <TextContainer>
            <TitleWrapper>
              <Title>POSSIBILITY TO REALITY</Title>
            </TitleWrapper>

            <TitleBgWrapperTop>
              <TitleBg data-content="POSSIBILITY TO REALITY">POSSIBILITY TO REALITY</TitleBg>
            </TitleBgWrapperTop>

            <TitleBgWrapperBottom>
              <TitleBg data-content="POSSIBILITY TO REALITY">POSSIBILITY TO REALITY</TitleBg>
            </TitleBgWrapperBottom>
            <SubTitle>숭실대학교 멋쟁이사자처럼에서 실현하세요!</SubTitle>
          </TextContainer>
        </MainContainer>

        <MainBtnContainer>
          {mainBtns.map((btn, index) => (
            <MainBtn key={index} title={btn.title} caption={btn.caption} to={btn.to} />
          ))}
        </MainBtnContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;

  margin: 0 8.5rem;
  margin-top: 50.3rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: relative;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.Black};
`;

const Title = styled.div`
  font-family: "SUIT Variable";
  font-size: 8rem;
  font-weight: 800;

  background: linear-gradient(90deg, #1cffff 0%, #74c8ff 48.5%, #bab0ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TitleBgWrapperTop = styled.div`
  position: absolute;
  z-index: -1;
  top: -4rem;
`;

const TitleBgWrapperBottom = styled.div`
  position: absolute;
  z-index: -1;
  top: 6rem;
`;

const TitleBg = styled.div`
  font-family: "SUIT Variable";
  font-size: 8rem;
  font-style: normal;
  font-weight: 900;
  letter-spacing: -0.08rem;
  color: transparent;
  z-index: 0;
  position: relative;
  color: ${({ theme }) => theme.colors.Black};

  &::before {
    z-index: -1;
    content: attr(data-content);
    position: absolute;
    left: 0;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(255, 255, 255, 0.3);
  }
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.White};
  text-align: center;
  font-family: Pretendard;
  font-size: 2.8rem;
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

const Container = styled.div`
  height: 100vh;
  max-width: 1440px;
  width: 100%;
`;

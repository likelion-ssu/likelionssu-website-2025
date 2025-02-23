import styled from "styled-components";
import { mainBtns } from "./constants/mainBtns";
import MainBtn from "./components/MainBtn";
import TopBar from "../common/components/TopBar";
import Footer from "../common/components/Footer";
import media from "../common/styles/media";
import type { DefaultTheme } from "styled-components";

import pcTitle from "./assets/POSSIBILITY TO REALITY.png";
import possibleImg from "./assets/possible.png";
import toImg from "./assets/to.png";
import realityImg from "./assets/reality.png";
import bgImg from "../../public/models/0101.png";

import ThreeScene from "./components/ThreeScene";

const Home = () => {
  return (
    <>
      <BackgroundOverlay>
        <TopBar type="home" />
        <BackgroundWrapper>
          <Container>
            <MainContainer>
              <TextContainer>
                <TitleWrapper>
                  <img src={pcTitle} />
                  <ThreeSceneContainer>
                    <ThreeScene />
                  </ThreeSceneContainer>
                </TitleWrapper>

                <MobileTitleWrapper>
                  <MobileTitleBg>
                    <MobileTitleItem>POSSIBILITY</MobileTitleItem>
                    <img src={possibleImg} />
                  </MobileTitleBg>

                  <MobileTitleBg>
                    <MobileTitleItem>TO</MobileTitleItem>
                    <img src={toImg} />
                  </MobileTitleBg>

                  <MobileTitleBg>
                    <MobileTitleItem>REALITY</MobileTitleItem>
                    <img src={realityImg} />
                  </MobileTitleBg>
                </MobileTitleWrapper>

                <SubTitle>숭실대학교 멋쟁이사자처럼에서 실현하세요</SubTitle>
              </TextContainer>

              <MainBtnContainer>
                {mainBtns.map((btn, index) => (
                  <MainBtn key={index} title={btn.title} caption={btn.caption} to={btn.to} />
                ))}
              </MainBtnContainer>
            </MainContainer>
          </Container>
        </BackgroundWrapper>
        <BG_IMG />
        <Footer />
      </BackgroundOverlay>
    </>
  );
};

export default Home;

const BackgroundOverlay = styled.div`
  background: rgba(0, 0, 0, 0.92);
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;

  margin: 0 8.5rem;

  ${media.small`
    margin: 0 5.5rem;
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: relative;
  margin-top: 34rem;

  ${media.medium`
    min-width: 100%;
  `};

  ${media.small`
    min-width: 100%;
    gap: 5rem;
    margin-top: 20rem;
  `};
`;

const MobileTitleWrapper = styled.div`
  display: none;

  ${media.small`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 3.443rem;
  `};
`;

const MobileTitleBg = styled.div`
  display: none;

  ${media.small`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5.6rem;
    position: relative;

    background-color: ${({ theme }: DefaultTheme) => theme.colors.Black};

  `};
`;

const MobileTitleItem = styled.div`
  display: none;

  ${media.small`
    position: absolute;
    left: 0;

    display: flex;
    background: linear-gradient(90deg, #1cffff 0%, #74c8ff 48.5%, #bab0ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-family: "SUIT Variable";
    font-size: 4.4506rem;
    font-weight: 900;
`};
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  position: relative;

  ${media.small`
    display: none;
  `};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.White};
  text-align: center;
  font-family: Pretendard;
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${media.small`
    color: #C6C6C6;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
    width: 28rem;
  `}
`;

const MainBtnContainer = styled.div`
  display: flex;
  gap: 4rem;
  width: 100%;
  justify-content: center;
  margin-top: 13.3rem;
  margin-bottom: 8rem;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);

  ${media.small`
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 1.2rem;
    width: 100%;
    justify-content: center;
    align-items: center;
  `}
`;

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const ThreeSceneContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: -999;
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  z-index: 1;
`;

const BG_IMG = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${bgImg});
  background-size: cover;

  z-index: -1000;
`;

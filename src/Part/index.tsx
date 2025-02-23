import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import RoleContent from "./components/RoleContent";
import RoleSelector from "./components/RoleSelector";
import Section from "./components/Session";
import Comment from "./components/Comment";
import TopBar from "../common/components/TopBar";
import Footer from "../common/components/Footer";
import backgroundImg from "./assets/bg_effect.png";
import media from "../common/styles/media";

const Part = () => {
  const ref = useRef(null);

  return (
    <MainContainer ref={ref}>
      <TopBar type="part" />
      <Wrapper>
        <SnapSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BGWrapper>
            <BG src={backgroundImg} />
            <Logo>LIKELION PART</Logo>
            <RoleSelector />
            <RoleContent />
          </BGWrapper>
        </SnapSection>

        <SnapSection>
          <Section />
          <CarouselWrapper>
            <Comment />
          </CarouselWrapper>
          <Footer />
        </SnapSection>
      </Wrapper>
    </MainContainer>
  );
};

export default Part;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  /* max-width: 1440px; */
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  ${media.small`
    scroll-snap-type: none;
  `};
`;

const SnapSection = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;

  ${media.small`
    overflow: hidden;
    scroll-snap-align: none;
    scroll-snap-stop: normal;
  `};
`;

const BGWrapper = styled.div`
  position: relative;
  ${SnapSection}:nth-of-type(2) & {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BG = styled.img`
  object-fit: contain;
  position: absolute;
  top: 40%;
  left: 10%;
  width: 70%;
  height: 70%;
  z-index: -999;

  ${media.medium`
    top: -42%;
    left: -110%;
    width: 200%;
    height: 200%;
  `};

  ${media.small`
    top: -42%;
    left: -110%;
    width: 200%;
    height: 200%;
  `};
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  overflow-x: hidden;
`;

const Logo = styled.div`
  margin-top: 7rem;
  background: linear-gradient(90deg, #1d1d1d 32.78%, #10103e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "SUIT Variable";
  font-size: 8rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;

  ${media.small`
    font-size: 3.6rem;
    margin-top: 5.4rem;
  `};
`;

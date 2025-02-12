import styled from "styled-components";
import RoleContent from "./components/RoleContent";
import RoleSelector from "./components/RoleSelector";
import Section from "./components/Session";
import Comment from "./components/Comment";
import backgroundImg from "./assets/bg_effect.png";

const Part = () => {
  return (
    <MainContainer>
      <Logo>LIKELION PART</Logo>
      <RoleSelector />
      <RoleContent />
      <Section />
      <Comment />
      <BG src={backgroundImg} />
    </MainContainer>
  );
};

export default Part;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  position: relative;
`;

const Logo = styled.div`
  margin-top: 16rem;

  background: linear-gradient(90deg, #1d1d1d 32.78%, #10103e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: "SUIT Variable";
  font-size: 8rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const BG = styled.img`
  bottom: 100rem;
  top: 30rem;
  position: absolute;

  z-index: -999;
`;

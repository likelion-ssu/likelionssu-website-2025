import styled from "styled-components";
import AboutUsSection from "./components/AboutUsSection";
import ActivitySection from "./components/ActivitySection";
import TeamSection from "./components/TeamSection";
import TopBar from "../common/components/TopBar";
import media from "../common/styles/media";

const About = () => {
  return (
    <>
      <SnapContainer>
        <TopBar />
        <AboutUsSection />
        <ActivitySection />
        <TeamSection />
      </SnapContainer>
    </>
  );
};

export default About;

const SnapContainer = styled.div.attrs({ id: "snap-container" })`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

import styled from "styled-components";
import AboutUsSection from "./components/AboutUsSection";
import ActivitySection from "./components/ActivitySection";
import TeamSection from "./components/TeamSection";

const About = () => {
  return (
    <SnapContainer>
      <AboutUsSection />
      <ActivitySection />
      <TeamSection />
    </SnapContainer>
  );
};

export default About;

const SnapContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

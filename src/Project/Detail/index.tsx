import styled from "styled-components";
import TopBar from "../../common/components/TopBar";
import ProjectDetailComponent from "./components/ProjectDetailComponent";
const ProjectDetail = () => {
  return (
    <Container>
      <TopBar type="project" />
      <ProjectDetailComponent />
    </Container>
  );
};

export default ProjectDetail;

const Container = styled.div`
  position: relative;
`;

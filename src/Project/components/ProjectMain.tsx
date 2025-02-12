import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../../common/components/Footer";
import BgImg from "../assets/BgImg.jpg";
import TopBar from "../../common/components/TopBar";
import ProjectCard from "./ProjectCard";
import { projectData } from "../Detail/constants/projectData";

const ProjectMain = () => {
  return (
    <>
      <TopBar />
      <BG>
        <TitleContainer>
          OUR PROJECTS
          <KorTitle>최근 진행된 프로젝트 몰아보기</KorTitle>
        </TitleContainer>
        <CardContainer>
          {projectData.map(project => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </CardContainer>
      </BG>
      <Footer />
    </>
  );
};

export default ProjectMain;

const BG = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 390rem;
  margin: 12rem 0;
  padding: 3rem 0;

  background: url(${BgImg});
  background-size: cover;
  background-size: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body3)}
`;

const KorTitle = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.subtitle2)}
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  margin: 6rem 8rem;
`;

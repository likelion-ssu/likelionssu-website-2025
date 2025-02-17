import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../common/components/Footer";
import BgImg from "../assets/BgImg.jpg";
import TopBar from "../../common/components/TopBar";
import ProjectCard from "./ProjectCard";
import { projectData } from "../Detail/constants/projectData";
import media from "../../common/styles/media";

const ProjectMain = () => {
  const navigate = useNavigate();

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
            <StyledLink key={project.id} to={`/project/${project.id}`}>
              <ProjectCard key={project.id} project={project} />
            </StyledLink>
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
  margin: 12rem 0;
  padding: 3rem 0;

  // 너무 느려져서 일단 주석처리
  background: url(${BgImg});
  background-size: contain;
  background-size: center;
  background-repeat: no-repeat;
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
  display: grid;
  margin: 6rem auto;
  place-items: center;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  row-gap: 4.8rem;
  column-gap: 3rem;

  /* 예외적으로, 이미지 잘리지 않도록 */
  @media screen and (min-width: 51rem) and (max-width: 73rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 0;
  margin: 0;
  width: auto;
  height: auto;

  max-width: 37rem;
`;

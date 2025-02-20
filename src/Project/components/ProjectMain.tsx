import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "../../common/components/Footer";
import BgImg from "../assets/BgImg.jpg";
import TopBar from "../../common/components/TopBar";
import ProjectCard from "./ProjectCard";
import { projectData } from "../Detail/constants/projectData";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 6;

const useIsMobile = () => {
  const [isMobile, setisMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const update = () => {
      setisMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return isMobile;
};

const ProjectMain = () => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projectData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const paginatedProjects = projectData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <TopBar />
      <BG>
        <TitleContainer>
          OUR PROJECTS
          <KorTitle>최근 진행된 프로젝트 몰아보기</KorTitle>
        </TitleContainer>
        {isMobile ? (
          <CardContainer>
            {paginatedProjects.map(project => (
              <StyledLink key={project.id} to={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </StyledLink>
            ))}
          </CardContainer>
        ) : (
          <CardContainer>
            {projectData.map(project => (
              <StyledLink key={project.id} to={`/project/${project.id}`}>
                <ProjectCard key={project.id} project={project} />
              </StyledLink>
            ))}
          </CardContainer>
        )}

        {isMobile && (
          <PaginationContainer>
            {Array.from({ length: totalPages }, (_, i) => (
              <PageButton
                key={i}
                $isActive={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </PageButton>
            ))}
          </PaginationContainer>
        )}
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.8rem;
`;

// 📌 숫자 버튼 스타일
const PageButton = styled.button<{ $isActive: boolean | undefined }>`
  width: 4.4rem;
  height: 4.4rem;
  border: none;
  transition: background-color 0.3s ease-in-out;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors[90] : theme.colors.Black)};

  align-self: stretch;
  color: ${({ theme }) => theme.colors.White};

  &:hover {
    background-color: ${({ theme }) => theme.colors[60]};
  }
`;

import styled from "styled-components";
import { Project } from "../Detail/constants/projectData";

interface ProjectCardProps {
  project: Pick<Project, "id" | "generation" | "name" | "title" | "subtitle">;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <CardContainer>
      <CoverImg src={`/images/projectCover/${project.name}-1.png`} alt="Project Cover" />
      <TextContainer>
        <TextBody7>{project.generation}기</TextBody7>
        <TextBody2>{project.title}</TextBody2>
        <TextBody6>{project.subtitle}</TextBody6>
      </TextContainer>
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  max-width: 46rem;
  height: 33rem;
  flex-shrink: 0;
  padding: 1.6rem;
  gap: 1.6rem;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(17.5px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    padding: 1.5px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);

    &::before {
      opacity: 1;
    }
  }
`;

const CoverImg = styled.img`
  max-width: 35rem;
  max-height: 24rem;
  border-radius: 1rem;

  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  width: 100%;
`;

const TextBody7 = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
`;

const TextBody6 = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body6)}
`;

const TextBody2 = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}
`;

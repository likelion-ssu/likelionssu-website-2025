import { useParams } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../common/assets/arrow_down.svg?react";
import TopBar from "../../../common/components/TopBar";
import Footer from "../../../common/components/Footer";
import { projectData } from "../constants/projectData";

const ProjectDetailComponent = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find(p => p.id === Number(id));

  if (!project) {
    return <p>해당 프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <TopBar />
      <BG>
        <ProjectContainer>
          <ImgContainer>
            <Img src={`/images/projectCover/${project.name}-1.png`} alt="Project Cover" />
            <BtnContainer>
              <ArrowLeft />
              <PageText>1/22</PageText>
              <ArrowRight />
            </BtnContainer>
          </ImgContainer>

          <ContentsContainer>
            <div>
              <TextBody4>{project.generation}기</TextBody4>
              <TextSub2>{project.title}</TextSub2>
              <TagContainer>
                {project.tech.map(tech => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </TagContainer>
              <NameContainer>
                {project.members.map(member => (
                  <Name key={member}>{member}</Name>
                ))}
              </NameContainer>
            </div>
            <Comment>{project.description}</Comment>
          </ContentsContainer>
        </ProjectContainer>
      </BG>
      <Footer />
    </>
  );
};

export default ProjectDetailComponent;

const BG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;
  padding-bottom: 8rem;
`;

const ProjectContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  max-width: 160rem;
  padding: 6rem;
  margin: 0 20rem;
  border-radius: 10px;
  border: 1.5px;

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
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 80%;
  height: auto;
  border-radius: 1rem;

  object-fit: cover;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  margin: 2rem auto;
`;

const ArrowRight = styled(Arrow)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  padding: 0.8rem;
  border-radius: 48.387px;
  border: 0.484px solid var(--Basic-White, #fff);

  background: var(--30, #9a9a9a);

  path {
    stroke: black;
  }
`;

const ArrowLeft = styled(ArrowRight)`
  transform: rotate(180deg);
`;

const TextBody5 = styled.p`
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}
`;

const PageText = styled(TextBody5)`
  color: ${({ theme }) => theme.colors[30]};
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;

  width: 100%;
`;

const TextBody4 = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
`;

const TextSub2 = styled.p`
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.subtitle2)}
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.6rem;

  margin: 1.2rem 0;
`;

const Tag = styled(TextBody5)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0.2rem 1rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  background: ${({ theme }) => theme.colors[90]};
  color: ${({ theme }) => theme.colors[60]};
`;

const NameContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const Name = styled(TextBody5)`
  color: ${({ theme }) => theme.colors[60]};
`;

const Comment = styled(TextBody4)`
  line-height: 1.8;

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}
`;

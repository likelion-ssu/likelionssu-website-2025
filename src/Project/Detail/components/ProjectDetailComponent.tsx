import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../common/assets/arrow_down.svg?react";
import Footer from "../../../common/components/Footer";
import { projectData } from "../constants/projectData";
import media from "../../../common/styles/media";
import BackArrow from "../../assets/ic_arrow_back.svg?react";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ProjectDetailComponent = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find(p => p.id === Number(id));
  if (!project) {
    return <p>해당 프로젝트를 찾을 수 없습니다.</p>;
  }
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 이미지 로드 관련
  const imageFiles: { [key: string]: string } = import.meta.glob(
    "/src/Project/assets/projectImgs/*.{png,PNG}",
    {
      eager: true,
      as: "url"
    }
  );

  // 필터링하여 필요한 이미지들만 가져오기
  const filteredImages = Object.entries(imageFiles)
    .filter(([path]) => path.includes(project.name))
    .map(([_, url]) => url)
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
      return numA - numB; // 숫자 기준으로 오름차순 정렬
    });

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_oldIndex: number, newIndex: number) => setCurrentSlide(newIndex) // 인덱스 추적
  };

  return (
    <>
      <BG>
        <BackBtnWrapper onClick={() => navigate(-1)}>
          <BackBtnSvgWrapper>
            <BackArrow />
          </BackBtnSvgWrapper>
        </BackBtnWrapper>

        <ProjectContainer>
          <ImgContainer>
            <StyledSlider {...settings} ref={sliderRef}>
              {filteredImages.map((src, index) => (
                <Img loading="lazy" key={index} src={src} alt={`guide-${index}`} />
              ))}
            </StyledSlider>
            <BtnContainer>
              {/* 왼쪽 화살표 */}
              <ArrowLeft onClick={() => sliderRef.current?.slickPrev()} />
              <PageText>
                {currentSlide + 1}/{filteredImages.length}
              </PageText>
              <ArrowRight onClick={() => sliderRef.current?.slickNext()} />
            </BtnContainer>
          </ImgContainer>

          <ContentsContainer>
            <div>
              {isMobile ? (
                <TextBody7>{project.generation}기</TextBody7>
              ) : (
                <TextBody4>{project.generation}기</TextBody4>
              )}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 8rem;
`;

const BackBtnWrapper = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  padding-top: 1rem;

  ${media.small`
    padding-top: 3rem;
  `}

  display: flex;
  justify-content: left;
`;

const BackBtnSvgWrapper = styled.div`
  cursor: pointer;

  padding: 2rem;
`;

const ProjectContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 6rem;
  margin: 0 15rem;

  ${media.small`
    padding: 1.5rem !important;
    margin: 1.5rem 3rem !important; 
  `}

  ${media.medium`
    padding: 3rem 6rem;
    margin: 0 auto;
  `}

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
    ${media.small`
    background: transparent;
    `}

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

const StyledSlider = styled(Slider as any)`
  width: 100%;
  overflow: hidden;

  .slick-list {
    overflow: visible;

    ${media.large`
      width: 80rem;
    `}

    ${media.medium`
      width: 60rem;
    `}

    ${media.small`
      width: 30rem;
    `}
  }

  .slick-track {
    display: flex !important;
    margin-left: 0;

    ${media.large`
      max-height: 45rem;
    `};

    ${media.medium`
      max-height: 35rem;
    `}

    ${media.small`
      max-height: 20rem;
    `}
  }

  .slick-slide {
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

  z-index: 10; // 클릭 불가를 방지
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

const TextBody7 = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
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

  ${media.small`
    font-size: 1.6rem;
    margin-top: 0rem;
  `}
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;

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

  word-break: keep-all;

  ${media.small`
  font-size: 1rem;
  padding: 0.2rem 0.8rem;
  gap: 0.5rem;
 `}
`;

const NameContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  word-break: keep-all;
`;

const Name = styled(TextBody5)`
  color: ${({ theme }) => theme.colors[60]};

  ${media.small`
  font-size: 1rem;
 `}
`;

const Comment = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.White};
  word-break: keep-all;

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}
  line-height: 4rem;

  ${({ theme }) => media.small`
  line-height: 2rem !important;
  ${theme.mixins.font(theme.fonts.Pretendard.body7)}`}
`;

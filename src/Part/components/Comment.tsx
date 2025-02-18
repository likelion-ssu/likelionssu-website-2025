import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import lion_img from "../assets/lion_emoji.png";
import useRoleStore from "../store/useRoleStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { commentsData } from "../constants/Comment";

import Arrow from "../../common/assets/arrow_down.svg?react";
import media from "../../common/styles/media";

export default function Comment() {
  const { selectedRole } = useRoleStore();
  const comments = commentsData[selectedRole] ?? [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  const visibleSlides = 3;
  const slideToMove = 1;
  const totalSlides = comments.length;
  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: visibleSlides,
    slidesToScroll: slideToMove,
    arrows: false,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false
        }
      }
    ]
  };

  useEffect(() => {
    if (isDisabled) {
      const timeout = setTimeout(() => {
        setIsDisabled(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isDisabled]);

  const handlePrev = () => {
    if (isDisabled || !sliderRef.current || currentSlide === 0) return;
    setIsDisabled(true);

    const newIndex = Math.max(currentSlide - slideToMove, 0);
    sliderRef.current.slickGoTo(newIndex);
    setCurrentSlide(newIndex);
  };

  const handleNext = () => {
    if (isDisabled || !sliderRef.current) return;
    setIsDisabled(true);

    const maxIndex = Math.max(0, totalSlides - visibleSlides);
    const newIndex = Math.min(currentSlide + slideToMove, maxIndex);
    sliderRef.current.slickGoTo(newIndex);
    setCurrentSlide(newIndex);
  };

  const toggleExpand = (index: number) => {
    if (expandedComments.includes(index)) {
      setExpandedComments(expandedComments.filter(i => i !== index));
    } else {
      setExpandedComments([...expandedComments, index]);
    }
  };

  // 텍스트 줄임 함수
  const truncateText = (text: string, lines: number = 4) => {
    const averageCharsPerLine = 36;
    const limit = averageCharsPerLine * lines;

    if (text.length <= limit) return text;
    return text.substring(0, limit) + "...";
  };

  // 다음 버튼 숨김 조건 수정
  const isNextButtonHidden = currentSlide >= totalSlides - visibleSlides;

  const TitleContent = (
    <LeftContainer>
      <RoleText>
        <div>{selectedRole.toUpperCase()}</div>
        <div>COMMENT</div>
      </RoleText>
      <CommentSubTitle>멋사 대학을 졸업한 선배 사자들의 후기를 들어보세요.</CommentSubTitle>
    </LeftContainer>
  );

  return (
    <Container>
      <MobileTitle>{TitleContent}</MobileTitle>

      <CarouselWrapper>
        {currentSlide === 0 && <PCTitle>{TitleContent}</PCTitle>}

        <CustomPrevArrow
          $hidden={currentSlide === 0}
          disabled={isDisabled}
          onClick={handlePrev}
          type="button"
        >
          <Arrow />
        </CustomPrevArrow>

        <SliderContainer>
          <StyledSlider ref={sliderRef} {...settings}>
            {comments.map((comment, index) => {
              const isExpanded = expandedComments.includes(index);
              return (
                <Card key={index} $expanded={isExpanded}>
                  <ImgWrapper>
                    <img src={lion_img} alt="Lion Emoji" />
                  </ImgWrapper>
                  <Tag>
                    <Name>{comment.name}</Name>
                    <CardinalNumber>{comment.batch}</CardinalNumber>
                  </Tag>
                  <CommentCaption>
                    {isExpanded ? comment.text : truncateText(comment.text)}
                  </CommentCaption>
                  {comment.text.length > 4 * 36 && (
                    <ExpandButton onClick={() => toggleExpand(index)}>
                      <ArrowWrapper $expanded={isExpanded}>
                        <Arrow />
                      </ArrowWrapper>
                    </ExpandButton>
                  )}
                </Card>
              );
            })}
          </StyledSlider>
        </SliderContainer>

        <CustomNextArrow
          $hidden={isNextButtonHidden}
          disabled={isDisabled}
          onClick={handleNext}
          type="button"
        >
          <Arrow />
        </CustomNextArrow>
      </CarouselWrapper>
    </Container>
  );
}

const CustomPrevArrow = styled.button<{ $hidden: boolean; disabled: boolean }>`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: 0.903px solid #fff;
  border-radius: 90.323px;
  width: 5.6rem;
  height: 5.6rem;
  padding: 1.8968rem 2.3484rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  z-index: 999;

  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  svg {
    transform: rotate(180deg);
  }

  ${media.medium`
    display: none;
  `};

  ${media.small`
    display: none;
  `};
`;

const CustomNextArrow = styled.button<{ $hidden: boolean; disabled: boolean }>`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.6);
  border: 0.903px solid #fff;
  border-radius: 90.323px;
  width: 5.6rem;
  height: 5.6rem;
  padding: 1.8968rem 2.3484rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
  z-index: 999;

  display: ${({ $hidden }) => ($hidden ? "none" : "flex")};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  ${media.medium`
    display: none;
  `};

  ${media.small`
    display: none;
  `};
`;

const ArrowWrapper = styled.span<{ $expanded: boolean }>`
  display: inline-flex;
  transition: transform 0.3s ease;
  transform: ${({ $expanded }) => ($expanded ? "rotate(270deg)" : "rotate(90deg)")};
`;

const ExpandButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 2.5rem;

  ${media.medium`
    margin-top: 1.2rem;
    svg {
      width: 90%;
      height: 90%;
    }
  `};

  ${media.small`
    margin-top: 1rem;
    svg {
      width: 80%;
      height: 80%;
    }
  `};
`;

const SliderContainer = styled.div`
  width: 150rem;
  padding-right: 4rem;

  ${media.medium`
    width: 100%;
    padding: 0;
    overflow: hidden;
    margin: 0; 
  `};

  ${media.small`
    width: 100vw;
    padding: 0;
    overflow: hidden;
  `};
`;

const StyledSlider = styled(Slider as any)`
  width: 100%;
  min-height: 35.8rem;
  display: flex;
  align-items: flex-start;

  ${media.medium`
    width: 100%;
    min-height: 24.2rem;
  `};

  ${media.small`
    width: 100%;
    min-height: 24.2rem;
  `};

  .slick-list {
    overflow: visible;

    ${media.medium`
    overflow: hidden;
    margin: 0;
    padding: 0;  
    width: 100%;  
  `};

    ${media.small`
      overflow: hidden;
      margin: 0;
    `};
  }

  .slick-track {
    display: flex !important;
    gap: 3rem;
    margin-left: 0;
    padding-right: 0;

    ${media.medium`
      gap: 4rem;
      margin: 0;
      padding: 0;  
      width: 100%;  
    `};

    ${media.small`
      gap: 1.2rem;
      margin: 0;
    `};
  }

  .slick-slide {
    > div {
      display: flex;
      justify-content: center;

      ${media.medium`
        margin: 0;
        padding: 0;
      `};

      ${media.small`
        margin: 0;
        padding: 0;
      `};
    }
  }
`;
const Container = styled.div`
  width: 143.6rem;
  display: flex;
  justify-content: center;
  padding-bottom: 7rem;
  overflow: visible;
  position: relative;

  ${media.medium`
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    margin: 0;
  `};

  ${media.small`
    width: 100%;
    flex-direction: column;
    overflow: hidden;
  `};
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8.6rem;
  height: 35.8rem;

  ${media.medium`
    padding-left: 5rem;
    height: auto;
    margin-bottom: 2rem;
  `};

  ${media.small`
    padding-left: 2rem;
    height: auto;
    margin-bottom: 2rem;
  `};
`;

const Card = styled.div<{ $expanded: boolean }>`
  width: 45rem;
  height: ${({ $expanded }) => ($expanded ? "auto" : "35.8rem")};
  max-width: 45rem;
  min-width: 45rem;
  border-radius: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  overflow-y: hidden;
  transition: height 0.3s ease;

  ${media.medium`
    width: 36rem;
    height: ${({ $expanded }) => ($expanded ? "auto" : "40rem")};
    min-width: 36rem;
    max-width: 36rem;
    padding: 2rem;
    margin: 0;
  `};

  ${media.small`
    width: 24.9rem;
    height: ${({ $expanded }) => ($expanded ? "auto" : "24.2rem")};
    min-width: 24.9rem;
    max-width: 24.9rem;
    padding: 1.5rem;
    margin: 0;
  `};
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 145rem;

  ${media.medium`
    width: 100%;
    margin: 0;  
    position: relative;  
    padding: 0;
    overflow: hidden;
  `};

  ${media.small`
    width: 100%;
    padding: 0;
    overflow: hidden;
  `};
`;

export const RoleText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.White};
  font-family: "SUIT Variable";
  font-size: 6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.12rem;

  ${media.small` 
    font-size: 1.6rem;
  `};
`;

export const CommentSubTitle = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body3)}
  width: 41.6rem;

  ${media.small` 
    width: 100%;
    font-size: 1.2rem;
    line-height: 32px;
    margin-top: 0;
  `};
`;

export const Tag = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1.4rem;
  margin-bottom: 2rem;

  ${media.small` 
    margin-top: 0.727rem;
    margin-bottom: 1.039rem;
  `};
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}

  ${media.small` 
    font-size: 1.4rem;
  `};
`;

export const CardinalNumber = styled.div`
  color: ${({ theme }) => theme.colors["30"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}

  ${media.small` 
    font-size: 1rem;
  `};
`;

export const CommentCaption = styled.div`
  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
  line-height: 190%;
  overflow-y: auto;

  ${media.small` 
    font-size: 1.2rem;
  `};
`;

const ImgWrapper = styled.div`
  > img {
    ${media.small`
    width: 1.66rem;
    height: 1.66rem;
  `};
  }
`;

const MobileTitle = styled.div`
  display: none;

  ${media.medium`
    display: block;
  `};

  ${media.small`
    display: block;
  `};
`;

const PCTitle = styled.div`
  display: block;

  ${media.medium`
    display: none;
  `};

  ${media.small`
    display: none;
  `};
`;

import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import lion_img from "../assets/lion_emoji.png";
import useRoleStore from "../store/useRoleStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { commentsData } from "../constants/Comment";

import Arrow from "../../common/assets/arrow_down.svg?react";

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
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex)
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

  return (
    <Container>
      {currentSlide === 0 && (
        <LeftContainer>
          <RoleText>
            <div>{selectedRole.toUpperCase()}</div>
            <div>COMMENT</div>
          </RoleText>
          <CommentSubTitle>멋사 대학을 졸업한 선배 사자들의 후기를 들어보세요.</CommentSubTitle>
        </LeftContainer>
      )}

      <CarouselWrapper>
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
                  <img src={lion_img} alt="Lion Emoji" />
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
`;

const StyledSlider = styled(Slider as any)`
  width: 100%;

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex !important;
    gap: 3rem;
    margin-left: 0;
    padding-right: 0;
  }

  .slick-slide {
    > div {
      display: flex;
      justify-content: center;
    }
  }
`;

const SliderContainer = styled.div`
  width: 150rem;
  padding-right: 4rem;
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
  overflow-y: auto;
  transition: height 0.3s ease;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 145rem;
`;

const Container = styled.div`
  width: 143.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  padding-bottom: 7rem;
  overflow: visible;
  position: relative;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 60rem;
`;

export const RoleText = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.White};
  font-family: "SUIT Variable";
  font-size: 5.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.12rem;
`;

export const CommentSubTitle = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
  width: 40rem;
`;

export const Tag = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1.4rem;
  margin-bottom: 2rem;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}
`;

export const CardinalNumber = styled.div`
  color: ${({ theme }) => theme.colors["30"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
`;

export const CommentCaption = styled.div`
  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
  line-height: 190%;
  overflow-y: auto;
`;

import styled from "styled-components";
import { imgPaths, imgToIndexMap } from "../constants/activityArrays";
import { ActivityType } from "../type/activity";
import { getImagesByActivityType } from "../utils/activityImageUtil";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import media from "../../common/styles/media";
import { useEffect, useState } from "react";

interface activityProps {
  index: ActivityType;
  title: string;
  description: string;
}

const ActivityItem = ({ index, title, description }: activityProps) => {
  const images = getImagesByActivityType(index) ?? [];

  const [centerIndex, setCenterIndex] = useState<number>(0);
  const [center, setCenter] = useState<string>(images[0] ?? "");

  const settings = {
    dots: false,
    infinite: false,
    slideToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    centerMode: true,
    beforeChange: () => {
      setCenterIndex(prev => prev + 1);
      setCenter(images[centerIndex] ?? "");
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ImageContainer>
        <StyledSlider {...settings}>
          {images.map((src, index) => (
            <CenterImage key={index} src={src} alt={`activity-${index}`} />
          ))}
        </StyledSlider>
      </ImageContainer>
    </Container>
  );
};

export default ActivityItem;

const Container = styled.div`
  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 1.2rem;
`;

const Title = styled.div`
  width: 100%;

  color: #fff;

  font-family: Pretendard;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.03rem;
  text-align: left;

  ${media.medium`
    font-size: 6rem;
    `}

  ${media.small`
    font-size: 3rem;
    `}
`;

const Description = styled.div`
  padding-right: 5rem;

  color: #d9d9d9;

  text-align: left;

  -webkit-font-smoothing: antialiased;
  white-space: pre-wrap;
  word-break: keep-all;

  ${media.medium`
    ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}
    `}

  ${media.small`
      ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
    `}
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const CenterImage = styled.img`
  object-fit: cover;

  border-radius: 1rem;
`;

const StyledSlider = styled(Slider as any)`
  width: 100%;

  .slick-list {
    overflow: visible;

    ${media.medium`
      width: 65rem;
    `}

    ${media.small`
      width: 40rem;
    `}
  }

  .slick-track {
    display: flex !important;
    gap: 3rem;
    margin-left: 0;
  }

  .slick-slide {
    opacity: 0.3; /* 기본 opacity */
    transition: opacity 0.3s ease-in-out;
  }

  .slick-slide.slick-center {
    opacity: 1; /* 중앙 슬라이드는 opacity 1 */
  }
`;

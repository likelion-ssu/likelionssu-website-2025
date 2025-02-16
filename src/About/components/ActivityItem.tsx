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
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 0.7,
    arrows: false,
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
          {images.map((src, index) =>
            src === center ? (
              <CenterImage key={index} src={src} alt={`activity-${index}`} />
            ) : (
              <DisabledImage key={index} src={src} alt={`activity-${index}`} />
            )
          )}
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
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.03rem;
  text-align: left;
`;

const Description = styled.div`
  padding-right: 5rem;

  color: #d9d9d9;

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
  text-align: left;

  -webkit-font-smoothing: antialiased;
  white-space: pre-wrap;
  word-break: keep-all;
`;

const ImageContainer = styled.div`
  overflow-x: scroll;

  height: 20rem;
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

    ${media.medium`
        padding-right: 200rem;
    `}

    ${media.small`
        padding-right: 100rem;
    `}
  }

  .slick-slide {
    > div {
      display: flex;
      justify-content: center;

      width: 30rem;
      height: 20rem;
    }
  }
`;

const CenterImage = styled.img`
  width: 30rem;
  height: 20rem;
  object-fit: cover;

  border-radius: 1rem;
`;

const DisabledImage = styled(CenterImage)`
  opacity: 0.3;
`;

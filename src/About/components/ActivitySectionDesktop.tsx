import { useRef, useState, RefObject } from "react";
import styled from "styled-components";
import Activity_TextAnimation from "./Activity_TextAnimation";
import Activity_ImgAnimation from "./Activity_ImgAnimation";
import { imgPaths } from "../constants/activityArrays";
import { ActivityType } from "../type/activity";
import { findActivityType } from "../utils/activityImageUtil";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import media from "../../common/styles/media";
import SideSvg from "../assets/sideSVG.png";

interface RefProp {
  parentRef: RefObject<HTMLDivElement>;
}

const ActivitySectionDesktop = ({ parentRef }: RefProp) => {
  // PC & 태블릿 뷰를 위한 자동 스크롤 기능
  const [activeActivityType, setActiveActivityType] = useState<ActivityType>(
    ActivityType.EDUCATION
  );
  const [activeImgIndex, setActiveImgIndex] = useState(0); // 활성화된 이미지 인덱스

  const targetRef = useRef<HTMLDivElement>(null); // 스크롤 측정할 타겟 요소

  const { scrollYProgress } = useScroll({
    container: parentRef,
    target: targetRef,
    offset: ["start start", "end end"],
    layoutEffect: false //렌더링 이후 실행하도록
  }); // 현재 스크롤의 위치를 추적합니다.

  const imgIndex = useTransform(
    scrollYProgress,
    [0, 0.07, 0.12, 0.18, 0.22, 0.275, 0.33, 0.37, 0.41, 0.46, 0.515, 0.56, 0.615, 0.67, 0.725, 0.78, 0.835, 0.89, 0.945, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  );

  useMotionValueEvent(imgIndex, "change", latest => {
    // 이미지 인덱스 결정
    const newImgIndex = Math.round(latest);
    setActiveImgIndex(newImgIndex);

    // imgIdx를 기반으로 ActivityType 설정
    const newActivityType = findActivityType(newImgIndex);
    setActiveActivityType(newActivityType);
  });

  return (
    <SectionContainer ref={targetRef}>
      <Side src={SideSvg} />
      <TextSection>
        <Activity_TextAnimation activeActivityType={activeActivityType} />
      </TextSection>
      <ImgSection>
        {imgPaths.map((img, index) => (
          <Activity_ImgAnimation key={index} src={img} isActive={activeImgIndex === index} />
        ))}
      </ImgSection>
    </SectionContainer>
  );
};

export default ActivitySectionDesktop;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
`;

const Side = styled.img`
  object-fit: cover;
  height: 70rem;

  position: sticky;
  top: 0rem;
`;

const TextSection = styled.div`
  width: 40%;
  position: sticky;
  top: 30rem;
  left: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  ${media.medium`
  top: 15rem;
  left: 5rem;
  `}
`;

const ImgSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 3rem;

  margin: 20rem 5rem 20rem 0;

  ${media.medium`
    width: 45%;
  `}
`;

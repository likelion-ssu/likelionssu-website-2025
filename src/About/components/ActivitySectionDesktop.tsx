import { useRef, useState, RefObject } from "react";
import styled from "styled-components";
import Activity_TextAnimation from "./Activity_TextAnimation";
import Activity_ImgAnimation from "./Activity_ImgAnimation";
import { imgPaths } from "../constants/activityArrays";
import { ActivityType } from "../type/activity";
import { findActivityType } from "../utils/activityImageUtil";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";

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
    offset: ["start start", "end end"]
  }); // 현재 스크롤의 위치를 추적합니다.

  const imgIndex = useTransform(
    scrollYProgress,
    [0, 0.08, 0.14, 0.21, 0.26, 0.32, 0.38, 0.43, 0.48, 0.56, 0.6, 0.68, 0.75, 0.83, 0.88, 0.94, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
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
      {/* 좌측의 텍스트 영역 */}
      <TextSection>
        <Activity_TextAnimation activeActivityType={activeActivityType} />
      </TextSection>
      {/* 우측의 이미지 영역 */}
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

const TextSection = styled.div`
  width: 40%;
  position: sticky;
  top: 30rem;
  left: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const ImgSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 3rem;

  margin: 20rem 0;
`;

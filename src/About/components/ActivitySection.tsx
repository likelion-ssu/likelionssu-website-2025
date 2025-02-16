import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import Activity_ImgAnimation from "./Activity_ImgAnimation";
import { imgPaths } from "../constants/activityArrays";
import { ActivityType } from "../type/activity";
import { findActivityType } from "../utils/findActivityType";
import Activity_TextAnimation from "./Activity_TextAnimation";

const ActivitySection = () => {
  const [activeActivityType, setActiveActivityType] = useState<ActivityType>(
    ActivityType.EDUCATION
  );
  const [activeImgIndex, setActiveImgIndex] = useState(0); // 활성화된 이미지 인덱스

  const containerRef = useRef<HTMLDivElement>(null); // 스크롤 측정 영역의 전체 컨테이너
  const targetRef = useRef<HTMLDivElement>(null); // 스크롤 측정할 타겟 요소

  const { scrollYProgress } = useScroll({
    container: containerRef,
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
    <BG
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      <Title>Activity</Title>
      {/* 텍스트 영역과 사진 영역을 묶는 컨테이너 */}
      <SectionContainer ref={targetRef}>
        {/* 좌측의 텍스트 영역 */}
        <TextSection>
          <Activity_TextAnimation activeActivityType={activeActivityType} />
        </TextSection>

        <ImgSection>
          {imgPaths.map((img, index) => (
            <Activity_ImgAnimation key={index} src={img} isActive={activeImgIndex === index} />
          ))}
        </ImgSection>
      </SectionContainer>
    </BG>
  );
};

export default ActivitySection;

const BG = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow-y: auto;

  position: relative;

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
`;

const TextSection = styled.div`
  width: 60rem;
  position: sticky;
  top: 30rem;
  left: 13rem;

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

const Title = styled.div`
  width: 100%;
  padding: 5rem;
  color: rgba(255, 255, 255, 0.3);

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}

  position: sticky;
  top: 0;
`;

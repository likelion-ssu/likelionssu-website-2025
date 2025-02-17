import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import media from "../../common/styles/media";
import ActivitySectionDesktop from "./ActivitySectionDesktop";
import ActivitySectionMobile from "./ActivitySectionMobile";
import useScrollToElement from "../../common/hooks/useScrollToElement";

const ActivitySection = () => {
  useScrollToElement(); // 페이지 로드 시 특정 요소로 스크롤하기 위함

  // 모바일과 태블릿/데스크탑 뷰 상태 관리
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 1047) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", update);

    update();

    return () => window.removeEventListener("resize", update);
  });

  // 데스크탑/ 태블릿을 위한 부모 컨테이너 ref
  const containerRef = useRef<HTMLDivElement>(null); // 스크롤 측정 영역의 전체 컨테이너

  // 모바일뷰를 위한 가로 스크롤 기능

  return (
    <BG ref={containerRef}>
      <Title>Activity</Title>
      {isMobile && <SubTitle>숭멋사 주요 활동</SubTitle>}
      {!isMobile ? <ActivitySectionDesktop parentRef={containerRef} /> : <ActivitySectionMobile />}
    </BG>
  );
};

export default ActivitySection;

const BG = styled(motion.div).attrs({ id: "activity-section" })`
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow-y: auto;

  position: relative;

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용

  ${media.small`
    height: auto;

    /* 초기화 */
    scroll-snap-align: none;
    scroll-snap-stop: normal;
  `}
`;

const Title = styled.div`
  width: 100%;
  padding: 5rem;
  color: rgba(255, 255, 255, 0.3);

  ${({ theme }: { theme: DefaultTheme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}

  position: sticky;
  top: 0;

  ${media.small`
    padding: 2rem;

    ${({ theme }: { theme: DefaultTheme }) => theme.mixins.font(theme.fonts.Suit.body3)}
  `}
`;

const SubTitle = styled.div`
  padding: 1rem 2rem;
  color: rgba(255, 255, 255, 0.4);

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body7)}
`;

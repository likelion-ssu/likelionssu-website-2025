import styled, { keyframes } from "styled-components";
import BgImg from "../assets/BgImg.jpg";
import BgPhrase from "../assets/BgPhrase.svg?react";
import { motion } from "framer-motion";

const AboutUsSection = () => {
  return (
    <BG
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BGBottom>
        <StyledBgPhrase>
          <BgPhrase />
        </StyledBgPhrase>
        <Description>
          2013년, 서울대학교에서 이두희 대표를 필두로 시작된 '멋쟁이사자처럼 대학’은 현재 국내외
          121개 대학, 4천여 명이 활동하는 국내 최대 규모의 IT 창업 동아리입니다. <br />
          2024년에 활동한 12기 숭실대 멋쟁이사자처럼은 뛰어난 성과를 바탕으로{" "}
          <BoldDescription>2024년 70개 동아리 중 1위 우수 동아리로 선정</BoldDescription>되었으며,
          <br />
          대표적인 활동으로는 <BoldDescription>중앙 해커톤과 겨울잠</BoldDescription>이 있습니다.
          중앙 해커톤은 무박 2일 동안 121개 대학 전체 인원이 모여 특정 주제에 맞는 서비스를 개발하는
          행사로, <br /> 단기간 개발 경험과 다양한 아이디어를 공유할 수 있는 기회를 제공합니다.
          겨울잠은 하반기에 장기적으로 진행되는 프로젝트로 깊이 있는 서비스 개발 경험을 얻을 수
          있습니다. <br /> 숭실대 멋쟁이사자처럼은 열심히 공부하고 재밌게 노는 분위기를 지향합니다.
          친바, MT, 회식 등 다양한 활동을 통해 회원들 간의 유대감을 강화하고 팀워크를 다지며,
          <br /> 서로의 작업을 이해하고 지식을 공유하는 소통의 장을 만들어가고 있습니다.
          <br /> 이를 통해 멋쟁이사자처럼은 단순한 IT 동아리를 넘어 창의적이고 협력적인 커뮤니티로
          자리 잡았습니다.
        </Description>
      </BGBottom>
    </BG>
  );
};

export default AboutUsSection;

const BG = styled(motion.div)`
  width: 100%;
  height: 100vh;

  background: url(${BgImg});
  background-size: cover;
  background-size: center;

  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    background: #000000;
    z-index: -1;
    inset: 0;
    opacity: 0.6;
  }

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용
`;

const BGBottom = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  /* width: 108rem; */
  padding-left: 5rem;
  padding-bottom: 3.13rem;

  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body2)}

  word-break: keep-all;
  line-height: 3.3rem;
`;

const BoldDescription = styled.span`
  font-weight: 600;
`;

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

const StyledBgPhrase = styled.div`
  animation: ${fadeInOut} 3s ease-in-out 1;
`;

import { motion } from "framer-motion";
import styled from "styled-components";

const ActivitySection = () => {
  return (
    <BG
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Activity</Title>
    </BG>
  );
};

export default ActivitySection;

const BG = styled(motion.div)`
  width: 100%;
  height: 500vh;
  background-color: black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용
`;

const Title = styled.div`
  width: 100%;
  padding: 5rem;
  color: rgba(255, 255, 255, 0.3);

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}

  position: sticky;
  top: 0;
`;

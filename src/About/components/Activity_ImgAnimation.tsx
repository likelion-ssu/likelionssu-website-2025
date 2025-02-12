import { motion } from "framer-motion";
import styled from "styled-components";

interface ImgProps {
  src: string;
  isActive: boolean;
}

// isActive는 제대로 오고 있음
const Activity_ImgAnimation = ({ src, isActive }: ImgProps) => {
  return (
    <Wrapper>
      <MotionImg
        src={src}
        style={{
          scale: isActive ? 1 : 0.95,
          opacity: isActive ? 1 : 0.3
        }}
      />
    </Wrapper>
  );
};

export default Activity_ImgAnimation;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const MotionImg = styled(motion.img)`
  width: 66rem;
  height: 44rem;

  border-radius: 10px;

  object-fit: cover;

  transition: all 0.5s linear;
`;

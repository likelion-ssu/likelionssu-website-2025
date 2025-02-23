import styled from "styled-components";
import { ACTIVITY_LIST } from "../constants/activityList";
import { AnimatePresence, motion } from "framer-motion";
import { ActivityType } from "../type/activity";

const Activity_TextAnimation = ({ activeActivityType }: { activeActivityType: ActivityType }) => {
  return (
    <AnimatePresence mode="wait">
      <Container>
        <TitleContainer>
          <StaticTitle>숭멋사 주요 활동</StaticTitle>

          {/* Title에 key값을 주어 변경될 때마다 애니메이션 적용 */}
          <Title
            key={activeActivityType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {ACTIVITY_LIST[activeActivityType].title}
          </Title>
        </TitleContainer>

        {/* Description에도 동일한 애니메이션 효과 적용 */}
        <Description
          key={`desc-${activeActivityType}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {ACTIVITY_LIST[activeActivityType].description}
        </Description>
      </Container>
    </AnimatePresence>
  );
};

export default Activity_TextAnimation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  word-break: keep-all;
`;

const StaticTitle = styled.div`
  color: rgba(255, 255, 255, 0.18);
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body1)}
`;

const Title = styled(motion.div)`
  color: ${({ theme }) => theme.colors.White};
  font-family: "Pretendard Variable";
  font-size: 5.4rem;
  font-weight: 600;
`;

const Description = styled(motion.div)`
  padding-right: 5rem;
  color: ${({ theme }) => theme.colors["30"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
  line-height: 3.5rem;
  -webkit-font-smoothing: antialiased;
  white-space: pre-wrap;
  word-break: keep-all;
`;

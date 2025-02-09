import styled from "styled-components";
import Team_MemberCard from "./Team_MemberCard";
import { teamCategories } from "../constants/teamData";
import { motion } from "framer-motion";

// 팀 카테고리 섹션의 props의 타입
interface TeamCategorySectionProps {
  title: string;
  teamType: string;
  members: { name: string; role: string; imagePath: string }[];
}

const TeamCategorySection: React.FC<TeamCategorySectionProps> = ({ title, teamType, members }) => {
  return (
    <TeamWrapper>
      <Title>{title}</Title>
      <CardsContainer $teamType={teamType}>
        {members.map((person, index) => (
          <Team_MemberCard
            key={index}
            name={person.name}
            role={person.role}
            imagePath={person.imagePath}
          />
        ))}
      </CardsContainer>
    </TeamWrapper>
  );
};

const TeamSection = () => {
  return (
    <BG
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>Management Team</Header>
      <Wrapper>
        {teamCategories.map(({ title, teamType, members }, index) => (
          <TeamCategorySection key={index} title={title} teamType={teamType} members={members} />
        ))}
      </Wrapper>
    </BG>
  );
};

export default TeamSection;

const BG = styled(motion.div)`
  width: 100%;

  background-color: #f6f7f9;
  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용
`;

const Header = styled.div`
  padding-left: 5.6rem;
  padding-top: 5rem;

  color: rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8.4rem;

  padding: 12rem 11.3rem;
  padding-top: 3rem;
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8rem;
`;

const Title = styled.div`
  color: #000;
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}
  text-align: center;
  letter-spacing: 0.06rem;
`;

const CardsContainer = styled.div<{ $teamType: string }>`
  display: grid;
  grid-template-columns: ${props =>
    props.$teamType === "CORE"
      ? "repeat(2, 1fr)"
      : props.$teamType === "TECH"
        ? "repeat(4,1fr)"
        : "repeat(3,1fr)"};
  grid-template-rows: auto;

  row-gap: 6rem; /* 위아래 간격 */
  column-gap: ${props =>
    props.$teamType === "CORE" ? "24rem" : props.$teamType === "TECH" ? "8.4rem" : "16rem"};
  justify-content: center; /* 중앙 정렬 */
`;

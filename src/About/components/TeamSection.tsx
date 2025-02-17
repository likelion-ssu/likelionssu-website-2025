import styled, { DefaultTheme } from "styled-components";
import Team_MemberCard from "./Team_MemberCard";
import { teamCategories } from "../constants/teamData";
import { motion } from "framer-motion";
import Footer from "../../common/components/Footer";
import media from "../../common/styles/media";
import useScrollToElement from "../../common/hooks/useScrollToElement";

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
  useScrollToElement();

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
      <Footer />
    </BG>
  );
};

export default TeamSection;

const BG = styled(motion.div).attrs({ id: "team-section" })`
  width: 100%;

  background-color: #f6f7f9;

  position: relative;

  scroll-snap-align: start;
  scroll-snap-stop: always; // 스크롤 할 때에만 snap 적용
`;

const Header = styled.div`
  /* 초기화 */
  scroll-snap-align: none;
  scroll-snap-stop: normal;

  position: absolute;
  left: 5.6rem;
  top: 3rem;

  color: rgba(0, 0, 0, 0.2);
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}

  ${media.medium`
    left: 2rem;
    top: 5.2rem;
    ${({ theme }: { theme: DefaultTheme }) => theme.mixins.font(theme.fonts.Suit.body3)}
  `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3.6rem;

  padding: 3rem 0rem 5.5rem 0rem;

  ${media.medium`
    padding: 13.2rem 6.3rem 8.08rem 6.3rem;
    gap: 6rem;
  `}
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3.6rem;

  ${media.medium`
    gap: 3rem;
  `}
`;

const Title = styled.div`
  color: #000;
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle2)}
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

  ${media.medium`
      grid-template-columns: repeat(2, 1fr);
      column-gap: 8rem;
      row-gap: 2.6rem;
    `}
`;

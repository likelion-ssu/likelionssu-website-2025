import styled from "styled-components";
import useRoleStore from "../store/useRoleStore";
import { roleContents } from "../constants/Session";
import media from "../../common/styles/media";

export default function Session() {
  const { selectedRole } = useRoleStore();
  const weeks = ["WEEK 01", "WEEK 02", "WEEK 03", "WEEK 04", "WEEK 05", "WEEK 06"];
  const contents = roleContents[selectedRole] || [];

  return (
    <Container>
      <Title>SESSION</Title>
      <SectionContainer>
        {contents.map((content, index) => (
          <SectionCard key={index}>
            <SectionWeek>{weeks[index]}</SectionWeek>
            <SectionContent>{content}</SectionContent>
          </SectionCard>
        ))}
      </SectionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  margin-top: 15.4rem;
  margin-bottom: 13rem;

  ${media.small`
    margin-top: 6rem;
    margin-bottom: 6rem;
    align-items: flex-start;
    gap: 2rem;
  `};
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.White};

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}

  ${media.small`
    font-size: 1.6rem;
  `};
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 140rem;

  ${media.small`
   width: 100%;
    gap: 1.2rem;
    flex-direction: column;
    align-items: center;
  `};
`;

const SectionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;

  width: fit-content;
  height: 6.8rem;
  padding: 1.8rem 1.6rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  background: rgba(255, 255, 255, 0.06);

  ${media.small`
    display: flex;
    padding: 1.2rem 1.6rem;
    align-items: center;
    gap: 1.6rem;
    width: 31.8rem;
    height: auto;
  `};
`;

const SectionWeek = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  white-space: nowrap;

  background: ${({ theme }) => theme.colors["90"]};
  color: ${({ theme }) => theme.colors["30"]};
  text-align: center;

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.body3)}

  ${media.small`
    padding: 0.8rem 1.2rem;
    gap: 1rem;
    ${({ theme }: any) => theme.mixins.font(theme.fonts.Suit.body5)}
  `};
`;

const SectionContent = styled.div`
  color: ${({ theme }) => theme.colors.White};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}

  ${media.small`
    padding: 0.8rem 1rem;
    gap: 1rem;
    ${({ theme }: any) => theme.mixins.font(theme.fonts.Pretendard.body7)}
  `};
`;

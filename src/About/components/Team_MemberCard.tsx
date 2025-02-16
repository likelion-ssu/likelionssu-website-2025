import styled from "styled-components";
import media from "../../common/styles/media";

interface MemberProps {
  name: string;
  role: string;
  imagePath: string;
}

const Team_MemberCard = ({ name, role, imagePath }: MemberProps) => {
  return (
    <Wrapper>
      <Image src={imagePath} alt={`${name}의 프로필`} />
      <TextContainer>
        <Name>{name}</Name>
        <RoleContainer>{role}</RoleContainer>
      </TextContainer>
    </Wrapper>
  );
};

export default Team_MemberCard;

const Wrapper = styled.div`
  display: flex;
  width: 17rem;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  ${media.small`
    width: 9rem;
  `}
`;

const Image = styled.img`
  width: 17rem;
  height: 17rem;
  border-radius: 50%;

  object-fit: cover;

  ${media.small`
    width: 9rem;
    height: 9rem;
  `}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const Name = styled.div`
  color: #000;

  text-align: center;
  font-size: 2.2rem;
  font-family: "Pretendard Variable";
  font-weight: 600;
  line-height: normal;

  ${media.small`
    font-size: 1.2rem;
  `}
`;

const RoleContainer = styled.div`
  display: flex;
  padding: 0.5rem 2.2rem;
  justify-content: center;
  align-items: center;

  border-radius: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(0, 0, 0, 0.02);

  color: rgba(0, 0, 0, 0.7);
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}

  ${media.small`
    padding: 0.6rem 1.2rem;
    gap: 0.3948rem;
    order-radius: 1.1845rem;
    border: 0.395px solid rgba(0, 0, 0, 0.08);  

    font-size: 1rem;
    font-weight: 400;
  line-height: 1.0266rem; /* 102.66% */
  letter-spacing: -0.01rem;
  `}
`;

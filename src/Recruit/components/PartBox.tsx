import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Arrow from "../../common/assets/arrow_down.svg?react";
import { partDataWithIcons } from "../constants";
import useRoleStore from "../../Part/store/useRoleStore";
import media from "../../common/styles/media";

const roleMap: Record<number, "pm" | "de" | "fe" | "be"> = {
  1: "pm",
  2: "de",
  3: "fe",
  4: "be"
};

const PartBox = () => {
  const navigate = useNavigate();
  const { setRole } = useRoleStore();

  const handlePartClick = (id: number) => {
    const role = roleMap[id];
    if (role) {
      setRole(role);
      navigate("/part");
    }
  };

  return (
    <BoxContainer>
      <Title>모집 파트</Title>
      <PartSection>
        {partDataWithIcons.map(({ id, name, icon: Icon }) => (
          <PartCard key={id} onClick={() => handlePartClick(id)}>
            <ArrowIC />
            <PartContainer>
              <PartName>{name}</PartName>
              {Icon ? <PartIcon as={Icon} /> : null}
            </PartContainer>
          </PartCard>
        ))}
      </PartSection>
    </BoxContainer>
  );
};

export default PartBox;

const BoxContainer = styled.div`
  text-align: center;
`;

const Title = styled.p`
  margin-bottom: 8rem;
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.subtitle3)}

  ${media.small`
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.6rem;
    letter-spacing: -0.16px;
    margin-bottom: 2rem;
  `};
`;

const PartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  ${media.small`
    flex-wrap: wrap;
    gap: 1rem;
  `};
`;

const PartCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  width: 30rem;
  height: 20rem;
  flex-shrink: 0;
  border-radius: 10px;
  padding: 2rem;
  cursor: pointer;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.08) 55.49%,
    rgba(255, 255, 255, 0.04) 100%
  );

  ${media.small`
    width: 16rem;
    height: 11rem;
  `};
`;

const PartName = styled.p`
  text-align: left;
  font-feature-settings: "calt" off;

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.body1)}
  line-height: normal;

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Suit.body5)}
  `};
`;

const PartIcon = styled.div`
  width: 14.5rem;
  height: 14.5rem;

  ${media.small`
    width: 6rem;
    height: 6rem;
  `};
`;

const ArrowIC = styled(Arrow)`
  width: 1.6rem;
  height: 0.9rem;

  ${media.small`
    width: 2rem;
    height: 2rem;
  `};
`;

const PartContainer = styled.div`
  display: flex;
  align-items: end;
`;

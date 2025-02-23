import styled from "styled-components";
import { Link } from "react-router-dom";
import Arrow_IC from "../assets/ic_arrow_up_right.svg?react";
import media from "../../common/styles/media";
import { DefaultTheme } from "styled-components/dist/types";

interface MainBtnProps {
  title: string;
  caption: string;
  to: string;
}

const MainBtn = ({ title, caption, to }: MainBtnProps) => {
  return (
    <StyledMainBtn to={to}>
      <BtnTopContainer>
        <BtnTitle>{title}</BtnTitle>
        <StyledArrow />
      </BtnTopContainer>
      <BtnCaption>{caption}</BtnCaption>
    </StyledMainBtn>
  );
};

export default MainBtn;

const StyledMainBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9rem;

  width: 45rem;
  height: 12rem;
  padding: 2rem 2.2rem;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.White};

  &:hover {
    background: linear-gradient(90deg, rgba(94, 94, 94, 0.22) 34.44%, rgba(0, 52, 148, 0.7) 100%);
  }

  ${media.small`
    display: flex;
    width: 33rem;
    height: 8rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.7rem;
    padding: 1.4667rem 1.6133rem;
  `}
`;

const BtnTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const BtnTitle = styled.div`
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle1)}

  ${media.small`
    ${({ theme }: DefaultTheme) => theme.mixins.font(theme.fonts.Suit.body3)}
  `}
`;

const BtnCaption = styled.div`
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}

  ${media.small`
    ${({ theme }: DefaultTheme) => theme.mixins.font(theme.fonts.Pretendard.body7)}
    color: ${({ theme }: DefaultTheme) => theme.colors["10"]};
  `}
`;

const StyledArrow = styled(Arrow_IC)`
  width: 2rem;
  height: 2rem;

  ${media.small`
    width: 1rem;
    height: 1rem;
  `}
`;

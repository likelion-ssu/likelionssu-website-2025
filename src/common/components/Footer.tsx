import styled from "styled-components";
import media from "../../common/styles/media";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ContentsContainer>
          <li>COPYRIGHT LIKELION SSU</li>
          <li>TECHIT</li>
        </ContentsContainer>
        <RightContentsContainer>
          <ContactMent>CONTACT</ContactMent>
          <ContactContainer>
            <li>ssu@likelion.org</li>
            <a href="https://www.instagram.com/likelion_ssu/">
              <li>INSTA</li>
            </a>
            <a href="https://github.com/likelion-ssu">
              <li>GIT</li>
            </a>
          </ContactContainer>
        </RightContentsContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100vw;
  height: 14rem;
  display: flex;
  padding: 3.8rem 6.7rem;
  justify-content: space-between;

  background-color: black;

  ${media.small`
    flex-direction: column;
    align-items :  start;
    gap:1.8rem;
    padding: 2rem 2rem;
    justify-content: center;
  `};
`;

const ContactMent = styled.p`
  ${media.small`
    display:none;
  `};
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--30, #9a9a9a);
  font-feature-settings: "calt" off;
  gap: 1.2rem;
  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.body3)}

  ${({ theme }) => media.small`
    ${theme.mixins.font(theme.fonts.Suit.body5)}
  `};
`;

const RightContentsContainer = styled(ContentsContainer)`
  align-items: end;
`;
const ContactContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;

import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ContentsContainer>
          <li>COPYRIGHT LIKELION SSU</li>
          <li>TECHIT</li>
        </ContentsContainer>
        <RightContentsContainer>
          CONTACT
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
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--30, #9a9a9a);
  font-feature-settings: "calt" off;

  font-family: "SUIT Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  gap: 1.2rem;
`;

const RightContentsContainer = styled(ContentsContainer)`
  align-items: end;
`;
const ContactContainer = styled.div`
  display: flex;
  gap: 3.2rem;
`;

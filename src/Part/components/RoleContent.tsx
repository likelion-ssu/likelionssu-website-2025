import useRoleStore from "../store/useRoleStore";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { roleContents } from "../constants/RoleContents";
import media from "../../common/styles/media";

import pmImg from "../assets/pm.png";
import deImg from "../assets/de.png";
import feImg from "../assets/fe.png";
import beImg from "../assets/be.png";

const roleNames: Record<"pm" | "de" | "fe" | "be", string> = {
  pm: "Project Manager",
  de: "Product Designer",
  fe: "Frontend Developer",
  be: "Backend Developer"
};

export default function RoleContent() {
  const { selectedRole } = useRoleStore();
  const [currentRole, setCurrentRole] = useState(selectedRole);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentRole(selectedRole);
    }, 100);

    return () => clearTimeout(timeout);
  }, [selectedRole]);

  return (
    <ContentContainer>
      <RoleImage
        src={
          currentRole === "pm"
            ? pmImg
            : currentRole === "de"
              ? deImg
              : currentRole === "fe"
                ? feImg
                : beImg
        }
        key={`image-${currentRole}`}
      />
      <TextContainer key={`text-${currentRole}`}>
        <RoleName>{roleNames[currentRole]}</RoleName>
        <RoleText>{roleContents[currentRole]}</RoleText>
      </TextContainer>
    </ContentContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;

  margin-top: 4rem;
  padding: 0 4rem;
  max-width: 120.4rem;

  ${media.medium`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  `};

  ${media.small` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  `};
`;

const RoleImage = styled.img`
  width: 51rem;
  height: 34rem;
  height: auto;

  animation: ${fadeIn} 0.5s ease-in-out;

  ${media.small` 
    width: 32rem;
    height: 21.3997rem;
  `};
`;

const RoleName = styled.div`
  margin-top: 4.5rem;

  color: ${({ theme }) => theme.colors.White};
  font-family: "SUIT Variable";
  font-size: 4rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.092rem;

  ${media.small` 
    margin-top: 3rem;
    font-size: 3rem;
  `};
`;

const RoleText = styled.div`
  width: 100%;
  max-width: 100%;

  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body5)}
  line-height: 2.2;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;

  ${media.small` 
   line-height: 166%;
   font-size: 1.2rem;
  `};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-shrink: 1;
  max-width: 65.4rem;

  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;

  ${media.small` 
    width: 100%;
  `};
`;

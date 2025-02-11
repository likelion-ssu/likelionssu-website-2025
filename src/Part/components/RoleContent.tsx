import useRoleStore from "../store/useRoleStore";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { roleContents } from "../constants/RoleContents";

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
    transform: translateY(10px);
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
  gap: 8rem;

  margin-top: 4rem;
  padding: 0 4rem;
`;

const RoleImage = styled.img`
  width: 100%;
  max-width: 64.3rem;
  height: auto;

  animation: ${fadeIn} 0.5s ease-in-out;
`;

const RoleName = styled.div`
  margin-top: 4.5rem;

  color: ${({ theme }) => theme.colors.White};
  font-family: "SUIT Variable";
  font-size: 4.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.092rem;
`;

const RoleText = styled.div`
  width: 100%;
  max-width: 100%;

  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
  line-height: 2.2;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex-shrink: 1;

  width: auto;
  max-width: 90vw;
  min-width: 250px;

  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

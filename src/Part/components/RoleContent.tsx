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
  display: flex;
  flex-direction: row;
  gap: 8rem;
  margin-top: 4rem;
  align-items: center;
  position: relative;
`;

const RoleImage = styled.img`
  width: 100%;
  max-width: 64.3rem;
  height: auto;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const TextContainer = styled.div`
  display: flex;
  max-width: 60.6rem;
  flex-direction: column;
  gap: 4rem;
  flex-shrink: 0;
  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
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
  color: ${({ theme }) => theme.colors["10"]};
  ${({ theme }) => theme.mixins.font(theme.fonts.Pretendard.body4)}
  line-height: 2.2;
  white-space: pre-line;
`;

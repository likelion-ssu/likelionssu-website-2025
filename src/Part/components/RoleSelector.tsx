import styled from "styled-components";
import useRoleStore from "../store/useRoleStore";
import media from "../../common/styles/media";

const roles: Array<"pm" | "de" | "fe" | "be"> = ["pm", "de", "fe", "be"];

const roleNames: Record<"pm" | "de" | "fe" | "be", string> = {
  pm: "Project Manager",
  de: "Product Designer",
  fe: "Frontend Developer",
  be: "Backend Developer"
};

export default function RoleSelector() {
  const { selectedRole, setRole } = useRoleStore();

  return (
    <BtnWrapper>
      {roles.map(role => (
        <Btn key={role} onClick={() => setRole(role)} $selected={selectedRole === role}>
          {selectedRole === role ? roleNames[role] : role.toUpperCase()}
        </Btn>
      ))}
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  margin-top: 5rem;

  ${media.small`
    margin-top: 1.4rem;
    gap: 0.6rem;
  `};
`;

const Btn = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: fit-content;
  padding: 1.4rem 3.4rem;
  border-radius: 40px;
  border: 2px solid ${({ $selected }) => ($selected ? "#FFF" : "#585858")};

  background: ${({ $selected }) => ($selected ? "#9A9A9A" : "#1a1a1a")};
  color: ${({ $selected }) => ($selected ? "#000000" : "#9A9A9A")};

  cursor: pointer;
  transition:
    background 0.2s ease,
    border 0.2s ease;

  text-align: center;
  font-family: "SUIT Variable";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;

  &:hover {
    background: ${({ $selected }) => ($selected ? "#9A9A9A" : "rgba(255, 255, 255, 0.2)")};
  }

  ${media.small`
    padding: 0.7rem 2rem;
    font-size: 1.2rem;
    gap: 0.6rem;
  `};
`;

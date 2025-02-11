import styled from "styled-components";
import useRoleStore from "../store/useRoleStore";

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
  gap: 12px;

  margin-top: 5rem;
`;

const Btn = styled.div<{ $selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: fit-content;
  padding: 14px 38px;
  border-radius: 40px;
  border: 2px solid ${({ $selected }) => ($selected ? "#FFF" : "#585858")};

  background: ${({ $selected }) => ($selected ? "#9A9A9A" : "#1a1a1a")};
  color: ${({ $selected }) => ($selected ? "#000000" : "#9A9A9A")};

  cursor: pointer;
  transition:
    background 0.2s ease,
    border 0.2s ease;

  ${({ theme }) => theme.mixins.font(theme.fonts.Suit.subtitle2)}
`;

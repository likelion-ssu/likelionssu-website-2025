import { create } from "zustand";

type Role = "pm" | "de" | "fe" | "be";

interface RoleStore {
  selectedRole: Role;
  setRole: (role: Role) => void;
}

const useRoleStore = create<RoleStore>(set => ({
  selectedRole: "pm",
  setRole: role => set({ selectedRole: role })
}));

export default useRoleStore;

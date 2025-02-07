import { MEMBER_CORE_LIST } from "./members";
import { MEMBER_TECH_LIST } from "./members";
import { MEMBER_MANAGE_LIST } from "./members";
import { TeamCategory } from "../type/team";

export const teamCategories: TeamCategory[] = [
  { title: "CORE LEAD", teamType: "CORE", members: MEMBER_CORE_LIST },
  { title: "TECH LEAD", teamType: "TECH", members: MEMBER_TECH_LIST },
  { title: "OPERATION MANAGEMENT", teamType: "MANAGE", members: MEMBER_MANAGE_LIST }
];

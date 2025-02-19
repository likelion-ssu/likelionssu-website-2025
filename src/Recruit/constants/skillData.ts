import Skill_1 from "../assets/skill_1.png";
import Skill_2 from "../assets/skill_2.png";
import Skill_3 from "../assets/skill_3.png";

interface Skill {
  id: number;
  title: string;
  text: string;
  icon: string;
}

const SkillImages: Record<number, string> = {
  1: Skill_1,
  2: Skill_2,
  3: Skill_3
};

export const skillData: Skill[] = [
  {
    id: 1,
    title: "열정",
    text: "다양한 프로젝트에 참여하고자 하는\n열정과 탐구심을 가진 분들을 환영해요.",
    icon: "Skill_1"
  },
  {
    id: 2,
    title: "협업",
    text: "서로의 강점을 살려 협력하며 프로젝트를\n이끌어갈 인재를 기다리고 있어요.",
    icon: "Skill_2"
  },
  {
    id: 3,
    title: "책임",
    text: "일정을 지키고 결과물을 책임감 있게\n완성할 수 있는 사람을 원해요.",
    icon: "Skill_3"
  }
];

// 매핑해서 아이콘 추가
export const skillDataWithIcons = skillData.map(data => ({
  ...data,
  icon: SkillImages[data.id]
}));

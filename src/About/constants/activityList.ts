import { ActivityType } from "../type/activity";

export const ACTIVITY_LIST: Record<
  ActivityType,
  {
    title: string;
    description: string;
  }
> = {
  [ActivityType.EDUCATION]: {
    title: "01 교육 세션",
    description:
      "프로젝트에 필요한 핵심 스킬을 체계적으로 익혀요.\n파트장의 생생한 경험이 담긴 강연과 파트원들과의 활발한 소통을 통해 함께 성장하는 시간이에요."
  },
  [ActivityType.HACKATHON]: {
    title: "02 중앙 해커톤",
    description:
      "무박 2일 동안 모든 멋사가 모여 개발하는 연례 행사예요.\n짧은 기간동안 열정을 불태워 팀원들과 함께 아이디어를 현실로 구현하는 짜릿한 경험이에요."
  },
  [ActivityType.UGHHEUNGCON]: {
    title: "03 어흥콘",
    description:
      "각 대학에서 진행한 프로젝트를 출품하고 행사장에서 시연과 공유를 통해 아이디어를 나누는 행사예요.\n각 학교 학생들과 자유롭게 교류하며 다양한 아이디어를 얻을 수 있었어요."
  },
  [ActivityType.NETWORKING]: {
    title: "04 네트워킹",
    description:
      "다양한 사람들과 아이디어를 공유하고 서로에게 배우며 함께 성장하는 기회예요. 선배 사자들의 조언으로 동기를 얻을 수 있어요."
  },
  [ActivityType.WINTERPROJECT]: {
    title: "05 겨울잠 프로젝트",
    description:
      "겨울잠은 하반기에 장기적으로 진행되는 프로젝트예요.\n기획부터 개발, 배포까지 전 과정을 경험하며 깊이 있는 서비스 개발 역량을 쌓을 수 있어요."
  },
  [ActivityType.SOCIAL]: {
    title: "06 친목 모임",
    description:
      "일도 중요하지만, 우리는 즐거움과 추억도 놓치지 않아요.\n친바, MT, 회식 등으로 끈끈한 유대를 쌓으며, 서로의 작업을 이해하고 지식을 공유해요."
  }
};

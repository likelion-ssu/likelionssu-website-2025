export interface Question {
  id: number;
  question: string;
  answer: string;
}

export const questionData: Question[] = [
  {
    id: 1,
    question: "숭멋사는 어떤 동아리인가요?",
    answer:
      "숭멋사는 전공자와 비전공자의 구분없이 모두가 함께 성장할 수 있는 IT 동아리입니다. 다양한 프로젝트를 진행하며 협업 경험을 쌓을 수 있습니다."
  },
  {
    id: 2,
    question: "실력이 좋은 사람만 지원할 수 있나요?",
    answer:
      "꼭 그렇지는 않습니다. 관심과 열정이 있다면 누구나 지원할 수 있으며, 기본적인 역량을 갖추면 더욱 좋습니다."
  },
  {
    id: 3,
    question: "지원 서류에 포트폴리오는 필수인가요?",
    answer: "포트폴리오는 필수는 아니지만, 본인의 역량을 보여줄 수 있다면 도움이 될 수 있습니다."
  },
  {
    id: 4,
    question: "파트별 커리큘럼이 어떻게 되나요?",
    answer: "웹사이트 [PART] 페이지에 교육 세션에 대한 개요가 안내되어 있습니다."
  },
  {
    id: 5,
    question: "정기 모임은 언제인가요?",
    answer:
      "정기 모임은 보통 주 1회로 진행되며, 프로젝트 진행 상황에 따라 추가 모임이 있을 수 있습니다."
  },
  {
    id: 6,
    question: "개발 경력이 없어도 지원할 수 있나요?",
    answer: "네, 개발 경력이 없더라도 배우려는 의지와 열정만 있다면 지원 가능합니다."
  }
];

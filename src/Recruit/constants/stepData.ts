interface Step {
  id: number;
  title: string;
  date: string;
}

export const stepData: Step[] = [
  { id: 1, title: "지원서 제출", date: "2.24(월) - 3.7(금)" },
  { id: 2, title: "프리코스 시청", date: "2.24(월) - 3.10(월)" },
  { id: 3, title: "서류 결과", date: "3.9(일)" },
  { id: 4, title: "면접 평가", date: "3.12(수) - 3.14(금)" },
  { id: 5, title: "최종 결과 발표", date: "3.16(일)" }
];

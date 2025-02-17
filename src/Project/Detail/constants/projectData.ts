export interface Project {
  id: number;
  generation: number;
  name: string;
  title: string;
  tech: string[];
  members: string[];
  description: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    generation: 12,
    name: "Dotoread 도토릿",
    title: "언제든 맛있게 꺼내먹는 Read It Later 서비스",
    tech: ["Typescript", "React", "MySQL", "Docker", "Python", "Spring Boot"],
    members: ["유승빈", "김상우", "김건휘", "박채연", "유태연", "정서윤", "이상은", "정연재"],
    description:
      "도토릿은 '저장하고 읽지 않는' 현대인들의 디지털 정보 관리 문제를 해결하기 위한 AI 기반 북마크 서비스입니다. 북마크의 핵심 키워드를 추출하고 적절한 폴더를 자동으로 생성하여 원클릭으로 정리할 수 있습니다. 또한, Fresh Article과 Rotten Article로 구성된 리마인드 대시보드를 통해 저장된 콘텐츠를 적절한 시기에 리마인드하고, 장기간 방치된 북마크도 효율적으로 관리할 수 있습니다. 마지막으로, 커뮤니티 기능을 통해 사용자들이 자신만의 북마크 컬렉션을 공유하고, 다른 사용자들의 인사이트를 확장할 수 있는 플랫폼을 제공합니다."
  },
  {
    id: 2,
    generation: 12,
    name: "Greenspark 그린스파크",
    title: "전기요금 절약으로 지속가능한 도약을 만들어내는 서비스",
    tech: ["Typescript", "React", "NextJs", "FastApi", "Spring Boot", "MySQL"],
    members: ["최지예", "박하은", "김하연", "지하윤", "백승현", "이시온", "김선정", "전형준"],
    description:
      "그린스파크는 사용자가 자신의 가전제품 에너지 효율등급을 쉽게 조회하고, 전력 사용량을 분석하여 미래의 전력 소비와 전기세를 예측할 수 있도록 알고리즘을 구현하였습니다. 또한, 사용자에게 맞춤형 전력 절약 팁을 제공하고, 에너지 상식 퀴즈를 통해 지속가능성에 대한 동기부여를 강화합니다. "
  },
  {
    id: 3,
    generation: 12,
    name: "Salary 샐러리",
    title: "금융/경제 지식을 부담없이 학습 가능한 앱서비스 ",
    tech: ["Javascript", "React", "Spring Boot", "MySQL"],
    members: ["류다인", "고영명", "박지효", "신유정", "공윤호", "유민주", "신민경", "신지환"],
    description:
      "하루 3분, 경제 한 입\n 샐러리는 '지속 가능성'을 주제로 10대, 20대의 금융 리터러시 향상을 통해 경제 성장의 선순환을 그리는 것을 궁극적 가치로 바라봅니다. 용어 학습부터 트렌드를 반영한 퀴즈, 뉴스 기능을 제공하는 샐러 리는 open AI API와 뉴스 API를 사용해 정보의 질을 향상시키고 다양한 라이브러리를 도입해 더 나은 사용자 경험을 제공합니다. "
  },
  {
    id: 4,
    generation: 12,
    name: "Wellness Coach 웰니스 코치",
    title: "건강하게 나이드는 당신을 위한 식단 메이트",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["류다인", "정서윤", "지하윤", "공윤호", "이시온", "정연재"],
    description:
      "건강 관리에 관심있는 2030 세대를 위한, 저속노화 식단을 지속 가능하게 해주는 서비스입니다. 오늘의 식단을 진단하고 항목별 피드백과 저속노화 팁 등의 정보를 제공받습니다."
  },
  {
    id: 5,
    generation: 12,
    name: "Don't 스파이크",
    title: "혈당 스파이크를 방지할 작은 시작",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["김상우", "최지예", "박지효", "유민주", "김선정", "신지환"],
    description:
      "당뇨병 환자들을 위한 맞춤형 정보제공 및 데이터 시각화를 통해 올바른 당뇨 관리를 돕는 서비스입니다. 혈당 백과 검색을 통해 특정 음식의 적정 섭취량, 섭취 방법, 혈당 지수 등 당뇨병 환자를 위한 맞춤형 정보를 제공합니다."
  },
  {
    id: 6,
    generation: 12,
    name: "Yes, sir 예썰",
    title: "남성 피부 관리 플랫폼",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["박하은", "유승빈", "김하연", "김건휘", "백승현", "신민경"],
    description:
      "16가지 피부타입에 따른 맞춤 솔루션과 제품을 추천하는 서비스입니다. 바우만 테스트를 기반으로 16가지 피부타입을 간단하게 검진받고 스킨 케어를 처방받을 수 있습니다. 제품 성분에 따라서 자신에게 맞는 케어 제품을 구매할 수 있습니다."
  },
  {
    id: 7,
    generation: 12,
    name: "스튜",
    title: "스포츠 튜터 매칭 서비스, 스튜와 함께해요!",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["고영명", "유태연", "신유정", "박채연", "이상은", "전형준"],
    description:
      "운동 초보자들이 자격증을 보유한 '전문가'가 아닌 운동을 경험해본 '경험자'에게 부담스럽지 않은 가격으로 운동을 배울 수 있도록 스포츠 튜터를 매칭해주는 서비스입니다."
  },
  {
    id: 8,
    generation: 11,
    name: "PicPic",
    title: "나만의 Picture을 Pick하여 간직하자",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["김지은", "정의민", "유해인", "강해솔", "한지원", "김교휘", "박정우"],
    description:
      "PicPic은 더 다양하고 개인화된 사진을 원하는 포토프레스 세대들에게 직접 프레임을 제작하고 포토북을 제작하게 하여 자신의 개성을 사진에 담아낼 수 있게 합니다."
  },
  {
    id: 9,
    generation: 11,
    name: "Remini",
    title: "맞춤 회고 유형 추천 및 가이드",
    tech: ["Typescript", "React", "Styled-Components", "Spring Boot", "JDK 11", "MySQL"],
    members: ["이혜민", "유나경", "최서현", "오유은", "유승한", "박수영"],
    description:
      "Remini는 회고를 더욱 압축적이고 효율적으로 진행할 수 있도록 돕는 맞춤 회고 유형 추천 서비스입니다. 사용자의 회고 상황에 따라 적절한 회고 방식을 추천하고, 효과적인 회고 진행을 위한 가이드라인을 제공합니다. 회고는 일상 회고, 목표 평가 회고, 프로젝트 회고로 나뉘며, 일상 회고와 목표 평가 회고는 기간 선택을 기준으로, 프로젝트 회고는 진행 여부에 따라 최적의 회고 유형을 안내합니다. KPT, Continue-Stop-Start, 5F, TIL, 4L, ORID, AAR, YWT 등 다양한 회고 프레임워크를 제공하며, 이를 통해 개인과 팀이 효과적으로 회고를 수행하고 지속적인 성장과 개선을 이룰 수 있도록 지원합니다. Remini는 단순한 회고 도구를 넘어, 더 나은 자신과 더 나은 팀을 만들어가는 데 기여하는 회고 지원 플랫폼입니다."
  },
  {
    id: 10,
    generation: 11,
    name: "Flexrate",
    title: "대출은 AI로 최적으로 관리는 대시보드로 체계적으로",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["박재영", "윤주호", "소희연", "신수연", "허동윤", "유예지", "조수민"],
    description:
      "Flexrate는 금융/비금융 데이터를 종합하여 고객의 신용을 판단합니다. 누구나 쉽게 이해할 수 있는 용어와 표현, 직관적인 대출 관리 대시보드를 통해 대출이 처음인 고객도 쉽고 간편하게 대출하고 관리할 수 있습니다."
  },
  {
    id: 11,
    generation: 11,
    name: "ASSUM",
    title: "어렵고 긴 글들, 쉽고 간략하게 듣자",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["정의민", "최신임", "강해솔", "최서현", "박정우"],
    description:
      "URL만 입력하면 기사 및 블로그를 요약해주는 서비스입니다. chat gpt api를 사용해 한눈에 알아보기 쉽게 요약하고, 시각장애인도 사용할 수 있도록 tts를 활용해 음성변환 기능을 넣었습니다."
  },
  {
    id: 12,
    generation: 11,
    name: "담다",
    title: "우리 동네 전통시장을 내 손 안에",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["윤주호", "소희연", "허동윤", "유승한", "조수민"],
    description:
      "담다는 고령층의 낮은 이커머스 이용률, 코로나 19로 인해 저조해진 재래시장 이용률, 전통시장의 낮은 접근성을 해결하기 위해 음성인식과 스탬프롤 요소를 넣어 모두가 즐길 수 있는 재래시장 이커머스 플랫폼입니다."
  },
  {
    id: 13,
    generation: 11,
    name: "길JOB이",
    title: "청년 일자리 정책을 한 눈에",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["이혜민", "유나경", "한지원", "오유은", "박수영"],
    description:
      "길JOB이는 청년 일자리 정책에 집중하여 청년들의 일자리와 관련된 디지털 격차를 해소합니다. 간단하고 직관적인, 접근성이 좋은 웹서비스를 통해 사용자가 원하는 정보를 쉽게 탐색할 수 있도록 합니다."
  },
  {
    id: 14,
    generation: 11,
    name: "zero market 제로마켓",
    title: "우리동네 가게 재고 솔루션",
    tech: ["Typescript", "React", "Spring Boot", "MySQL"],
    members: ["김지은", "유해인", "신수연", "김교휘", "유예지"],
    description: "제로 마켓은 아쉽게 남은 동네 가게 재고를 저렴한 가격으로 이웃에게 연결합니다. "
  }
];

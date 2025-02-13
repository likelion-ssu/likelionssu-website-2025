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
    name: "도토릿",
    title: "언제든 맛있게 꺼내먹는 Read It Later 서비스",
    tech: ["Typescript", "React", "MySQL"],
    members: ["유승빈", "김상우", "김건휘", "박채연", "유태연", "정서윤", "이상은", "정연재"],
    description:
      "도토릿은 '저장하고 읽지 않는' 현대인들의 디지털 정보 관리 문제를 해결하기 위해 탄생한 AI 기반 북마크 서비스입니다. 웹서핑 중 발견한 유용한 정보들을 저장만 하고 읽지 않는 사용자들의 페인 포인트에 주목하여, 마치 엄마가 방을 정리해주듯 북마크를 체계적으로 관리해주는 것이 특징입니다.\n" +
      "서비스의 핵심 기능은 크게 세 가지입니다. 첫째, AI 자동 분류 시스템을 통해 북마크의 핵심 키워드를 추출하고 적절한 폴더를 자동으로 생성하여 원클릭으로 정리할 수 있습니다. 둘째, Fresh Article과 Rotten Article로 구성된 리마인드 대시보드를 통해 저장된 콘텐츠를 적절한 시기에 리마인드하고, 장기간 방치된 북마크도 효율적으로 관리할 수 있습니다. 셋째, 커뮤니티 기능을 통해 사용자들이 자신만의 북마크 컬렉션을 공유하고, 다른 사용자들의 인사이트를 확장할 수 있는 플랫폼을 제공합니다.\n" +
      "도토릿은 단순한 북마크 서비스를 넘어, AI 기술과 커뮤니티 기반의 지식 공유 플랫폼으로서 디지털 정보 관리의 새로운 패러다임을 제시하고 있습니다."
  },
  {
    id: 2,
    generation: 12,
    name: "그린스파크",
    title: "전기요금 절약으로 지속가능한 도약을 만들어내는 서비스",
    tech: ["Typescript", "React", "MySQL"],
    members: ["유승빈", "김상우", "김건휘", "박채연", "유태연", "정서윤", "이상은", "정연재"],
    description: "그린스파크는..."
  },
  {
    id: 3,
    generation: 12,
    name: "샐러리",
    title: "금융/경제 지식을 부담없이 학습 가능한 앱서비스",
    tech: ["Typescript", "React", "MySQL"],
    members: ["유승빈", "김상우", "김건휘", "박채연", "유태연", "정서윤", "이상은", "정연재"],
    description: "샐러리 서비스는..."
  }
];

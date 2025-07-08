# likelionssu-website-2025
숭실대학교 멋쟁이사자처럼 동아리를 소개하는 웹사이트입니다.

### 주요 목표
- 동아리 주요 활동과 운영진 소개
- 동아리 파트별 소개
- 동아리 내의 프로젝트 소개
- 리쿠르팅 안내

### 핵심 기능
- about 페이지 `/about`
    - 숭멋사 소개 
    - 숭멋사 주요 활동
    - 숭멋사 운영진
- part 페이지 `/part`
    - 파트별 소개와 세션 목차
    - 파트별 활동 후기
- project 페이지 `/project`
    - 기수 별 진행됐던 프로젝트 소개
    - 프로젝트 pdf
- recruit 페이지 `/recruit`
    - 모집 기간 안내
    - 인재상
    - 모집 파트
    - 활동 로드맵
    - 지원 절차
    - Q&A
  
## 🛠 기술 스택

### 패키지 매니저
- **yarn**

### 프레임워크 & 라이브러리
- **React.js 18.3.1**: React 프레임워크
- **TypeScript** : 정적 타입 지원
- **StyledComponent**: 스타일링 라이브러리

### 개발 도구
- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **SVGR**: SVG 파일 처리

## 트리 구조
```bash
./src
├── About // About 페이지의 요소
│   ├── assets
│   ├── components
│   ├── constants
│   ├── index.tsx
│   ├── styles
│   ├── type
│   └── utils
├── App.tsx
├── Home // Home 페이지의 요소 (About 페이지와 폴더구조 동일)
├── Part // Part 페이지의 요소 (About 페이지와 폴더구조 동일)
├── Project// Project 페이지의 요소 (About 페이지와 폴더구조 동일)
├── Recruit // Recruit 페이지의 요소 (About 페이지와 폴더구조 동일)
├── Router.tsx
├── common // 공통 사용 요소
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── styles
│   └── types
├── main.tsx
└── vite-env.d.ts
```

## 🛠 개발 환경 설정

1. 저장소 클론
```bash
git clone https://github.com/likelion-ssu/lion-s-study
```

2. 의존성 설치
```bash
yarn install
```

3. 개발 서버 실행
```bash
yarn run dev
```

import { ActivityType } from "../type/activity";

export const imgPaths = [
  // (1) 교육
  "images/activities/img_edu1.png",
  "images/activities/img_edu2.png",
  "images/activities/img_edu3.png",
  "images/activities/img_edu4.webp",
  // (2) 멘토링
  "images/activities/img_mentoring1.webp",
  "images/activities/img_mentoring2.png",
  "images/activities/img_mentoring3.webp",
  // (3) 해커톤
  "images/activities/img_hcktn1.png",
  "images/activities/img_hcktn2.png",
  "images/activities/img_hcktn3.png",
  "images/activities/img_hcktn4.png",
  "images/activities/img_hcktn5.webp",
  // (4) 전국 단위 행사
  "images/activities/img_ughHeung1.png",
  "images/activities/img_ughHeung2.png",
  // (5) 네트워킹 & 친목
  "images/activities/img_social1.webp",
  "images/activities/img_social2.webp",
  "images/activities/img_social3.webp",
  // (6) 실리콘 밸리
  "images/activities/img_silicon1.webp",
  "images/activities/img_silicon2.png",
  "images/activities/img_silicon3.png",
];

export const imgToIndexMap = [
  { min: 0, max: 3, index: ActivityType.EDUCATION },
  { min: 4, max: 6, index: ActivityType.MENTORING },
  { min: 7, max: 11, index: ActivityType.HACKATHON },
  { min: 12, max: 13, index: ActivityType.UGHHEUNGCON },
  { min: 14, max: 16, index: ActivityType.SOCIAL },
  { min: 17, max: 19, index: ActivityType.SILICON },
];

import { ActivityType } from "../type/activity";

export const imgPaths = [
  "images/activities/img_edu1.webp",
  "images/activities/img_edu2.webp",
  "images/activities/img_mentoring1.webp",
  "images/activities/img_mentoring2.webp",
  "images/activities/img_mentoring3.webp",
  // 멘토링 사진 3가지 추가
  "images/activities/img_hcktn1.webp",
  "images/activities/img_hcktn2.webp",
  "images/activities/img_hcktn3.webp",
  "images/activities/img_hcktn4.webp",
  "images/activities/img_ughHeung1.webp",
  "images/activities/img_ughHeung2.webp",
  "images/activities/img_ughHeung3.webp",
  "images/activities/img_network1.webp",
  "images/activities/img_network2.webp",
  // "images/activities/img_winterProj1.webp",
  // "images/activities/img_winterProj2.webp",
  // "images/activities/img_winterProj3.webp",
  "images/activities/img_social1.webp",
  "images/activities/img_social2.webp",
  "images/activities/img_social3.webp"
];

export const imgToIndexMap = [
  { min: 0, max: 1, index: ActivityType.EDUCATION },
  { min: 2, max: 4, index: ActivityType.MENTORING },
  { min: 5, max: 8, index: ActivityType.HACKATHON },
  { min: 9, max: 11, index: ActivityType.UGHHEUNGCON },
  { min: 12, max: 13, index: ActivityType.NETWORKING },
  { min: 14, max: 16, index: ActivityType.SOCIAL }
];

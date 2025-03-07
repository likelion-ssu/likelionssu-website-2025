import { ActivityType } from "../type/activity";

export const imgPaths = [
  "images/activities/img_edu1.webp",
  "images/activities/img_edu2.webp",
  "images/activities/img_hcktn1.webp",
  "images/activities/img_hcktn2.webp",
  "images/activities/img_hcktn3.webp",
  "images/activities/img_hcktn4.webp",
  "images/activities/img_ughHeung1.webp",
  "images/activities/img_ughHeung2.webp",
  "images/activities/img_ughHeung3.webp",
  "images/activities/img_network1.webp",
  "images/activities/img_network2.webp",
  "images/activities/img_winterProj1.webp",
  "images/activities/img_winterProj2.webp",
  "images/activities/img_winterProj3.webp",
  "images/activities/img_social1.webp",
  "images/activities/img_social2.webp",
  "images/activities/img_social3.webp"
];

export const imgToIndexMap = [
  { min: 0, max: 1, index: ActivityType.EDUCATION },
  { min: 2, max: 5, index: ActivityType.HACKATHON },
  { min: 6, max: 8, index: ActivityType.UGHHEUNGCON },
  { min: 9, max: 10, index: ActivityType.NETWORKING },
  { min: 11, max: 13, index: ActivityType.WINTERPROJECT },
  { min: 14, max: 16, index: ActivityType.SOCIAL }
];

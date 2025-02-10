import { ActivityType } from "../type/activity";

export const imgPaths = [
  "images/activities/img_edu1.png",
  "images/activities/img_edu2.png",
  "images/activities/img_hcktn1.png",
  "images/activities/img_hcktn2.png",
  "images/activities/img_hcktn3.png",
  "images/activities/img_ughHeung1.png",
  "images/activities/img_ughHeung2.png",
  "images/activities/img_network1.png",
  "images/activities/img_network2.png",
  "images/activities/img_winterProj1.png",
  "images/activities/img_winterProj2.png",
  "images/activities/img_social1.png",
  "images/activities/img_social2.png"
];

export const imgToIndexMap = [
  { min: 0, max: 1, index: ActivityType.EDUCATION },
  { min: 2, max: 4, index: ActivityType.HACKATHON },
  { min: 5, max: 6, index: ActivityType.UGHHEUNGCON },
  { min: 7, max: 8, index: ActivityType.NETWORKING },
  { min: 9, max: 10, index: ActivityType.WINTERPROJECT },
  { min: 11, max: 12, index: ActivityType.SOCIAL }
];

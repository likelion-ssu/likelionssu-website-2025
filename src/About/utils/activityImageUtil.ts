import { ActivityType } from "../type/activity";
import { imgPaths, imgToIndexMap } from "../constants/activityArrays";

export const findActivityType = (imgIdx: number): ActivityType => {
  const found = imgToIndexMap.find(range => imgIdx >= range.min && imgIdx <= range.max);
  return found ? found.index : ActivityType.EDUCATION; // 기본값 설정
};

export const getImagesByActivityType = (activityType: ActivityType): string[] => {
  const mapping = imgToIndexMap.find(entry => entry.index === activityType);
  if (!mapping) return [];

  return imgPaths.slice(mapping.min, mapping.max + 1);
};

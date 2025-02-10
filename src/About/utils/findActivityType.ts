import { ActivityType } from "../type/activity";
import { imgToIndexMap } from "../constants/activityArrays";

export const findActivityType = (imgIdx: number): ActivityType => {
  console.log("이미지 인덱스 출력: ", imgIdx);
  const found = imgToIndexMap.find(range => imgIdx >= range.min && imgIdx <= range.max);
  return found ? found.index : ActivityType.EDUCATION; // 기본값 설정
};

import styled from "styled-components";
import { ACTIVITY_LIST } from "../constants/activityList";
import ActivityItem from "./ActivityItem";
import { ActivityType } from "../type/activity";

// desktop: img 인덱스를 사용해서 알맞은 텍스트를 매핑했지만
// mobile: 텍스트의 인덱스를 사용해서 이미지를 알맞게 매핑해야됨.
const ActivitySectionMobile = () => {
  return (
    <Container>
      {Object.entries(ACTIVITY_LIST)
        .sort(([, a], [, b]) => a.order - b.order)
        .map(([key, value]) => {
          const activityKey = key as ActivityType;
          return (
            <ActivityItem index={activityKey} title={value.title} description={value.description} />
          );
        })}
    </Container>
  );
};

export default ActivitySectionMobile;

const Container = styled.div`
  width: 100%;
  margin-bottom: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  gap: 7rem;
`;

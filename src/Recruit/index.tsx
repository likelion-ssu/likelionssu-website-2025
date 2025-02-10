import TimerActive from "./components/TimerSectionActive";
import Timer from "./components/TimerSection";
import Body from "./components/BodySection";
import Question from "./components/QuestionSection";
import styled from "styled-components";
import { useRef } from "react";
import { useCountDownStore } from "../common/components/CountDown";

const Recruit = () => {
  const { isExpired } = useCountDownStore();
  console.log("isExpired:", isExpired);
  const snapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <SnapContainer ref={snapContainerRef}>
        {isExpired ? <Timer /> : <TimerActive snapContainerRef={snapContainerRef} />} <Body />
        <Question />
      </SnapContainer>
    </div>
  );
};

export default Recruit;

const SnapContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

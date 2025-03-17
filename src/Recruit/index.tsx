import TimerActive from "./components/TimerSectionActive";
import Timer from "./components/TimerSection";
import Body from "./components/BodySection";
import Question from "./components/QuestionSection";
import styled from "styled-components";
import { useRef } from "react";
import { useCountDownStore } from "../common/components/CountDown";
import TopBar from "../common/components/TopBar";

const Recruit = () => {
  const { isExpired } = useCountDownStore();
  const snapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <TopBar type="recruit" />
      <Wrapper ref={snapContainerRef}>
        <SnapContainer>
          {!isExpired ? (
            <Timer snapContainerRef={snapContainerRef} />
          ) : (
            <TimerActive snapContainerRef={snapContainerRef} />
          )}
          <Body />
          <Question />
        </SnapContainer>
      </Wrapper>
    </Container>
  );
};

export default Recruit;

const SnapContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

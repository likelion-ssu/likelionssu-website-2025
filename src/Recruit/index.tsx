import TimerActive from "./components/TimerSectionActive";
import Timer from "./components/TimerSection";
import Body from "./components/BodySection";
import Question from "./components/QuestionSection";

import { useCountDownStore } from "../common/components/CountDown";
import TopBar from "../common/components/TopBar";

const Recruit = () => {
  const { isExpired } = useCountDownStore();
  console.log("isExpired:", isExpired);

  return (
    <div>
      <TopBar />
      {isExpired ? <Timer /> : <TimerActive />}
      <Body />
      <Question />
    </div>
  );
};

export default Recruit;

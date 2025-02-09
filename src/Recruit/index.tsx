import TimerActive from "./components/TimerSectionActive";
import Timer from "./components/TimerSection";
import Body from "./components/BodySection";
import Question from "./components/QuestionSection";

import { useCountDownStore } from "../common/components/CountDown";
import TopBar from "../common/components/TopBar";
import Footer from "../common/components/Footer";

const Recruit = () => {
  const { isExpired } = useCountDownStore();
  console.log("isExpired:", isExpired);

  return (
    <div>
      <TopBar type="recruit" />
      {isExpired ? <Timer /> : <TimerActive />}
      <Body />
      <Question />
      <Footer />
    </div>
  );
};

export default Recruit;

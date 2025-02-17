import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = () => {
  const location = useLocation();

  // 부드러운 스크롤 적용
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = location.hash.replace("#", ""); // #id 부분 추출
    if (!hash) return;

    const element = document.getElementById(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // 조금의 딜레이 추가
    }
  }, [location.hash]); // URL 해시 변경될 때 실행

  return null;
};

export default useScrollToElement;

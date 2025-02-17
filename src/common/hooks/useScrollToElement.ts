import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToElement = () => {
  const location = useLocation();

  // 부드러운 스크롤 적용
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = location.hash.replace("#", "");
    if (!hash) return;

    const element = document.getElementById(hash);
    const snapContainer = document.getElementById("snap-container");
    // 스냅을 컨트롤하는 부모 컨테이너의 id를 명시

    if (element && snapContainer) {
      // 스냅을 일시적으로 비활성화
      snapContainer.style.scrollSnapType = "none";

      setTimeout(() => {
        window.history.replaceState(null, "", window.location.pathname);
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // 스냅을 다시 활성화
        setTimeout(() => {
          snapContainer.style.scrollSnapType = "y mandatory";
        }, 500);
      }, 100);
    }
  }, [location.hash]);

  return null;
};

export default useScrollToElement;

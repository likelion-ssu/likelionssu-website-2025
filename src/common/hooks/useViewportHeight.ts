import { useEffect } from "react";

const setVh = (): void => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const useViewportHeight = (): void => {
  useEffect(() => {
    setVh();
    window.addEventListener("resize", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
    };
  }, []);
};

export default useViewportHeight;

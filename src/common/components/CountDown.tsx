import { useState, useEffect } from "react";
import { create } from "zustand";

interface CountDownState {
  targetDate: Date;
  isExpired: boolean;
  setTargetDate: (date: Date) => void;
  updateExpired: (status: boolean) => void;
}

export const useCountDownStore = create<CountDownState>(set => ({
  targetDate: new Date("2025-02-07 00:00:00"),
  isExpired: false,
  setTargetDate: date => set({ targetDate: date }),
  updateExpired: status => set({ isExpired: status })
}));

// 카운트다운 훅
const useCountDown = () => {
  const { targetDate, isExpired, updateExpired } = useCountDownStore();
  const countDownDate = targetDate.getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = countDownDate - new Date().getTime();
      setCountDown(timeLeft);
      const expired = timeLeft <= 0;

      updateExpired(expired);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate, updateExpired]);

  return {
    days: Math.max(0, Math.floor(countDown / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    minutes: Math.max(0, Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: Math.floor((countDown % (1000 * 60)) / 1000),
    isExpired
  };
};

export default useCountDown;

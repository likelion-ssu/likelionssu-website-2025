const colors = {
  BG_White: "#F6F7F9",
  "90": "#1A1A1A",
  "60": "#585858",
  "30": "#9A9A9A",
  "10": "#C6C6C6",

  Black: "#000000",
  White: "#ffffff",

  Main1: "#1CFFFF",
  Main2: "#BAB0FF"
};

const fonts = {
  Pretendard: {
    title1: {
      fontSize: "7rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 600,
      fontStyle: "normal",
      letterSpacing: "0.07rem",
      lineHeight: "8.4rem"
    },
    title3: {
      fontSize: "4rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0.04rem",
      lineHeight: "4.8rem"
    },
    subtitle2: {
      fontSize: "3rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "4rem"
    },
    subtitle3: {
      fontSize: "3rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "3.6rem"
    },
    body2: {
      fontSize: "2.2rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "2.64rem"
    },
    body3: {
      fontSize: "2rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "3.2rem"
    },
    body4: {
      fontSize: "1.8rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "-0.018rem",
      lineHeight: "2.16rem"
    },
    body5: {
      fontSize: "1.6rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "-0.016rem",
      lineHeight: "2.6rem"
    },
    body6: {
      fontSize: "1.4rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.68rem"
    },
    body7: {
      fontSize: "1.2rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.44rem"
    },
    button1: {
      fontSize: "1.8rem",
      fontFamily: "Pretendard Variable",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "2.16rem"
    }
  },
  Suit: {
    subtitle1: {
      fontSize: "3rem",
      fontFamily: "SUIT Variable",
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: "0.06rem",
      lineHeight: "3.6rem"
    },
    subtitle2: {
      fontSize: "2.2rem",
      fontFamily: "SUIT Variable",
      fontWeight: 700,
      fontStyle: "normal",
      letterSpacing: "0.044rem",
      lineHeight: "2.64rem"
    },
    body1: {
      fontSize: "2rem",
      fontFamily: "SUIT Variable",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0.04rem",
      lineHeight: "1.8rem"
    },
    body3: {
      fontSize: "1.6rem",
      fontFamily: "SUIT Variable",
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: "0.032rem",
      lineHeight: "1.92rem"
    },
    body4: {
      fontSize: "1.4rem",
      fontFamily: "SUIT Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.68rem"
    },
    body5: {
      fontSize: "1.2rem",
      fontFamily: "SUIT Variable",
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "1.44rem"
    }
  }
};

const sizes = {};

const theme = {
  colors,
  fonts,
  sizes
};

export default theme;

// theme 객체의 타입을 자동으로 추론하여 Theme 타입으로 지정
// 전역에서 자동완성으로 스타일을 사용하기 위함
export type Theme = typeof theme;

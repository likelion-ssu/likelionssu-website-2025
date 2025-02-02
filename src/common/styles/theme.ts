const colors = {
  // 디자인팀에서 전달받아 사용
  black: "#000000",
  white: "#ffffff",
};

const fonts = {};

const sizes = {};

const theme = {
  colors,
  fonts,
  sizes,
};

export default theme;

// theme 객체의 타입을 자동으로 추론하여 Theme 타입으로 지정
// 전역에서 자동완성으로 스타일을 사용하기 위함
export type Theme = typeof theme;

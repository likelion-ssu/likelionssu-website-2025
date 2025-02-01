import type { Theme } from "./theme";

// styled-components의 DefaultTheme을 확장해 우리가 만든 Theme 타입을 상속받아 포함하도록 한다.
// 원래는 Theme 타입이 수정될 때마다 이 정의도 수정해야 하는데,
// theme.ts에서 extends Theme 를 사용하여 Theme 타입의 변경 사항을 자동으로 반영할 수 있다.
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

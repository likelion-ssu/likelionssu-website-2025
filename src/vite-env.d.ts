/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg?react" {
  import { FunctionComponent, SVGProps } from "react";
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}

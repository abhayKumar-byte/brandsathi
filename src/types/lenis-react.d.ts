declare module "lenis/dist/lenis-react" {
  import { ComponentType, ReactNode } from "react";

  export interface ReactLenisProps {
    children?: ReactNode;
    root?: boolean;
    options?: Record<string, unknown>;
  }

  export const ReactLenis: ComponentType<ReactLenisProps>;
}

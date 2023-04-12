import { EasingType, HNode, LoopBehaviour } from "@hiberworld/code-kit";

type NodePlacement =
  | {
      animate?: Partial<{
        x: number[];
        y: number[];
        z: number[];
      }>;
      animationOptions?: Partial<{
        duration: number;
        loop: LoopBehaviour;
        easing: EasingType;
        startAt: number;
        steps: number[];
      }>;
    } & Partial<HNode>;
export type NodeMap = NodePlacement[];

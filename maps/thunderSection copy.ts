import { NodeMap } from "../types";

const balloon: NodeMap = [
  { x: 43, z: -8 },
  { x: 7, z: 4 },
];
const planks: NodeMap = [{ x: 20, z: 10, y: 4 }];
const box: NodeMap = [{ x: 20, z: 10, y: 4 }];
const barrel: NodeMap = [{ x: 24, z: 8, y: 2 }];
const bench: NodeMap = [{ x: 22, z: 8, y: 2, rotZ: 110 }];
const anchor: NodeMap = [{ x: 16, z: -3.4, y: 4 }];
const cloud: NodeMap = [{ z: -10, scale: 5, x: 25, scaleY: 8, y: 1 }];

const thunder: NodeMap = [
  {
    x: 80,
    z: 0,
    animate: { z: [18, 0] },
    animationOptions: { duration: 3, easing: "LINEAR" },
  },
];

export const windSectionMap = {
  cloud,
  box,
  balloon,
  barrel,
  anchor,
  thunder,
  planks,
  bench,
};

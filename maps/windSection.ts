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
const cloud: NodeMap = [
  { z: -25, scale: 8, x: 30, scaleY: 10, rotY: 50, y: 1 },
  { z: -15, scale: 8, x: 15, scaleY: 20, y: 1 },
  {
    z: -37,
    scale: 10,
    x: 40,
    scaleY: 20,
    y: 1,
    rotY: -60,
    // material: "t_rock_03",
  },
];

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

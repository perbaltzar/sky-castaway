import { NodeMap } from "../types";

const balloon: NodeMap = [
  { x: 10, z: 0 },
  { x: 18, z: 5 },
  { x: 37, z: -7 },
  { x: 45, z: -15 },
  { x: 88, z: -4 },
];

const box: NodeMap = [{ x: 16, z: -10, y: 2, rotX: 3, rotZ: 70, rotY: 30 }];
const barrel: NodeMap = [
  { x: 16.5, z: -6, y: 0 },
  { x: 16.5, z: -7.5, y: 0.4 },
];
const anchor: NodeMap = [{ x: 22, z: -2.4, y: 4, rotX: -30 }];
const cloud: NodeMap = [
  { z: -10, scale: 5, x: 25, scaleY: 14, y: 1 },
  { z: -7, scale: 5, x: 25, scaleY: 7, y: -0 },
  { z: -14, scale: 5, x: 25, scaleY: 7, y: -0, rotY: 360 * Math.random() },
  { z: -20, scale: 5, x: 15, scaleY: 7, y: -1 },
  { z: 20, scale: 5, x: 10, scaleY: 8, y: 3 },
  { z: 18, scale: 5, x: 5, scaleY: 8, y: 2 },
  { z: 13, scale: 5, x: 0, scaleY: 8, y: 2, rotY: 200 },
  { z: 7, scale: 5, x: -12, scaleY: 10, y: 1 },
  { z: -6, scale: 7, scaleX: 3, x: -10, scaleY: 7, y: 1 },
  { z: -20, x: 0, scale: 4, scaleY: 7, y: 1 },
  { z: -18, scale: 4, x: -7, scaleY: 12, y: 1 },
  { z: 9, scale: 4, x: 10, scaleY: 7, y: 1 },
  { z: 18, scale: 4, x: 22, scaleY: 8, y: -1 },
  { z: 18, scale: 4, x: 28, scaleY: 8, y: -2 },
  { z: 20, scale: 4, x: 35, scaleY: 8, y: 1 },
  { z: 10, scale: 8, scaleX: 4, x: 45, scaleY: 8, y: 1, rotY: 180 },
  { z: -33, scale: 4, scaleX: 10, x: 40, scaleY: 8, y: -1, rotY: 40 },
  { z: -28, scale: 4, scaleX: 5, x: 30, scaleY: 12, y: -1, rotY: 40 },
  { z: -35, scale: 4, scaleX: 5, x: 40, scaleY: 14, y: -1, rotY: 110 },
  { z: -45, scale: 10, scaleX: 6, x: 75, scaleY: 8, y: -1, rotY: 80 },
  { z: -45, scale: 8, scaleX: 6, x: 85, scaleY: 12, y: -1, rotY: 80 },
  { z: 0, scale: 7, scaleX: 4, x: 50, scaleY: 15, y: 1.5, rotY: 360 },
  { z: -29, scale: 7, scaleX: 4, x: 50, scaleY: 7, y: 1.5, rotY: 40 },
  { z: -29, scale: 4, scaleX: 9, x: 60, scaleY: 9, y: 1.5, rotY: 120 },
];
const thunder: NodeMap = [{ x: 42, z: 9, y: 13 }];

export const balloonSectionMap = {
  cloud,
  box,
  balloon,
  barrel,
  anchor,
  thunder,
};

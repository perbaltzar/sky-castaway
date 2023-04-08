import { NodeMap } from "../types";

const balloon: NodeMap = [
  { x: 13, z: -2 },
  { x: 20, z: 1.5 },
  { x: 25, z: 2 },
  { x: 30, z: 6.5 },
];

const box: NodeMap = [{ x: 14, z: -10, y: 2 }];
const barrel: NodeMap = [{ x: 14, z: -6, y: -1 }];
const anchor: NodeMap = [{ x: 16, z: -3.4, y: 4 }];
const cloud: NodeMap = [
  { z: -10, scale: 5, x: 25, scaleY: 8, y: 1 },
  { z: -15, scale: 5, x: 15, scaleY: 7, y: 1, rotY: 190 },
  { z: -15, scale: 5, x: 20, scaleY: 12, y: 1, rotY: 100 },
  { z: 15, scale: 5, x: 20, scaleY: 12, y: 1, rotY: 10 },
  { z: 12, x: 10, y: 1, scale: 3, scaleZ: 8, scaleY: 12, rotY: 90 },
  { z: 6, x: 3, y: 1, scale: 3, scaleZ: 3, scaleY: 7, rotY: 140 },
  { z: -4, x: 30, y: 1, scale: 5, scaleZ: 4, scaleY: 7, rotY: 140 },
];

const thunder: NodeMap = [
  { x: 10, z: 2 },
  { x: 20, z: -3 },
  { x: 21, z: 5 },
  { x: 30, z: 10 },
  { x: 30, z: 3 },
];

export const thunderSectionMap = {
  cloud,
  box,
  balloon,
  barrel,
  anchor,
  thunder,
};

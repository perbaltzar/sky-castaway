import { NodeMap } from "../types";

const balloon: NodeMap = [
  { x: 13, z: -2 },
  { x: 25, z: 2 },
  { x: 30, z: 6.5 },
  { x: 55, z: 10 },
  { x: 65, z: 10 },
  { x: 75, z: 12 },
];
const planks: NodeMap = [{ x: 20, z: 10, y: 4 }];
const box: NodeMap = [{ x: 20, z: 10, y: 4 }];
const barrel: NodeMap = [
  { x: 24, z: 8, y: 2 },
  { x: 20, z: 8.5, y: 1, rotX: 30 },
];
const bench: NodeMap = [
  { x: 22, z: 8, y: 2, rotZ: 110 },
  { x: 28, z: 0, y: 2, rotX: 30 },
];
const anchor: NodeMap = [{ x: 16, z: -3.4, y: 4 }];
const cloud: NodeMap = [
  { z: -10, scale: 5, x: 25, scaleY: 8, y: 1 },
  { z: -15, scale: 5, x: 15, scaleY: 7, y: 1, rotY: 190 },
  { z: -15, scale: 5, x: 20, scaleY: 12, y: 1, rotY: 100 },
  { z: 15, scale: 5, x: 20, scaleY: 12, y: 1, rotY: 10 },
  { z: 12, x: 10, y: 1, scale: 3, scaleZ: 8, scaleY: 12, rotY: 90 },
  { z: 6, x: 3, y: 1, scale: 3, scaleZ: 3, scaleY: 7, rotY: 140 },
  { z: -4, x: 30, y: 1, scale: 5, scaleZ: 4, scaleY: 7, rotY: 140 },
  { z: -4, x: 40, y: 1, scale: 5, scaleZ: 9, scaleY: 9, rotY: 280 },
  { z: 24, x: 40, y: 1, scale: 5, scaleZ: 9, scaleY: 9, rotY: 250 },
  { z: -4, x: 50, y: 1, scale: 5, scaleZ: 5, scaleY: 9, rotY: 280 },
  { z: 24, x: 50, y: 1, scale: 5, scaleZ: 5, scaleY: 19, rotY: 80 },
  { z: 24, x: 60, y: 1, scale: 5, scaleZ: 5, scaleY: 10, rotY: 180 },
  { z: 24, x: 70, y: 1, scale: 5, scaleZ: 4, scaleY: 12, rotY: 380 },
  { z: 20, x: 80, y: 1, scale: 5, scaleZ: 4, scaleY: 9, rotY: 200 },
  { z: -7, x: 60, y: 1, scale: 4, scaleZ: 4, scaleY: 9, rotY: 380 },
  { z: -5, x: 65, y: 1, scale: 4, scaleZ: 8, scaleY: 19, rotY: 180 },
  { z: -0, x: 80, y: 1, scale: 8, scaleZ: 4, scaleY: 10, rotY: 380 },
];

const thunder: NodeMap = [
  { x: 12, z: 2 },
  { x: 17, z: -5 },
  {
    x: 50,
    z: 0,
    animate: { z: [0, 18] },
    animationOptions: { duration: 4, easing: "LINEAR" },
  },
  {
    x: 60,
    z: 0,
    animate: { z: [18, 0] },
    animationOptions: { duration: 3.8, easing: "LINEAR" },
  },
  {
    x: 70,
    z: 0,
    animate: { z: [0, 18] },
    animationOptions: { duration: 3.5, easing: "LINEAR" },
  },
  {
    x: 80,
    z: 0,
    animate: { z: [18, 0] },
    animationOptions: { duration: 3, easing: "LINEAR" },
  },
];

export const thunderSectionMap = {
  cloud,
  box,
  balloon,
  barrel,
  anchor,
  thunder,
  planks,
  bench,
};

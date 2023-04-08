import { create } from "@hiberworld/code-kit";
import { createClouds } from "./clouds";
import { createFloatBlock } from "./flyBlock";

export const createSection = ({
  scaleX,
  scaleZ,
  debug,
  z = 0,
  x = 0,
  rotation = 0,
}: {
  scaleX: number;
  scaleZ: number;
  debug?: boolean;
  z?: number;
  x?: number;
  rotation?: number;
}) => {
  const section = create({ z, x, rotY: rotation });

  const floatBlock = createFloatBlock({ debug });

  // Since the floatBlock is 2x2, we need to divide the scale by 2
  section.add({
    ...floatBlock,
    x: scaleX / 2,
    scaleX: scaleX / 2,
    scaleZ: scaleZ / 2,
  });

  const clouds = createClouds({
    xLength: scaleX,
    zLength: scaleZ,
    quantity: 1,
  });

  section.add(clouds);
  return section;
};

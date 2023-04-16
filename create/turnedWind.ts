import { create, Material } from "@hiberworld/code-kit";
import { ColliderForm } from "./flyBlock";

export const createTurnedWind = ({
  debug,
  rotation,
  length,
  numberOfRings,
}: {
  debug?: boolean;
  rotation: number;
  length: number;
  numberOfRings: number;
}) => {
  const group = create({ rotX: 90, y: 4, z: 0 });
  group.addMany(numberOfRings ?? 0, (index) => {
    const lastDegree = rotation;
    const degrees = (rotation / numberOfRings) * index;
    const angle = degrees * (Math.PI / 180);
    const scaleY = length / numberOfRings;
    const x = (1 - Math.cos(angle)) * length;
    const y = Math.sin(angle) * length;
    const z = 0;
    const windDirection = rotation > 0 ? 1 : -1;

    const lastX = (1 - Math.cos(lastDegree)) * length;
    const lastY = Math.sin(lastDegree) * length;

    const rotateOffset = (360 / 5 / 15) * index;
    const group = create();
    const thrust = create({
      colliderIsSensor: { dummy: false },
      accelerationVolume: {
        maxSpeed: 20,
        stickToCenterSpeedFactor: 1,
        dir: [0, windDirection, 0],
        stickToCenterDamping: 10000,
        acceleration: 200,
      },
      x,
      z,
      y,
      scale: 3,
      scaleY,
      rotZ: -degrees,
      collider: {
        canGenerateEvent: true,
        collider: {
          form: ColliderForm.mesh,
          meshId: "en_b_cylinder_01",
          size: [1, 1, 1],
          offset: [0, 0, 0],
        },
        collisionMask: 32,
      },
      rendering: debug
        ? {
            meshID: "en_b_cylinder_01",
            materialID: "glass" as Material,
          }
        : undefined,
    });
    const visual = create({
      scale: 3,
      x,
      z,
      y,
      rotZ: -degrees,
      rendering: {
        meshID: "en_b_torus_thin_01",
        materialID: "particle_cloud" as Material,
      },
    }).animate(
      {
        // x: [0, 4, 8
        scale: [0.8, 1.2, 0.8],
        // y: [0, -lastY / 2, -lastY],
        // x: [0, -lastX / 2, -lastX],
        rotY: [0 - rotateOffset, 180 + rotateOffset, 360 + rotateOffset],
      },
      {
        loop: "RESTART",
        duration: 2,
        startAt: (1 / 15) * index,
        easing: "LINEAR",
      }
    );
    return group.add(thrust).add(visual);
  });

  return group;
};

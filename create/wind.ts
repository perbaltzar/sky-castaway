import { create, Material } from "@hiberworld/code-kit";
import { ColliderForm } from "./flyBlock";

export const createWind = ({ debug }: { debug?: boolean }) => {
  const group = create({
    rotX: 90,
    y: 4,
  });
  const audio = create({
    y: 13,
    audio: {
      id: "a_fx_blizzard_01",
      volume: 0.3,
      looping: true,
      attenuationModel: "LINEAR_DISTANCE",
      startPlayingDist: 70,
      maxAttenuationDist: 50,
    },
  });
  group.add(audio);
  group.addMany(18, (index) => {
    const rotateOffset = (360 / 5 / 15) * index;
    return create({
      scale: 3,
      y: (18 / 10) * index,
      rendering: {
        meshID: "en_b_torus_thin_01",
        materialID: "particle_cloud" as Material,
      },
    }).animate(
      {
        scale: [0.8, 1.2, 0.8],
        rotY: [0 + rotateOffset, 180 + rotateOffset, 360 + rotateOffset],
      },
      {
        loop: "RESTART",
        duration: 2,
        startAt: (1 / 15) * index,
        easing: "LINEAR",
      }
    );
  });
  const wind = create({
    colliderIsSensor: { dummy: false },
    accelerationVolume: {
      maxSpeed: 20,
      stickToCenterSpeedFactor: 1000,
      dir: [0, 1, 0],
      stickToCenterDamping: 100,
      acceleration: 200,
    },

    scale: 3,
    scaleY: 10,
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
          materialID: "palette_01_green",
        }
      : undefined,
  });

  group.add(wind);

  return group;
};

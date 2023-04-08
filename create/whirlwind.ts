import { create, Material } from "@hiberworld/code-kit";
import { placeInCircle } from "@hiberworld/code-kit-utils";
import { ColliderForm } from "./flyBlock";

export const createWhirlwind = () => {
  const whirlwind = create({ scale: 2 });

  whirlwind.add(
    ...placeInCircle({
      numberOfItems: 20,
      radius: 3,
      onEach: (data) =>
        create({
          colliderIsSensor: { dummy: false },
          accelerationVolume: {
            maxSpeed: 12,
            stickToCenterSpeedFactor: 1000,
            dir: [0, 1, 0],
            stickToCenterEnabled: true,
            stickToCenterDamping: 100,
            acceleration: 200,
          },
          scaleY: 0.5,
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
          // rendering: {
          //   meshID: "en_b_cylinder_01",
          //   materialID: "t_bark_03",
          // },
          rotX: 90,
          transform: data,
        }),
    })
  );
  whirlwind.addMany(25, (index) =>
    create()
      .add(
        create({
          y: 0 - index * 0.5,
          rendering: {
            meshID: "en_b_torus_thin_01",
            materialID: "particle_cloud" as Material,
          },
          scale: 4 - index * 0.2,
          z: 0.7,
        })
      )
      .animate(
        { rotY: [0, -180, -360] },
        {
          easing: "LINEAR",
          loop: "RESTART",
          duration: 1,
          startAt: index * 0.08,
        }
      )
  );

  whirlwind.animate({ x: [-20, 20] }, { easing: "LINEAR", duration: 5 });

  return whirlwind;
};

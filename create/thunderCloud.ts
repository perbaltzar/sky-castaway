import { create, Material } from "@hiberworld/code-kit";
import { RandomSeed } from "@hiberworld/code-kit-utils";
import { ColliderForm } from "./flyBlock";

const LIGHTNING_MATERIAL: Material = "palette_01_yellow";
export const createThunderCloud = (options?: { debug?: boolean }) => {
  const seed = new RandomSeed();
  const value = seed.getValue();
  const randomFromRange = seed.getValue(1, 2);
  const randomFromRange2 = seed.getValue(1, 2);
  console.log(value, randomFromRange, randomFromRange2);
  const cloudGroup = create({ y: 6 });
  const spinGroup = create();
  const rotateGroup = create();
  const killCollider = create({
    colliderIsSensor: { dummy: false },
    collider: {
      canGenerateEvent: true,
      collider: {
        form: ColliderForm.cylinder,
        offset: [0, 1, 0],
        meshId: "",
        size: [1, 1, 1],
      },
    },
    rendering: options?.debug
      ? {
          meshID: "en_b_cube_01",
          materialID: "palette_01_yellow",
        }
      : undefined,
    y: -8,
    scale: 1.5,
    scaleY: 4,
    dealDamageOnTouch: { amount: 90 },
  });
  const lightning = create({ rotZ: 30, x: -1, y: -0.5 })
    .add(
      create({
        prefabId: "cube_01",
        material: LIGHTNING_MATERIAL,
        scale: 0.2,
        scaleY: 1.4,
        z: 0,
        x: 1,
        y: -2,
      })
    )
    .add(
      create({
        prefabId: "cube_01",
        material: LIGHTNING_MATERIAL,
        scale: 0.2,
        scaleY: 0.2,
        z: 0,
        x: 0.6,
        y: -2,
      })
    )
    .add(
      create({
        prefabId: "wedge_45",
        material: LIGHTNING_MATERIAL,
        scale: 0.2,
        scaleY: 1.4,
        x: 0.2,
        y: -1.6,
        rotY: 90,
        rotX: 180,
      })
    )
    .add(
      create({
        prefabId: "wedge_45",
        material: LIGHTNING_MATERIAL,
        scale: 0.2,
        scaleY: 1.4,
        x: 1.4,
        y: 0.8,
        rotY: -90,
        rotX: 180,
      })
    )
    .add(
      create({
        pointlight: {
          color: [1, 1, 0.5],
          strength: 3,
          radius: 50,
          offset: [0, -1, 1],
        },
      })
    )
    .animate(
      { x: [0, 10000, 0, 10000, 0, 10000] },
      {
        duration: 20,
        steps: [0, 0.5, 0.6, 0.65, 0.8, 1],
        easing: "EASE_STEP_HOLD_NEXT",
      }
    );
  const darkCloud = create({
    prefabId: "snow_pile_01",
    material: "t_asphalt_01",
    scale: 1.2,
    scaleY: 2,
    z: 0,
  });

  // rotateGroup.animate(
  //   { z: [0, 150] },
  //   { easing: "LINEAR", loop: "REVERSE", duration: 17 }
  // );

  spinGroup.animate(
    { rotY: [0, 180, 360] },
    { easing: "LINEAR", loop: "RESTART", duration: 7 }
  );
  spinGroup.add(darkCloud).add(lightning);
  rotateGroup.add(spinGroup);
  rotateGroup.add(killCollider);
  return cloudGroup.add(rotateGroup);
};

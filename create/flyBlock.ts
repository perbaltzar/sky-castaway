import { create, Prefab } from "@hiberworld/code-kit";
export enum ColliderForm {
  box = "box",
  sphere = "sphere",
  capsule = "capsule",
  cylinder = "cylinder",
  mesh = "mesh",
}

export const createFloatBlock = ({ debug }: { debug?: boolean }) => {
  return create({
    collider: {
      canGenerateEvent: true,
      collisionMask: 32,
      collider: {
        form: ColliderForm.box,
        offset: [0, 1, 0],
        meshId: "",
        size: [1, 1, 1],
      },
    },
    y: 4.5,
    accelerationVolume: {
      dir: [0, 1, 0],
    },
    vfxInVolume: {
      prefabId: "fx_balloons_01" as Prefab,
    },
    rendering: debug
      ? {
          meshID: "en_b_cube_01",
          materialID: "palette_01_pink",
        }
      : undefined,
  }).animate({ y: [0, 0.2] }, { easing: "EASE_IN_OUT_QUAD" });
};

export const flyBlock = () => {
  return create({
    collider: {
      canGenerateEvent: true,
      collisionMask: 32,
      collider: {
        form: ColliderForm.box,
        offset: [0, 1, 0],
        meshId: "",
        size: [1, 1, 1],
      },
    },
    accelerationVolume: {
      dir: [0, 1, 0],
    },
    rendering: {
      meshID: "en_b_cube_01",
      materialID: "palette_01_blue",
    },
    rotX: -15,
    transform: { pos: [0, 5.5, 0], scale: [14, 1, 14] },
  });
};

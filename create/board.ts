import { create, Material } from "@hiberworld/code-kit";

const propellerMaterial: Material = "t_metal_01";

export const createBoard = (options?: {
  spawnpoint?: boolean;
  checkpoint?: boolean;
}) => {
  const boardRotation = 10;
  const group = create({ rotZ: boardRotation, rotY: -40 });

  const board = create({ prefabId: "en_m_wooden_platform_01_ceiling" });

  const propeller = create({ rotZ: -boardRotation });
  const rotateGroup = create();

  rotateGroup.add({
    prefabId: "disc_02",
    scale: 0.1,
    scaleY: 1,
    scaleX: 0.5,
    material: propellerMaterial,
    x: 1,
    y: 3,
  });
  rotateGroup.add({
    prefabId: "disc_02",
    scale: 0.1,
    material: propellerMaterial,
    scaleY: 1,
    scaleX: 0.5,
    x: -1,
    y: 3,
  });

  rotateGroup.animate(
    { rotY: [0, 180, 360] },
    { duration: 0.35, easing: "LINEAR", loop: "RESTART" }
  );

  propeller.add({
    prefabId: "cylinder_02",
    scaleY: 3,
    material: propellerMaterial,
  });
  propeller.add(rotateGroup);

  group.add(board);
  // group.add(hangingBoard);
  group.add({ ...board, x: 3.8, rotY: 180 });
  group.add({ ...board, x: 3.8, z: 4, rotY: 180 });

  group.add({
    ...propeller,
    y: 0.4,
    z: -1.8,
    x: -1.8,
    rotZ: -boardRotation,
  });
  group.add({
    ...propeller,
    y: 0.4,
    z: 5.5,
    x: 5.5,
    rotZ: -boardRotation,
  });
  group.add({
    ...propeller,
    y: 0.4,
    z: -1.5,
    x: 5.5,
    rotZ: -boardRotation,
  });

  if (options?.checkpoint) {
    const checkPoint = create({ prefabId: "checkpoint_01" });
    group.add({ ...checkPoint, y: 0.6, z: 1, x: 3, rotY: 180 });
  }

  if (options?.spawnpoint) {
    group.add({ prefabId: "gpl_spawn_point_01", rotY: -90, z: 0, x: 0 });
  }
  return group;
};

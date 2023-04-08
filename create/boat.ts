import { create, Material } from "@hiberworld/code-kit";

const material: Material = "t_planks_01";
const detailMateril: Material = "t_old_planks_01";

export const createBoat = () => {
  const group = create({ y: 2, x: 3 });

  const bottomPiece = create({
    prefabId: "quarter_pipe_wall_01",
    material,
    scale: 0.5,
    scaleX: 1,
    scaleY: 1,
    rotX: 90,
  });
  const backPiece = create({
    prefabId: "quarter_sphere_01",
    material,
    rotY: -90,
    rotX: 180,
    scale: 1,
    scaleX: 0.5,
    scaleY: 0.5,
    z: 2.5,
    y: 0.5,
  });
  const sitBoard = create({
    prefabId: "cube_02",
    material: detailMateril,
    scaleY: 0.1,
    scaleX: 3.1,
    x: -0.95,
    y: 0.2,
    z: 1.5,
  });

  group.add(bottomPiece);
  group.add({ ...bottomPiece, z: -2 });
  group.add({ ...bottomPiece, rotY: 180, x: -2, z: 2 });
  group.add({ ...bottomPiece, rotY: 180, x: -2, z: 0 });

  group.add(backPiece);
  group.add({
    ...backPiece,
    rotY: 180,
    scale: 0.5,
    scaleX: 1,
    x: -2,
    z: 2.5,
  });

  group.add(sitBoard);
  return group;
};

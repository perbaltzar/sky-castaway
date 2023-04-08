import { create, Material } from "@hiberworld/code-kit";

const material: Material = "t_metal_01";

export const createAnchor = () => {
  const group = create();

  const cyllinder = create({ prefabId: "cylinder_02", scaleY: 2, material });
  const ring = create({
    prefabId: "torus_thick_01",
    material,
    scale: 0.3,
    rotX: 90,
    rotY: 90,
    y: 2.1,
    x: -0.08,
  });
  const ballons = create({ prefabId: "balloons_01", y: 2.3, rotY: 80 });
  group.add({ ...cyllinder });
  group.add({ ...cyllinder, rotX: 90, y: 1.5, scaleY: 1, z: -0.5 });
  group.add({ ...cyllinder, rotX: 125, scaleY: 1, z: -0.775, y: 0.5 });
  group.add({ ...cyllinder, rotX: -125, scaleY: 1, z: 0.775, y: 0.5 });
  group.add(ring);
  group.add(ballons);

  group.animate(
    { rotY: [0, 180, 360] },
    { duration: 10, loop: "RESTART", easing: "EASE_IN_OUT_QUAD" }
  );

  return group;
};

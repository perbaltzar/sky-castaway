import { create } from "@hiberworld/code-kit";

export const createBox = () => {
  const group = create();

  const barrel = create({ prefabId: "crate_02", rotX: 3, rotZ: 70, rotY: 30 });
  const balloon = create({ prefabId: "balloons_01", y: 1.65, z: 0, x: -0.4 });

  barrel.addTo(group);
  balloon.addTo(group);
  group.animate(
    { rotY: [0, 180, 360] },
    { duration: 11, loop: "RESTART", easing: "LINEAR" }
  );
  return group;
};

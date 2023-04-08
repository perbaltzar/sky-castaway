import { create } from "@hiberworld/code-kit";

export const createCrate = () => {
  const group = create({ y: -0, x: 5 });

  const balloon = create({
    prefabId: "balloons_01",
    scale: 2,
  });
  const crate = create({ prefabId: "crate_02", scale: 1.7, rotX: 12, rotZ: 9 });
  // group.add(create({ ...balloon, y: 2.2, z: -0.8, x: 1.7 }));
  // group.add(create({ ...balloon, y: 1.1, z: 1.4, x: -2.4, rotY: 110 }));
  group.add(crate);

  group.animate({ y: [0, 0.3] }, { duration: 3, easing: "EASE_IN_OUT_QUAD" });
  return group;
};

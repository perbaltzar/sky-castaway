import { create } from "@hiberworld/code-kit";

export const createBarrel = () => {
  const group = create();

  const barrel = create({ prefabId: "barrel_wood_01", rotX: 12 });
  const balloon = create({ prefabId: "balloons_01", y: 2, z: -0.1 });

  barrel.addTo(group);
  balloon.addTo(group);
  group.animate(
    { rotY: [0, 180, 360] },
    { duration: 11, loop: "RESTART", easing: "LINEAR" }
  );
  return group;
};

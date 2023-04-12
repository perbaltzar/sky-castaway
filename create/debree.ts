import { create, Prefab } from "@hiberworld/code-kit";

export const createDebree = (prefabId: Prefab) => {
  const group = create();

  const debree = create({ prefabId });

  debree.addTo(group);
  group.animate(
    { y: [0, 0.4] },
    { duration: 1.5, loop: "REVERSE", easing: "EASE_IN_OUT_QUAD" }
  );
  return group;
};

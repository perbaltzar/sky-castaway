import { create } from "@hiberworld/code-kit";

export const createCloud = (options: { debug?: boolean }) => {
  return create({
    prefabId: "snow_pile_01",
    material: options?.debug ? "palette_01_pink" : "t_snow_01",
  }).animate(
    { scaleY: [1, 1.05], scaleX: [1.05, 1], scaleZ: [1.05, 1] },
    { duration: 1.5, easing: "EASE_IN_OUT_QUAD" }
  );
};

export const createClouds = ({
  xLength,
  zLength,
}: {
  quantity: number;
  xLength: number;
  zLength: number;
}) => {
  const group = create();

  // for (let x = 0; x < xLength; x += 10) {
  //   let scale = 3;
  //   let scaleY = scale * 2;
  //   const highCloudPair = create().addMany(2, (index) =>
  //     create({
  //       prefabId: "snow_pile_01",
  //       scale: scale + 2 * Math.random() - 0.5,
  //       scaleY,
  //       rotY: 90 + 180 * Math.random() - 0.5,
  //       x: x,
  //       z: -zLength + index * zLength * 2 + 5 * Math.random() - 0.5,
  //     })
  //   );
  //   group.add(highCloudPair);
  // }
  for (let x = 0; x < xLength; x += 30) {
    let scale = 10;
    let scaleY = scale * 1.5;
    const lowCloudPair = create().addMany(2, (index) =>
      create({
        prefabId: "snow_pile_01",
        y: -4,
        scale: scale + 5 * Math.random() - 0.5,
        scaleY,
        rotY: 90 + 180 * Math.random() - 0.5,
        x: x,
        z:
          -(zLength + 20) +
          index * (zLength + 20) * 2 +
          5 * Math.random() -
          0.5,
      }).animate(
        { scaleY: [1.1, 1.0], scaleX: [1, 1.1], scaleZ: [1, 1.1] },
        { duration: 2, easing: "EASE_IN_OUT_QUAD" }
      )
    );
    group.add(lowCloudPair);
  }
  for (let x = 0; x < xLength; x += 40) {
    let scale = 10;
    let scaleY = scale * 2;
    const farCloudPair = create().addMany(2, (index) =>
      create({
        prefabId: "snow_pile_01",
        y: -4,
        scale: scale + 5 * Math.random(),
        scaleY,
        rotY: 90 + 180 * Math.random() - 0.5,
        x: x,
        z: -(zLength + 50) + index * (zLength + 50) * 2,
      }).animate(
        { scaleY: [1, 1.3], scaleX: [1.3, 1], scaleZ: [1.3, 1] },
        { duration: 2.5, easing: "EASE_IN_OUT_QUAD" }
      )
    );
    group.add(farCloudPair);
  }

  return group;
};

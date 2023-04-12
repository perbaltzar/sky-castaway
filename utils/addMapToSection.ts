import { create, HNode, HNodeWithMethods } from "@hiberworld/code-kit";
import { NodeMap } from "../types";

export const addMapToSection = (
  section: HNodeWithMethods,
  node: HNode,
  map: NodeMap
) => {
  map.forEach((data) => {
    let transformData;

    if ("asd" in data) {
      transformData = data.asd;
    } else {
      transformData = data;
    }

    const newNode = create({
      ...node,
      ...transformData,
    });

    if (data.animate) {
      newNode.animate(data.animate, data.animationOptions);
    }

    section.add(newNode);
  });
};

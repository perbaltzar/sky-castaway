import { HNode, HNodeWithMethods } from "@hiberworld/code-kit";
import { NodeMap } from "../types";

export const addMapToSection = (
  section: HNodeWithMethods,
  node: HNode,
  map: NodeMap
) => {
  map.forEach((cloudData) => {
    section.add({
      ...node,
      ...cloudData,
    });
  });
};

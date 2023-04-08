import { create, renderScene, Scene } from "@hiberworld/code-kit";
import {
  BALLOON_SECTION_X,
  BALLOON_SECTION_Z,
  THUNDER_SECTION_X,
  THUNDER_SECTION_Z,
} from "./constants";
import { createBallon } from "./create/ballons";
import { createCrate } from "./create/crate";
import { createSection } from "./create/section";
import { createFloatBlock } from "./create/flyBlock";
import { createCloud } from "./create/clouds";
import { createWind } from "./create/wind";
import { createBoard } from "./create/board";
import { createBoat } from "./create/boat";
import { createBarrel } from "./create/barrel";
import { createBox } from "./create/box";
import { addMapToSection } from "./utils/addMapToSection";
import { createAnchor } from "./create/anchor";
import { createThunderCloud } from "./create/thunderCloud";
import { thunderSectionMap } from "./maps/thunderSection";
import { balloonSectionMap } from "./maps/balloonSection";

const debug = false;
const debugThunder = false;

const world = create();

const scene: Scene = {
  root: world,
  environment: "starry_night_01",
};

// COMPONENTS
const floatBlock = createFloatBlock({
  debug,
});
const board = createBoard();
const spawnBoard = createBoard({ spawnpoint: true });
const checkpointBoard = createBoard({ checkpoint: true });
const crate = createCrate();
const balloon = createBallon();
const cloud = createCloud({ debug });
const upLift = create({
  ...floatBlock,
  scale: 3,
  scaleZ: 4,
  y: 0,
  colliderIsSensor: { dummy: true },
});
const wind = createWind({ debug });
const boat = createBoat();
const thunderCloud = createThunderCloud({ debug: debugThunder });

// Decorations
const barrel = createBarrel();
const box = createBox();
const anchor = createAnchor();

// FIRST SECTION BALLOON SECTION
const balloonSection = createSection({
  scaleX: BALLOON_SECTION_X,
  scaleZ: BALLOON_SECTION_Z,
  debug,
});

balloonSection.add({
  ...checkpointBoard,
  x: BALLOON_SECTION_X + 5,
  scale: 1.4,
  y: -0.5,
});
balloonSection.add({
  ...spawnBoard,
  x: 0,
  scale: 1.4,
  y: -1.5,
  z: -7,
  rotY: 340,
});
balloonSection.add({ ...upLift, x: 9, rotY: -20, z: -1, scaleZ: 7 });
balloonSection.add({ ...wind, rotY: 70, x: 50, z: -15 });

addMapToSection(balloonSection, balloon, balloonSectionMap.balloon);
addMapToSection(balloonSection, cloud, balloonSectionMap.cloud);
addMapToSection(balloonSection, barrel, balloonSectionMap.barrel);
addMapToSection(balloonSection, box, balloonSectionMap.box);
addMapToSection(balloonSection, anchor, balloonSectionMap.anchor);

balloonSection.addTo(world);

// SECOND SECTION THUNDER SECTION
const thunderStartX = BALLOON_SECTION_X + 5;

const thunderSection = createSection({
  debug,
  scaleZ: THUNDER_SECTION_Z,
  scaleX: THUNDER_SECTION_X,
  z: 10,
  x: thunderStartX,
  rotation: -45,
});

thunderSection.add({ ...upLift, x: 3, scaleZ: 10 });

addMapToSection(thunderSection, thunderCloud, thunderSectionMap.thunder);
addMapToSection(thunderSection, balloon, thunderSectionMap.balloon);
addMapToSection(thunderSection, cloud, thunderSectionMap.cloud);

thunderSection.addTo(world);

renderScene(scene);

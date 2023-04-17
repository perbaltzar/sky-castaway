import { create, renderScene, Scene } from "@hiberworld/code-kit";
import {
  BALLOON_SECTION_X,
  BALLOON_SECTION_Z,
  SHIP_SECTION_X,
  SHIP_SECTION_Z,
  THUNDER_SECTION_X,
  THUNDER_SECTION_Z,
  WIND_SECTION_X,
  WIND_SECTION_Z,
} from "./constants";
import { createAnchor } from "./create/anchor";
import { createBallon } from "./create/ballons";
import { createBoard } from "./create/board";
import { createCloud } from "./create/clouds";
import { createDebree } from "./create/debree";
import { createFloatBlock } from "./create/flyBlock";
import { createSection } from "./create/section";
import { createThunderCloud } from "./create/thunderCloud";
import { createTurnedWind } from "./create/turnedWind";
import { createWhirlwind } from "./create/whirlwind";
import { createWind } from "./create/wind";
import { balloonSectionMap } from "./maps/balloonSection";
import { thunderSectionMap } from "./maps/thunderSection";
import { windSectionMap } from "./maps/windSection";
import { addMapToSection } from "./utils/addMapToSection";

const debug = false;
const debugThunder = false;

const world = create();

const scene: Scene = {
  root: world,
  environment: "aurora_01",
};

// COMPONENTS
const floatBlock = createFloatBlock({
  debug,
});

const spawnBoard = createBoard({ spawnpoint: true });
const checkpointBoard = createBoard({ checkpoint: true });
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
const whirlwind = createWhirlwind();
const thunderCloud = createThunderCloud({ debug: debugThunder });

// Decorations
const barrel = createDebree("barrel_wood_01");
const box = createDebree("crate_02");
const bench = createDebree("bench_01_t1");
const anchor = createAnchor();

// ! FIRST SECTION BALLOON SECTION
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
balloonSection.add({ ...whirlwind, x: 55, y: 20, z: -48 });
balloonSection.add({ ...upLift, x: 9, rotY: -20, z: -1, scaleZ: 7 });
balloonSection.add({ ...wind, rotY: 75, x: 58, z: -12 });
// balloonSection.add({ ...leftWind, z: 4, x: 17, rotY: 90 });

addMapToSection(balloonSection, balloon, balloonSectionMap.balloon);
addMapToSection(balloonSection, cloud, balloonSectionMap.cloud);
addMapToSection(balloonSection, barrel, balloonSectionMap.barrel);
addMapToSection(balloonSection, box, balloonSectionMap.box);
addMapToSection(balloonSection, anchor, balloonSectionMap.anchor);
addMapToSection(balloonSection, thunderCloud, balloonSectionMap.thunder);

balloonSection.addTo(world);

//  ! SECOND SECTION THUNDER SECTION
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
thunderSection.add({
  ...checkpointBoard,
  x: THUNDER_SECTION_X - 1,
  z: 7,
  rotY: 20,
});
thunderSection.add({ ...whirlwind, x: 55, y: 14, z: 24 });
addMapToSection(thunderSection, thunderCloud, thunderSectionMap.thunder);
addMapToSection(thunderSection, balloon, thunderSectionMap.balloon);
addMapToSection(thunderSection, cloud, thunderSectionMap.cloud);
addMapToSection(thunderSection, box, thunderSectionMap.box);
addMapToSection(thunderSection, barrel, thunderSectionMap.barrel);
addMapToSection(thunderSection, bench, thunderSectionMap.bench);

thunderSection.addTo(world);

// ! Wind Section

// TODO: Do a real calculation with pythagoras.
const windStartX = BALLOON_SECTION_X + THUNDER_SECTION_X - 26;
const windSection = createSection({
  debug,
  scaleZ: WIND_SECTION_Z,
  scaleX: WIND_SECTION_X,
  z: 90,
  x: windStartX,
});

addMapToSection(windSection, balloon, windSectionMap.balloon);
addMapToSection(windSection, cloud, windSectionMap.cloud);

windSection.add({ ...upLift, x: 3, rotY: 0, z: -1, scaleZ: 7 });

windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 22,
      numberOfRings: 32,
      rotation: 90,
    }),
    rotY: 60,
    z: 5,
    x: 9,
  })
);
windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 30,
      numberOfRings: 32,
      rotation: -70,
    }),
    rotY: -60,
    z: -12,
    x: 49,
  })
);
windSection.add(
  create({
    ...wind,
    rotY: 10,
    z: 10,
    x: 89,
  })
);
windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 10,
      rotation: 90,
      numberOfRings: 10,
    }),
    rotY: 10,
    z: 60,
    x: 100,
  })
);
windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 60,
      rotation: -90,
      numberOfRings: 29,
    }),
    rotY: -80,
    z: 70,
    x: 140,
  })
);
windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 20,
      rotation: 90,
      numberOfRings: 12,
    }),
    rotY: 10,
    z: 120,
    x: 210,
  })
);
windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 28,
      rotation: 90,
      numberOfRings: 12,
    }),
    rotY: 110,
    z: 137,
    x: 250,
  })
);
windSection.add(
  create({
    ...wind,
    z: 87,
    x: 260,
    rotY: 217,
  })
);
windSection.add(
  create({
    ...createTurnedWind({
      debug: false,
      length: 60,
      rotation: -120,
      numberOfRings: 42,
    }),
    rotY: 40,
    z: 40,
    x: 226,
  })
);
windSection.add({
  ...checkpointBoard,
  x: WIND_SECTION_X,
  z: -67,
  rotY: 20,
});

windSection.addTo(world);

// ! SHIP SECTION
const shipStartX = BALLOON_SECTION_X + THUNDER_SECTION_X + WIND_SECTION_X;

const shipSection = createSection({
  debug: true,
  x: shipStartX,
  scaleX: SHIP_SECTION_X,
  scaleZ: SHIP_SECTION_Z,
});

shipSection.addTo(world);
renderScene(scene);

import { create } from "@hiberworld/code-kit";

export const createBallon = () => {
  return create({
    z: 0,
    x: 0,
    y: 0.6,
  })
    .add(
      create({
        z: 0.3,
        scale: 0.7,
        collectible: {
          type: "MANDATORY",
          collectFxId: "fx_take_damage_steam_01",
          grabbingRadius: 3,
          resetFxId: "e_m_fx_sparkles",
        },
        rendering: {
          materialID: "palette_01_red",
          meshID: "en_p_balloon_01",
        },
      })
    )
    .animate(
      { rotY: [0, 180, 360], y: [1.4, 1.6, 1.4] },

      {
        easing: "LINEAR",
        duration: 2 + 3 * Math.random(),
        loop: "RESTART",
      }
    );
};

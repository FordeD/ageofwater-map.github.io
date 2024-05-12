const SCRAP = 'Металл';
const AMMO = 'Обломки боеприпасов';
const CHEMICAL = 'Химические отходы';
const EXPLOSIVES = 'Мины';
const DYNAMITE = 'Динамит';
const PANTOON = 'Разбитый пантон';
const ROCK = 'Скала';

const RESPURCES = {
  SCRAP: 'https://forded.github.io/ageofwater-map.github.io/resources/scrap.jpg',
  STEEL: 'https://forded.github.io/ageofwater-map.github.io/resources/steel.jpg',
  AMMO: 'https://forded.github.io/ageofwater-map.github.io/resources/ammo.jpg',
  AMMO_DETAILS: 'https://forded.github.io/ageofwater-map.github.io/resources/ammo_details.jpg',
  CHEMICAL: 'https://forded.github.io/ageofwater-map.github.io/resources/chemical.jpg',
  COPPER: 'https://forded.github.io/ageofwater-map.github.io/resources/copper.jpg',
  COPPER_PLATES: 'https://forded.github.io/ageofwater-map.github.io/resources/copper_plate.jpg',
  DYNAMITE: 'https://forded.github.io/ageofwater-map.github.io/resources/dynamite.jpg',
  FIBER: 'https://forded.github.io/ageofwater-map.github.io/resources/fiber.jpg',
  WOOD: 'https://forded.github.io/ageofwater-map.github.io/resources/wood.jpg',
  TEXTILE: 'https://forded.github.io/ageofwater-map.github.io/resources/textile.jpg',
  FABRIC: 'https://forded.github.io/ageofwater-map.github.io/resources/fabric.jpg',
  MECHANISM: 'https://forded.github.io/ageofwater-map.github.io/resources/mechanism.jpg',
  PLASTIC: 'https://forded.github.io/ageofwater-map.github.io/resources/plastic.jpg',
  PLASTIC_PLATE: 'https://forded.github.io/ageofwater-map.github.io/resources/plastic_PLATE.jpg',
  PLATS: 'https://forded.github.io/ageofwater-map.github.io/resources/plats.jpg',
  REACTIVE: 'https://forded.github.io/ageofwater-map.github.io/resources/reactive.jpg',
  BARREL: 'https://forded.github.io/ageofwater-map.github.io/resources/barrel.jpg',
  BAIT: 'https://forded.github.io/ageofwater-map.github.io/resources/bait.jpg',
  BALLAST: 'https://forded.github.io/ageofwater-map.github.io/resources/ballast.jpg',
  EAT: 'https://forded.github.io/ageofwater-map.github.io/resources/eat.jpg',
  ROPE: 'https://forded.github.io/ageofwater-map.github.io/resources/rope.jpg',
  WATER: 'https://forded.github.io/ageofwater-map.github.io/resources/water.jpg',
  PLANK: 'https://forded.github.io/ageofwater-map.github.io/resources/plank.jpg',
};

const ITEMS = {
  MODULES: {
    ACCUMULATOR: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/acc_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/acc_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/acc_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/acc_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/acc_5.jpg',
    },
    GENERATOR: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/gen_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/gen_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/gen_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/gen_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/gen_5.jpg',
    },
    MOTOR: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/mot_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/mot_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/mot_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/mot_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/mot_5.jpg',
    },
    POMPA: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/pomp_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/pomp_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/pomp_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/pomp_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/pomp_5.jpg',
    },
    TRUBA: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/trub_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/trub_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/trub_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/trub_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/trub_5.jpg',
    },
    TURBINA: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/turb_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/turb_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/turb_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/turb_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/turb_5.jpg',
    },
    VOZDUHOVOD: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/vozd_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/vozd_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/vozd_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/vozd_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/vozd_5.jpg',
    },
  },
  WEAPONS: {
    GRANATOMET: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/gran_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/gran_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/gran_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/gran_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/gran_5.jpg',
    },
    KARTECH: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/gran_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/gran_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/gran_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/gran_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/gran_5.jpg',
    },
    PULEMET: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/pul_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/pul_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/pul_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/pul_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/pul_5.jpg',
    },
    PUSHKA: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/push_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/push_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/push_3.jpg',
      T4: 'https://forded.github.io/ageofwater-map.github.io/items/push_4.jpg',
      T5: 'https://forded.github.io/ageofwater-map.github.io/items/push_5.jpg',
    },
  },
  CONSTRUCTIONS: {
    STEEL_SHIELD: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/steel_shield_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/steel_shield_2.jpg',
      T3: 'https://forded.github.io/ageofwater-map.github.io/items/steel_shield_3.jpg',
    },
    MUSOR_SHIELD: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/mus_shield_1.jpg',
    },
    STENKA: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/sten_1.jpg',
    },
    BAMBUK_SHIELD: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/bamb_shield.jpg',
    },
    CISTERNA_KORPUS: {
      CABINA: 'https://forded.github.io/ageofwater-map.github.io/items/verh_cist.jpg',
      ZAKRITAYA: 'https://forded.github.io/ageofwater-map.github.io/items/sr_cist.jpg',
      OTKRITAYA: 'https://forded.github.io/ageofwater-map.github.io/items/osn_cist.jpg',
    },
    PALTUS: {
      CABINA: 'https://forded.github.io/ageofwater-map.github.io/items/rub_palt.jpg',
      OSNOVANIE: 'https://forded.github.io/ageofwater-map.github.io/items/osn_palt.jpg',
      OTSEK: 'https://forded.github.io/ageofwater-map.github.io/items/ots_palt.jpg',
    },
    JEL_VOIN: {
      CABINA: 'https://forded.github.io/ageofwater-map.github.io/items/cab_jel_voina.jpg',
    },
    TRAULER: {
      CABINA: 'https://forded.github.io/ageofwater-map.github.io/items/cab_traul.jpg',
    },
    CISTERNA: 'https://forded.github.io/ageofwater-map.github.io/items/cist.jpg',
    POZJ_MACHTA: 'https://forded.github.io/ageofwater-map.github.io/items/pozj_machta.jpg',
    TUR_BAZA: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/tur_baza_1.jpg',
      T2: 'https://forded.github.io/ageofwater-map.github.io/items/tur_baza_2.jpg',
    },
    SEINER: {
      PLATFORMA: 'https://forded.github.io/ageofwater-map.github.io/items/platf_sein.jpg',
    },
  },
};

const SHIPS = {
  T1: {
    SOFIYA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_Sofiya.webp',
      name: 'София (I)',
    },
    DINGHY: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_dinghy.webp',
      name: 'Шаланда (I)',
    },
  },
  T2: {
    SCORPEN: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_scorpen.webp',
      name: 'Скорпен (II)',
    },
    MARIANA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_mariana.webp',
      name: 'Марина (II)',
    },
    MARLIN: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_marlin.webp',
      name: 'Марлин (II)',
    },
  },
  T3: {
    BISTRIY: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_bistriy.webp',
      name: 'Быстрый (III)',
    },
    ZORKIJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_zorkij.webp',
      name: 'Зоркий (III)',
    },
    CLEVER: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_clever.webp',
      name: 'Клевер (III)',
    },
    MORJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_morj.webp',
      name: 'Морж (III)',
    },
  },
  T4: {
    ANCHOUS: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_anchous.webp',
      name: 'Анчоус (IV)',
    },
    MURENA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_murena.webp',
      name: 'Мурена (IV)',
    },
    ZABIJAKA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_zabijaka.webp',
      name: 'Забияка (IV)',
    },
  },
  T5: {
    REPEJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T5_repej.webp',
      name: 'Репей (V)',
    },
  },
};

const ACTIONS = {
  CREW: 'https://forded.github.io/ageofwater-map.github.io/icons/crew_action.png',
  TRADE: 'https://forded.github.io/ageofwater-map.github.io/icons/trade_action.png',
  REPAIR: 'https://forded.github.io/ageofwater-map.github.io/icons/repair_action.png',
  QUEST: 'https://forded.github.io/ageofwater-map.github.io/icons/quest_action.png',
  MESSAGE: 'https://forded.github.io/ageofwater-map.github.io/icons/mail_action.png',
};

const worldPoints = {
  rangers: [
    [
      76.07967,
      127.17773,
      generateDescription(
        'Флот T2-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
        `Флот рейнджеров состояший из ${SHIPS.T5.REPEJ.name}, ${SHIPS.T4.ZABIJAKA.name}, ${SHIPS.T3.CLEVER.name} и ${SHIPS.T2.MARIANA.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TRAULER.CABINA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.MODULES.ACCUMULATOR.T2,
        ],
        `В этой точке можно абордажить ${SHIPS.T5.REPEJ.name}`,
        null,
        [SHIPS.T5.REPEJ, SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER, SHIPS.T2.MARIANA],
      ),
    ],
  ],
  pirates: [
    [
      81.96629,
      -28.87207,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.ANCHOUS.name} вооруженных пулеметами/пушками и ${SHIPS.T3.CLEVER.name}. вооруженных дробовиками и гранатометами`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.PALTUS.CABINA,
          ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
        ],
        `На данном месте проблемы могут быть только от ${SHIPS.T3.CLEVER.name}, в остальном фармится спокойно`,
        null,
        [SHIPS.T4.ANCHOUS, SHIPS.T3.CLEVER],
      ),
    ],
    [
      71.73266,
      -161.49902,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.ANCHOUS.name} вооруженных пулеметами/пушками и ${SHIPS.T3.CLEVER.name}. вооруженных пулеметами и гранатометами`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.MODULES.ACCUMULATOR.T1,
          ITEMS.MODULES.POMPA.T4,
          ITEMS.CONSTRUCTIONS.PALTUS.CABINA,
          ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
          ITEMS.CONSTRUCTIONS.PALTUS.OSNOVANIE,
          ITEMS.MODULES.TRUBA.T5,
        ],
        `На данном месте бьют сильно, но можно выплыть за край карты и по одному топить каждый корабль`,
        null,
        [SHIPS.T4.ANCHOUS, SHIPS.T3.CLEVER],
      ),
    ],
    [
      33.46811,
      -153.14941,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.MURENA.name} и ${SHIPS.T3.MORJ.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.MODULES.ACCUMULATOR.T2,
          ITEMS.MODULES.POMPA.T3,
        ],
        null,
        null,
        [SHIPS.T4.MURENA, SHIPS.T3.MORJ],
      ),
    ],
    [
      -38.6512,
      -137.76855,
      generateDescription(
        'Корабли T1 и Т2',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Два корабля ${SHIPS.T2.SCORPEN.name} и ${SHIPS.T1.DINGHY.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.MODULES.POMPA.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA_KORPUS.CABINA,
          ITEMS.CONSTRUCTIONS.CISTERNA_KORPUS.OTKRITAYA,
          ITEMS.CONSTRUCTIONS.CISTERNA_KORPUS.ZAKRITAYA,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
        ],
        null,
        null,
        [SHIPS.T2.SCORPEN],
      ),
    ],
    [
      -34.37971,
      -117.6416,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой пиратский флот состояший из ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.MODULES.ACCUMULATOR.T2,
          ITEMS.MODULES.POMPA.T4,
          ITEMS.CONSTRUCTIONS.PALTUS.CABINA,
          ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
          ITEMS.CONSTRUCTIONS.PALTUS.OSNOVANIE,
          ITEMS.MODULES.TRUBA.T5,
        ],
        null,
        null,
        [SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -77.56104,
      -124.93652,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой пиратский флот состояший из ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.JEL_VOIN.CABINA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
        ],
        'В этом месте хорошо фармить части оружия и ткань при абордаже на разбор, корабли слабые и выбить экипаж довольно просто',
        null,
        [SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -80.92149,
      -53.83301,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.JEL_VOIN.CABINA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.MODULES.ACCUMULATOR.T2,
          ITEMS.MODULES.POMPA.T4,
        ],
        '',
        null,
        [SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -82.02748,
      41.7041,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.MODULES.ACCUMULATOR.T2,
        ],
        '',
        null,
        [SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -58.19387,
      125.46387,
      generateDescription(
        'Флот T2-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T5.REPEJ.name}, ${SHIPS.T4.ZABIJAKA.name}, ${SHIPS.T3.CLEVER.name} и ${SHIPS.T2.MARIANA.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TRAULER.CABINA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.MODULES.ACCUMULATOR.T2,
        ],
        `В этой точке можно абордажить ${SHIPS.T5.REPEJ.name}`,
        null,
        [SHIPS.T5.REPEJ, SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER, SHIPS.T2.MARIANA],
      ),
    ],
    [
      83.70592,
      26.98242,
      generateDescription(
        'Флот T2-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T5.REPEJ.name}, ${SHIPS.T4.ZABIJAKA.name}, ${SHIPS.T3.CLEVER.name} и ${SHIPS.T2.MARIANA.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.TRAULER.CABINA,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ITEMS.MODULES.ACCUMULATOR.T2,
          ITEMS.CONSTRUCTIONS.SEINER.PLATFORMA,
        ],
        `В этой точке не получится абордажить ${SHIPS.T5.REPEJ.name}, при выведении экипажа из строя корабль сразу потонет`,
        null,
        [SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER, SHIPS.T2.MARIANA],
      ),
    ],
    [
      53.74871,
      -15.20508,
      generateDescription(
        'Корабли T1 и T3',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Два корабля ${SHIPS.T3.MORJ.name} b ${SHIPS.T1.DINGHY.name}.`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
        ],
        [
          ITEMS.CONSTRUCTIONS.STENKA.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.MODULES.ACCUMULATOR.T1,
        ],
        `Самое легкое место для абордажа корбаля ${SHIPS.T3.MORJ.name}`,
        null,
        [SHIPS.T3.MORJ],
      ),
    ],
    [
      65.87472,
      74.04785,
      generateDescription(
        'Флот T1-T2',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Флот из кораблей Т1 и Т2, быстро спавнится для прокачки без остановки`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.TURBINA.T1,
          ITEMS.WEAPONS.GRANATOMET.T1,
          ITEMS.WEAPONS.KARTECH.T1,
          ITEMS.WEAPONS.PULEMET.T1,
          ITEMS.WEAPONS.PUSHKA.T1,
          ITEMS.MODULES.GENERATOR.T1,
          ITEMS.MODULES.MOTOR.T1,
        ],
        [],
        `Самое легкое место для прокачки до 20 уровня на Т3 корабле`,
        null,
      ),
    ],
    [
      61.85615,
      91.62598,
      generateDescription(
        'Флот T1 и плавающих на подушке курьеров',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Флот из кораблей ${SHIPS.T1.DINGHY.name} и плавающих на подушке курьеров. очень сильный флот из-за большого количества ракет и гранат выпускаемых курьерами`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.TURBINA.T1,
          ITEMS.WEAPONS.GRANATOMET.T1,
          ITEMS.WEAPONS.KARTECH.T1,
          ITEMS.WEAPONS.PULEMET.T1,
          ITEMS.WEAPONS.PUSHKA.T1,
          ITEMS.MODULES.GENERATOR.T1,
          ITEMS.MODULES.MOTOR.T1,
          ITEMS.MODULES.MOTOR.T2,
        ],
        [],
        `Для комфортного убийства стоит взять ${SHIPS.T4.ANCHOUS.name} или ${SHIPS.T4.ZABIJAKA.name}`,
        null,
      ),
    ],
  ],
  scraps: [
    [82.50056, -133.28613, generateScrapPopup()],
    [81.42704, -92.37305, generateScrapPopup()],
    [74.93657, -121.9043, generateScrapPopup()],
    [73.80032, -161.98242, generateScrapPopup()],
    [64.81156, -128.05664, generateScrapPopup()],
    [52.98834, -102.34863, generateScrapPopup()],
    [41.47566, -80.02441, generateScrapPopup()],
    [29.87876, -59.89746, generateScrapPopup()],
    [22.71539, -9.27246, generateScrapPopup()],
    [18.10409, 20.78613, generateScrapPopup()],
    [37.19533, 35.63965, generateScrapPopup()],
    [46.95026, 51.72363, generateScrapPopup()],
    [41.54148, 82.66113, generateScrapPopup()],
    [52.98834, 104.72168, generateScrapPopup()],
    [64.83025, 130.38574, generateScrapPopup()],
    [73.81257, 164.39941, generateScrapPopup()],
    [74.92514, 124.32129, generateScrapPopup()],
    [82.51202, 135.4834, generateScrapPopup()],
    [81.40737, 94.79004, generateScrapPopup()],
    [63.72418, 88.5498, generateScrapPopup()],
    [52.66972, 70.35645, generateScrapPopup()],
    [71.42718, 67.0166, generateScrapPopup()],
    [81.38107, 56.20605, generateScrapPopup()],
    [83.4353, 20.61035, generateScrapPopup()],
    [78.75923, 20.69824, generateScrapPopup()],
    [74.78738, 40.47363, generateScrapPopup()],
    [61.45977, 54.18457, generateScrapPopup()],
    [55.6528, 37.39746, generateScrapPopup()],
    [64.90491, 27.72949, generateScrapPopup()],
    [56.873, 11.90918, generateScrapPopup()],
    [40.14529, 11.55762, generateScrapPopup()],
    [83.4353, -18.41309, generateScrapPopup()],
    [78.77635, -18.41309, generateScrapPopup()],
    [64.97936, -25.26855, generateScrapPopup()],
    [48.71996, -18.41309, generateScrapPopup()],
    [37.33522, -33.2666, generateScrapPopup()],
    [55.70236, -35.02441, generateScrapPopup()],
    [74.78738, -38.10059, generateScrapPopup()],
    [81.00433, -49.87793, generateScrapPopup()],
    [71.42718, -64.64355, generateScrapPopup()],
    [61.50173, -51.81152, generateScrapPopup()],
    [46.89023, -49.43848, generateScrapPopup()],
    [52.66972, -67.9834, generateScrapPopup()],
    [63.64626, -86.17676, generateScrapPopup()],
    [48.8358, 20.78613, generateScrapPopup()],
    [40.21244, -9.00879, generateScrapPopup()],
    [56.921, -9.53613, generateScrapPopup()],
  ],
  ammos: [
    [52.88239, -153.67676, generateAmmoPopup()],
    [32.87959, -109.46777, generateAmmoPopup()],
    [28.11075, -159.30176, generateAmmoPopup()],
    [21.90228, -85.91309, generateAmmoPopup()],
    [12.59745, -60.5127, generateAmmoPopup()],
    [3.55728, -39.41895, generateAmmoPopup()],
    [-24.80668, -9.36035, generateAmmoPopup()],
    [1.97715, -119.13574, generateAmmoPopup()],
    [-0.3955, -89.16504, generateAmmoPopup()],
    [-6.00946, -160.44434, generateAmmoPopup()],
    [-7.75454, -58.13965, generateAmmoPopup()],
    [-14.05133, -39.41895, generateAmmoPopup()],
    [-29.03696, -27.99316, generateAmmoPopup()],
    [-25.44327, -56.55762, generateAmmoPopup()],
    [-26.15544, -82.57324, generateAmmoPopup()],
    [-23.20096, -112.63184, generateAmmoPopup()],
    [-36.42128, -145.50293, generateAmmoPopup()],
    [-43.35714, -100.32715, generateAmmoPopup()],
    [-39.60569, -43.5498, generateAmmoPopup()],
    [-42.26105, -8.48145, generateAmmoPopup()],
    [-51.15179, -23.15918, generateAmmoPopup()],
    [-46.28622, -65.52246, generateAmmoPopup()],
    [-57.39762, -137.76855, generateAmmoPopup()],
    [-57.25528, -81.69434, generateAmmoPopup()],
    [-56.3409, -44.42871, generateAmmoPopup()],
    [-62.49203, -13.40332, generateAmmoPopup()],
    [-66.70517, -57.96387, generateAmmoPopup()],
    [-71.95178, -91.01074, generateAmmoPopup()],
    [-69.91521, -32.56348, generateAmmoPopup()],
    [-76.36226, -14.37012, generateAmmoPopup()],
    [-76.73031, -52.0752, generateAmmoPopup()],
  ],
  chemicals: [
    [-24.72687, 11.82129, generateChemicalPopup()],
    [-42.19597, 11.03027, generateChemicalPopup()],
    [-51.09662, 25.62012, generateChemicalPopup()],
    [-29.11378, 30.54199, generateChemicalPopup()],
    [1.36218, 25.53223, generateChemicalPopup()],
    [3.645, 41.79199, generateChemicalPopup()],
    [6.8828, 58.13965, generateChemicalPopup()],
    [52.86913, 156.02783, generateChemicalPopup()],
    [32.80574, 111.92871, generateChemicalPopup()],
    [34.05266, 60.68848, generateChemicalPopup()],
    [16.50983, 74.39941, generateChemicalPopup()],
    [21.90228, 88.19824, generateChemicalPopup()],
    [28.18824, 161.6748, generateChemicalPopup()],
    [2.15281, 121.77246, generateChemicalPopup()],
    [-0.3955, 91.4502, generateChemicalPopup()],
    [6.00946, 72.6416, generateChemicalPopup()],
    [-13.88075, 41.87988, generateChemicalPopup()],
    [-7.4932, 60.60059, generateChemicalPopup()],
    [-5.83462, 162.90527, generateChemicalPopup()],
    [-25.44327, 58.93066, generateChemicalPopup()],
    [-26.15544, 84.94629, generateChemicalPopup()],
    [-26.2343, 115.18066, generateChemicalPopup()],
    [-36.42128, 147.96387, generateChemicalPopup()],
    [-43.48481, 102.96387, generateChemicalPopup()],
    [-39.74099, 45.83496, generateChemicalPopup()],
    [-46.34693, 67.89551, generateChemicalPopup()],
    [-62.53259, 15.95215, generateChemicalPopup()],
    [-56.3409, 46.71387, generateChemicalPopup()],
    [-57.25528, 84.15527, generateChemicalPopup()],
    [-61.58549, 132.14355, generateChemicalPopup()],
    [-66.7399, 60.5127, generateChemicalPopup()],
    [-69.94538, 35.02441, generateChemicalPopup()],
    [-71.92453, 93.47168, generateChemicalPopup()],
    [-76.36226, 16.74316, generateChemicalPopup()],
    [-76.71013, 54.53613, generateChemicalPopup()],
  ],
  pois: [
    [
      80.8414,
      -144.51416,
      generateDescription(
        'Поселение "Расщелина"',
        null,
        'Поселение для получения квестов, можно зайти только днем',
        [],
        [],
        'В этом поселении берутся PvP квесты',
        [ACTIONS.QUEST],
      ),
      'Поселение "Расщелина"',
    ],
    [
      -81.29503,
      -145.23926,
      generateDescription('Поселение "Шарк-Сити"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Шарк-Сити"',
    ],
    [
      -82.01528,
      -154.11621,
      generateDescription('Тайное логово', null, '', [], [], '', [ACTIONS.QUEST]),
      'Тайное логово',
    ],
    [
      -74.66002,
      123.20068,
      generateDescription('Поселение "Бензоколонка"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Бензоколонка"',
    ],
    [
      80.95955,
      -145.34912,
      generateDescription(
        'Бар "Веселая пещера"',
        null,
        'Можно зайти только ночью',
        [],
        [],
        'В этом месте берутся и сдаются квесты на члена экипажа Лин',
        [ACTIONS.QUEST],
      ),
      'Бар "Веселая пещера"',
    ],
    [
      77.99819,
      -145.23926,
      generateDescription(
        'Маяк',
        null,
        '',
        [],
        [],
        'В это поселение приезжает караван в одном из квестов на получение члена экипажа Лин',
      ),
      'Маяк',
    ],
    [
      76.58836,
      -115.7959,
      generateDescription(
        'Поселение "Кукольный дом"',
        null,
        '',
        [],
        [],
        'Поселение для начала цепочки квестов на получение члена экипажа Лин',
        [ACTIONS.QUEST, ACTIONS.CREW],
      ),
      'Поселение "Кукольный дом"',
    ],
    [
      76.1745,
      -55.7666,
      generateDescription('Поселение "Радиодруин"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Радиодруин"',
    ],
    [
      72.75104,
      -6.1084,
      generateDescription('Бар "Богомол"', null, '', [], [], '', [ACTIONS.QUEST, ACTIONS.TRADE]),
      'Бар "Богомол"',
    ],
    [
      77.99819,
      99.53613,
      generateDescription('Поселение "Авианосец"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Авианосец"',
    ],
    [
      80.42302,
      111.92871,
      generateDescription('Поселение "Дутагаз"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Дутагаз"',
    ],
    [
      67.187,
      -14.28223,
      generateDescription(
        'Мастерская "У Джмми"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        '',
        [ACTIONS.QUEST, ACTIONS.REPAIR],
      ),
      'Мастерская "У Джмми"',
    ],
    [
      62.32921,
      -31.39893,
      generateDescription('Водолазное товарищество "Ама"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Водолазное товарищество "Ама"',
    ],
    [
      53.77469,
      -120.80566,
      generateDescription('Поселение "Дракон"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Дракон"',
    ],
    [
      51.6998,
      -80.1123,
      generateDescription('Поселение "Хани Бани"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Хани Бани"',
    ],
    [
      53.77469,
      -63.85254,
      generateDescription(
        'Поселение "Мотель"',
        null,
        'В этом поселении можно взять цепочку PvP квестов',
        [],
        [],
        '',
        [ACTIONS.QUEST],
      ),
      'Поселение "Мотель"',
    ],
    [
      48.60386,
      -39.41895,
      generateDescription('"Радиовышка"', null, '', [], [], '', [ACTIONS.QUEST]),
      '"Радиовышка"',
    ],
    [
      45.24395,
      1.18652,
      generateDescription(
        'Мастерская "Север"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Север"',
    ],
    [
      58.2864,
      13.40332,
      generateDescription('Поселение "Близнецы"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Близнецы"',
    ],
    [
      48.13677,
      52.33887,
      generateDescription('Поселение "Русалка"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Русалка"',
    ],
    [
      46.40756,
      87.40723,
      generateDescription(
        'Поселение "Корабел"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        'По цепочке квестов в этом месте вы можете получит один из трех актуальных бортов I тира на выбор',
        [ACTIONS.QUEST, ACTIONS.REPAIR],
      ),
      'Поселение "Корабел"',
    ],
    [
      25.52261,
      82.57324,
      generateDescription('Поселение "Поплавок"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Поплавок"',
    ],
    [
      3.645,
      118.34473,
      generateDescription(
        'Мастерская "Нико"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        '',
        [ACTIONS.QUEST, ACTIONS.REPAIR],
      ),
      'Мастерская "Нико"',
    ],
    [
      -12.51167,
      95.58105,
      generateDescription(
        'Поселение "Три трубы"',
        null,
        '',
        [],
        [],
        'По цепочке квестов в из "Коллизея" на получение двух членов экипажа Лиззи попросит вас принисти 50 Химических отходов',
        [ACTIONS.QUEST, ACTIONS.TRADE],
      ),
      'Поселение "Три трубы"',
    ],
    [
      -1.09857,
      58.13965,
      generateDescription(
        'Мастерская "Восток"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Восток"',
    ],
    [
      23.9461,
      0.63721,
      generateDescription(
        'Поселение "Три кита"',
        null,
        'Основное поселение игры, на данном поселении находится база игрока которую нужно будет улучшать. В поселении имеется торговец, шериф выдающий как обычные так и PvP задания, а так же другие NPC',
        [],
        [],
        '',
        [ACTIONS.QUEST, ACTIONS.TRADE, ACTIONS.MESSAGE, ACTIONS.REPAIR],
      ),
      'Поселение "Три кита"',
    ],
    [
      27.43029,
      1.51611,
      generateDescription(
        'Бар "Три Хвоста"',
        null,
        'В этом поселении можно купить воду и еду, а так же продать некоторые другие товары товары',
        [],
        [],
        'В некоторых квестах на развитие базы вас будут отправлять в это место',
        [ACTIONS.QUEST, ACTIONS.TRADE],
      ),
      'Бар "Три Хвоста"',
    ],
    [
      -1.18644,
      -55.67871,
      generateDescription(
        'Мастерская "Запад"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Запад"',
    ],
    [
      6.79554,
      -80.2002,
      generateDescription(
        'Поселение "Клумба"',
        null,
        'В этом поселении можно взять цепочку PvP квестов',
        [],
        [],
        '',
        [ACTIONS.QUEST],
      ),
      'Поселение "Клумба"',
    ],
    [29.95493, -75.36621, generateDescription('Поселение "Статуя"', null, '', [], [], '')],
    [
      -31.98944,
      -76.86035,
      generateDescription(
        'Поселение "Колизей"',
        null,
        'В этом поселении можно начать цепочку квестов на получение двух членов экипажа Батыр и Аймара',
        [],
        [],
        '',
        [ACTIONS.QUEST, ACTIONS.CREW],
      ),
      'Поселение "Колизей"',
    ],
    [
      -44.55916,
      -60.68848,
      generateDescription(
        'Поселение "Донжон"',
        null,
        'В этом поселении можно продать или купить определенные товары по высокой цене',
        [],
        [],
        '',
        [ACTIONS.QUEST, ACTIONS.TRADE],
      ),
      'Поселение "Донжон"',
    ],
    [
      -37.33522,
      -37.9248,
      generateDescription('Поселение "Дом охотника на акул"', null, '', [], [], '', [
        ACTIONS.QUEST,
      ]),
      'Поселение "Дом охотника на акул"',
    ],
    [
      -55.40407,
      -53.21777,
      generateDescription('Охотник на акул', null, '', [], [], '', [ACTIONS.QUEST]),
      'Охотник на акул',
    ],
    [
      -61.07954,
      -55.67871,
      generateDescription('Поселение "Проклятый локатор"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Проклятый локатор"',
    ],
    [
      -31.98944,
      1.18652,
      generateDescription('Поселение "Орден"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Орден"',
    ],
    [
      -50.65294,
      -0.39551,
      generateDescription(
        'Мастерская "Юг"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        [],
        [],
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Юг"',
    ],
    [
      -64.75539,
      -2.06543,
      generateDescription('Поселение "Красная стрела"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Красная стрела"',
    ],
    [
      -63.33241,
      17.44629,
      generateDescription('Бар "Жираф"', null, '', [], [], '', [ACTIONS.QUEST, ACTIONS.TRADE]),
      'Бар "Жираф"',
    ],
    [
      -72.40899,
      -14.98535,
      generateDescription('Поселение "Колокольня"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Колокольня"',
    ],
    [
      -75.53014,
      22.45605,
      generateDescription('Поселение "Ветряки"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Ветряки"',
    ],
    [
      -66.7399,
      46.62598,
      generateDescription('Поселение "Здание суда"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Здание суда"',
    ],
    [
      -59.46741,
      69.47754,
      generateDescription('Поселение "Слон"', null, '', [], [], '', [ACTIONS.QUEST, ACTIONS.TRADE]),
      'Поселение "Слон"',
    ],
    [
      -44.62175,
      33.61816,
      generateDescription('Поселение "Моби Дик"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Моби Дик"',
    ],
    [
      -34.70549,
      63.06152,
      generateDescription('Поселение "Диоген"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Диоген"',
    ],
    [
      -29.11378,
      41.96777,
      generateDescription('Поселение "Вход на вулкан"', null, '', [], [], '', [ACTIONS.QUEST]),
      'Поселение "Вход на вулкан"',
    ],
  ],
  traders: [
    [
      27.01998,
      56.55762,
      generateDescription(
        'Торговец "Центр"',
        null,
        'Торговая точка для продажи и покупки ресурсов',
      ),
    ],
    [
      78.54741,
      82.46338,
      generateDescription('Торговец 1', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      62.3598,
      142.05322,
      generateDescription('Торговец 2', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -1.16447,
      163.89404,
      generateDescription('Торговец 3', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -63.32255,
      142.05322,
      generateDescription('Торговец 4', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -80.40473,
      82.50732,
      generateDescription('Торговец 5', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -83.4353,
      1.09863,
      generateDescription('Торговец 6', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -80.41571,
      -80.1123,
      generateDescription('Торговец 7', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -63.33241,
      -139.79004,
      generateDescription('Торговец 8', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -1.27431,
      -161.49902,
      generateDescription('Торговец 9', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      62.37,
      -139.61426,
      generateDescription('Торговец 10', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      80.05046,
      -80.2002,
      generateDescription('Торговец 11', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      83.18708,
      1.07666,
      generateDescription('Торговец 12', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
  ],
  dynamites: [
    [29.51611, -2.39502, generateDynamitePopup()],
    [32.45416, 5.55908, generateDynamitePopup()],
    [42.34231, -0.32959, generateDynamitePopup()],
    [34.36158, 24.54346, generateDynamitePopup()],
    [52.36218, 28.98193, generateDynamitePopup()],
    [42.21225, 49.19678, generateDynamitePopup()],
    [53.47497, 64.18213, generateDynamitePopup()],
    [61.56457, 46.14258, generateDynamitePopup()],
    [64.20638, 64.77539, generateDynamitePopup()],
    [65.91062, 74.44336, generateDynamitePopup()],
    [40.38003, 93.42773, generateDynamitePopup()],
    [20.05593, 111.88477, generateDynamitePopup()],
    [-3.25021, 122.43164, generateDynamitePopup()],
    [0.43945, 101.33789, generateDynamitePopup()],
    [-31.72817, 85.3418, generateDynamitePopup()],
    [-36.52729, 72.33398, generateDynamitePopup()],
    [-46.25585, 51.94336, generateDynamitePopup()],
    [-56.21892, 31.02539, generateDynamitePopup()],
    [-62.47172, 47.02148, generateDynamitePopup()],
    [-68.75231, 33.13477, generateDynamitePopup()],
    [-69.74855, 69.52148, generateDynamitePopup()],
    [-56.60789, 1.14258, generateDynamitePopup()],
    [-64.35893, 2.37305, generateDynamitePopup()],
    [-70.64177, -0.61523, generateDynamitePopup()],
    [-69.74855, -28.03711, generateDynamitePopup()],
    [-65.33018, -58.97461, generateDynamitePopup()],
    [-61.64816, -46.49414, generateDynamitePopup()],
    [-53.17312, -30.32227, generateDynamitePopup()],
    [-50.12058, -23.11523, generateDynamitePopup()],
    [-37.50973, -25.75195, generateDynamitePopup()],
    [-22.99885, -37.17773, generateDynamitePopup()],
    [-36.52729, -51.94336, generateDynamitePopup()],
    [-34.66936, -72.86133, generateDynamitePopup()],
    [-43.42101, -98.04199, generateDynamitePopup()],
    [-42.00033, -106.74316, generateDynamitePopup()],
    [-4.25877, -107.3584, generateDynamitePopup()],
    [-3.38182, -95.05371, generateDynamitePopup()],
    [0.48339, -58.05176, generateDynamitePopup()],
    [21.16648, -38.0127, generateDynamitePopup()],
    [24.88644, -53.83301, generateDynamitePopup()],
    [30.03106, -63.85254, generateDynamitePopup()],
    [36.91476, -70.18066, generateDynamitePopup()],
    [40.94671, -88.98926, generateDynamitePopup()],
    [34.05266, -25.88379, generateDynamitePopup()],
    [41.01307, -38.27637, generateDynamitePopup()],
    [53.14677, -60.16113, generateDynamitePopup()],
    [55.35414, -61.30371, generateDynamitePopup()],
    [65.56755, -88.37402, generateDynamitePopup()],
    [61.2068, -46.27441, generateDynamitePopup()],
    [55.45394, -24.91699, generateDynamitePopup()],
    [55.45394, 1.09863, generateDynamitePopup()],
    [59.46741, 1.09863, generateDynamitePopup()],
    [70.33353, 3.2959, generateDynamitePopup()],
    [73.31525, 2.50488, generateDynamitePopup()],
    [77.99819, -31.4209, generateDynamitePopup()],
    [-1.71361, -8.56934, generateDynamitePopup()],
    [-13.88075, 1.18652, generateDynamitePopup()],
    [-28.96009, 1.18652, generateDynamitePopup()],
    [-36.06686, 25.70801, generateDynamitePopup()],
    [-21.49396, 40.56152, generateDynamitePopup()],
    [3.55728, 45.21973, generateDynamitePopup()],
    [0.48339, 22.0166, generateDynamitePopup()],
    [23.20096, 36.95801, generateDynamitePopup()],
  ],
  explosives: [[-56.77681, 90.4834, EXPLOSIVES]],
  pantoons: [
    [69.72572, 7.7124, generatePantoonPopup()],
    [66.5045, 25.86182, generatePantoonPopup()],
    [64.74602, 40.01221, generatePantoonPopup()],
    [59.54546, 69.80713, generatePantoonPopup()],
    [32.45416, 92.83447, generatePantoonPopup()],
    [1.55987, 98.15186, generatePantoonPopup()],
    [-16.44662, 87.60498, generatePantoonPopup()],
    [-42.22852, 81.62842, generatePantoonPopup()],
    [-60.67318, 57.37061, generatePantoonPopup()],
    [-65.98227, 31.03638, generatePantoonPopup()],
    [-69.39578, 8.60229, generatePantoonPopup()],
    [-68.13885, -13.24951, generatePantoonPopup()],
    [-63.51917, -28.75122, generatePantoonPopup()],
    [-60.17431, -53.59131, generatePantoonPopup()],
    [-53.69671, -75.19043, generatePantoonPopup()],
    [-32.17561, -87.49512, generatePantoonPopup()],
    [5.00339, -94.70215, generatePantoonPopup()],
  ],
  rocks: [
    [84.09227, -164.80591, generateRockPopup()],
    [80.42485, -132.22046, generateRockPopup()],
    [71.67403, -58.9856, generateRockPopup()],
    [63.82613, -76.93726, generateRockPopup()],
    [45.35215, -120.91553, generateRockPopup()],
    [37.1428, -96.43799, generateRockPopup()],
    [-4.06154, -78.42041, generateRockPopup()],
    [-9.29731, -80.09033, generateRockPopup()],
    [-13.73138, -97.80029, generateRockPopup()],
    [-9.55742, -112.65381, generateRockPopup()],
    [-50.10649, -117.61963, generateRockPopup()],
    [-15.72881, -52.53662, generateRockPopup()],
    [-0.81296, -39.92432, generateRockPopup()],
    [23.01908, -39.96826, generateRockPopup()],
    [29.9359, -31.39893, generateRockPopup()],
    [-21.96342, -23.2251, generateRockPopup()],
    [-37.35269, -23.92822, generateRockPopup()],
    [-46.42271, -21.51123, generateRockPopup()],
    [-64.70849, -23.35693, generateRockPopup()],
    [-74.22991, -18.39111, generateRockPopup()],
    [-64.50119, -10.34912, generateRockPopup()],
    [-60.61932, 3.58154, generateRockPopup()],
    [-41.6565, 3.58154, generateRockPopup()],
    [-17.28771, 0.37354, generateRockPopup()],
    [-1.25234, 7.75635, generateRockPopup()],
    [9.34067, 1.16455, generateRockPopup()],
    [38.87393, -5.29541, generateRockPopup()],
    [56.73465, -0.71411, generateRockPopup()],
    [68.27752, -1.12061, generateRockPopup()],
    [75.39224, 12.59033, generateRockPopup()],
    [77.66004, 27.13623, generateRockPopup()],
    [39.3173, 20.72021, generateRockPopup()],
    [34.47034, 31.09131, generateRockPopup()],
    [15.39014, 30.47607, generateRockPopup()],
    [-4.54357, 31.22314, generateRockPopup()],
    [-18.75031, 23.92822, generateRockPopup()],
    [-27.8585, 23.7085, generateRockPopup()],
    [-48.0634, 19.97314, generateRockPopup()],
    [-50.2472, 29.55322, generateRockPopup()],
    [-62.17576, 36.14502, generateRockPopup()],
    [-65.99121, 69.89502, generateRockPopup()],
    [-74.83056, 66.17065, generateRockPopup()],
    [-43.08494, 77.58545, generateRockPopup()],
    [-5.81276, 42.78076, generateRockPopup()],
    [19.37334, 58.07373, generateRockPopup()],
    [32.71336, 79.16748, generateRockPopup()],
    [18.37538, 108.65479, generateRockPopup()],
    [28.55558, 118.32275, generateRockPopup()],
    [53.44881, 67.17041, generateRockPopup()],
    [78.38928, 119.15771, generateRockPopup()],
  ],
  teleports: [
    [
      -24.72687,
      -39.30908,
      generateDescription('Телепорт в Шарк-Сити', null, 'Быстрое перемещение в цетр Шарк-Сити'),
    ],
    [
      -81.41393,
      -142.0752,
      generateDescription('Телепорт из Шарк-Сити', null, 'Быстрое перемещение к поселению "Орден"'),
    ],
  ],
  postal: [
    [
      80.9699,
      1.12061,
      generateDescription(
        'Почта N',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      70.9597,
      104.63379,
      generateDescription(
        'Почта NE',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      -1.1425,
      147.7002,
      generateDescription(
        'Почта E',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      -71.66366,
      104.5459,
      generateDescription(
        'Почта SE',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      -81.28172,
      1.18652,
      generateDescription(
        'Почта S',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      -71.63599,
      -102.08496,
      generateDescription(
        'Почта SW',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      -1.1425,
      -145.23926,
      generateDescription(
        'Почта W',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
    [
      70.9597,
      -102.08496,
      generateDescription(
        'Почта NW',
        null,
        'Поселение выдающее задание на перевозку сообщений',
        null,
        null,
        null,
        [ACTIONS.MESSAGE],
      ),
    ],
  ],
  couriers: [
    [
      75.6068,
      -153.19336,
      generateDescription(
        'Курьер на воздушной подушке',
        'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
        'Блуждающий на одном месте плавающий курьер на воздушной подушке',
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.TURBINA.T1,
          ITEMS.WEAPONS.GRANATOMET.T1,
          ITEMS.WEAPONS.KARTECH.T1,
          ITEMS.WEAPONS.PULEMET.T1,
          ITEMS.WEAPONS.PUSHKA.T1,
          ITEMS.MODULES.GENERATOR.T1,
          ITEMS.MODULES.MOTOR.T1,
          ITEMS.MODULES.MOTOR.T2,
        ],
        null,
        'Довольно просто убивается если стрелять в турбины на задней части, после их поломки он потонет',
      ),
    ],
    [
      63.56812,
      -117.46582,
      generateDescription(
        'Летающий курьер (коптер)',
        'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
        'Блуждающий на одном месте летающий курьер',
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.TURBINA.T1,
          ITEMS.WEAPONS.GRANATOMET.T1,
          ITEMS.WEAPONS.KARTECH.T1,
          ITEMS.WEAPONS.PULEMET.T1,
          ITEMS.WEAPONS.PUSHKA.T1,
          ITEMS.WEAPONS.GRANATOMET.T2,
          ITEMS.WEAPONS.KARTECH.T2,
          ITEMS.WEAPONS.PULEMET.T2,
          ITEMS.WEAPONS.PUSHKA.T2,
          ITEMS.MODULES.GENERATOR.T1,
          ITEMS.MODULES.MOTOR.T1,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.MODULES.MOTOR.T3,
        ],
        null,
        'Данный противник слаб против быстрых лодок',
      ),
    ],
    [
      80.11102,
      -41.26465,
      generateDescription(
        'Плавающий курьер Т2',
        'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
        `Плавающий курьер на ${SHIPS.T2.MARLIN.name}`,
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.TURBINA.T1,
          ITEMS.WEAPONS.GRANATOMET.T1,
          ITEMS.WEAPONS.KARTECH.T1,
          ITEMS.WEAPONS.PULEMET.T1,
          ITEMS.WEAPONS.PUSHKA.T1,
          ITEMS.MODULES.GENERATOR.T1,
          ITEMS.MODULES.MOTOR.T1,
        ],
        null,
      ),
    ],
    [
      26.70636,
      71.7627,
      generateDescription(
        'Летающий курьер (коптер)',
        'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
        'Блуждающий на одном месте летающий курьер',
        [
          RESPURCES.SCRAP,
          RESPURCES.FIBER,
          RESPURCES.WOOD,
          RESPURCES.PLASTIC,
          RESPURCES.MECHANISM,
          RESPURCES.PLATS,
          RESPURCES.AMMO_DETAILS,
          RESPURCES.BARREL,
          RESPURCES.COPPER,
          RESPURCES.STEEL,
          RESPURCES.COPPER_PLATES,
          ITEMS.MODULES.TURBINA.T1,
          ITEMS.WEAPONS.GRANATOMET.T1,
          ITEMS.WEAPONS.KARTECH.T1,
          ITEMS.WEAPONS.PULEMET.T1,
          ITEMS.WEAPONS.PUSHKA.T1,
          ITEMS.WEAPONS.GRANATOMET.T2,
          ITEMS.WEAPONS.KARTECH.T2,
          ITEMS.WEAPONS.PULEMET.T2,
          ITEMS.WEAPONS.PUSHKA.T2,
          ITEMS.MODULES.GENERATOR.T1,
          ITEMS.MODULES.MOTOR.T1,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.MODULES.MOTOR.T3,
        ],
        null,
        'Данный противник слаб против быстрых лодок',
      ),
    ],
  ],
};

const legendNames = {
  pirates: 'Пиратские корабли',
  rangers: 'Корабли рейнджеров',
  scraps: 'Металл',
  ammos: 'Обломки боеприпасов',
  chemicals: 'Химические отходы',
  pois: 'Поселения',
  postal: 'Почта',
  traders: 'Торговцы',
  dynamites: 'Динамит',
  explosives: 'Мины',
  pantoons: 'Разбитые пантоны',
  rocks: 'Скалы',
  teleports: 'Быстрые перемещения',
  couriers: 'Курьеры',
};

const icons = {
  couriers: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  pirates: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  rangers: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  teleports: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/teleport.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  scraps: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/scrap.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  ammos: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/ammo.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  chemicals: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/chemical.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  pois: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/poi.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  postal: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/postal.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  traders: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/trader.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  explosives: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/explosive.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  pantoons: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pantoon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  rocks: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/rock.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  hidedRocks: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/rock_transparent.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  dynamites: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/dynamite.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
};

const iconGroups = [];

const config = {
  minZoom: 1,
  maxZoom: 6,
  zoomControl: false,
  fullscreenControl: true,
  noWrap: true,
  bounds: [
    [85.05492, -179.86816],
    [-85.05208, 180.01099],
  ],
  attribution:
    '&copy; <a href="https://steamcommunity.com/id/forded/"><img width="12" height="12" src="https://forded.github.io/ageofwater-map.github.io/icons/steam_logo.webp"/>Создано игроком FordeD</a></br><a href="https://discord.gg/SWumurcV6g"><img src="https://forded.github.io/ageofwater-map.github.io/icons/discord_logo.webp" width="12" height="12" />при поддержке Русского сообщества AoW</a>',
};

const popupOptions = {
  maxWidth: '500px',
  maxHeight: '500px',
  className: 'custom-popup-block', // name custom popup
};

const urlParams = new URLSearchParams(window.location.search);

var urlLat = urlParams.get('lat');
var urlLng = urlParams.get('lng');
var urlZoom = urlParams.get('zoom');
  
// magnification with which the map will start
const baseZoom = urlZoom ? parseFloat(urlZoom) : 3;
// co-ordinates
const baseLat = urlLat ? parseFloat(urlLat) : 24.04646;
const baseLng = urlLng ? parseFloat(urlLng) : 0.9668;

// calling map
const map = L.map('map', config).setView([baseLat, baseLng], baseZoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer(
  'https://forded.github.io/ageofwater-map.github.io/map_parts/{z}/{x}/{y}.png',
  config,
).addTo(map);

// reactivate zoom at the desired location
// [topleft, topright, bottomleft, bottomright]
L.control.zoom({ position: 'topleft' }).addTo(map);

// loop that adds many markers to the map
const types = Object.keys(worldPoints);
iconGroups['all'] = new L.FeatureGroup();
const legendMarkers = {};
let HIDED_MARKERS = localStorage.getItem('hidedMarkers') !== '' ? JSON.parse(localStorage.getItem('hidedMarkers')) : [] ;
for (const type of types) {
  iconGroups[type] = new L.FeatureGroup();
  legendMarkers[legendNames[type]] = iconGroups[type];
  for (let i = 0; i < worldPoints[type].length; i++) {
    const [lat, lng, popupContent, tooltipText] = worldPoints[type][i];
    const options = { icon: icons[type], markerType: type, markerId: type + i };
    if (type === 'rocks') {
      if (HIDED_MARKERS && HIDED_MARKERS.length) {
        if (HIDED_MARKERS.includes(type + i)) {
          options.icon = icons.hidedRocks;
        }
      }
    }

    let marker = new L.marker([lat, lng], options)
      .bindPopup(popupContent, popupOptions)
      .on('mouseover', onMarkerOpen)
      .getPopup()
      .on('remove', onMarkerClose);
    if (type === 'pois') {
      marker.bindTooltip(tooltipText, {
        permanent: true,
        direction: "bottom",
        className: "marker-toltip",
        offset: [0, 15],
      });
    }
    iconGroups[type].addLayer(marker);
    
  }
}

localStorage.setItem('hidedMarkers', JSON.stringify(HIDED_MARKERS));

let targetMarker = null;
function onMarkerOpen(e) {
 targetMarker = e.target;
}

function onMarkerClose(e) {
  targetMarker = null;
}

function hideMarker(e) {
  let hided = localStorage.getItem('hidedMarkers');
  if (!hided) {
    hided = [];
  } else {
    hided = JSON.parse(hided);
  }

  if (targetMarker !== null) {
    const key = targetMarker.options.markerId;
    if (hided.includes(key)) {
      let index = hided.indexOf(key);
      hided.splice(index, 1);
      targetMarker.setIcon(icons.rocks);
    } else {
      hided.push(key);
      targetMarker.setIcon(icons.hidedRocks);
    }
  }
  localStorage.setItem('hidedMarkers', JSON.stringify(hided));
}


// Вывод координат на карте
map.on('dragend', updateInfo);
map.on('zoomend', updateInfo);

// Блок с координатами точки
const coordinates = L.control({ position: 'bottomleft' });

coordinates.onAdd = function () {
  const div = L.DomUtil.create('div', 'center-of-map-description hide');
  L.DomEvent.disableClickPropagation(div);
  return div;
};

coordinates.addTo(map);
const markerPlace = document.querySelector('.center-of-map-description');
const mapPlace = document.querySelector('#map');

// update info about bounds when site loaded
document.addEventListener('DOMContentLoaded', function () {
  updateInfo();
});

function updateInfo() {
  const { lat, lng } = map.getCenter();
  markerPlace.innerHTML = `Координаты: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

// create custom button
const coordsPointControl = L.Control.extend({
  // button position
  options: {
    position: 'topleft',
  },

  // method
  onAdd: function (map) {
    const btn = L.DomUtil.create('button');
    btn.title = 'Показать точку вывода координат';
    btn.textContent = '⚓️';
    btn.className = 'showPoint';
    btn.setAttribute(
      'style',
      'background-color: transparent; width: 26px; height: 26px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;',
    );

    // показываем и скрываем указатель получения координат
    btn.onclick = function () {
      markerPlace.classList.toggle('hide');
      mapPlace.classList.toggle('center-of-map');
    };

    return btn;
  },
});

// добавляем кнопку на карту
map.addControl(new coordsPointControl());

L.Control.CustomButtons = L.Control.Layers.extend({
  onAdd: function () {
    this._initLayout();
    this._addMarker();
    this._removeMarker();
    this._update();
    return this._container;
  },
  _addMarker: function () {
    this.createButton('Показать', 'add-button');
  },
  _removeMarker: function () {
    this.createButton('Скрыть', 'remove-button');
  },
  createButton: function (type, className) {
    const elements = this._container.getElementsByClassName('leaflet-control-layers-list');
    const button = L.DomUtil.create('button', `btn-markers ${className}`, elements[0]);
    button.textContent = `${type} метки`;

    L.DomEvent.on(button, 'click', function (e) {
      const checkbox = document.querySelectorAll(
        '.leaflet-control-layers-overlays input[type=checkbox]',
      );

      // Remove/add all layer from map when click on button
      [].slice.call(checkbox).map((el) => {
        el.checked = type === 'Показать' ? false : true;
        try {
          el.click();
        } catch (e) {
          console.log(e);
        }
      });
    });
  },
});

new L.Control.CustomButtons(null, legendMarkers, { collapsed: false }).addTo(map);

const legendPlace = document.querySelector('.leaflet-control-layers');
const visibleMarkersPlace = document.querySelector('.add-button');
setTimeout(() => { visibleMarkersPlace.click(); }, 500);


const legendControl = L.Control.extend({
  // button position
  options: {
    position: 'topleft',
  },

  // method
  onAdd: function (map) {
    const btn = L.DomUtil.create('button');
    btn.title = 'Показать/скрыть фильтр меток';
    btn.textContent = '🔘';
    btn.className = 'showLegend';
    btn.setAttribute(
      'style',
      "background-color: transparent; width: 26px; height: 26px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;",
    );

    // показываем и скрываем указатель получения координат
    btn.onclick = function () {
      legendPlace.classList.toggle('hide');
    };

    return btn;
  },
});

// добавляем кнопку на карту
map.addControl(new legendControl());

const shareControl = L.Control.extend({
  // button position
  options: {
    position: 'topleft',
  },

  // method
  onAdd: function (map) {
    const btn = L.DomUtil.create('button');
    btn.title = 'Скопировать быструю ссылку на карту';
    btn.textContent = '🌐';
    btn.className = 'showLegend';
    btn.setAttribute(
      'style',
      'background-color: transparent; width: 26px; height: 26px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;',
    );

    // показываем и скрываем указатель получения координат
    btn.onclick = function () {
      const { lat, lng } = map.getCenter();
      const zoom = map.getZoom();
      const url =
        location.protocol +
        '//' +
        location.host +
        location.pathname +
        `?lat=${lat.toFixed(5)}&lng=${lng.toFixed(5)}&zoom=${zoom}`;
      navigator.clipboard.writeText(url);
      alert(`Точная ссылка места на карте скопирована в буфер обмена.\n${url}`);
    };

    return btn;
  },
});

// добавляем кнопку на карту
map.addControl(new shareControl());


function generateDescription(title, image = null, description = null, resources = [], boardings = [], nuances = null, actions = [], ships = [], isHidable = false) {
  let context = '';
  if (isHidable) {
    context += '<div class="hide-button-block"><button onClick="hideMarker()">Скрыть/показать маркер</button></div>'
  }

  context += `<div class="popup-header-block"><h3 class="popup-title">${title}</h3>`;
  if (image) {
    context += `<div class="popup-main-image"><img src="${image}" width="100" height="100"></div>`;
  }
  context += '<div class="clr"></div>';
  if (actions) {
    context += '<div class="popup-actions-block">';
    for (const action of actions) {
      context += `<img class="popup-resource-image" src="${action}" width="20" height="20" />`;
    }
    context += '</div>';
  }
  context += '</div><div class="clr"></div>';
  if (description) {
    context += `<b>Описание:</b><p>${description}</p>`;
  }
  if (nuances) {
    context += `<b>Уточнение:</b><p>${nuances}</p>`;
  }
  if (resources && resources.length) {
    context += `<div class="popup-resource-block">`;
    context += '<b>Получаемые ресурсы:</b>';
    for (const resource of resources) {
      context += `<img class="popup-resource-image" src="${resource}" width="40" height="40" />`;
    }
    context += `</div>`;
  }

  if (boardings && boardings.length) {
    context += `<div class="popup-resource-block">`;
    context += '<b>Можно получить при абордаже:</b>';
    for (const boarding of boardings) {
      context += `<img class="popup-resource-image" src="${boarding}" width="75" height="75" />`;
    }
    context += `</div>`;
  }

  if (ships && ships.length) {
    context += `<div class="popup-resource-block">`;
    context += '<b>Можно получить корабли:</b>';
    for (const ship of ships) {
      context += `<div class="board-ship-block"><b>${ship.name}</b><img class="popup-resource-image" src="${ship.img}" width="300" height="200" /></div>`;
    }
    context += `</div>`;
  }
  return context;
};


function generateScrapPopup() {
  return generateDescription(
    SCRAP,
    RESPURCES.SCRAP,
    'Место добычи при помощи драги',
    [RESPURCES.SCRAP, RESPURCES.COPPER, RESPURCES.STEEL, RESPURCES.COPPER_PLATES, RESPURCES.FIBER],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в ремонте, крафте, исследованиях и строительстве базы',
  );
}

function generateAmmoPopup() {
  return generateDescription(
    AMMO,
    RESPURCES.AMMO,
    'Место добычи при помощи драги',
    [RESPURCES.AMMO, RESPURCES.SCRAP, RESPURCES.WOOD, RESPURCES.TEXTILE],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в ремонте и крафте оружия, исследованиях',
  );
}

function generateChemicalPopup() {
  return generateDescription(
    CHEMICAL,
    RESPURCES.CHEMICAL,
    'Место добычи при помощи драги',
    [RESPURCES.CHEMICAL, RESPURCES.WOOD, RESPURCES.FIBER, RESPURCES.SCRAP],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в ремонте, крафте модулей и исследованиях',
  );
}

function generateDynamitePopup() {
  return generateDescription(
    DYNAMITE,
    RESPURCES.DYNAMITE,
    'Место добычи при помощи драги',
    [RESPURCES.DYNAMITE, RESPURCES.AMMO, RESPURCES.CHEMICAL, RESPURCES.SCRAP, RESPURCES.FIBER],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в ремонте вооружения',
  );
}

function generatePantoonPopup() {
  return generateDescription(
    PANTOON,
    RESPURCES.WOOD,
    'Место добычи через обычноге открытие',
    [
      RESPURCES.WOOD,
      RESPURCES.BAIT,
      RESPURCES.BARREL,
      RESPURCES.FIBER,
      RESPURCES.SCRAP,
      RESPURCES.EAT,
    ],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в ремонте, крафте модулей и исследованиях',
  );
}

function generateRockPopup() {
  return generateDescription(
    ROCK,
    RESPURCES.BALLAST,
    'Место добычи через обычноге открытие. Исследование скал требуется для задания "Географическая гипотеза"',
    [
      RESPURCES.BALLAST,
      RESPURCES.BAIT,
      RESPURCES.WOOD,
      RESPURCES.FIBER,
      RESPURCES.EAT,
    ],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в исследованиях и строительстве',
    null,
    null,
    true,
  );
}

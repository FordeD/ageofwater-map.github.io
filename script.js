// grid data
const middleMap = [14.9554, 1.17554];
const topLeftMap = [-85.05302, -177.76978];
const rightDownMap = [84.87127, 180.02727];
const mapWidthOffset = 1.38428;
const mapWidth = Math.abs(topLeftMap[1]) + rightDownMap[1];
const mapHalfWidth = mapWidth / 2;
const squareSideWidth = mapWidth / 22;
const mapHeights = [
  -85.05492, -83.43279, -81.2917, -78.44663, -74.68905, -69.75616, -63.36198, -55.07837, -44.65302,
  -31.95216, -17.18278, -1.18644, 14.92355, 29.89781, 42.95642, 53.73572, 62.33941, 68.9978,
  74.11605, 78.00276, 80.9561, 83.19229, 84.86971,
].reverse();
const widthNamings = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'AA',
  'AB',
  'AC',
  'AD',
  'AE',
  'AF',
  'AG',
  'AH',
  'AI',
  'AJ',
  'AK',
  'AL',
  'AM',
  'AN',
  'AO',
  'AP',
  'AQ',
  'AR',
  'AS',
  'AT',
  'AU',
  'AV',
];
const heightNamings = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

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
    SHIELD_JEL_VOINA: {
      T21: 'https://forded.github.io/ageofwater-map.github.io/items/shield_jel_voina_1.jpg',
      T22: 'https://forded.github.io/ageofwater-map.github.io/items/shield_jel_voina_2.jpg',
    },
    MUSOR_SHIELD: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/mus_shield_1.jpg',
    },
    MUSOR_SHIELD_DVOIN: {
      T1: 'https://forded.github.io/ageofwater-map.github.io/items/mus_shield_dvoin.jpg',
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
    RUB_1338: 'https://forded.github.io/ageofwater-map.github.io/items/rub_1338.jpg',
    TRAULER: {
      CABINA: 'https://forded.github.io/ageofwater-map.github.io/items/cab_traul.jpg',
    },
    CISTERNA: 'https://forded.github.io/ageofwater-map.github.io/items/cist.jpg',
    POZJ_MACHTA: 'https://forded.github.io/ageofwater-map.github.io/items/pozj_machta.jpg',
    PLAST_RUBKA: 'https://forded.github.io/ageofwater-map.github.io/items/plast_rub.jpg',
    RUBKA_BOTA: 'https://forded.github.io/ageofwater-map.github.io/items/rubka_bota.jpg',
    ZASH_PEREGORODKA: 'https://forded.github.io/ageofwater-map.github.io/items/zash_pereg.jpg',
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
      url: 'https://ageofwater.fandom.com/wiki/Sofiya_Longboat',
    },
    SONJA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_sonja.webp',
      name: 'Соня (I)',
      url: 'https://ageofwater.fandom.com/wiki/Sonja_Longboat',
    },
    DINGHY: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_dinghy.webp',
      name: 'Шаланда (I)',
      url: 'https://ageofwater.fandom.com/wiki/Dinghy',
    },
    SARGAN: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_sargan.webp',
      name: 'ТК3 Сарган торпедный катер (I)',
      url: 'https://ageofwater.fandom.com/wiki/TK3_Garpike_Torpedo_Boat',
    },
    NJORD: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_njord.webp',
      name: 'Нъерд (I)',
      url: 'https://ageofwater.fandom.com/wiki/Njord_Boat',
    },
    JARL: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_jarl.webp',
      name: 'Ярл (I)',
      url: 'https://ageofwater.fandom.com/wiki/Jarl_Trawler',
    },
    RUBBER: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T1_rubber.webp',
      name: 'Резиновая лодка (I)',
      url: 'https://ageofwater.fandom.com/wiki/Rubber_Boat',
    },
  },
  T2: {
    SCORPEN: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_scorpen.webp',
      name: 'Скорпен (II)',
      url: 'https://ageofwater.fandom.com/wiki/Scorpena_Torpedo_Boat',
    },
    MARIANA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_mariana.webp',
      name: 'Сейнер Марина (II)',
      url: 'https://ageofwater.fandom.com/wiki/Mariana_Seiner',
    },
    MARLIN: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_marlin.webp',
      name: 'Марлин (II)',
      url: 'https://ageofwater.fandom.com/wiki/TK7_Marlin_Torpedo_Boat',
    },
    VEHA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_veha.webp',
      name: 'Лоцманский катер Веха (II)',
      url: 'https://ageofwater.fandom.com/wiki/Strut_Pilot_Boat',
    },
  },
  T3: {
    BISTRIY: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_bistriy.webp',
      name: 'Быстрый (III)',
      url: 'https://ageofwater.fandom.com/wiki/Snappy_Patrol_Boat',
    },
    ZORKIJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_zorkij.webp',
      name: 'Зоркий (III)',
      url: 'https://ageofwater.fandom.com/wiki/Vigilant_Patrol_Boat',
    },
    CLEVER: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_clever.webp',
      name: 'Клевер (III)',
      url: 'https://ageofwater.fandom.com/wiki/Shamrock_Trawler',
    },
    MORJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_morj.webp',
      name: 'Морж (III)',
      url: 'https://ageofwater.fandom.com/wiki/Walrus_Tugboat',
    },
  },
  T4: {
    ANCHOUS: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_anchous.webp',
      name: 'Анчоус (IV)',
      url: 'https://ageofwater.fandom.com/wiki/Anchovy_Trawler',
    },
    MURENA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_murena.webp',
      name: 'Мурена (IV)',
      url: 'https://ageofwater.fandom.com/wiki/BK_Muraena_Patrol_Boat',
    },
    ZABIJAKA: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_zabijaka.webp',
      name: 'Забияка (IV)',
      url: 'https://ageofwater.fandom.com/wiki/Brawler_Torpedo_Boat',
    },
  },
  T5: {
    REPEJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T5_repej.webp',
      name: 'Репей (V)',
      url: 'https://ageofwater.fandom.com/wiki/Burdock_Gunboat',
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
      -42.9375,
      218.4375,
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
        {
          [SHIPS.T5.REPEJ.name]: [
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T21,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T22,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.TRAULER.CABINA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
            ITEMS.CONSTRUCTIONS.RUB_1338,
            ITEMS.MODULES.GENERATOR.T3,
            ITEMS.MODULES.POMPA.T4,
            ITEMS.CONSTRUCTIONS.PALTUS.OSNOVANIE,
          ],
          [SHIPS.T4.ZABIJAKA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T21,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T22,
          ],
          [SHIPS.T3.CLEVER.name]: [ITEMS.MODULES.ACCUMULATOR.T2],
        },
        `В этой точке можно абордажить ${SHIPS.T5.REPEJ.name}`,
        null,
        [SHIPS.T5.REPEJ, SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER, SHIPS.T2.MARIANA],
      ),
    ],
  ],
  pirates: [
    [
      -19.4375,
      106.8125,
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
          ITEMS.CONSTRUCTIONS.PLAST_RUBKA,
        ],
        `На данном месте проблемы могут быть только от ${SHIPS.T3.CLEVER.name}, в остальном фармится спокойно`,
        null,
        [SHIPS.T4.ANCHOUS, SHIPS.T3.CLEVER],
      ),
    ],
    [
      -54.1875,
      13.0625,
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
      -101.9375,
      19.4375,
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
      -156.8125,
      29.8125,
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
      -154.4375,
      44.3125,
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
      -218.4375,
      38.8125,
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
        {
          [SHIPS.T3.BISTRIY.name]: [
            ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.MODULES.GENERATOR.T3,
            ITEMS.CONSTRUCTIONS.JEL_VOIN.CABINA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ],
          [SHIPS.T3.ZORKIJ.name]: [
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.MODULES.ACCUMULATOR.T2,
          ],
          [SHIPS.T4.ANCHOUS.name]: [
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ],
          [SHIPS.T4.MURENA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
          ],
        },
        'В этом месте хорошо фармить части оружия и ткань при абордаже на разбор, корабли слабые и выбить экипаж довольно просто',
        null,
        [SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -230.9375,
      90.1875,
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
      -236.6875,
      157.9375,
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
        {
          [SHIPS.T4.MURENA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.MODULES.GENERATOR.T3,
            ITEMS.MODULES.ACCUMULATOR.T3,
          ],
          [SHIPS.T4.ANCHOUS.name]: [
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ],
        },
        '',
        null,
        [SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -178.9375,
      216.4375,
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
        {
          [SHIPS.T5.REPEJ.name]: [
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.TRAULER.CABINA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
            ITEMS.MODULES.GENERATOR.T3,
          ],
          [SHIPS.T2.MARIANA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ],
        },
        `В этой точке можно абордажить ${SHIPS.T5.REPEJ.name}`,
        null,
        [SHIPS.T5.REPEJ, SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER, SHIPS.T2.MARIANA],
      ),
    ],
    [
      -8.8125,
      146.9375,
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
          ITEMS.MODULES.TRUBA.T3,
        ],
        `В этой точке не получится абордажить ${SHIPS.T5.REPEJ.name}, при выведении экипажа из строя корабль сразу потонет`,
        null,
        [SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER, SHIPS.T2.MARIANA],
      ),
    ],
    [
      -83.6875,
      117.5625,
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
      -65.1875,
      180.0625,
      generateDescription(
        'Флот T1-T2',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Флот из кораблей ${SHIPS.T1.NJORD.name}, Т1 и Т2, быстро спавнится для прокачки без остановки`,
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
      -71.8125,
      193.8125,
      generateDescription(
        'Флот T1 и плавающих на подушке курьеров',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Флот из кораблей ${SHIPS.T1.NJORD.name} и плавающих на подушке курьеров. очень сильный флот из-за большого количества ракет и гранат выпускаемых курьерами`,
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
    [
      -114.8125,
      46.1875,
      generateDescription(
        'Флот T1 и T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой пиратский флот состояший из ${SHIPS.T5.REPEJ.name} и ${SHIPS.T1.SARGAN.name}.`,
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
        `В этой точке можно абордажить ${SHIPS.T5.REPEJ.name}, но топятся они так же легко`,
        null,
        [SHIPS.T5.REPEJ, SHIPS.T1.SARGAN],
      ),
    ],
    [
      -188.8125,
      219.8125,
      generateDescription(
        'Два корабля Т1',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Два корабля ${SHIPS.T1.SOFIYA.name}.`,
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
        {
          [SHIPS.T1.SOFIYA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
            ITEMS.CONSTRUCTIONS.RUBKA_BOTA,
          ],
        },
        'Появляются рядом с потоком, во время абордажа нужно быть внимательней, могут заагриться Репеи из флота рядом',
        null,
        [SHIPS.T1.SOFIYA],
      ),
    ],
    [
      -45.9375,
      81.5625,
      generateDescription(
        'Корабль Т2',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Корабль ${SHIPS.T2.VEHA.name}.`,
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
        {
          [SHIPS.T2.VEHA.name]: [ITEMS.MODULES.POMPA.T3, ITEMS.CONSTRUCTIONS.ZASH_PEREGORODKA],
        },
        '',
        null,
        [SHIPS.T2.VEHA],
      ),
    ],
    [
      -38.0625,
      162.6875,
      generateDescription(
        'Большой флот Т1 и дельтапланов',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой флот из кораблей ${SHIPS.T1.DINGHY.name} и дельтапланы пиратов.`,
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
        {
          [SHIPS.T1.DINGHY.name]: [
            ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STENKA.T1,
          ],
        },
        'Большой быстро восстанавливающий себя флот, неудобен для фарма и прокачки',
        null,
        [SHIPS.T1.DINGHY],
      ),
    ],
    [
      -151.0625,
      232.1875,
      generateDescription(
        'Корабли T1 и T3',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой флот из кораблей ${SHIPS.T3.MORJ.name} и ${SHIPS.T1.DINGHY.name}.`,
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
        {
          [SHIPS.T3.MORJ.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.MODULES.ACCUMULATOR.T1,
            ITEMS.CONSTRUCTIONS.RUBKA_BOTA,
          ],
        },
        `Здесь можно абордажить ${SHIPS.T3.MORJ.name}, хоть у него и название Нашалда(III), однако выбить рулевого сложно из-за находящихся рядом взрывающихся бочек.`,
        null,
        [SHIPS.T3.MORJ],
      ),
    ],
    [
      -165.3125,
      234.1875,
      generateDescription(
        'Флот T3-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой пиратский флот состояший из ${SHIPS.T5.REPEJ.name}, ${SHIPS.T4.ZABIJAKA.name} и ${SHIPS.T3.CLEVER.name}.`,
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
          ITEMS.MODULES.TRUBA.T3,
        ],
        `В этой точке можно абордажить ${SHIPS.T5.REPEJ.name}`,
        null,
        [SHIPS.T5.REPEJ, SHIPS.T4.ZABIJAKA, SHIPS.T3.CLEVER],
      ),
    ],
    [
      -268.5625,
      134.6875,
      generateDescription(
        'Флот T1-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T1.DINGHY.name}, ${SHIPS.T2.MARIANA.name}, ${SHIPS.T1.SARGAN.name}, ${SHIPS.T1.JARL.name}, ${SHIPS.T1.RUBBER.name}. вооруженных дробовиками и гранатометами`,
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
        `Находятся за буйками ровно от центра квадрата L22 на Юг в 1100 метрах`,
        null,
        [SHIPS.T4.ANCHOUS],
      ),
    ],
    [
      -290.6875,
      136.4375,
      generateDescription(
        'Флот T1-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Большой пиратский флот состояший из ${SHIPS.T5.REPEJ.name}, ${SHIPS.T4.ZABIJAKA.name}, ${SHIPS.T3.MORJ.name}, ${SHIPS.T1.DINGHY.name}, ${SHIPS.T1.SARGAN.name}, ${SHIPS.T1.JARL.name} и дельтапланов`,
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
          ITEMS.MODULES.TRUBA.T3,
        ],
        `Находятся за буйками ровно от центра квадрата L22 на Юг в 3500 метрах`,
        null,
        [],
      ),
    ],
  ],
  scraps: [
    [-17.0625, 33.1875, generateScrapPopup()],
    [-48.4375, 12.8125, generateScrapPopup()],
    [-45.6875, 41.1875, generateScrapPopup()],
    [-66.9375, 36.9375, generateScrapPopup()],
    [-22.4375, 62.3125, generateScrapPopup()],
    [-24.5625, 92.5625, generateScrapPopup()],
    [-11.5625, 114.8125, generateScrapPopup()],
    [-33.6875, 115.0625, generateScrapPopup()],
    [-46.0625, 101.0625, generateScrapPopup()],
    [-54.3125, 82.0625, generateScrapPopup()],
    [-68.8125, 66.8125, generateScrapPopup()],
    [-83.4375, 55.3125, generateScrapPopup()],
    [-95.4375, 71.1875, generateScrapPopup()],
    [-83.8125, 79.8125, generateScrapPopup()],
    [-72.1875, 91.1875, generateScrapPopup()],
    [-66.8125, 110.0625, generateScrapPopup()],
    [-78.6875, 121.3125, generateScrapPopup()],
    [-80.1875, 103.0625, generateScrapPopup()],
    [-90.3125, 92.9375, generateScrapPopup()],
    [-105.6875, 85.4375, generateScrapPopup()],
    [-99.4375, 104.3125, generateScrapPopup()],
    [-88.3125, 114.9375, generateScrapPopup()],
    [-96.9375, 121.5625, generateScrapPopup()],
    [-111.4375, 121.4375, generateScrapPopup()],
    [-78.6875, 136.5625, generateScrapPopup()],
    [-88.1875, 142.9375, generateScrapPopup()],
    [-96.8125, 136.1875, generateScrapPopup()],
    [-114.8125, 142.8125, generateScrapPopup()],
    [-99.4375, 153.4375, generateScrapPopup()],
    [-90.1875, 164.8125, generateScrapPopup()],
    [-80.0625, 154.5625, generateScrapPopup()],
    [-66.6875, 147.8125, generateScrapPopup()],
    [-72.0625, 166.6875, generateScrapPopup()],
    [-83.6875, 178.0625, generateScrapPopup()],
    [-95.8125, 186.6875, generateScrapPopup()],
    [-83.3125, 202.5625, generateScrapPopup()],
    [-68.9375, 190.9375, generateScrapPopup()],
    [-54.1875, 175.5625, generateScrapPopup()],
    [-46.0625, 156.8125, generateScrapPopup()],
    [-33.4375, 142.6875, generateScrapPopup()],
    [-11.6875, 142.9375, generateScrapPopup()],
    [-22.6875, 167.9375, generateScrapPopup()],
    [-22.5625, 195.4375, generateScrapPopup()],
    [-17.0625, 224.4375, generateScrapPopup()],
    [-45.5625, 216.4375, generateScrapPopup()],
    [-48.4375, 245.0625, generateScrapPopup()],
    [-66.9375, 220.8125, generateScrapPopup()],
  ],
  ammos: [
    [-83.5625, 18.6875, generateAmmoPopup()],
    [-107.1875, 14.6875, generateAmmoPopup()],
    [-103.3125, 50.3125, generateAmmoPopup()],
    [-112.1875, 66.8125, generateAmmoPopup()],
    [-128.3125, 64.6875, generateAmmoPopup()],
    [-126.5625, 43.3125, generateAmmoPopup()],
    [-132.1875, 13.8125, generateAmmoPopup()],
    [-155.9375, 24.5625, generateAmmoPopup()],
    [-145.0625, 47.9375, generateAmmoPopup()],
    [-147.4375, 69.1875, generateAmmoPopup()],
    [-147.0625, 87.8125, generateAmmoPopup()],
    [-133.3125, 86.6875, generateAmmoPopup()],
    [-119.0625, 85.0625, generateAmmoPopup()],
    [-178.1875, 30.1875, generateAmmoPopup()],
    [-162.3125, 56.6875, generateAmmoPopup()],
    [-177.9375, 69.8125, generateAmmoPopup()],
    [-165.3125, 81.4375, generateAmmoPopup()],
    [-158.9375, 97.0625, generateAmmoPopup()],
    [-149.6875, 108.0625, generateAmmoPopup()],
    [-137.9375, 100.0625, generateAmmoPopup()],
    [-125.4375, 99.8125, generateAmmoPopup()],
    [-146.1875, 121.4375, generateAmmoPopup()],
    [-161.3125, 121.9375, generateAmmoPopup()],
    [-170.5625, 111.4375, generateAmmoPopup()],
    [-176.8125, 96.5625, generateAmmoPopup()],
    [-192.4375, 86.8125, generateAmmoPopup()],
    [-202.8125, 63.1875, generateAmmoPopup()],
    [-215.5625, 91.1875, generateAmmoPopup()],
    [-198.5625, 104.8125, generateAmmoPopup()],
    [-185.5625, 118.5625, generateAmmoPopup()],
    [-214.6875, 117.8125, generateAmmoPopup()],
  ],
  chemicals: [
    [-214.5625, 139.9375, generateChemicalPopup()],
    [-185.6875, 139.3125, generateChemicalPopup()],
    [-198.5625, 152.9375, generateChemicalPopup()],
    [-215.6875, 166.6875, generateChemicalPopup()],
    [-192.4375, 170.8125, generateChemicalPopup()],
    [-176.8125, 161.4375, generateChemicalPopup()],
    [-170.4375, 146.3125, generateChemicalPopup()],
    [-161.4375, 135.6875, generateChemicalPopup()],
    [-146.1875, 136.4375, generateChemicalPopup()],
    [-149.6875, 149.6875, generateChemicalPopup()],
    [-158.9375, 160.8125, generateChemicalPopup()],
    [-165.1875, 176.4375, generateChemicalPopup()],
    [-177.9375, 188.0625, generateChemicalPopup()],
    [-202.9375, 194.5625, generateChemicalPopup()],
    [-184.0625, 222.0625, generateChemicalPopup()],
    [-162.4375, 201.0625, generateChemicalPopup()],
    [-147.4375, 188.5625, generateChemicalPopup()],
    [-147.1875, 209.8125, generateChemicalPopup()],
    [-155.9375, 233.0625, generateChemicalPopup()],
    [-146.8125, 169.9375, generateChemicalPopup()],
    [-133.3125, 171.0625, generateChemicalPopup()],
    [-138.0625, 157.6875, generateChemicalPopup()],
    [-127.0625, 146.1875, generateChemicalPopup()],
    [-125.3125, 157.9375, generateChemicalPopup()],
    [-123.0625, 169.3125, generateChemicalPopup()],
    [-123.6875, 179.6875, generateChemicalPopup()],
    [-116.0625, 180.9375, generateChemicalPopup()],
    [-102.1875, 171.0625, generateChemicalPopup()],
    [-112.1875, 190.8125, generateChemicalPopup()],
    [-128.3125, 193.1875, generateChemicalPopup()],
    [-103.0625, 207.5625, generateChemicalPopup()],
    [-126.5625, 214.4375, generateChemicalPopup()],
    [-132.0625, 243.9375, generateChemicalPopup()],
    [-107.0625, 242.9375, generateChemicalPopup()],
    [-83.5625, 238.9375, generateChemicalPopup()],
  ],
  pois: [
    [
      -25.10938,
      25.20313,
      generateDescription(
        'Поселение "Расщелина"',
        null,
        'Поселение для получения квестов, можно зайти только днем',
        null,
        null,
        'В этом поселении берутся PvP квесты',
        [ACTIONS.QUEST],
      ),
      'Поселение "Расщелина"',
    ],
    [
      -232.82813,
      24.70313,
      generateDescription('Поселение "Шарк-Сити"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Шарк-Сити"',
    ],
    [
      -236.51563,
      18.26563,
      generateDescription('Тайное логово', null, '', null, null, '', [ACTIONS.QUEST]),
      'Тайное логово',
    ],
    [
      -209.77344,
      215.60156,
      generateDescription('Поселение "Бензоколонка"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Бензоколонка"',
    ],
    [
      -24.53125,
      24.65625,
      generateDescription(
        'Бар "Веселая пещера"',
        null,
        'Можно зайти только ночью',
        null,
        null,
        'В этом месте берутся и сдаются квесты на члена экипажа Лин',
        [ACTIONS.QUEST],
      ),
      'Бар "Веселая пещера"',
    ],
    [
      -36.09375,
      24.71875,
      generateDescription(
        'Маяк',
        null,
        '',
        null,
        null,
        'В это поселение приезжает караван в одном из квестов на получение члена экипажа Лин',
      ),
      'Маяк',
    ],
    [
      -40.71875,
      45.53125,
      generateDescription(
        'Поселение "Кукольный дом"',
        null,
        '',
        null,
        null,
        'Поселение для начала цепочки квестов на получение члена экипажа Лин',
        [ACTIONS.QUEST, ACTIONS.CREW],
      ),
      'Поселение "Кукольный дом"',
    ],
    [
      -42.03125,
      88.34375,
      generateDescription('Поселение "Радиодруин"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Радиодруин"',
    ],
    [
      -51.21875,
      123.65625,
      generateDescription('Бар "Богомол"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Бар "Богомол"',
    ],
    [
      -36.42188,
      200.95313,
      generateDescription('Поселение "Авианосец"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Авианосец"',
    ],
    [
      -26.92188,
      207.48438,
      generateDescription('Поселение "Дутагаз"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Дутагаз"',
    ],
    [
      -62.76563,
      117.82813,
      generateDescription(
        'Мастерская "У Джмми"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        '',
        [ACTIONS.QUEST, ACTIONS.REPAIR],
      ),
      'Мастерская "У Джмми"',
    ],
    [
      -70.89063,
      105.67188,
      generateDescription('Водолазное товарищество "Ама"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Водолазное товарищество "Ама"',
    ],
    [
      -82.46875,
      42.09375,
      generateDescription('Поселение "Дракон"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Дракон"',
    ],
    [
      -84.78125,
      70.96875,
      generateDescription('Поселение "Хани Бани"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Хани Бани"',
    ],
    [
      -82.46875,
      82.53125,
      generateDescription(
        'Поселение "Мотель"',
        null,
        'В этом поселении можно взять цепочку PvP квестов',
        null,
        null,
        '',
        [ACTIONS.QUEST],
      ),
      'Поселение "Мотель"',
    ],
    [
      -88.34375,
      99.90625,
      generateDescription('"Радиовышка"', null, '', null, null, '', [ACTIONS.QUEST]),
      '"Радиовышка"',
    ],
    [
      -91.84375,
      128.84375,
      generateDescription(
        'Мастерская "Север"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Север"',
    ],
    [
      -76.65625,
      137.53125,
      generateDescription('Поселение "Близнецы"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Близнецы"',
    ],
    [
      -88.90625,
      165.34375,
      generateDescription('Поселение "Русалка"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Русалка"',
    ],
    [
      -90.65625,
      190.15625,
      generateDescription(
        'Поселение "Корабел"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        'По цепочке квестов в этом месте вы можете получит один из трех актуальных бортов I тира на выбор',
        [ACTIONS.QUEST, ACTIONS.REPAIR],
      ),
      'Поселение "Корабел"',
    ],
    [
      -109.109375,
      186.671875,
      generateDescription('Поселение "Поплавок"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Поплавок"',
    ],
    [
      -125.359375,
      212.109375,
      generateDescription(
        'Мастерская "Нико"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        '',
        [ACTIONS.QUEST, ACTIONS.REPAIR],
      ),
      'Мастерская "Нико"',
    ],
    [
      -136.921875,
      195.953125,
      generateDescription(
        'Поселение "Три трубы"',
        null,
        '',
        null,
        null,
        'По цепочке квестов в из "Коллизея" на получение двух членов экипажа Лиззи попросит вас принисти 50 Химических отходов',
        [ACTIONS.QUEST, ACTIONS.TRADE],
      ),
      'Поселение "Три трубы"',
    ],
    [
      -128.859375,
      169.328125,
      generateDescription(
        'Мастерская "Восток"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Восток"',
    ],
    [
      -110.578125,
      128.453125,
      generateDescription(
        'Поселение "Три кита"',
        null,
        'Основное поселение игры, на данном поселении находится база игрока которую нужно будет улучшать. В поселении имеется торговец, шериф выдающий как обычные так и PvP задания, а так же другие NPC',
        null,
        null,
        '',
        [ACTIONS.QUEST, ACTIONS.TRADE, ACTIONS.MESSAGE, ACTIONS.REPAIR],
      ),
      'Поселение "Три кита"',
    ],
    [
      -107.640625,
      129.109375,
      generateDescription(
        'Бар "Хвост Кита"',
        null,
        'В этом поселении можно купить воду и еду, а так же продать некоторые другие товары товары',
        null,
        null,
        'В некоторых квестах на развитие базы вас будут отправлять в это место',
        [ACTIONS.QUEST, ACTIONS.TRADE],
      ),
      'Бар "Три Хвоста"',
    ],
    [
      -128.828125,
      88.359375,
      generateDescription(
        'Мастерская "Запад"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Запад"',
    ],
    [
      -123.078125,
      71.015625,
      generateDescription(
        'Поселение "Клумба"',
        null,
        'В этом поселении можно взять цепочку PvP квестов',
        null,
        null,
        '',
        [ACTIONS.QUEST],
      ),
      'Поселение "Клумба"',
    ],
    [29.95493, -75.36621, generateDescription('Поселение "Статуя"', null, '', null, null, '')],
    [
      -151.984375,
      73.296875,
      generateDescription(
        'Поселение "Колизей"',
        null,
        'В этом поселении можно начать цепочку квестов на получение двух членов экипажа Батыр и Аймара',
        null,
        null,
        '',
        [ACTIONS.QUEST, ACTIONS.CREW],
      ),
      'Поселение "Колизей"',
    ],
    [
      -163.546875,
      84.921875,
      generateDescription(
        'Поселение "Донжон"',
        null,
        'В этом поселении можно продать или купить определенные товары по высокой цене',
        null,
        null,
        '',
        [ACTIONS.QUEST, ACTIONS.TRADE],
      ),
      'Поселение "Донжон"',
    ],
    [
      -156.546875,
      101.046875,
      generateDescription('Поселение "Дом охотника на акул"', null, '', null, null, '', [
        ACTIONS.QUEST,
      ]),
      'Поселение "Дом охотника на акул"',
    ],
    [
      -175.546875,
      90.078125,
      generateDescription('Охотник на акул', null, '', null, null, '', [ACTIONS.QUEST]),
      'Охотник на акул',
    ],
    [
      -183.203125,
      88.390625,
      generateDescription('Поселение "Проклятый локатор"', null, '', null, null, '', [
        ACTIONS.QUEST,
      ]),
      'Поселение "Проклятый локатор"',
    ],
    [
      -152.09375,
      129.53125,
      generateDescription('Поселение "Орден"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Орден"',
    ],
    [
      -169.90625,
      127.65625,
      generateDescription(
        'Мастерская "Юг"',
        null,
        'В этой мастерской можно починить корабль за пробки',
        null,
        null,
        '',
        [ACTIONS.REPAIR],
      ),
      'Мастерская "Юг"',
    ],
    [
      -189.03125,
      126.59375,
      generateDescription('Поселение "Красная стрела"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Красная стрела"',
    ],
    [
      -186.59375,
      140.46875,
      generateDescription('Бар "Жираф"', null, '', null, null, '', [ACTIONS.QUEST, ACTIONS.TRADE]),
      'Бар "Жираф"',
    ],
    [
      -204.03125,
      117.28125,
      generateDescription('Поселение "Колокольня"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Колокольня"',
    ],
    [
      -212.15625,
      143.90625,
      generateDescription('Поселение "Ветряки"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Ветряки"',
    ],
    [
      -192.34375,
      161.28125,
      generateDescription('Поселение "Здание суда"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Здание суда"',
    ],
    [
      -180.96875,
      177.34375,
      generateDescription('Поселение "Слон"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
      'Поселение "Слон"',
    ],
    [
      -163.46875,
      152.03125,
      generateDescription('Поселение "Моби Дик"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Моби Дик"',
    ],
    [
      -154.28125,
      172.84375,
      generateDescription('Поселение "Диоген"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Диоген"',
    ],
    [
      -149.65625,
      157.71875,
      generateDescription('Поселение "Вход на вулкан"', null, '', null, null, '', [ACTIONS.QUEST]),
      'Поселение "Вход на вулкан"',
    ],
  ],
  traders: [
    [
      -108.03125,
      168.09375,
      generateDescription(
        'Торговец "Центр"',
        null,
        'Торговая точка для продажи и покупки ресурсов',
      ),
    ],
    [
      -34.34375,
      186.65625,
      generateDescription('Торговец 1', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -70.90625,
      228.96875,
      generateDescription('Торговец 2', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -128.84375,
      244.53125,
      generateDescription('Торговец 3', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -186.65625,
      229.03125,
      generateDescription('Торговец 4', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -228.90625,
      186.71875,
      generateDescription('Торговец 5', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -244.53125,
      128.90625,
      generateDescription('Торговец 6', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -228.96875,
      71.03125,
      generateDescription('Торговец 7', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -186.71875,
      28.65625,
      generateDescription('Торговец 8', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -128.84375,
      13.15625,
      generateDescription('Торговец 9', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -70.90625,
      28.65625,
      generateDescription('Торговец 10', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -28.59375,
      70.90625,
      generateDescription('Торговец 11', null, 'Торговая точка для продажи и покупки ресурсов'),
    ],
    [
      -13.03125,
      128.84375,
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
  explosives: [
    [-177.9375, 192.4375, EXPLOSIVES],
    [-42.3125, 156.0625, EXPLOSIVES],
  ],
  pantoons: [
    [-57.921875, 133.734375, generatePantoonPopup()],
    [-64.578125, 146.046875, generatePantoonPopup()],
    [-67.140625, 156.296875, generatePantoonPopup()],
    [-74.078125, 177.265625, generatePantoonPopup()],
    [-103.453125, 194.046875, generatePantoonPopup()],
    [-126.859375, 197.671875, generatePantoonPopup()],
    [-139.796875, 190.453125, generatePantoonPopup()],
    [-161.109375, 186.265625, generatePantoonPopup()],
    [-182.453125, 168.453125, generatePantoonPopup()],
    [-190.796875, 150.265625, generatePantoonPopup()],
    [-197.515625, 134.140625, generatePantoonPopup()],
    [-194.828125, 118.953125, generatePantoonPopup()],
    [-187.078125, 107.140625, generatePantoonPopup()],
    [-181.984375, 89.859375, generatePantoonPopup()],
    [-174.046875, 73.921875, generatePantoonPopup()],
    [-152.02787, 66.553508, generatePantoonPopup()],
    [-124.515625, 60.796875, generatePantoonPopup()],
  ],
  rocks: [
    [-7.2109375, 10.8046875, generateRockPopup()],
    [-26.984375, 33.984375, generateRockPopup()],
    [-53.640625, 86.171875, generateRockPopup()],
    [-68.609375, 73.234375, generateRockPopup()],
    [-99.484375, 59.421875, generateRockPopup()],
    [-91.765625, 42.078125, generateRockPopup()],
    [-60.84375, 127.28125, generateRockPopup()],
    [-44.21875, 137.21875, generateRockPopup()],
    [-37.3203125, 147.3203125, generateRockPopup()],
    [-34.90625, 212.46875, generateRockPopup()],
    [-82.78125, 175.78125, generateRockPopup()],
    [-103.3515625, 184.3359375, generateRockPopup()],
    [-106.796875, 212.171875, generateRockPopup()],
    [-114.609375, 205.296875, generateRockPopup()],
    [-113.921875, 169.359375, generateRockPopup()],
    [-116.890625, 149.640625, generateRockPopup()],
    [-101.734375, 150.296875, generateRockPopup()],
    [-97.609375, 142.734375, generateRockPopup()],
    [-132.234375, 158.359375, generateRockPopup()],
    [-131.29688, 150.17188, generateRockPopup()],
    [-141.546875, 145.015625, generateRockPopup()],
    [-148.578125, 144.953125, generateRockPopup()],
    [-161.953125, 183.171875, generateRockPopup()],
    [-169.328125, 149.078125, generateRockPopup()],
    [-167.046875, 142.140625, generateRockPopup()],
    [-184.921875, 153.671875, generateRockPopup()],
    [-191.046875, 177.796875, generateRockPopup()],
    [-210.171875, 175.078125, generateRockPopup()],
    [-182.53125, 130.53125, generateRockPopup()],
    [-188.65625, 120.71875, generateRockPopup()],
    [-188.921875, 111.421875, generateRockPopup()],
    [-208.546875, 114.921875, generateRockPopup()],
    [-165.390625, 112.703125, generateRockPopup()],
    [-156.640625, 110.890625, generateRockPopup()],
    [-144.015625, 111.578125, generateRockPopup()],
    [-130.859375, 72.171875, generateRockPopup()],
    [-134.609375, 70.984375, generateRockPopup()],
    [-137.796875, 58.421875, generateRockPopup()],
    [-134.796875, 47.859375, generateRockPopup()],
    [-169.359375, 44.390625, generateRockPopup()],
    [-78.796875, 127.390625, generateRockPopup()],
    [-97.984375, 124.328125, generateRockPopup()],
    [-105.640625, 105.609375, generateRockPopup()],
    [-111.265625, 99.515625, generateRockPopup()],
    [-128.578125, 99.484375, generateRockPopup()],
    [-139.265625, 90.640625, generateRockPopup()],
    [-121.359375, 128.796875, generateRockPopup()],
    [-128.953125, 133.515625, generateRockPopup()],
    [-140.515625, 128.265625, generateRockPopup()],
    [-160.609375, 130.546875, generateRockPopup()],
  ],
  teleports: [
    [
      -145.9375,
      99.9375,
      generateDescription('Телепорт в Шарк-Сити', null, 'Быстрое перемещение в цетр Шарк-Сити'),
    ],
    [
      -233.390625,
      26.921875,
      generateDescription('Телепорт из Шарк-Сити', null, 'Быстрое перемещение к поселению "Орден"'),
    ],
  ],
  postal: [
    [
      -24.59375,
      128.78125,
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
      -55.21875,
      202.34375,
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
      -128.78125,
      232.90625,
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
      -202.21875,
      202.28125,
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
      -232.90625,
      128.78125,
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
      -202.21875,
      55.34375,
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
      -128.78125,
      24.71875,
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
      -55.21875,
      55.34375,
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
      -43.3125,
      19.3125,
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
      -69.5625,
      44.0625,
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
      -28.0625,
      99.3125,
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
      -107.9375,
      177.9375,
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
      -55.8125,
      153.3125,
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
      -277.1875,
      132.6875,
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

const groupMarkerTypes = {
  resources: ['scraps', 'ammos', 'chemicals', 'dynamites', 'pantoons'],
  flots: ['pirates', 'rangers', 'couriers'],
  bases: ['pois', 'postal', 'traders'],
  others: ['explosives', 'rocks', 'teleports'],
};

const groupMarkerTypeNames = {
  resources: 'Ресурсы',
  flots: 'Флоты',
  bases: 'Базы',
  others: 'Остальное',
};

const icons = {
  couriers: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  pirates: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  rangers: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  teleports: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/teleport.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  scraps: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/scrap.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  ammos: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/ammo.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  chemicals: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/chemical.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  pois: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/poi.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  postal: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/postal.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  traders: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/trader.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  explosives: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/explosive.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  pantoons: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pantoon.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  rocks: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/rock.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  hidedRocks: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/rock_transparent.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  dynamites: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/resources/dynamite.jpg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
};

const iconGroups = [];

const config = {
  minZoom: 1,
  maxZoom: 6,
  zoomControl: false,
  fullscreenControl: true,
  noWrap: true,
  crs: L.CRS.Simple,
  attribution:
    '&copy; <a href="https://steamcommunity.com/id/forded/"><img width="12" height="12" src="https://forded.github.io/ageofwater-map.github.io/icons/steam_logo.webp"/>Создано игроком FordeD</a></br><a href="https://discord.gg/SWumurcV6g"><img src="https://forded.github.io/ageofwater-map.github.io/icons/discord_logo.webp" width="12" height="12" />при поддержке Русского сообщества AoW</a>',
};

const popupOptions = {
  maxWidth: '500px',
  maxHeight: '500px',
  className: 'custom-popup-block', // name custom popup
};

const urlParams = new URLSearchParams(window.location.search);

let urlLat = urlParams.get('lat');
let urlLng = urlParams.get('lng');
let urlZoom = urlParams.get('zoom');
let urlMarker = urlParams.get('marker');
  
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
const MARKERS = [];
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
    let formattedContext = popupContent;
    if (formattedContext) {
      formattedContext = formattedContext.replace('$[unique]', type + i);
    }

    let marker = new L.marker([lat, lng], options)
      .bindPopup(formattedContext, popupOptions)
      .on('mouseover', onMarkerOpen);
    if (type === 'pois') {
      marker.bindTooltip(tooltipText, {
        permanent: true,
        direction: "bottom",
        className: "marker-toltip",
        offset: [0, 15],
      });
    }
    iconGroups[type].addLayer(marker);
    MARKERS.push(marker);
    
  }
}

localStorage.setItem('hidedMarkers', JSON.stringify(HIDED_MARKERS));

let targetMarker = null;
function onMarkerOpen(e) {
 targetMarker = e.target;
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

function copyLinkToMarker(unique) {
  const url = location.protocol + '//' + location.host + location.pathname + `?marker=${unique}`;
  navigator.clipboard.writeText(url).then(
    function () {
      // Копируем текст в буффер обмена
      //1
    },
    function () {
      //2
    },
  );
  alert(`Точная ссылка места на карте скопирована в буфер обмена.\n${url}`);
}


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
  map.on('dragend', updateInfo);
  map.on('zoomend', updateInfo);
  map.addEventListener('mousemove', (event) => {
    let lat = Math.round(event.latlng.lat * 100000) / 100000;
    let lng = Math.round(event.latlng.lng * 100000) / 100000;
    updatePosition(lat, lng);
  });
  updateInfo();

  if (urlMarker) {
    const marker = MARKERS.find((mrk) => {
      if (mrk.options.markerId === urlMarker) {
        return true;
      }
      return false;
    });
    if (marker) {
      setTimeout(() => {
        const pos = marker.getLatLng();
        map.flyTo([pos.lat, pos.lng], 4);
        marker.openPopup();
      }, 500);
    }
  }

  window.history.pushState(window.history.state, document.title, location.pathname);
});

const gridCoordPlace = document.querySelector('.grid-pointer');
function updateInfo() {
  const { lat, lng } = map.getCenter();
  markerPlace.innerHTML = `Координаты: ${lat.toFixed(5)}, ${lng.toFixed(
    5,
  )} <div onClick="copyCoords()">🔗</div>`;
}

function copyCoords() {
  const { lat, lng } = map.getCenter();
  navigator.clipboard.writeText(`${lat}, ${lng}`).then(
    function () {
      // Копируем текст в буффер обмена
      //1
    },
    function () {
      //2
    },
  );
}

function updatePosition(lat, lng) {
  const pointCoordinates = coordsToMapPosition(lat, lng);
  gridCoordPlace.innerHTML = pointCoordinates;
}

document.body.onmousemove = function (e) {
  e = window.event;

  gridCoordPlace.style.opacity = '1';
  gridCoordPlace.style.left = e.pageX - 20 + 'px';
  gridCoordPlace.style.top = e.pageY + 10 + 'px';
};

document.body.onmouseout = function () {
  gridCoordPlace.style.opacity = '0';
};

function coordsToMapPosition(lat, lng) {
  // height, width
  let currentWidth = lng;
  if (currentWidth >= 0) {
    currentWidth += mapHalfWidth;
  } else {
    currentWidth = mapHalfWidth - Math.abs(currentWidth);
  }

  currentWidth -= middleMap[1];

  let currentHeight = lat;
  const widthIndex = Math.floor(currentWidth / squareSideWidth);
  const heightIndex = caltLatitudeToGrid(currentHeight);
  const pointCoordinates = (widthNamings[widthIndex] ?? '-') + (heightNamings[heightIndex] ?? '-');
  return pointCoordinates;
}

function caltLatitudeToGrid(searchLat, increment = 0) {
  if (!mapHeights[increment]) {
    return increment;
  }
  if (searchLat < mapHeights[increment]) {
    increment++;
    return caltLatitudeToGrid(searchLat, increment);
  } else {
    return increment - 1;
  }
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
    const button = L.DomUtil.create(
      'button',
      `btn-markers custom-button-styled-filter ${className}`,
      elements[0],
    );
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
      navigator.clipboard.writeText(url).then(
        function () {
          // Копируем текст в буффер обмена
          //1
        },
        function () {
          //2
        },
      );
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
    context +=
      '<div class="hide-button-block"><button class="custom-button-styled" onClick="hideMarker()">👁️‍🗨️</button></div>';
  }

  context +=
    '<div class="hide-button-block"><button class="custom-button-styled" onClick="copyLinkToMarker(\'$[unique]\')">🔗</button></div>';

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

  if (boardings) {
    if (Array.isArray(boardings) && boardings.length) {
      context += `<div class="popup-resource-block">`;
      context += '<b>Можно получить при абордаже:</b>';
      for (const boarding of boardings) {
        context += `<img class="popup-resource-image" src="${boarding}" width="75" height="75" />`;
      }
      context += `</div>`;
    } else {
      const shipNames = Object.keys(boardings);
      for (const shipName of shipNames) {
        context += `<div><div><b>Можно получить c ${shipName}:</b></div><div>`;
        for (const boardingItem of boardings[shipName]) {
          context += `<img class="popup-resource-image" src="${boardingItem}" width="75" height="75" />`;
        }
        context += `</div></div>`;
      }
    }
  }

  if (ships && ships.length) {
    context += `<div class="popup-resource-block">`;
    context += '<b>Можно получить корабли:</b>';
    for (const ship of ships) {
      context += `<div class="board-ship-block"><b><a target="_blank" rel="noopener noreferrer" href="${ship.url}">${ship.name}</a></b><img class="popup-resource-image" src="${ship.img}" width="300" height="200" /></div>`;
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

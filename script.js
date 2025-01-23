// grid data
const middleMap = [-110.1875, 128.8125];
const squareHeightOffset = 11.70311;
const squareWidthOffset = 11.59375;
const heightOffset = 1.53906;
const widthOffset = 1.54688;
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

const INTEGRATIONS = {
  WIKI: {
    TAG: 'wiki',
    URL: 'https://ageofwater.fandom.com/wiki/Age_of_Water_Wiki',
    ICON: 'https://forded.github.io/ageofwater-map.github.io/icons/wiki.png',
    TITLE: 'Открыть Википедию по игре',
  },
  STEAMCHARTS: {
    TAG: 'steamcharts',
    URL: 'https://steamcharts.com/app/2695490',
    ICON: 'https://forded.github.io/ageofwater-map.github.io/icons/steamcharts.png',
    TITLE: 'Открыть статистику анализа одновременных игроков Steam',
  },
  NEWS: {
    TAG: 'news',
    URL: 'https://ageofwater.net/ru/#/news',
    ICON: 'https://forded.github.io/ageofwater-map.github.io/icons/news.png',
    TITLE: 'Открыть новости игры Age of Water',
  },
  MARKER: {
    TAG: 'context',
    URL: null,
    ICON: null,
    TITLE: 'Почитать информацию маркера',
  },
};

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
  PLASTIC_PLATE: 'https://forded.github.io/ageofwater-map.github.io/resources/plastic_plate.jpg',
  PLATS: 'https://forded.github.io/ageofwater-map.github.io/resources/plats.jpg',
  REACTIVE: 'https://forded.github.io/ageofwater-map.github.io/resources/reactive.jpg',
  BARREL: 'https://forded.github.io/ageofwater-map.github.io/resources/barrel.jpg',
  BAIT: 'https://forded.github.io/ageofwater-map.github.io/resources/bait.jpg',
  BALLAST: 'https://forded.github.io/ageofwater-map.github.io/resources/ballast.jpg',
  EAT: 'https://forded.github.io/ageofwater-map.github.io/resources/eat.jpg',
  ROPE: 'https://forded.github.io/ageofwater-map.github.io/resources/rope.jpg',
  WATER: 'https://forded.github.io/ageofwater-map.github.io/resources/water.jpg',
  PLANK: 'https://forded.github.io/ageofwater-map.github.io/resources/plank.jpg',
  OST_AKUL_ORUJ: 'https://forded.github.io/ageofwater-map.github.io/resources/ost_akul_oruj.jpg',
  OST_MOSH_ORUJ: 'https://forded.github.io/ageofwater-map.github.io/resources/ost_mosh_oruj.jpg',
  REPAIR: 'https://forded.github.io/ageofwater-map.github.io/resources/repair.jpg',
  REPAIR_ITEM: 'https://forded.github.io/ageofwater-map.github.io/resources/repair_item.jpg',
  NITRO: 'https://forded.github.io/ageofwater-map.github.io/resources/nitro.jpg',
  POWERBANK: 'https://forded.github.io/ageofwater-map.github.io/resources/powerbank.jpg',
  AMMO_ITEM: 'https://forded.github.io/ageofwater-map.github.io/resources/ammo_item.jpg',
  MEDALS: 'https://forded.github.io/ageofwater-map.github.io/resources/medals.jpg',
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
    COMMANDO: {
      RUBKA: 'https://forded.github.io/ageofwater-map.github.io/items/commando_rub.jpg',
      SHIELD_1: 'https://forded.github.io/ageofwater-map.github.io/items/commando_shield_1.jpg',
      SHIELD_3: 'https://forded.github.io/ageofwater-map.github.io/items/commando_shield_3.jpg',
    },
    GEFEST: {
      RUBKA: 'https://forded.github.io/ageofwater-map.github.io/items/gefest_rub.jpg',
      SHIELD_1: 'https://forded.github.io/ageofwater-map.github.io/items/gefest_shield_1.jpg',
      SHIELD_3: 'https://forded.github.io/ageofwater-map.github.io/items/gefest_shield_3.jpg',
      TUR_BAZA_1: 'https://forded.github.io/ageofwater-map.github.io/items/tur_baza_gefest_1.jpg',
      TUR_BAZA_3: 'https://forded.github.io/ageofwater-map.github.io/items/tur_baza_gefest_3.jpg',
    },
    KUPEC: {
      SHIELD_A: 'https://forded.github.io/ageofwater-map.github.io/items/kupec_shield_a.jpg',
      SHIELD_B: 'https://forded.github.io/ageofwater-map.github.io/items/kupec_shield_b.jpg',
      SHIELD_C: 'https://forded.github.io/ageofwater-map.github.io/items/kupec_shield_c.jpg',
    },
    LONGLIN: {
      SHIELD_1: 'https://forded.github.io/ageofwater-map.github.io/items/longlin_shield_1.jpg',
      SHIELD_2: 'https://forded.github.io/ageofwater-map.github.io/items/longlin_shield_2.jpg',
      SHIELD_5: 'https://forded.github.io/ageofwater-map.github.io/items/longlin_shield_5.jpg',
      SHIELD_6: 'https://forded.github.io/ageofwater-map.github.io/items/longlin_shield_6.jpg',
    },
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
      T11: 'https://forded.github.io/ageofwater-map.github.io/items/mus_shield_2.png',
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
    HIJ_RUB: 'https://forded.github.io/ageofwater-map.github.io/items/hij_rub.jpg',
    TREXETAJ_RUB: 'https://forded.github.io/ageofwater-map.github.io/items/trexetaj_rub.jpg',
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
    KONTRABAND_SHIELD: {
      T31: 'https://forded.github.io/ageofwater-map.github.io/items/kontraband_shield_1.jpg',
      T32: 'https://forded.github.io/ageofwater-map.github.io/items/kontraband_shield_2.jpg',
      T33: 'https://forded.github.io/ageofwater-map.github.io/items/kontraband_shield_3.jpg',
      T34: 'https://forded.github.io/ageofwater-map.github.io/items/kontraband_shield_4.jpg',
    },
    TUR_BAZA_PLAST: 'https://forded.github.io/ageofwater-map.github.io/items/tur_baza_plast.jpg',
    SEINER: {
      PLATFORMA: 'https://forded.github.io/ageofwater-map.github.io/items/platf_sein.jpg',
    },
    RUBKA_SCORPENA: 'https://forded.github.io/ageofwater-map.github.io/items/rub_scorp.png',
    RUL_RUB_BUKSIRA: 'https://forded.github.io/ageofwater-map.github.io/items/rul_rub_buksira.jpg',
    ZORKIJ: {
      TUR_BAZA: 'https://forded.github.io/ageofwater-map.github.io/items/tur_baza_zorkiy.jpg',
      KORM_NADSTR: 'https://forded.github.io/ageofwater-map.github.io/items/korm_nadstr_zorkiy.jpg',
    },
    KUZ_GRUS: 'https://forded.github.io/ageofwater-map.github.io/items/kuz_gruz.jpg',
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
    LIVERPUL: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T2_liverpul.webp',
      name: 'Ливерпуль (II)',
      url: 'https://ageofwater.fandom.com/wiki/Liverpool',
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
    SHEVRON: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_shevron.webp',
      name: 'Шеврон (III)',
      url: 'https://ageofwater.fandom.com/wiki/Stripe_Patrol_Boat',
    },
    LIMUSIN: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T3_limusin.webp',
      name: 'Лимузин (III)',
      url: 'https://ageofwater.fandom.com/wiki/Limousine',
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
    BASTION: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_bastion.jpg',
      name: 'Бастион (IV)',
      url: 'https://ageofwater.fandom.com/wiki/Bastion_Boat',
    },
    SHPROT: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_shprot.webp',
      name: 'Шпрот (IV)',
      url: 'https://ageofwater.fandom.com/wiki/Sprattus_Trawler',
    },
    KORSAR: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T4_korsar.webp',
      name: 'Корсар (VI)',
      url: 'https://ageofwater.fandom.com/wiki/Corsair',
    },
  },
  T5: {
    REPEJ: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T5_repej.webp',
      name: 'Репей (V)',
      url: 'https://ageofwater.fandom.com/wiki/Burdock_Gunboat',
    },
    HVAT: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T5_hvat.webp',
      name: 'Хват (V)',
      url: 'https://ageofwater.fandom.com/wiki/Grasp_Tugboat',
    },
    VSPOLOH: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T5_vspoloh.webp',
      name: 'Всполох (V)',
      url: 'https://ageofwater.fandom.com/wiki/Glare_Rocket_Boat',
    },
    MIDORI: {
      img: 'https://forded.github.io/ageofwater-map.github.io/ships/T5_midori.webp',
      name: 'Мидори (V)',
      url: 'https://ageofwater.fandom.com/wiki/Torpedo_Boat_Midori',
    },
  },
};

const ACTIONS = {
  CREW: 'https://forded.github.io/ageofwater-map.github.io/icons/crew_action.png',
  TRADE: 'https://forded.github.io/ageofwater-map.github.io/icons/trade_action.png',
  REPAIR: 'https://forded.github.io/ageofwater-map.github.io/icons/repair_action.png',
  QUEST: 'https://forded.github.io/ageofwater-map.github.io/icons/quest_action.png',
  MESSAGE: 'https://forded.github.io/ageofwater-map.github.io/icons/mail_action.png',
  SHIP: 'https://forded.github.io/ageofwater-map.github.io/icons/ship_action.png',
};

const worldPoints = {
  trashs: [
    [
      -209.15625,
      164.84375,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/trash.png',
        `Два корабля ${SHIPS.T1.JARL.name}.`,
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
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T11,
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
          ITEMS.CONSTRUCTIONS.RUBKA_SCORPENA,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T31,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T32,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T33,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T34,
        ],
        null,
        null,
        [SHIPS.T1.JARL],
      ),
    ],
    [
      -198.28125,
      168.96875,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/trash.png',
        `Два корабля ${SHIPS.T1.JARL.name}.`,
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
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T11,
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
          ITEMS.CONSTRUCTIONS.RUBKA_SCORPENA,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T31,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T32,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T33,
        ],
        null,
        null,
        [SHIPS.T1.JARL],
      ),
    ],
    [
      -198.28125,
      168.96875,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/trash.png',
        `Два корабля ${SHIPS.T1.SONJA.name}.`,
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
          [SHIPS.T1.SONJA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
            ITEMS.CONSTRUCTIONS.RUBKA_BOTA,
          ],
        },
        null,
        null,
        [SHIPS.T1.SONJA],
      ),
    ],
    [
      -153.09375,
      218.28125,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/trash.png',
        `Два корабля ${SHIPS.T1.JARL.name}.`,
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
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T11,
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
          ITEMS.CONSTRUCTIONS.RUBKA_SCORPENA,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T31,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T32,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T33,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T34,
        ],
        null,
        null,
        [SHIPS.T1.JARL],
      ),
    ],
    [
      -32.90625,
      175.03125,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/trash.png',
        `Два корабля ${SHIPS.T1.SONJA.name}.`,
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
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD.T11,
          ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
          ITEMS.CONSTRUCTIONS.RUBKA_SCORPENA,
          ITEMS.CONSTRUCTIONS.CISTERNA,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T31,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T32,
          ITEMS.CONSTRUCTIONS.KONTRABAND_SHIELD.T33,
          ITEMS.CONSTRUCTIONS.RUL_RUB_BUKSIRA,
        ],
        null,
        null,
        [SHIPS.T1.SONJA],
      ),
    ],
  ],
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
    [
      -214.59375,
      96.34375,
      generateDescription(
        'Корабль T3',
        'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
        `Корабль ${SHIPS.T3.MORJ.name}.`,
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
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.RUL_RUB_BUKSIRA,
        ],
        `Самое легкое место для абордажа корбаля ${SHIPS.T3.MORJ.name}`,
        null,
        [SHIPS.T3.MORJ],
      ),
    ],
    [
      -216.46875,
      121.96875,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
        `Два корабля ${SHIPS.T1.NJORD.name}.`,
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
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.MODULES.GENERATOR.T2,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.CISTERNA_KORPUS.CABINA,
        ],
        null,
        null,
        [SHIPS.T1.NJORD],
      ),
    ],
    [
      -205.03125,
      152.21875,
      generateDescription(
        'Корабли T1',
        'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
        `Два корабля ${SHIPS.T1.JARL.name}.`,
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
        [],
        null,
        null,
        [SHIPS.T1.JARL],
      ),
    ],
    [
      -142.109375,
      47.828125,
      generateDescription(
        'Корабль T3',
        'https://forded.github.io/ageofwater-map.github.io/icons/ranger.png',
        `Корабль ${SHIPS.T3.MORJ.name}.`,
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
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
        ],
        null,
        null,
        [SHIPS.T3.MORJ],
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
        {
          [SHIPS.T4.ANCHOUS.name]: [
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
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
          ],
        },
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
        {
          [SHIPS.T4.ANCHOUS.name]: [
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
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
            ITEMS.MODULES.TRUBA.T5,
          ],
        },
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
        {
          [SHIPS.T4.MURENA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.MODULES.ACCUMULATOR.T2,
            ITEMS.MODULES.GENERATOR.T2,
            ITEMS.MODULES.TRUBA.T5,
          ],
          [SHIPS.T4.ANCHOUS.name]: [
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.PALTUS.CABINA,
            ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
            ITEMS.CONSTRUCTIONS.PALTUS.OSNOVANIE,
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
          ],
          [SHIPS.T3.ZORKIJ.name]: [
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.MODULES.ACCUMULATOR.T2,
            ITEMS.CONSTRUCTIONS.ZORKIJ.TUR_BAZA,
            ITEMS.CONSTRUCTIONS.ZORKIJ.KORM_NADSTR,
            ITEMS.MODULES.POMPA.T4,
          ],
        },
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
            ITEMS.MODULES.ACCUMULATOR.T4,
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
            ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
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
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
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
        `Два корабля ${SHIPS.T1.SONJA.name}.`,
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
          [SHIPS.T1.SONJA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.MUSOR_SHIELD_DVOIN.T1,
            ITEMS.CONSTRUCTIONS.RUBKA_BOTA,
          ],
        },
        'Появляются рядом с потоком, во время абордажа нужно быть внимательней, могут заагриться Репеи из флота рядом',
        null,
        [SHIPS.T1.SONJA],
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
        `Здесь можно абордажить ${SHIPS.T3.MORJ.name}, хоть у него и название Шаланда(III), однако выбить рулевого сложно из-за находящихся рядом взрывающихся бочек.`,
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
          ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
          ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
          ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
          ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
          ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
          ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
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
    [
      -215.78125,
      93.96875,
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
      -154.96875,
      16.28125,
      generateDescription(
        'Флот T3-T4',
        'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
        `Пиратский флот состояший из ${SHIPS.T4.MURENA.name} и ${SHIPS.T3.CLEVER.name}.`,
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
          [SHIPS.T3.CLEVER.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.MODULES.GENERATOR.T3,
            ITEMS.MODULES.GENERATOR.T2,
            ITEMS.MODULES.ACCUMULATOR.T2,
          ],
          [SHIPS.T4.MURENA.name]: [
            ITEMS.CONSTRUCTIONS.STENKA.T1,
            ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
            ITEMS.MODULES.GENERATOR.T2,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA_PLAST,
          ],
        },
        null,
        null,
        [SHIPS.T4.MURENA, SHIPS.T3.CLEVER],
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
      generateDescription('Поселение "Шарк-Сити"', null, '', null, null, '', [
        ACTIONS.QUEST,
        ACTIONS.CREW,
      ]),
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
        [ACTIONS.QUEST, ACTIONS.REPAIR, ACTIONS.SHIP],
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
      generateDescription('Мастерская "Нико"', null, 'Мастерская художника Нико', null, null, '', [
        ACTIONS.QUEST,
      ]),
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
        'Основное поселение игры, на данном поселении находится база игрока которую нужно будет улучшать. В поселении имеется торговец, шериф выдающий как обычные так и PvP задания, а так же другие NPC.',
        null,
        null,
        `На базе у корабела Лаошай можно выполнить 3 задания по очереди для получения лодок: </br><div class="board-ship-block"><b><a target="_blank" rel="noopener noreferrer" href="${SHIPS.T2.LIVERPUL.url}">300 динамита - ${SHIPS.T2.LIVERPUL.name}</a></b><img class="popup-resource-image" src="${SHIPS.T2.LIVERPUL.img}" width="300" height="200" /></div></br><div class="board-ship-block"><b><a target="_blank" rel="noopener noreferrer" href="${SHIPS.T3.LIMUSIN.url}">500 динамита - ${SHIPS.T3.LIMUSIN.name}</a></b><img class="popup-resource-image" src="${SHIPS.T3.LIMUSIN.img}" width="300" height="200" /></div></br><div class="board-ship-block"><b><a target="_blank" rel="noopener noreferrer" href="${SHIPS.T4.KORSAR.url}">700 динамита - ${SHIPS.T4.KORSAR.name}</a></b><img class="popup-resource-image" src="${SHIPS.T4.KORSAR.img}" width="300" height="200" /></div>`,
        [ACTIONS.QUEST, ACTIONS.TRADE, ACTIONS.MESSAGE, ACTIONS.REPAIR, ACTIONS.SHIP],
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
    [
      -105.703125,
      74.484375,
      generateDescription('Поселение "Статуя"', null, '', null, null, ''),
      'Поселение "Статуя"',
    ],
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
        ACTIONS.CREW,
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
        ACTIONS.CREW,
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
  fczs: [
    [
      -18.4375,
      57.9375,
      generateDescription(
        'Пешая боевая зона "Застрявшая баржа"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.AMMO, RESPURCES.DYNAMITE],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -74.5625,
      181.0625,
      generateDescription(
        'Пешая боевая зона "Офисный центр"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.SCRAP, RESPURCES.STEEL],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -78.1875,
      217.3125,
      generateDescription(
        'Пешая боевая зона "Очистные сооружения"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.PLATS, RESPURCES.MECHANISM],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -112.6875,
      55.4375,
      generateDescription(
        'Пешая боевая зона "Недостроенный бизнес-центр"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.COPPER, RESPURCES.COPPER_PLATES],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -141.1875,
      96.5625,
      generateDescription(
        'Пешая боевая зона "Университет"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.WOOD, RESPURCES.PLANK],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -127.8125,
      185.8125,
      generateDescription(
        'Пешая боевая зона "Покосившийся небоскреб"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.PLASTIC, RESPURCES.PLASTIC_PLATE],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -188.4375,
      205.6875,
      generateDescription(
        'Пешая боевая зона "Школа"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.AMMO_DETAILS, RESPURCES.REPAIR],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -182.3125,
      72.9375,
      generateDescription(
        'Пешая боевая зона "Музей"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.FIBER, RESPURCES.ROPE],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -207.4375,
      131.5625,
      generateDescription(
        'Пешая боевая зона "Торговый центр Макс"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.TEXTILE, RESPURCES.FABRIC],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -118.3125,
      248.0625,
      generateDescription(
        'Пешая боевая зона "Обсерватория"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [RESPURCES.REACTIVE, RESPURCES.CHEMICAL],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени.',
      ),
    ],
    [
      -59.3125,
      232.9375,
      generateDescription(
        'Пешая боевая зона "Вертолетная площадка"',
        'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
        'Место для выполнения пешей задачи с получением ресурсов за прохождение',
        [
          RESPURCES.MEDALS,
          RESPURCES.AMMO_ITEM,
          RESPURCES.NITRO,
          RESPURCES.POWERBANK,
          RESPURCES.REPAIR_ITEM,
        ],
        null,
        'Прохождение подразумевается как ежедневная активность, награда накапливается в реальном времени. до 5000 медалей и по 10 единиц каждого расходного предмета',
      ),
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
    [-113.6875, 207.5625, generateDynamitePopup()],
    [-130.1875, 215.1875, generateDynamitePopup()],
    [-127.6875, 199.8125, generateDynamitePopup()],
    [-96.1875, 194.3125, generateDynamitePopup()],
    [-82.5625, 173.6875, generateDynamitePopup()],
    [-72.1875, 160.8125, generateDynamitePopup()],
    [-67.9375, 174.1875, generateDynamitePopup()],
    [-65.0625, 180.9375, generateDynamitePopup()],
    [-94.9375, 162.9375, generateDynamitePopup()],
    [-84.3125, 148.5625, generateDynamitePopup()],
    [-101.9375, 145.5625, generateDynamitePopup()],
    [-111.1875, 154.4375, generateDynamitePopup()],
    [-127.5625, 143.5625, generateDynamitePopup()],
    [-125.5625, 160.0625, generateDynamitePopup()],
    [-143.5625, 156.8125, generateDynamitePopup()],
    [-155.5625, 146.3125, generateDynamitePopup()],
    [-176.4375, 150.0625, generateDynamitePopup()],
    [-165.3125, 165.0625, generateDynamitePopup()],
    [-155.8125, 179.4375, generateDynamitePopup()],
    [-151.9375, 188.5625, generateDynamitePopup()],
    [-185.6875, 161.4375, generateDynamitePopup()],
    [-196.1875, 151.6875, generateDynamitePopup()],
    [-198.1875, 177.4375, generateDynamitePopup()],
    [-177.1875, 128.8125, generateDynamitePopup()],
    [-188.3125, 129.5625, generateDynamitePopup()],
    [-200.0625, 127.4375, generateDynamitePopup()],
    [-198.3125, 108.1875, generateDynamitePopup()],
    [-189.9375, 86.1875, generateDynamitePopup()],
    [-184.0625, 95.0625, generateDynamitePopup()],
    [-172.8125, 106.5625, generateDynamitePopup()],
    [-169.4375, 111.5625, generateDynamitePopup()],
    [-157.1875, 109.6875, generateDynamitePopup()],
    [-144.9375, 101.6875, generateDynamitePopup()],
    [-155.9375, 91.0625, generateDynamitePopup()],
    [-154.1875, 76.4375, generateDynamitePopup()],
    [-162.3125, 58.3125, generateDynamitePopup()],
    [-160.8125, 52.1875, generateDynamitePopup()],
    [-130.8125, 51.6875, generateDynamitePopup()],
    [-130.4375, 60.4375, generateDynamitePopup()],
    [-127.6875, 86.6875, generateDynamitePopup()],
    [-129.3125, 121.9375, generateDynamitePopup()],
    [-137.8125, 128.9375, generateDynamitePopup()],
    [-149.5625, 128.9375, generateDynamitePopup()],
    [-112.6875, 100.8125, generateDynamitePopup()],
    [-109.6875, 89.8125, generateDynamitePopup()],
    [-105.8125, 82.6875, generateDynamitePopup()],
    [-99.6875, 78.1875, generateDynamitePopup()],
    [-96.0625, 64.6875, generateDynamitePopup()],
    [-65.5625, 65.1875, generateDynamitePopup()],
    [-80.4375, 84.4375, generateDynamitePopup()],
    [-83.1875, 85.3125, generateDynamitePopup()],
    [-96.0625, 100.8125, generateDynamitePopup()],
    [-102.3125, 109.4375, generateDynamitePopup()],
    [-106.0625, 126.1875, generateDynamitePopup()],
    [-103.5625, 131.8125, generateDynamitePopup()],
    [-94.9375, 127.8125, generateDynamitePopup()],
    [-80.4375, 128.9375, generateDynamitePopup()],
    [-75.3125, 128.8125, generateDynamitePopup()],
    [-80.4375, 110.0625, generateDynamitePopup()],
    [-72.5625, 95.1875, generateDynamitePopup()],
    [-61.0625, 107.3125, generateDynamitePopup()],
    [-56.5625, 130.1875, generateDynamitePopup()],
    [-49.8125, 129.8125, generateDynamitePopup()],
    [-36.3125, 105.6875, generateDynamitePopup()],
  ],
  explosives: [
    [-177.9375, 192.4375, [EXPLOSIVES, EXPLOSIVES]],
    [-42.3125, 156.0625, [EXPLOSIVES, EXPLOSIVES]],
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
    [
      -68.57813,
      92.92188,
      generateDescription('Телепорт в центр', null, 'Быстрое перемещение к поселению "Три Кита"'),
    ],
    [-109.7109375, 194.7265625, generateDescription('Телепорт в U9', null, 'Быстрое перемещение')],
    [
      -105.6640625,
      232.9140625,
      generateDescription('Телепорт в R9', null, 'Быстрое перемещение к поселению "Корабелл"'),
    ],
    [
      -142.7109375,
      175.1015625,
      generateDescription('Телепорт в P8', null, 'Быстрое перемещение к поселению "Корабелл"'),
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
    [
      -209.28125,
      138.09375,
      generateDescription(
        'Плавающий курьер Т1',
        'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
        `Плавающий курьер на ${SHIPS.T1.JARL.name}`,
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
      -167.65625,
      186.34375,
      generateDescription(
        'Плавающий курьер Т1',
        'https://forded.github.io/ageofwater-map.github.io/icons/courier.png',
        `Плавающий курьер на ${SHIPS.T1.SONJA.name}`,
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
  ],
  armades: [
    [
      -129.1875,
      -12.0625,
      generateDescription(
        'Флот в нескольких волнах T3-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/armade.png',
        `Усиленный флот армады в нескольких волнах:</br><b>1 Волна:</b> ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.</br><b>2 Волна:</b> ${SHIPS.T4.MURENA.name} и ${SHIPS.T4.ANCHOUS.name}.</br><b>3 Волна:</b> ${SHIPS.T4.ANCHOUS.name} и ${SHIPS.T5.VSPOLOH.name}.`,
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
          RESPURCES.OST_MOSH_ORUJ,
          RESPURCES.OST_AKUL_ORUJ,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
        ],
        {
          [SHIPS.T5.VSPOLOH.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            RESPURCES.OST_AKUL_ORUJ,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T21,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T22,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ],
          [SHIPS.T4.ANCHOUS.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
            ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
            ITEMS.MODULES.GENERATOR.T4,
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
          ],
          [SHIPS.T4.MURENA.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.BISTRIY.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.ZORKIJ.name]: [RESPURCES.OST_MOSH_ORUJ, ITEMS.MODULES.GENERATOR.T3],
        },
        `В этой точке можно абордажить ${SHIPS.T3.ZORKIJ.name}, ${SHIPS.T3.BISTRIY.name}, ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name} и ${SHIPS.T5.VSPOLOH.name}`,
        null,
        [SHIPS.T5.VSPOLOH, SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -215.5625,
      7.4375,
      generateDescription(
        'Флот в нескольких волнах T3-T5',
        'https://forded.github.io/ageofwater-map.github.io/icons/armade.png',
        `Усиленный флот армады в нескольких волнах:</br><b>1 Волна:</b> ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.</br><b>2 Волна:</b> ${SHIPS.T4.MURENA.name} и ${SHIPS.T4.ANCHOUS.name}.</br><b>3 Волна:</b> ${SHIPS.T4.ANCHOUS.name} и ${SHIPS.T5.HVAT.name}.`,
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
          RESPURCES.OST_MOSH_ORUJ,
          RESPURCES.OST_AKUL_ORUJ,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
        ],
        {
          [SHIPS.T5.HVAT.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            RESPURCES.OST_AKUL_ORUJ,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T21,
            ITEMS.CONSTRUCTIONS.SHIELD_JEL_VOINA.T22,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
          ],
          [SHIPS.T4.ANCHOUS.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T2,
            ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T3,
            ITEMS.CONSTRUCTIONS.CISTERNA,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
            ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
            ITEMS.CONSTRUCTIONS.PALTUS.OTSEK,
            ITEMS.MODULES.GENERATOR.T4,
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
          ],
          [SHIPS.T4.MURENA.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.BISTRIY.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.ZORKIJ.name]: [RESPURCES.OST_MOSH_ORUJ, ITEMS.MODULES.GENERATOR.T3],
        },
        `В этой точке можно абордажить ${SHIPS.T3.ZORKIJ.name}, ${SHIPS.T3.BISTRIY.name}, ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name} и ${SHIPS.T5.HVAT.name}`,
        null,
        [SHIPS.T5.HVAT, SHIPS.T4.MURENA, SHIPS.T4.ANCHOUS, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      -30.375,
      250.5625,
      generateDescription(
        'Флот в нескольких волнах T3',
        'https://forded.github.io/ageofwater-map.github.io/icons/armade.png',
        `Усиленный флот армады в нескольких волнах:</br><b>1 Волна:</b> ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.SHEVRON.name}.</br><b>2 Волна:</b> ${SHIPS.T4.MURENA.name}.</br><b>3 Волна:</b> ${SHIPS.T4.ANCHOUS.name}.`,
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
          RESPURCES.OST_MOSH_ORUJ,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
        ],
        {
          [SHIPS.T4.ANCHOUS.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            RESPURCES.OST_AKUL_ORUJ,
            ITEMS.MODULES.GENERATOR.T4,
          ],
          [SHIPS.T4.MURENA.name]: [RESPURCES.OST_MOSH_ORUJ, RESPURCES.OST_AKUL_ORUJ],
          [SHIPS.T3.SHEVRON.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.ZORKIJ.name]: [RESPURCES.OST_MOSH_ORUJ, ITEMS.MODULES.GENERATOR.T3],
        },
        `В этой точке можно абордажить ${SHIPS.T3.ZORKIJ.name}, ${SHIPS.T3.SHEVRON.name}, ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}.`,
        null,
        [SHIPS.T4.ANCHOUS, SHIPS.T4.MURENA, SHIPS.T3.ZORKIJ, SHIPS.T3.SHEVRON],
      ),
    ],
    [
      10.3125,
      128.9375,
      generateDescription(
        'Флот в нескольких волнах T3-Т4',
        'https://forded.github.io/ageofwater-map.github.io/icons/armade.png',
        `Усиленный флот армады в нескольких волнах:</br><b>1 Волна:</b> ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.</br><b>2 Волна:</b> ${SHIPS.T4.BASTION.name} и ${SHIPS.T4.MURENA.name}.</br><b>3 Волна:</b> ${SHIPS.T4.ANCHOUS.name}.`,
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
          RESPURCES.OST_MOSH_ORUJ,
          RESPURCES.OST_AKUL_ORUJ,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
        ],
        {
          [SHIPS.T4.BASTION.name]: [RESPURCES.OST_MOSH_ORUJ, RESPURCES.OST_AKUL_ORUJ],
          [SHIPS.T4.ANCHOUS.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            RESPURCES.OST_AKUL_ORUJ,
            ITEMS.MODULES.GENERATOR.T4,
          ],
          [SHIPS.T4.MURENA.name]: [RESPURCES.OST_MOSH_ORUJ, RESPURCES.OST_AKUL_ORUJ],
          [SHIPS.T3.BISTRIY.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.ZORKIJ.name]: [RESPURCES.OST_MOSH_ORUJ, ITEMS.MODULES.GENERATOR.T3],
        },
        `В этой точке можно абордажить ${SHIPS.T3.ZORKIJ.name}, ${SHIPS.T3.BISTRIY.name}, ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T4.BASTION.name}.`,
        null,
        [SHIPS.T4.BASTION, SHIPS.T4.ANCHOUS, SHIPS.T4.MURENA, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
    [
      20.9375,
      30.6875,
      generateDescription(
        'Флот в нескольких волнах T3-Т4',
        'https://forded.github.io/ageofwater-map.github.io/icons/armade.png',
        `Усиленный флот армады в нескольких волнах:</br><b>1 Волна:</b> ${SHIPS.T3.ZORKIJ.name} и ${SHIPS.T3.BISTRIY.name}.</br><b>2 Волна:</b> ${SHIPS.T4.SHPROT.name} и ${SHIPS.T4.MURENA.name}.</br><b>3 Волна:</b> ${SHIPS.T4.ANCHOUS.name}.`,
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
          RESPURCES.OST_MOSH_ORUJ,
          RESPURCES.OST_AKUL_ORUJ,
          ITEMS.MODULES.MOTOR.T2,
          ITEMS.CONSTRUCTIONS.BAMBUK_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.STEEL_SHIELD.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T1,
          ITEMS.CONSTRUCTIONS.TUR_BAZA.T2,
        ],
        {
          [SHIPS.T4.SHPROT.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            RESPURCES.OST_AKUL_ORUJ,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_A,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_B,
            ITEMS.CONSTRUCTIONS.KUPEC.SHIELD_C,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_2,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_5,
            ITEMS.CONSTRUCTIONS.LONGLIN.SHIELD_6,
            ITEMS.CONSTRUCTIONS.TREXETAJ_RUB
          ],
          [SHIPS.T4.ANCHOUS.name]: [
            RESPURCES.OST_MOSH_ORUJ,
            RESPURCES.OST_AKUL_ORUJ,
            ITEMS.MODULES.GENERATOR.T4,
          ],
          [SHIPS.T4.MURENA.name]: [RESPURCES.OST_MOSH_ORUJ, RESPURCES.OST_AKUL_ORUJ],
          [SHIPS.T3.BISTRIY.name]: [RESPURCES.OST_MOSH_ORUJ],
          [SHIPS.T3.ZORKIJ.name]: [RESPURCES.OST_MOSH_ORUJ, ITEMS.MODULES.GENERATOR.T3],
        },
        `В этой точке можно абордажить ${SHIPS.T3.ZORKIJ.name}, ${SHIPS.T3.BISTRIY.name}, ${SHIPS.T4.MURENA.name}, ${SHIPS.T4.ANCHOUS.name}, ${SHIPS.T4.SHPROT.name}.`,
        null,
        [SHIPS.T4.SHPROT, SHIPS.T4.ANCHOUS, SHIPS.T4.MURENA, SHIPS.T3.ZORKIJ, SHIPS.T3.BISTRIY],
      ),
    ],
  ],
  repQuests: [
    [
      -79.21875,
      167.34375,
      generateDescription(
        'Инстанс Босс Ранг I',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Территория с отдельным инстансом для боя с босом на корабле I ранга',
        null,
        null,
        'За победу над боссом вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -105.09375,
      200.96875,
      generateDescription(
        'Инстанс Босс Ранг II',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Территория с отдельным инстансом для боя с босом на корабле II ранга',
        null,
        null,
        'За победу над боссом вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -73.34375,
      121.28125,
      generateDescription(
        'Инстанс Босс Ранг III',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Территория с отдельным инстансом для боя с босом на корабле III ранга',
        null,
        null,
        'За победу над боссом вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -194.46875,
      45.71875,
      generateDescription(
        'Инстанс Босс Ранг IV',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Территория с отдельным инстансом для боя с босом на корабле IV ранга',
        null,
        null,
        'За победу над боссом вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -231.59375,
      171.59375,
      generateDescription(
        'Инстанс Босс Ранг V',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Территория с отдельным инстансом для боя с босом на корабле V ранга',
        null,
        null,
        'За победу над боссом вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -49.890625,
      137.078125,
      generateDescription(
        'Инстанс повторяющегося задания "Охота за Каракатицей" (Группа)',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Групповая территория с отдельным инстансом для повторного выполнения задания',
        null,
        null,
        'За победу над вражескими кораблями вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -76.359375,
      207.546875,
      generateDescription(
        'Инстанс повторяющегося задания "Сигнал о спасении" (Группа)',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Групповая территория с отдельным инстансом для повторного выполнения задания',
        null,
        null,
        'За победу над вражескими кораблями вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
    [
      -119.34375,
      221.40625,
      generateDescription(
        'Инстанс повторяющегося задания "Спасение Берты" (Группа)',
        'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
        'Групповая территория с отдельным инстансом для повторного выполнения задания',
        null,
        null,
        'За победу над вражескими кораблями вы получаете награду в виде небольшого количества ресурсов, медалей и опыта членам экипажа.',
      ),
    ],
  ],
  bqs: [
    [
      -100.3125,
      186.0625,
      generateDescription(
        'Флот T3-T5 по заданию',
        'https://forded.github.io/ageofwater-map.github.io/icons/boarding_quest_ship.png',
        `Флот который появляется по квесту "Уборка мусора", на данном флоте можно взять на абордаж корабль ${SHIPS.T5.MIDORI.name}. Хоть по логике корабль получить нельзя но после зимнего обновления возможность взять его на абордаж осталась`,
        [],
        [],
        `Только в данном месте можно взять на абордаж корабль ${SHIPS.T5.MIDORI.name}`,
        null,
        [SHIPS.T5.MIDORI],
      ),
    ],
  ],
};

const legendNames = {
  pirates: 'Пиратские корабли',
  trashs: 'Корабли мусорщиков',
  rangers: 'Корабли рейнджеров',
  scraps: 'Металл',
  ammos: 'Обломки боеприпасов',
  chemicals: 'Химические отходы',
  pois: 'Поселения',
  fczs: 'Пешие боевые зоны',
  postal: 'Почта',
  traders: 'Торговцы',
  dynamites: 'Динамит',
  explosives: 'Мины',
  pantoons: 'Разбитые понтоны',
  rocks: 'Скалы',
  teleports: 'Быстрые перемещения',
  couriers: 'Курьеры',
  armades: 'Армады',
  repQuests: 'Повторяющиеся задания',
  bqs: 'Уникальные корабли',
};

const groupMarkerTypes = {
  resources: ['scraps', 'ammos', 'chemicals', 'dynamites', 'pantoons'],
  flots: ['pirates', 'trashs', 'rangers', 'couriers', 'armades', 'bqs'],
  bases: ['pois', 'postal', 'traders'],
  others: ['explosives', 'rocks', 'teleports', 'fczs', 'repQuests'],
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
  trashs: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/trash.png',
    iconSize: [30, 40],
    iconAnchor: [15, 20],
    popupAnchor: [0, -25],
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
  fczs: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/fczs.png',
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
  armades: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/armade.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  repQuests: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/rep_quests.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
  bqs: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/boarding_quest_ship.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -20],
  }),
};

const findKeyByValue = (obj, value) => {
  return Object.keys(obj).find((key) => obj[key] === value);
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
// coordinates
const baseLat = urlLat ? parseFloat(urlLat) : middleMap[0];
const baseLng = urlLng ? parseFloat(urlLng) : middleMap[1];

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

let timedHidedMarkers = localStorage.getItem('hidedMarkers');
let showedMarkers =
  localStorage.getItem('showedMarkers') !== '' && localStorage.getItem('showedMarkers') !== null
    ? JSON.parse(localStorage.getItem('showedMarkers'))
    : [];
if (!timedHidedMarkers || timedHidedMarkers === 'null') {
  localStorage.setItem('hidedMarkers', []);
}
delete timedHidedMarkers;

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
    const options = {
      icon: icons[type],
      markerType: type,
      markerId: type + i,
      searchContext: popupContent[1],
    };
    if (type === 'rocks') {
      if (HIDED_MARKERS && HIDED_MARKERS.length) {
        if (HIDED_MARKERS.includes(type + i)) {
          options.icon = icons.hidedRocks;
        }
      }
    }
    let formattedContext = popupContent[0];
    if (formattedContext) {
      formattedContext = formattedContext.replace('$[unique]', type + i);
    }

    let marker = new L.marker([lat, lng], options)
      // .bindPopup(formattedContext, popupOptions)
      .on('mouseover', onMarkerOpen)
      .on('click', handleMarkerClick.bind(this, formattedContext));
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

  if (!showedMarkers.includes(type)) {
    map.removeLayer(iconGroups[type]);
  }
}

function handleMarkerClick(popupContext, marker) {
  // console.log(marker, popupContext);
  integrations[INTEGRATIONS.MARKER.TAG].actions.setContent('<br/><br/>' + popupContext);
  integrations[INTEGRATIONS.MARKER.TAG].actions.openPanel();
  const pos = marker.getLatLng();
  map.flyTo([pos.lat, pos.lng]);
  // marker.closePopup();
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
  if (!hided) {
    hided = [];
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
        marker.click();
      }, 500);
    }
  }

  window.history.pushState(window.history.state, document.title, location.pathname);
  getLastUpdateDate();
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

  if (!(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent,
    ))
  ) {
    gridCoordPlace.style.opacity = '1';
    gridCoordPlace.style.left = e.pageX - 20 + 'px';
    gridCoordPlace.style.top = e.pageY + 10 + 'px';
  }
};

document.body.onmouseout = function () {
  gridCoordPlace.style.opacity = '0';
};

function coordsToMapPosition(lat, lng) {
  // height, width
  let currentWidth = lng - widthOffset;
  let currentHeight = Math.abs(lat) - heightOffset;

  const widthIndex = Math.floor(currentWidth / squareWidthOffset);
  const heightIndex = Math.floor(currentHeight / squareHeightOffset);
  const pointCoordinates = (widthNamings[widthIndex] ?? '-') + (heightIndex+1);
  return pointCoordinates;
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

const SEARCH_LAYERS = []
for (const type of types) {
  SEARCH_LAYERS.push(iconGroups[type]);
}

map.addControl(
  new L.Control.Search({
    position: 'topleft',
    layer: L.layerGroup(SEARCH_LAYERS),
    initial: false,
    zoom: 4,
    marker: false,
    clickable: true,
    propertyName: 'searchContext',
    textErr: 'Меток с этим текстом не найдено',
    textPlaceholder: 'Поиск по меткам',
    autoType: false,
  }).on('search:locationfound', function (e) {
    if (e.layer._popup) {
      e.layer.click();
      //e.layer.openPopup();
    }
    const searchInputPlace = document.getElementById('searchtext15');
    searchInputPlace.value = '';
    searchInputPlace.setAttribute('size', '15');
  }),
);

const searchBtnPlace = document.querySelector('.search-button');
searchBtnPlace.innerHTML = '🔍';
let legendPlace;
const legendControl = L.Control.extend({
  // button position
  options: {
    position: 'topright',
  },

  // method
  onAdd: function (map) {
    const btn = L.DomUtil.create('button');
    btn.title = 'Показать/скрыть фильтр меток';
    btn.textContent = '📍';
    btn.className = 'showLegend';
    btn.setAttribute(
      'style',
      'background-color: transparent; width: 26px; height: 26px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;',
    );

    // показываем и скрываем указатель получения координат
    btn.onclick = function () {
      legendPlace.classList.toggle('hide');
    };

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      if (legendPlace) {
        legendPlace.classList.toggle('hide');
      }
    }
    return btn;
  },
});

// добавляем кнопку на карту
map.addControl(new legendControl());

const tempLayersToHide = [];
L.Control.CustomButtons = L.Control.Layers.extend({
  onAdd: function () {
    this._initLayout();
    this._addMarker();
    this._removeMarker();
    this._update();
    setTimeout(() => {
      for (input of tempLayersToHide) {
        input.click()
      }
    }, 1000);
    return this._container;
  },
  _addMarker: function () {
    this.createButton('Показать', 'add-button');
  },
  _removeMarker: function () {
    this.createButton('Скрыть', 'remove-button');
  },
  _addItem: function (obj) {
    var label = document.createElement('label'),
      checked = this._map.hasLayer(obj.layer),
      input;
    
    if (!showedMarkers.includes(findKeyByValue(legendNames, obj.name))) {
      layer = this._getLayer(L.Util.stamp(obj.layer)).layer;
      this._map.removeLayer(layer);
      checked = false;
    }

    if (obj.overlay) {
      input = document.createElement('input');
      input.type = 'checkbox';
      input.className = 'leaflet-control-layers-selector';
      input.defaultChecked = checked;
    } else {
      input = this._createRadioElement('leaflet-base-layers_' + L.Util.stamp(this), checked);
    }

    this._layerControlInputs.push(input);
    input.layerId = L.Util.stamp(obj.layer);

    L.DomEvent.on(input, 'click', this._onInputClick, this);

    var name = document.createElement('span');
    name.innerHTML = ' ' + obj.name;

    // Helps from preventing layer control flicker when checkboxes are disabled
    // https://github.com/Leaflet/Leaflet/issues/2771
    var holder = document.createElement('span');

    label.appendChild(holder);
    holder.appendChild(input);
    holder.appendChild(name);

    if (!checked) {
      tempLayersToHide.push(input);
    }

    var container = obj.overlay ? this._overlaysList : this._baseLayersList;
    container.appendChild(label);

    this._checkDisabledLayers();
    return label;
  },
  _onInputClick: function () {
    var inputs = this._layerControlInputs,
      input,
      layer;
    var addedLayers = [],
      removedLayers = [];

    this._handlingClick = true;

    const showedGroups = [];
    for (var i = inputs.length - 1; i >= 0; i--) {
      input = inputs[i];
      layer = this._getLayer(input.layerId).layer;

      if (input.checked) {
        addedLayers.push(layer);
        showedGroups.push(findKeyByValue(legendNames, input.labels[0].innerText.trim()));
      } else if (!input.checked) {
        removedLayers.push(layer);
      }
    }
    localStorage.setItem('showedMarkers', JSON.stringify(showedGroups));

    // Bugfix issue 2318: Should remove all old layers before readding new ones
    for (i = 0; i < removedLayers.length; i++) {
      if (this._map.hasLayer(removedLayers[i])) {
        this._map.removeLayer(removedLayers[i]);
      }
    }
    for (i = 0; i < addedLayers.length; i++) {
      if (!this._map.hasLayer(addedLayers[i])) {
        this._map.addLayer(addedLayers[i]);
      }
    }

    this._handlingClick = false;

    this._refocusOnMap();
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

legendPlace = document.querySelector('.leaflet-control-layers');
const visibleMarkersPlace = document.querySelector('.add-button');
setTimeout(() => { visibleMarkersPlace.click(); }, 500);

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
  let searchContent = '';
  // Кнопки маркера
  context += '<div class="marker-button">';
  if (isHidable) {
    context +=
      '<div class="hide-button-block"><button class="custom-button-styled popup-button" onClick="hideMarker()">👁️‍🗨️</button></div>';
  }
  context +=
    '<div class="hide-button-block"><button class="custom-button-styled" onClick="copyLinkToMarker(\'$[unique]\')">🔗</button></div>';
  context += '</div>';
  
  // Заголовок маркера
  context += `<div class="popup-header-block"><div class="popup-header-title-block"><h3 class="popup-title">${title}</h3></div>`;
  searchContent += `</br><b>${title}</b></br>`;
  if (image) {
    context += `<div class="popup-main-image"><img src="${image}" width="100" height="100"></div>`;
  }
  context += '<div class="clr"></div>';
  if (actions) {
    context += '<div class="popup-actions-block">';
    for (const action of actions) {
      context += `<img class="popup-resource-image" src="${action}" width="25" height="25" />`;
    }
    context += '</div>';
  }
  context += '</div><div class="clr"></div>';
  context += '<div class="popup-context-block">';
  if (description) {
    context += '<div class="popup-text-block">';
    context += `<div class="popup-context-title-block"><b>Описание:</b></div><p>${description}</p>`;
    searchContent += `<b>Описание:</b><p>${description}</p><br>`;
    context += '</div>';
  }
  if (nuances) {
    context += '<div class="popup-text-block">';
    context += `<div class="popup-context-title-block"><b>Уточнение:</b></div><p>${nuances}</p>`;
    searchContent += `<b>Уточнение:</b><p>${nuances}</p></br>`;
    context += '</div>';
  }
  if (resources && resources.length) {
    context += `<div class="popup-resource-block">`;
    context += '<div class="popup-context-title-block"><b>Получаемые ресурсы:</b></div>';
    context += `<div class="popup-context-images-block">`;
    for (const resource of resources) {
      context += `<img class="popup-resource-image" src="${resource}" width="50" height="50" />`;;
    }
    context += `</div></div>`;
  }

  if (boardings) {
    if (Array.isArray(boardings) && boardings.length) {
      context += `<div class="popup-resource-block">`;
      context += '<div class="popup-context-title-block"><b>Можно получить при абордаже:</b></div>';
      context += `<div class="popup-context-images-block">`;
      for (const boarding of boardings) {
        context += `<img class="popup-resource-image" src="${boarding}" width="50" height="50" />`;
      }
      context += `</div></div>`;
    } else {
      const shipNames = Object.keys(boardings);
      for (const shipName of shipNames) {
        context += `<div><div class="popup-context-title-block"><b>Можно получить c ${shipName}:</b></div>`;
        context += `<div class="popup-context-images-block">`;
        for (const boardingItem of boardings[shipName]) {
          context += `<img class="popup-resource-image" src="${boardingItem}" width="75" height="75" />`;
        }
        context += `</div></div>`;
      }
    }
  }

  if (ships && ships.length) {
    context += `<div class="popup-resource-block">`;
    context += '<div class="popup-context-title-block"><b>Можно получить корабли:</b></div>';
    searchContent += `<b>Можно получить корабли:</b></br>`;
    for (const ship of ships) {
      context += `<div class="board-ship-block"><b><a class="popup-context-link" target="_blank" rel="noopener noreferrer" href="${ship.url}">${ship.name}</a></b><div class="popup-context-images-block"><img class="popup-resource-image" src="${ship.img}" width="300" height="200" /></div></div>`;
      searchContent += `${ship.name}</br>`;
    }
    context += `</div>`;
  }
  context += '</div>';
  searchContent += '</br>';
  return [context, searchContent];
};

// function generateDescription(title, image = null, description = null, resources = [], boardings = [], nuances = null, actions = [], ships = [], isHidable = false) {
//   let context = '';
//   let searchContent = '';
//   if (isHidable) {
//     context +=
//       '<div class="hide-button-block"><button class="custom-button-styled" onClick="hideMarker()">👁️‍🗨️</button></div>';
//   }

//   context +=
//     '<div class="hide-button-block"><button class="custom-button-styled" onClick="copyLinkToMarker(\'$[unique]\')">🔗</button></div>';

//   context += `<div class="popup-header-block"><h3 class="popup-title">${title}</h3>`;
//   searchContent += `</br><b>${title}</b></br>`;
//   if (image) {
//     context += `<div class="popup-main-image"><img src="${image}" width="100" height="100"></div>`;
//   }
//   context += '<div class="clr"></div>';
//   if (actions) {
//     context += '<div class="popup-actions-block">';
//     for (const action of actions) {
//       context += `<img class="popup-resource-image" src="${action}" width="20" height="20" />`;
//     }
//     context += '</div>';
//   }
//   context += '</div><div class="clr"></div>';
//   if (description) {
//     context += `<b>Описание:</b><p>${description}</p>`;
//     searchContent += `<b>Описание:</b><p>${description}</p><br>`;
//   }
//   if (nuances) {
//     context += `<b>Уточнение:</b><p>${nuances}</p>`;
//     searchContent += `<b>Уточнение:</b><p>${nuances}</p></br>`;
//   }
//   if (resources && resources.length) {
//     context += `<div class="popup-resource-block">`;
//     context += '<b>Получаемые ресурсы:</b>';
//     for (const resource of resources) {
//       context += `<img class="popup-resource-image" src="${resource}" width="40" height="40" />`;;
//     }
//     context += `</div>`;
//   }

//   if (boardings) {
//     if (Array.isArray(boardings) && boardings.length) {
//       context += `<div class="popup-resource-block">`;
//       context += '<b>Можно получить при абордаже:</b>';
//       for (const boarding of boardings) {
//         context += `<img class="popup-resource-image" src="${boarding}" width="75" height="75" />`;
//       }
//       context += `</div>`;
//     } else {
//       const shipNames = Object.keys(boardings);
//       for (const shipName of shipNames) {
//         context += `<div><div><b>Можно получить c ${shipName}:</b></div><div>`;
//         for (const boardingItem of boardings[shipName]) {
//           context += `<img class="popup-resource-image" src="${boardingItem}" width="75" height="75" />`;
//         }
//         context += `</div></div>`;
//       }
//     }
//   }

//   if (ships && ships.length) {
//     context += `<div class="popup-resource-block">`;
//     context += '<b>Можно получить корабли:</b>';
//     searchContent += `<b>Можно получить корабли:</b></br>`;
//     for (const ship of ships) {
//       context += `<div class="board-ship-block"><b><a target="_blank" rel="noopener noreferrer" href="${ship.url}">${ship.name}</a></b><img class="popup-resource-image" src="${ship.img}" width="300" height="200" /></div>`;
//       searchContent += `${ship.name}</br>`;
//     }
//     context += `</div>`;
//   }
//   searchContent += '</br>';
//   return [context, searchContent];
// };


function generateScrapPopup() {
  return generateDescription(
    SCRAP,
    RESPURCES.SCRAP,
    'Место добычи при помощи драги',
    [RESPURCES.SCRAP, RESPURCES.COPPER, RESPURCES.STEEL, RESPURCES.COPPER_PLATES, RESPURCES.FIBER],
    null,
    'В малом количестве могут добываться и иные ресурсы, а так же элементы для строительства корабля. Ресурс используется в ремонте, крафте, исследованиях и строительстве базы',
  );
}

function generateAmmoPopup() {
  return generateDescription(
    AMMO,
    RESPURCES.AMMO,
    'Место добычи при помощи драги',
    [RESPURCES.AMMO, RESPURCES.SCRAP, RESPURCES.WOOD, RESPURCES.TEXTILE, RESPURCES.AMMO_DETAILS],
    null,
    'В малом количестве могут добываться и иные ресурсы, а так же элементы для строительства корабля. Ресурс используется в ремонте и крафте оружия, исследованиях',
  );
}

function generateChemicalPopup() {
  return generateDescription(
    CHEMICAL,
    RESPURCES.CHEMICAL,
    'Место добычи при помощи драги',
    [RESPURCES.CHEMICAL, RESPURCES.WOOD, RESPURCES.FIBER, RESPURCES.SCRAP],
    null,
    'В малом количестве могут добываться и иные ресурсы, а так же элементы для строительства корабля. Ресурс используется в ремонте, крафте модулей и исследованиях',
  );
}

function generateDynamitePopup() {
  return generateDescription(
    DYNAMITE,
    RESPURCES.DYNAMITE,
    'Место добычи при помощи драги',
    [RESPURCES.DYNAMITE, RESPURCES.AMMO, RESPURCES.CHEMICAL, RESPURCES.SCRAP, RESPURCES.FIBER],
    null,
    'В малом количестве могут добываться и иные ресурсы, а так же элементы для строительства корабля. Ресурс используется в ремонте вооружения',
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
    'В малом количестве могут добываться и иные ресурсы, рядом с этой горой находится таинственный сундук с ресурсами который можно достать драгой, респавн данного ресурса 15-20 минут. Ресурс используется в исследованиях и строительстве',
    null,
    null,
    true,
  );
}

const getJSON = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

const popupContainerPlace = document.querySelector('.popup-block-container');
const popupTextPlace = document.querySelector('.popup-block-text');
const popupBtnPlace = document.querySelector('.popup-block-cancel-btn');

function getLastUpdateDate() {
  getJSON('https://api.github.com/repos/FordeD/ageofwater-map.github.io/commits', (status, resp) => {
    if (status === null) {
      popupTextPlace.innerHTML = `Последнее обновление: ${new Date(
        resp[0].commit.committer.date,
      ).toLocaleString()}`; 
      popupContainerPlace.classList.toggle('hide');
      setTimeout(() => {
        hidePopupBlock();
      }, 60000);
    } else {
      hidePopupBlock();
    }
  });
}

function hidePopupBlock() {
  popupContainerPlace.classList.toggle('hide');
}


setTimeout(() => {
  createSideIntegrationBlock(
    INTEGRATIONS.WIKI.TAG,
    INTEGRATIONS.WIKI.URL,
    INTEGRATIONS.WIKI.ICON,
    INTEGRATIONS.WIKI.TITLE,
  );
  createSideIntegrationBlock(
    INTEGRATIONS.STEAMCHARTS.TAG,
    INTEGRATIONS.STEAMCHARTS.URL,
    INTEGRATIONS.STEAMCHARTS.ICON,
    INTEGRATIONS.STEAMCHARTS.TITLE,
  );
  createSideIntegrationBlock(
    INTEGRATIONS.NEWS.TAG,
    INTEGRATIONS.NEWS.URL,
    INTEGRATIONS.NEWS.ICON,
    INTEGRATIONS.NEWS.TITLE,
  );
  createSideIntegrationBlock(
    INTEGRATIONS.MARKER.TAG,
    INTEGRATIONS.MARKER.URL,
    INTEGRATIONS.MARKER.ICON,
    INTEGRATIONS.MARKER.TITLE,
    true,
    true
  );
}, 1500);


document.addEventListener('click', (e) => {
  let target = e.target.closest('a');
  if (target) {
    const url = target.getAttribute('href');
    // if the click was on or within an <a>
    // then based on some condition...
    if (url.includes('ageofwater.fandom.com')) {
      e.preventDefault(); // tell the browser not to respond to the link click
      integrations[INTEGRATIONS.WIKI.TAG].actions.openIframeUrl(url);
      integrations[INTEGRATIONS.WIKI.TAG].actions.openPanel();
    }
  }
});

setInterval(() => {
  const body = document.querySelector('body');
  body.style = "";
  const translateBlock = document.querySelector('.skiptranslate');
  translateBlock.style = 'display: none !important;'
}, 500);

const languageBlock = document.querySelector('.language');
languageBlock.classList.add('hide');

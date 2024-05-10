const SHIPS = {
  repei: 'Репей(V)',
  murena: 'Мурена(IV)',
  anchous: 'Анчоус(IV)',
  zabiyaka: 'Забияка(IV)',
  clever: 'Клевер(III)',
  zorkiy: 'Зоркий(III)',
  bistriy: 'Быстрый(III)',
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

const ACTIONS = {
  CREW: 'https://forded.github.io/ageofwater-map.github.io/icons/crew_action.png',
  TRADE: 'https://forded.github.io/ageofwater-map.github.io/icons/trade_action.png',
  REPAIR: 'https://forded.github.io/ageofwater-map.github.io/icons/repair_action.png',
  QUEST: 'https://forded.github.io/ageofwater-map.github.io/icons/quest_action.png',
  MESSAGE: 'https://forded.github.io/ageofwater-map.github.io/icons/mail_action.png',
};

const worldPoints = {
  pirates: [
    [71.77394, -161.45508, [SHIPS.anchous, SHIPS.clever].join('</br>')],
    [33.50476, -153.19336, [SHIPS.murena, SHIPS.clever].join('</br>')],
    [
      -36.75649,
      -153.52295,
      [SHIPS.murena, SHIPS.anchous, SHIPS.clever, SHIPS.zorkiy].join('</br>'),
    ],
    [81.9709, -28.94897, [SHIPS.anchous, SHIPS.clever].join('</br>')],
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
    ],
    [
      -81.29503,
      -145.23926,
      generateDescription('Поселение "Шарк-Сити"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -74.66002,
      123.20068,
      generateDescription('Поселение "Бензоколонка"', null, '', [], [], '', [ACTIONS.QUEST]),
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
    ],
    [
      76.1745,
      -55.7666,
      generateDescription('Поселение "Радиодруин"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      72.75104,
      -6.1084,
      generateDescription('Бар "Богомол"', null, '', [], [], '', [ACTIONS.QUEST, ACTIONS.TRADE]),
    ],
    [
      77.99819,
      99.53613,
      generateDescription('Поселение "Авианосец"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
    ],
    [
      80.42302,
      111.92871,
      generateDescription('Поселение "Дутагаз"', null, '', [], [], '', [ACTIONS.QUEST]),
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
    ],
    [
      67.187,
      -14.28223,
      generateDescription('Водолазное товарищество "Ама"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
    ],
    [
      53.77469,
      -120.80566,
      generateDescription('Поселение "Дракон"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
    ],
    [
      51.6998,
      -80.1123,
      generateDescription('Поселение "Хани Бани"', null, '', [], [], '', [ACTIONS.QUEST]),
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
    ],
    [
      48.60386,
      -39.41895,
      generateDescription('"Радиовышка"', null, '', [], [], '', [ACTIONS.QUEST]),
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
    ],
    [
      58.2864,
      13.40332,
      generateDescription('Поселение "Близнецы"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      48.13677,
      52.33887,
      generateDescription('Поселение "Русалка"', null, '', [], [], '', [ACTIONS.QUEST]),
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
    ],
    [
      25.52261,
      82.57324,
      generateDescription('Поселение "Поплавок"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
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
    ],
    [
      -37.33522,
      -37.9248,
      generateDescription('Поселение "Дом охотника на акул"', null, '', [], [], '', [
        ACTIONS.QUEST,
      ]),
    ],
    [
      -55.40407,
      -53.21777,
      generateDescription('NPC охотник на акул', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -61.07954,
      -55.67871,
      generateDescription('Поселение "Проклятый локатор"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -31.98944,
      1.18652,
      generateDescription('Поселение "Орден"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
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
    ],
    [
      -64.75539,
      -2.06543,
      generateDescription('Поселение "Красная стрела"', null, '', [], [], '', [
        ACTIONS.QUEST,
        ACTIONS.TRADE,
      ]),
    ],
    [
      -63.33241,
      17.44629,
      generateDescription('Бар "Жираф"', null, '', [], [], '', [ACTIONS.QUEST, ACTIONS.TRADE]),
    ],
    [
      -72.40899,
      -14.98535,
      generateDescription('Поселение "Колокольня"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -75.53014,
      22.45605,
      generateDescription('Поселение "Ветряки"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -66.7399,
      46.62598,
      generateDescription('Поселение "Здание суда"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -59.46741,
      69.47754,
      generateDescription('Поселение "Слон"', null, '', [], [], '', [ACTIONS.QUEST, ACTIONS.TRADE]),
    ],
    [
      -44.62175,
      33.61816,
      generateDescription('Поселение "Моби Дик"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -34.70549,
      63.06152,
      generateDescription('Поселение "Диоген"', null, '', [], [], '', [ACTIONS.QUEST]),
    ],
    [
      -29.11378,
      41.96777,
      generateDescription('Поселение "Вход на вулкан"', null, '', [], [], '', [ACTIONS.QUEST]),
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
    [29.51611, -2.39502, DYNAMITE],
    [32.45416, 5.55908, DYNAMITE],
    [42.34231, -0.32959, DYNAMITE],
    [34.36158, 24.54346, DYNAMITE],
    [52.36218, 28.98193, DYNAMITE],
    [42.21225, 49.19678, DYNAMITE],
    [53.47497, 64.18213, DYNAMITE],
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
  ],
  rocks: [
    [84.09227, -164.80591, generateRockPopup()],
    [80.42485, -132.22046, generateRockPopup()],
    [71.67403, -58.9856, generateRockPopup()],
    [63.82613, -76.93726, generateRockPopup()],
    [45.35215, -120.91553, generateRockPopup()],
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
};

const legendNames = {
  pirates: 'Пиратские корабли',
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
};

const icons = {
  pirates: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
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
// magnification with which the map will start
const zoom = 2;
// co-ordinates
const lat = 50;
const lng = 50;

// calling map
const map = L.map('map', config).setView([lat, lng], zoom);

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
for (const type of types) {
  iconGroups[type] = new L.FeatureGroup();
  legendMarkers[legendNames[type]] = iconGroups[type];
  for (let i = 0; i < worldPoints[type].length; i++) {
    const [lat, lng, popupContent] = worldPoints[type][i];

    let marker = new L.marker([lat, lng], { icon: icons[type] }).bindPopup(
      popupContent,
      popupOptions,
    );
    iconGroups[type].addLayer(marker);
    
  }
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
    btn.textContent = '🛠';
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
        el.click();
      });
    });
  },
});

new L.Control.CustomButtons(null, legendMarkers, { collapsed: false }).addTo(map);

const legendPlace = document.querySelector('.leaflet-control-layers');
const visibleMarkersPlace = document.querySelector('.add-button');
visibleMarkersPlace.click();


const legendControl = L.Control.extend({
  // button position
  options: {
    position: 'topleft',
  },

  // method
  onAdd: function (map) {
    const btn = L.DomUtil.create('button');
    btn.title = 'Показать/скрыть фильтр меток';
    btn.textContent = '📌';
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


function generateDescription(title, image = null, description = null, resources = [], boardings = [], nuances = null, actions = []) {
  let context = `<div class="popup-header-block"><h3 class="popup-title">${title}</h3>`;
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
    'Место добычи через обычноге открытие. Открытие скал требуется для задания "Географическая гипотеза"',
    [
      RESPURCES.BALLAST,
      RESPURCES.BAIT,
      RESPURCES.WOOD,
      RESPURCES.FIBER,
      RESPURCES.EAT,
    ],
    null,
    'В малом количестве могут добываться и иные ресурсы. Ресурс используется в исследованиях и строительстве',
  );
}

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
const PANTOON = 'Деревянный пантон';
const ROCK = 'Скала';

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
    [82.50056, -133.28613, SCRAP],
    [81.42704, -92.37305, SCRAP],
    [74.93657, -121.9043, SCRAP],
    [73.80032, -161.98242, SCRAP],
    [64.81156, -128.05664, SCRAP],
    [52.98834, -102.34863, SCRAP],
    [41.47566, -80.02441, SCRAP],
    [29.87876, -59.89746, SCRAP],
    [22.71539, -9.27246, SCRAP],
    [18.10409, 20.78613, SCRAP],
    [37.19533, 35.63965, SCRAP],
    [46.95026, 51.72363, SCRAP],
    [41.54148, 82.66113, SCRAP],
    [52.98834, 104.72168, SCRAP],
    [64.83025, 130.38574, SCRAP],
    [73.81257, 164.39941, SCRAP],
    [74.92514, 124.32129, SCRAP],
    [82.51202, 135.4834, SCRAP],
    [81.40737, 94.79004, SCRAP],
    [63.72418, 88.5498, SCRAP],
    [52.66972, 70.35645, SCRAP],
    [71.42718, 67.0166, SCRAP],
    [81.38107, 56.20605, SCRAP],
    [83.4353, 20.61035, SCRAP],
    [78.75923, 20.69824, SCRAP],
    [74.78738, 40.47363, SCRAP],
    [61.45977, 54.18457, SCRAP],
    [55.6528, 37.39746, SCRAP],
    [64.90491, 27.72949, SCRAP],
    [56.873, 11.90918, SCRAP],
    [40.14529, 11.55762, SCRAP],
    [83.4353, -18.41309, SCRAP],
    [78.77635, -18.41309, SCRAP],
    [64.97936, -25.26855, SCRAP],
    [48.71996, -18.41309, SCRAP],
    [37.33522, -33.2666, SCRAP],
    [55.70236, -35.02441, SCRAP],
    [74.78738, -38.10059, SCRAP],
    [81.00433, -49.87793, SCRAP],
    [71.42718, -64.64355, SCRAP],
    [61.50173, -51.81152, SCRAP],
    [46.89023, -49.43848, SCRAP],
    [52.66972, -67.9834, SCRAP],
    [63.64626, -86.17676, SCRAP],
    [48.8358, 20.78613, SCRAP],
    [40.21244, -9.00879, SCRAP],
    [56.921, -9.53613, SCRAP],
  ],
  ammos: [
    [52.88239, -153.67676, AMMO],
    [32.87959, -109.46777, AMMO],
    [28.11075, -159.30176, AMMO],
    [21.90228, -85.91309, AMMO],
    [12.59745, -60.5127, AMMO],
    [3.55728, -39.41895, AMMO],
    [-24.80668, -9.36035, AMMO],
    [1.97715, -119.13574, AMMO],
    [-0.3955, -89.16504, AMMO],
    [-6.00946, -160.44434, AMMO],
    [-7.75454, -58.13965, AMMO],
    [-14.05133, -39.41895, AMMO],
    [-29.03696, -27.99316, AMMO],
    [-25.44327, -56.55762, AMMO],
    [-26.15544, -82.57324, AMMO],
    [-23.20096, -112.63184, AMMO],
    [-36.42128, -145.50293, AMMO],
    [-43.35714, -100.32715, AMMO],
    [-39.60569, -43.5498, AMMO],
    [-42.26105, -8.48145, AMMO],
    [-51.15179, -23.15918, AMMO],
    [-46.28622, -65.52246, AMMO],
    [-57.39762, -137.76855, AMMO],
    [-57.25528, -81.69434, AMMO],
    [-56.3409, -44.42871, AMMO],
    [-62.49203, -13.40332, AMMO],
    [-66.70517, -57.96387, AMMO],
    [-71.95178, -91.01074, AMMO],
    [-69.91521, -32.56348, AMMO],
    [-76.36226, -14.37012, AMMO],
    [-76.73031, -52.0752, AMMO],
  ],
  chemicals: [
    [-24.72687, 11.82129, CHEMICAL],
    [-42.19597, 11.03027, CHEMICAL],
    [-51.09662, 25.62012, CHEMICAL],
    [-29.11378, 30.54199, CHEMICAL],
    [1.36218, 25.53223, CHEMICAL],
    [3.645, 41.79199, CHEMICAL],
    [6.8828, 58.13965, CHEMICAL],
    [52.86913, 156.02783, CHEMICAL],
    [32.80574, 111.92871, CHEMICAL],
    [34.05266, 60.68848, CHEMICAL],
    [16.50983, 74.39941, CHEMICAL],
    [21.90228, 88.19824, CHEMICAL],
    [28.18824, 161.6748, CHEMICAL],
    [2.15281, 121.77246, CHEMICAL],
    [-0.3955, 91.4502, CHEMICAL],
    [6.00946, 72.6416, CHEMICAL],
    [-13.88075, 41.87988, CHEMICAL],
    [-7.4932, 60.60059, CHEMICAL],
    [-5.83462, 162.90527, CHEMICAL],
    [-25.44327, 58.93066, CHEMICAL],
    [-26.15544, 84.94629, CHEMICAL],
    [-26.2343, 115.18066, CHEMICAL],
    [-36.42128, 147.96387, CHEMICAL],
    [-43.48481, 102.96387, CHEMICAL],
    [-39.74099, 45.83496, CHEMICAL],
    [-46.34693, 67.89551, CHEMICAL],
    [-62.53259, 15.95215, CHEMICAL],
    [-56.3409, 46.71387, CHEMICAL],
    [-57.25528, 84.15527, CHEMICAL],
    [-61.58549, 132.14355, CHEMICAL],
    [-66.7399, 60.5127, CHEMICAL],
    [-69.94538, 35.02441, CHEMICAL],
    [-71.92453, 93.47168, CHEMICAL],
    [-76.36226, 16.74316, CHEMICAL],
    [-76.71013, 54.53613, CHEMICAL],
  ],
  pois: [
    [23.9461, 0.63721, 'Три Кита'],
    [27.43029, 1.51611, 'Три Хвоста'],
    [-44.55916, -60.68848, 'Донжон'],
    [-44.62175, 33.61816, 'Моби Дик'],
    [-12.59745, 95.49316, 'Три Трубы'],
    [80.8414, -144.51416, 'Расщелина'],
    [80.95955, -145.34912, 'Бар "Веселая пещера"'],
  ],
  traders: [
    [83.18708, 1.07666, 'Торговец 12'],
    [78.54741, 82.46338, 'Торговец 1'],
    [62.3598, 142.05322, 'Торговец 2'],
    [-1.16447, 163.89404, 'Торговец 3'],
    [-63.32255, 142.05322, 'Торговец 4'],
    [-80.40473, 82.50732, 'Торговец 5'],
    [-83.4353, 1.09863, 'Торговец 6'],
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
    [69.72572, 7.7124, PANTOON],
    [66.5045, 25.86182, PANTOON],
    [64.74602, 40.01221, PANTOON],
    [59.54546, 69.80713, PANTOON],
    [32.45416, 92.83447, PANTOON],
    [1.55987, 98.15186, PANTOON],
    [-16.44662, 87.60498, PANTOON],
  ],
  rocks: [
    [84.09227, -164.80591, ROCK],
    [80.42485, -132.22046, ROCK],
    [71.67403, -58.9856, ROCK],
    [63.82613, -76.93726, ROCK],
    [45.35215, -120.91553, ROCK],
  ],
};

const legendNames = {
  pirates: 'Пиратские корабли',
  scraps: 'Металл',
  ammos: 'Обломки боеприпасов',
  chemicals: 'Химические отходы',
  pois: 'Поселения',
  traders: 'Торговцы',
  dynamites: 'Динамит',
  explosives: 'Мины',
  pantoons: 'Деревянные пантоны',
  rocks: 'Скалы'
};

const icons = {
  pirates: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
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
    const [lat, lng, popupText] = worldPoints[type][i];

    let marker = new L.marker([lat, lng], { icon: icons[type] }).bindPopup(popupText);
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

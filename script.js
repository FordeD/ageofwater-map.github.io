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
    [-36.75649, -153.52295, [SHIPS.murena, SHIPS.anchous, SHIPS.clever, SHIPS.zorkiy].join('</br>')],
    [81.9709, -28.94897, [SHIPS.anchous, SHIPS.clever].join('</br>')],
  ],
  scraps: [
    [82.50056, -133.28613, SCRAP],
    [81.42704, -92.37305, SCRAP],
    [74.93657, -121.9043, SCRAP],
    [73.80032, -161.98242, SCRAP],
    [64.81156, -128.05664, SCRAP],
  ],
  ammos: [
    [52.88239, -153.67676, AMMO],
    [32.87959, -109.46777, AMMO],
    [28.11075, -159.30176, AMMO],
    [21.90228, -85.91309, AMMO],
    [12.59745, -60.5127, AMMO],
    [3.55728, -39.41895, AMMO],
    [-24.80668, -9.36035, AMMO],
  ],
  chemicals: [
    [-24.72687, 11.82129, CHEMICAL],
    [-42.19597, 11.03027, CHEMICAL],
    [-51.09662, 25.62012, CHEMICAL],
    [-29.11378, 30.54199, CHEMICAL],
    [1.36218, 25.53223, CHEMICAL],
    [3.645, 41.79199, CHEMICAL],
    [6.8828, 58.13965, CHEMICAL],
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

const icons = {
  pirates: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/pirate.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  scraps: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/scrap.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  ammos: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/ammo.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  }),
  chemicals: L.icon({
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/chemical.png',
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
    iconUrl: 'https://forded.github.io/ageofwater-map.github.io/icons/dynamite.png',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -32],
  })
}

const crs = L.Util.extend({}, L.CRS, {
  projection: L.Projection.LonLat,
});

const config = {
  crs,
  minZoom: 1,
  maxZoom: 6,
  zoomControl: false,
  fullscreenControl: true,
  noWrap: true,
  attribution:
    '&copy; <a href="https://steamcommunity.com/id/forded/"><img width="12" height="12" src="https://forded.github.io/ageofwater-map.github.io/icons/steam_logo.webp"/>Создано игроком FordeD</a></br><a href="https://discord.gg/SWumurcV6g"><img src="https://forded.github.io/ageofwater-map.github.io/icons/discord_logo.webp" width="12" height="12" />при поддержке Русского сообщества AoW</a>',
};
// magnification with which the map will start
const zoom = 1;
// co-ordinates
const lat = 50;
const lng = 50;

// calling map
const map = L.map('map', config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer('https://forded.github.io/ageofwater-map.github.io/map_parts/{z}/{x}/{y}.png').addTo(map);

// reactivate zoom at the desired location
// [topleft, topright, bottomleft, bottomright]
L.control.zoom({ position: 'topleft' }).addTo(map);

// loop that adds many markers to the map
const types = Object.keys(worldPoints);
for (const type of types) {
  for (let i = 0; i < worldPoints[type].length; i++) {
    const [lat, lng, popupText] = worldPoints[type][i];

    marker = new L.marker([lat, lng], { icon: icons[type] }).bindPopup(popupText).addTo(map);
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
  markerPlace.innerHTML = `Point: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
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

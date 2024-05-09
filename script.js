const worldPoints = [[52.230020586193795, 21.01083755493164, 'popup text']];

let config = {
  minZoom: 1,
  maxZoom: 6,
  zoomControl: false,
  fullscreenControl: true,
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
L.tileLayer('https://forded.github.io/ageofwater-map.github.io/map_parts/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://steamcommunity.com/id/forded/">Создано игроком FordeD</a>',
}).addTo(map);

// reactivate zoom at the desired location
// [topleft, topright, bottomleft, bottomright]
L.control.zoom({ position: 'topleft' }).addTo(map);

// loop that adds many markers to the map
for (let i = 0; i < worldPoints.length; i++) {
  const [lat, lng, popupText] = worldPoints[i];

  marker = new L.marker([lat, lng]).bindPopup(popupText).addTo(map);
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

// update info about bounds when site loaded
document.addEventListener('DOMContentLoaded', function () {
  updateInfo();
});

function updateInfo() {
  const { lat, lng } = map.getCenter();
  const zoom = map.getZoom();
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
    btn.textContent = '➕';
    btn.className = 'showPoint';
    btn.setAttribute(
      'style',
      'background-color: transparent; width: 30px; height: 30px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;',
    );

    // показываем и скрываем указатель получения координат
    btn.onclick = function () {
      markerPlace.classList.toggle('hide');
    };

    return btn;
  },
});

// добавляем кнопку на карту
map.addControl(new customControl());

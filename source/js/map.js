const container = document.querySelector('.map__leaflet-container');
container.style = '';

const map = L.map('map')
  .on('load', () => {
  })
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/icons/ui/map-pin.png',
  iconSize: [36, 50],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

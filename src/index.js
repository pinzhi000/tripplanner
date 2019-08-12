//console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoicGluemhpIiwiYSI6ImNqejhtNWUzdjAxZHkzYm15M3lzY2ZnOXEifQ._11AUlbt4nfQtMnVEk08ig";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker2 = document.createElement("div");
marker2.style.width = "32px";
marker2.style.height = "39px";
marker2.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
new mapboxgl.Marker(marker2).setLngLat([-87.6043, 41.8917]).addTo(map);

const buildMarkerVar = buildMarker("hotel", [-74.009153, 40.705088]);
buildMarkerVar.addTo(map);
console.log(buildMarkerVar);

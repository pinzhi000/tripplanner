const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  // Your Code Here
  const markerHotel = document.createElement("div");
  markerHotel.style.width = "32px";
  markerHotel.style.height = "39px";

  //markerHotel.style.backgroundImage = `url(${iconURLs[type]})`;
  if (type === "hotel") {
    console.log("hit hotel");
    markerHotel.style.backgroundImage = `url(${iconURLs.hotels})`;
  } else if (type === "restaurant") {
    console.log("hit restaurant");
    markerHotel.style.backgroundImage = `url(${iconURLs.restaurants})`;
  } else if (type === "activity") {
    console.log("hit activity");
    markerHotel.style.backgroundImage = `url(${iconURLs.activities})`;
  }
  return new mapboxgl.Marker(markerHotel).setLngLat(coords);
};

module.exports = buildMarker;

let gpxParser = require("gpxparser");

export default function trackParser(gpxInput) {
  let parser = new gpxParser();
  parser.parse(gpxInput);
  let geoJson = parser.toGeoJSON();
  return geoJson;
}

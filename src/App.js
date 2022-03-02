import "./App.css";
import { places } from "./service/places";
import { track } from "./service/track";
import trackParser from "./utils/trackParser";
import Map from "./components/Map";

function App() {
  const location = [52.8354, 93.3435];
  const zoom = 13;
  const trackGeoJson = trackParser(track);
  return (
    <div className="App">
      <Map
        location={location}
        zoom={zoom}
        markers={places}
        trackGeoJson={trackGeoJson}
      />
    </div>
  );
}

export default App;

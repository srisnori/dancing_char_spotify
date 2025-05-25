import { redirectToSpotifyAuth } from "./utils/spotify";
import DancingCharacter from "./components/DancingCharacter";

function App() {
  return (
    <div className="App">
      <h1>Spotify Dance App</h1>
      <button onClick={redirectToSpotifyAuth}>Connect Spotify</button>
    </div>
  );
}


<DancingCharacter tempo={tempo} energy={energy} />

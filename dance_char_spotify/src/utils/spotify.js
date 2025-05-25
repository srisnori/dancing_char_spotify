export const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ].join(" ");
  
  const generateRandomString = (length) =>
    [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
  
  const sha256 = (plain) =>
    crypto.subtle.digest("SHA-256", new TextEncoder().encode(plain));
  
  const base64UrlEncode = (bytes) =>
    btoa(String.fromCharCode(...new Uint8Array(bytes)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  
  export async function redirectToSpotifyAuth() {
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await sha256(codeVerifier).then(base64UrlEncode);
  
    localStorage.setItem("code_verifier", codeVerifier);
  
    const params = new URLSearchParams({
      response_type: "code",
      client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
      scope: scopes,
      redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });
  
    window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }  
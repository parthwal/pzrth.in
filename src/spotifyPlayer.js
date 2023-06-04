import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpotifyPlayer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
          headers: {
            Authorization: `Bearer BQCJ_LttMpwaAUHwERR1K0TKvsfekD8xvokYbscN6_hdyNt4k30ddsSc7GbBrB1iQDMAZu5CKykbqyppT9R87ZFnV_f815-i8Xh8iTogfELur0ocShFlXRgiHntJ0KZMNeeRNRuDb334fGuxPWpJILRgTeljm5qEuHttbGgWz5V0-SWrTKZIA7lM`,
          },
        });

        if (response.status === 204) {
          setNowPlaying(null); // No track is currently playing
        } else {
          setNowPlaying(response.data); // Set the currently playing track
        }
      } catch (error) {
        console.error('Error fetching currently playing track:', error);
      }
    };

    getNowPlaying();
  }, []);

  return (
    <div>
      {nowPlaying ? (
        <div>
          <h3>Now Playing:</h3>
          <p>{nowPlaying.item.name} by {nowPlaying.item.artists[0].name}</p>
          <img src={nowPlaying.item.album.images[0].url} alt="Album Artwork" />
        </div>
      ) : (
        <p>No track is currently playing.</p>
      )}
    </div>
  );
};

export default SpotifyPlayer;

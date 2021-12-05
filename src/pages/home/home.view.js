import React from 'react';

import Song from '../../components/song/song.view';
import Player from '../../components/player/player.view';
import { PlayerContextProvider } from '../../context/playerContext';

const Home = () => {
  return (
    <div>
      <PlayerContextProvider>
        <Song />
        <Player />
      </PlayerContextProvider>
    </div>
  );
};

export default Home;

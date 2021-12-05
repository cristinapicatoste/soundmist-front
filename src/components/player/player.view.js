import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { PlayerContext } from '../../context/playerContext';
import { playerActions } from '../../reducers/playerReducer';

const Player = () => {
  const { state, dispatch } = useContext(PlayerContext);

  const handleClickNext = () => {
    dispatch({ type: playerActions.REPRODUCE_NEXT });
  };
  const handleClickPrev = () => {
    console.log('Next');
    dispatch({ type: playerActions.PREV_SONG });
  };

  return (
    <div className="player-wrapper">
      <AudioPlayer
        header={`Playing: ${
          state.songToReproduce[state.currentPlay] && state.songToReproduce[state.currentPlay].name
        }`}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        showSkipControls
        showJumpControls={false}
        autoPlayAfterSrcChange
        onEnded={handleClickPrev}
        src={`http://localhost:3001/track/${
          state.songToReproduce[state.currentPlay] &&
          state.songToReproduce[state.currentPlay].trackId
        }`}
      />
    </div>
  );
};

export default Player;

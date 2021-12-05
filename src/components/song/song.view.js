import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../../context/playerContext';
import { playerActions } from '../../reducers/playerReducer';
import styles from './song.module.css';

const Song = () => {
  const { state, dispatch } = useContext(PlayerContext);

  useEffect(() => {
    const url = 'http://localhost:3001/song/';

    const options = {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
      }),
      mode: 'cors',
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        // eslint-disable-next-line no-debugger
        debugger;
        dispatch({ type: playerActions.LOAD_SONGS, songs: payload });
      })
      .catch((error) => {
        // eslint-disable-next-line no-debugger
        debugger;
        console.log(error);
      });
  }, []);

  return (
    <div className={styles._songs}>
      <h1>Playlist</h1>
      {state.songToReproduce &&
        state.songToReproduce.map((song, index) => (
          <div className={styles._song_card}>
            <span>Name: {song.name}</span>{' '}
            <input
              type="button"
              value="Play"
              onClick={() => dispatch({ type: playerActions.REPRODUCE_IT_SONG, index })}
            />{' '}
            <input
              type="button"
              value="Add to player"
              onClick={() => dispatch({ type: playerActions.ADD_SONG, song })}
            />
          </div>
        ))}
    </div>
  );
};

export default Song;

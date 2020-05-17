import { Box, Fab, useTheme } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Playlist from '../playlist/Playlist';
import PlaylistItemCurrent from '../playlist/PlaylistItemCurrent';
import Banner, { BannerProps, BannerStyles } from './Banner';
import Controls from './Controls';
import { PlayerActionType } from './store';
import { useLayout } from './useLayout';
import usePlayerPageStore, { PlayerPageState } from './usePlayerPageStore';


const buildBannerProps = (state: PlayerPageState, { avatar, text }: BannerStyles): BannerProps => {
  const { countdownState, playlistState, playerState } = state;
  const { currentItemIndex, items } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const { msLeft, msTotal } = countdownState;
  const { playState } = playerState;
  const { short, name: title, description } = playlistState;
  return {
    playState,
    msLeft,
    msTotal,
    currentItem,
    short,
    title,
    description,
    styles: { avatar, text },
  }
}

// TODO: dispatch stop when navigating away
// TODO: handle empty
const Player = () => {
  const theme = useTheme();  
  const history = useHistory();
  const styles = useLayout();
  const [state, dispatch] = usePlayerPageStore();
  const { playlistState } = state;
  if (!playlistState || !playlistState.items.length) {
    history.push(`/workouts`);
    return null;
  }
  const { playerState } = state;
  const { playState } = playerState;
  const { avatar, text } = styles;
  const bannerProps = buildBannerProps(state, { avatar, text });
  const handleClick = (type: PlayerActionType) => dispatch[type]();

  const handleSettingsClick = () => {
    history.push(`/workouts/${bannerProps.short}`); // TODO: bad idea: encoding missing, uniqueness questionable, ...
  }

  return (
    <Box
      id="the-box" // TODO
      style={styles.root}
    >
      <Banner
        {...{...bannerProps}}
      >
      </Banner>
      <Controls
        playState={playState}
        onClick={handleClick}
        style={styles.controls}
      />
      <PlaylistItemCurrent
        style={styles.current}
      />
      <Playlist
        style={styles.list}
      />
      {playState === 'stopped' && <Fab
        color="secondary"
        size='medium'
        style={{
          position: "fixed",
          top: theme.variables.navbar.height + theme.spacing(1),
          right: theme.spacing(1),
        }}
        onClick={handleSettingsClick}
      >
        <SettingsIcon
        />
      </Fab>}
    </Box>
  );
}

export default Player;
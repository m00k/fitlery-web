import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import ExerciseList from '../exercise/ExerciseList';
import Player from '../player/Player';

// TODO: HACK
// expose all those magic numbers via theme
const Playlist = () => {
  const theme = useTheme();
  const navHeight = (theme.overrides?.MuiBottomNavigation?.root as any).height;
  const mainMargin = theme.spacing(.5);
  const playerHeight = theme.spacing(27);
  const marginTop = theme.spacing(.5);
  const height = `calc(100vh - ${navHeight * 2}px - ${mainMargin * 2}px - ${playerHeight}px - ${marginTop}px)`;
  const overflow = 'auto';
  const style = { marginTop, height, overflow };
  return (
    <>
      <Player />
      <ExerciseList style={style}/>
    </>
  );
}

export default Playlist;

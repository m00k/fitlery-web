import useTheme from '@material-ui/core/styles/useTheme';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React from 'react';
import Grid from '../shared/Grid';


const Controls = () => {
  const theme = useTheme();

  return (
    <Grid
      alignItems="center"
      display="grid"
      gridTemplateColumns="1fr 2fr 1fr"
      justifyItems="center"
      minHeight={80}
      width={200}
      bgcolor={theme.palette.background.paper}
    >
      <SkipPreviousIcon
        style={{ fontSize: '2.5rem' }}
      />
      <PlayArrowIcon
        style={{ fontSize: '4rem' }}
      />
      <SkipNextIcon
        style={{ fontSize: '2.5rem' }}
      />
    </Grid>
  );
}


const Player = () => {
  const theme = useTheme();

  return (
    <Grid
      alignItems="center"
      display="grid"
      justifyItems="center"
      width={1}
      bgcolor={theme.palette.background.paper}
    >
      <Controls />
    </Grid>
  );
}

export default Player;
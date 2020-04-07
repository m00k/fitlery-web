import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import { workouts } from './data';


const useStyles = makeStyles((theme: Theme) =>
  // TODO (cb):
  // what help is material ui if i got to create all this anyway
  // not event the color scheme is set up?
  // do i need a theme provider
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    icon: {
      color: theme.palette.secondary.dark,
    },
    tile: {
      backgroundColor: theme.palette.secondary.main,
      alignItems: 'center',
      display: 'flex',
      fontSize: '3rem', // TODO
      height: 220, // TODO
      justifyContent: 'center',
      paddingBottom: '68px',
    },
    short: {
      backgroundColor: theme.palette.secondary.contrastText,
      color: theme.palette.secondary.dark,
      borderRadius: '50%',
      fontWeight: theme.typography.fontWeightBold,
      height: '6rem',
      padding: '1rem', // TODO
      textAlign: 'center', // TODO
      width: '6rem',
    }
  }),
);

export default function WorkoutList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={220}>
        {workouts.map((workout) => (
          <GridListTile key={workout.title}>
            <div className={classes.tile}>
              <span className={classes.short}>
                {workout.short}
              </span>
            </div>
            <GridListTileBar
              title={workout.title}
              subtitle={<span>{workout.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${workout.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

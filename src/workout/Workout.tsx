import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { WorkoutData } from './data';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.dark,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      gridRow: 'span 3',
      padding: '3rem',
    },
    card: {
      [theme.breakpoints.up('xs')]: { gridColumn: 'span 12', },
      // TODO: set in theme
      [theme.breakpoints.up(theme.breakpoints.values.sm * 2 / 3)]: { gridColumn: 'span 6', },
      [theme.breakpoints.up('md')]: { gridColumn: 'span 3', },
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 2,
      display: 'grid',
      gridTemplateRows: '3fr 2fr',
      paddingTop: theme.spacing(1),
    },
    content: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.secondary.contrastText,
      opacity: .6,
      padding: theme.spacing(1),
      gridRow: 'span 2',
      overflow: 'hidden',
      marginTop: theme.spacing(1),
    },
    header: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

const Workout = (props: { workout: WorkoutData }) => {
  const { workout } = props;
  const classes = useStyles();

  return (
    <Paper key={workout.title} className={classes.card}>
      <div className={classes.header}>
        <Avatar className={classes.avatar}>
          {workout.short}
        </Avatar>
      </div>
      <div className={classes.content}>
        <Typography variant="subtitle1" noWrap>
          {workout.title}
        </Typography>
        <Typography variant="caption" component="p" noWrap>
          {workout.description}
        </Typography>
      </div>
    </Paper>
  );
}

export default Workout;
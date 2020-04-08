import { Avatar, Card, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { workouts } from './data';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      height: '6rem',
      width: '6rem',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.dark
    },
    card: {
      backgroundColor: theme.palette.secondary.main,
      [theme.breakpoints.down('xs')]: {
        gridColumn: 'span 12',
      },
      [theme.breakpoints.down('sm')]: {
        gridColumn: 'span 6',
      },
      [theme.breakpoints.up('lg')]: {
        gridColumn: 'span 3',
      }
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(1),
      maxWidth: theme.breakpoints.values.md,
      padding: theme.spacing(1),
    },
    content: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.secondary.contrastText,
      lineHeight: 1.2, // TODO: overrides the mui way
      opacity: .6,
      padding: theme.spacing(1),
    },
    header: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
    },
    
  }),
);

export default function WorkoutList2() {
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      {workouts.map((workout) => (
        <Card key={workout.title} className={classes.card}>
          <div className={classes.header}>
            <Avatar className={classes.avatar}>
              {workout.short}
            </Avatar>
          </div>
          <div className={classes.content}>
            <Typography variant="subtitle1" noWrap>
              {workout.title}
            </Typography>
            <Typography variant="caption" component="p">
              {workout.description}
            </Typography>
          </div>
        </Card>
      ))}
    </Container>
  );
}

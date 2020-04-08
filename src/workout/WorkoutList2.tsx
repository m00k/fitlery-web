import { Avatar, Card, CardContent, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { workouts } from './data';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(1),
      maxWidth: theme.breakpoints.values.md,
      padding: theme.spacing(1),
    },
    card: {
      backgroundColor: theme.palette.secondary.main,
      width: '100%',
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
    header: {
      display: 'grid',

    },
    avatar: {
      fontSize: '3rem',
      height: '6rem',
      width: '6rem',
    },
    content: {
      backgroundColor: theme.palette.secondary.dark,
    }
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
          <CardContent className={classes.content}>
            <Typography variant="h5" noWrap>
              {workout.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" noWrap>
              {workout.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

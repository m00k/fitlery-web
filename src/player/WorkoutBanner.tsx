import React from 'react';
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import Countdown from './Countdown';
import { PlayerState } from './Player';

interface WorkoutBannerProps {
  workout: WorkoutData;
  playerState: PlayerState;
}

const WorkoutBanner = (props: any) => {
  const { workout, playerState } = props;

  return (
    <Grid
      display="grid"
      gridTemplateColumns="128px 1fr" // TODO: magic numbers 
      width={1}
    >
      <CardAvatar workout={workout}/>
      {playerState === 'stopped'
        ? <CardText workout={workout}/>
        : <Countdown ms={60000}/>
      }
    </Grid>
  );
};

export default WorkoutBanner;

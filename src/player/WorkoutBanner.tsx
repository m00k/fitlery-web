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
  msLeft: number;
}

const WorkoutBanner = (props: any) => {
  const { workout, playerState, msLeft } = props;

  return (
    <Grid
      display="grid"
      gridTemplateColumns="128px 1fr" // TODO: magic numbers 
      width={1}
    >
      <CardAvatar workout={workout}/>
      {playerState === 'stop'
        ? <CardText workout={workout}/>
        : <Countdown msLeft={msLeft}/>
      }
    </Grid>
  );
};

export default WorkoutBanner;

import React, { ReactNode } from 'react';
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import Countdown from './Countdown';
import GoAvatar from './GoAvatar';
import { PlayerState } from './Player';

interface WorkoutBannerProps {
  workout: WorkoutData;
  playerState: PlayerState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
}

const WorkoutBanner: React.FunctionComponent<WorkoutBannerProps> = (props: WorkoutBannerProps) => {
  const { workout, playerState, msLeft, msTotal } = props;
  const percentDone = 1 - msLeft / msTotal;

  return (
    <Grid
      display="grid"
      gridTemplateColumns="128px 1fr" // TODO: magic numbers 
      width={1}
    >
      {playerState === 'stop'
        ? <CardAvatar workout={workout}/>
        : <GoAvatar percentDone={percentDone}/>
      }
      {playerState === 'stop'
        ? <CardText workout={workout}/>
        : <Countdown msLeft={msLeft}/>
      }
    </Grid>
  );
};

export default WorkoutBanner;

import useTheme from "@material-ui/core/styles/useTheme";
import React, { ReactNode } from 'react';
import { PlayerState } from "../playlist/PlaylistProvider";
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import Countdown from './Countdown';
import PieCountdown from './PieCountdown';

interface WorkoutBannerProps {
  workout: WorkoutData;
  playerState: PlayerState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
}

const WorkoutBanner: React.FunctionComponent<WorkoutBannerProps> = (props: WorkoutBannerProps) => {
  const { workout, playerState, msLeft, msTotal } = props;
  const fractionDone = 1 - msLeft / msTotal;
  const theme = useTheme();
  const size = theme.spacing(16);

  return (
    <Grid
      display="grid"
      gridTemplateColumns={`${size}px 1fr`} // TODO: magic numbers 
      width={1}
    >
      {playerState === 'stopped'
        ? <CardAvatar text={workout.short}/>
        : <PieCountdown
            fractionDone={fractionDone}
            size={size}
          />
      }
      {playerState === 'stopped'
        ? <CardText workout={workout}/>
        : <Countdown msLeft={msLeft}/>
      }
    </Grid>
  );
};

export default WorkoutBanner;

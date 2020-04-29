import useTheme from "@material-ui/core/styles/useTheme";
import React, { ReactNode } from 'react';
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import Countdown from '../countdown/Countdown';
import PieCountdown from '../countdown/PieCountdown';
import { PlayState } from "./state";

interface BannerProps {
  workout: WorkoutData; // TODO (cb)
  playState: PlayState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
}

const Banner: React.FunctionComponent<BannerProps> = (props: BannerProps) => {
  const { workout, playState, msLeft, msTotal } = props;
  const fractionDone = 1 - msLeft / msTotal;
  const theme = useTheme();
  const size = theme.spacing(16);

  return (
    <Grid
      display="grid"
      gridTemplateColumns={`${size}px 1fr`} // TODO: magic numbers 
      width={1}
    >
      {playState === 'stopped'
        ? <CardAvatar text={workout.short}/>
        : <PieCountdown
            fractionDone={fractionDone}
            size={size}
          />
      }
      {playState === 'stopped'
        ? <CardText workout={workout}/>
        : <Countdown msLeft={msLeft}/>
      }
    </Grid>
  );
};

export default Banner;

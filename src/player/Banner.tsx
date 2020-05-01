import useTheme from "@material-ui/core/styles/useTheme";
import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown from '../countdown/PieCountdown';
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import { PlayState, PlaylistItemData } from "./store/";

interface BannerProps {
  workout: WorkoutData; // TODO (cb): playlist name, description
  playState: PlayState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
  currentItem: PlaylistItemData;
}

const Banner: React.FunctionComponent<BannerProps> = (props: BannerProps) => {
  const { workout, currentItem, playState, msLeft, msTotal } = props;
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = currentItem && !!currentItem.tags && currentItem.tags.includes('break');
  const text = isBreak ? 'Ready' : 'Go!';
  const theme = useTheme();
  const size = theme.spacing(16);

  return (
    <Grid
      display="grid"
      gridTemplateColumns={`${size}px 1fr`} // TODO: magic numbers 
      width={1}
    >
      {playState === 'stopped'
        ? <>
            <CardAvatar text={workout.short} />
            <CardText workout={workout} />
          </>
        : <>
            <PieCountdown
              fractionDone={fractionDone}
              invertColors={isBreak}
              size={size}
              text={text}
            />
            <Countdown msLeft={msLeft} />
          </>
      }
    </Grid>
  );
};

export default Banner;

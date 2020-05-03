import useTheme from "@material-ui/core/styles/useTheme";
import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown from '../countdown/PieCountdown';
import { PlaylistItemData } from "../playlist/store";
import Grid from '../shared/Grid';
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import { PlayState } from "./store/";


interface BannerProps {
  workout: WorkoutData; // TODO (cb): playlist name, description
  playState: PlayState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
  currentItem: PlaylistItemData;
}

const useCountdownProps = (props: BannerProps) => {
  const { currentItem, msLeft, msTotal } = props;
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = currentItem && !!currentItem.tags && currentItem.tags.includes('break');
  const text = isBreak ? 'Ready' : 'Go!';
  const theme = useTheme();
  const size = theme.variables.countdown.height;
  
  return {fractionDone, invertColors: isBreak, isBreak, size, text};
}

const Banner: React.FunctionComponent<BannerProps> = (props: BannerProps) => {
  const { workout, playState, msLeft } = props;
  const countdownProps = useCountdownProps(props);

  return (
    <Grid
      display="grid"
      gridTemplateColumns={`${countdownProps.size}px 1fr`}
      width={1}
    >
      {playState === 'stopped'
        ? <>
            <CardAvatar text={workout.short} />
            <CardText {...workout}/>
          </>
        : <>
            <PieCountdown
              {...countdownProps}
            />
            <Countdown msLeft={msLeft} />
          </>
      }
    </Grid>
  );
};

export default Banner;

import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown from '../countdown/PieCountdown';
import { isBreakItem } from "../playlist/PlaylistItem";
import { PlaylistItemData } from "../playlist/store";
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { WorkoutData } from '../workout/data';
import { PlayState } from "./store/";


interface BannerProps {
  workout: WorkoutData; // TODO: playlist name, description
  playState: PlayState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
  currentItem: PlaylistItemData;
  style?: any; // TODO: what a mess
}

const useCountdownProps = (props: BannerProps) => {
  const { currentItem, msLeft, msTotal } = props;
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';

  return { fractionDone, invertColors: isBreak, text };
}

const Banner: React.FunctionComponent<BannerProps> = (props: BannerProps) => {
  const { workout, playState, msLeft, style } = props;
  const countdownProps = useCountdownProps(props);

  return playState === 'stopped'
    ? (<>
        <CardAvatar text={workout.short} style={style.avatar} />
        <CardText {...workout} style={style.text} />
      </>)
    : (<>
        <PieCountdown {...countdownProps} style={style.avatar} />
        <Countdown msLeft={msLeft} style={style.text}/>
      </>);
};


export default Banner;

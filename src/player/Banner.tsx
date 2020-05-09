import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown from '../countdown/PieCountdown';
import { isBreakItem } from "../playlist/PlaylistItem";
import { PlaylistItemData } from "../playlist/store";
import CardAvatar from '../workout/CardAvatar';
import CardText from '../workout/CardText';
import { PlayState } from "./store/";

export interface BannerProps {
  short: string;
  title: string;
  description: string;
  playState: PlayState;
  msLeft: number;
  msTotal: number;
  children?: ReactNode;
  currentItem: PlaylistItemData;
}

export interface BannerStyles {
  [key: string]: React.CSSProperties;
}

export interface BannerPropsAndStyles {
  props: BannerProps;
  styles: BannerStyles;
}

const useCountdownProps = (props: BannerProps) => {
  const { currentItem, msLeft, msTotal } = props;
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';

  return { fractionDone, invertColors: isBreak, text };
}

const Banner: React.FunctionComponent<BannerPropsAndStyles> = ({ props, styles }: BannerPropsAndStyles) => {
  const { short, title, description, playState, msLeft } = props;
  const countdownProps = useCountdownProps(props);  

  return playState === 'stopped'
    ? (<>
      <CardAvatar props={{text: short}} style={styles.avatar} />
      <CardText props={{title, description}} style={{...styles.text, whiteSpace: "normal"}} />
    </>)
    : (<>
      <PieCountdown props={countdownProps} style={styles.avatar} />
      <Countdown props={{msLeft}} style={styles.text} />
    </>);
};


export default Banner;

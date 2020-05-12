import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown, { PieCountdownProps } from '../countdown/PieCountdown';
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
  styles: BannerStyles;
}

export interface BannerStyles {
  avatar: React.CSSProperties;
  text: React.CSSProperties;
}

const buildPieCountdownProps = ({ currentItem, msLeft, msTotal }: Pick<BannerProps, 'currentItem' | 'msLeft' | 'msTotal'>): PieCountdownProps => {
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';

  return { fractionDone, invertColors: isBreak, text };
}

const Banner: React.FC<BannerProps> = ({ styles, ...props }: BannerProps) => {
  const { short, title, description, playState, msLeft } = props;
  const countdownProps = buildPieCountdownProps(props);  

  return playState === 'stopped'
    ? (<>
      <CardAvatar props={{text: short}} style={styles.avatar} />
      <CardText props={{title, description}} style={{...styles.text, whiteSpace: "normal"}} />
    </>)
    : (<>
      <PieCountdown props={countdownProps} style={styles.avatar} />
      <Countdown msLeft={msLeft} style={styles.text} />
    </>);
};


export default Banner;

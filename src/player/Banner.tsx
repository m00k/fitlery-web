import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown, { PieCountdownProps } from '../countdown/PieCountdown';
import { isBreakItem } from "../playlist/PlaylistItem";
import { PlaylistItemData } from "../playlist/store";
import Avatar from '../shared/Avatar';
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

const buildCardTextProps = ({styles, ...props}: BannerProps) => {
  const { title, description } = props;
  return {
    title,
    description,
    style: {
      ...styles.text,
      whiteSpace: "normal"
    } as React.CSSProperties // https://material-ui.com/guides/typescript/#using-createstyles-to-defeat-type-widening
  };
}

const Banner: React.FC<BannerProps> = ({ styles, ...props }: BannerProps) => {
  const { short, playState, msLeft } = props;
  const countdownProps = buildPieCountdownProps(props);
  const cardTextProps = buildCardTextProps({ styles, ...props });

  return playState === 'stopped'
    ? (<>
      <Avatar
        text={short}
        style={styles.avatar}
      />
      <CardText {...cardTextProps}/>
    </>)
    : (<>
      <PieCountdown props={countdownProps} style={styles.avatar} />
      <Countdown msLeft={msLeft} style={styles.text} />
    </>);
};


export default Banner;

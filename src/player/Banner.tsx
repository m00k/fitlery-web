import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown, { PieCountdownProps } from '../countdown/PieCountdown';
import { isBreakItem } from "../playlist/PlaylistItem";
import { PlaylistItemData } from "../playlist/store";
import Avatar from '../shared/Avatar';
import CardText from '../shared/card/CardText';
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
  onClose: () => void;
}

export interface PlayerHeaderProps {
  description: string;
  short: string;
  title: string;
}

const PlayerHeader: React.FC<PlayerHeaderProps> = (props) => {
  const { description, short, title  } = props;
  return (
    <>
      <Avatar
        text={short}
        gridArea='avatar'
      />
      <CardText
        description={description}
        gridArea='text'
        title={title}
      >
      </CardText>
    </>
  );
}

const buildCountdownHeaderProps = ({ currentItem, msLeft, msTotal }: Pick<BannerProps, 'currentItem' | 'msLeft' | 'msTotal'>): CountdownHeaderProps => {
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';
  return {
    fractionDone,
    invertColors: isBreak,
    msLeft,
    text,
  };
}

export interface CountdownHeaderProps extends PieCountdownProps {
  msLeft: number;
}

const CountdownHeader: React.FC<CountdownHeaderProps> = (props) => {
  const { msLeft } = props;
  return (
    <>
      <PieCountdown
        {...props}
        gridArea='avatar'
      />
      <Countdown
        msLeft={msLeft}
        gridArea='text'
      />
    </>
  );
}

const Banner: React.FC<BannerProps> = (props) => {
  const { description, playState, short, title } = props;
  const countdownHeaderProps = buildCountdownHeaderProps( props );

  return playState === 'stopped'
    ? (
      <PlayerHeader
        description={description}
        short={short}
        title={title}
      />
    )
    : (
      <CountdownHeader
        {...countdownHeaderProps}
      />
    );
};


export default Banner;

import React, { ReactNode } from 'react';
import { isBreakItem } from "../playlist/PlaylistItem";
import { PlaylistItemData } from "../playlist/store";
import CountdownHeader, { CountdownHeaderProps } from './CountdownHeader';
import PlayerHeader from './PlayerHeader';
import { PlayState } from "./store";

export interface HeaderProps {
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

const buildCountdownHeaderProps = ({ currentItem, msLeft, msTotal }: Pick<HeaderProps, 'currentItem' | 'msLeft' | 'msTotal'>): CountdownHeaderProps => {
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

const Header: React.FC<HeaderProps> = (props) => {
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


export default Header;

import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { ReactNode } from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown, { PieCountdownProps } from '../countdown/PieCountdown';
import { isBreakItem } from "../playlist/PlaylistItem";
import { PlaylistItemData } from "../playlist/store";
import Avatar from '../shared/Avatar';
import CardText from '../shared/CardText';
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
  onCardTextClick: () => void;
}

export interface BannerStyles {
  avatar: React.CSSProperties;
  text: React.CSSProperties;
}

const buildPieCountdownProps = ({ currentItem, msLeft, msTotal, styles }: BannerProps): PieCountdownProps => {
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';
  return { fractionDone, invertColors: isBreak, text, style: styles.avatar };
}

const buildCardTextProps = ({ styles, ...props }: BannerProps) => {
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
  const { short, playState, msLeft, onCardTextClick } = props;
  const countdownProps = buildPieCountdownProps({ ...props, styles });
  const cardTextProps = buildCardTextProps({ styles, ...props });

  return playState === 'stopped'
    ? (<>
      <Avatar
        text={short}
        style={styles.avatar}
      />
      <CardText
        {...cardTextProps}
      >
        <IconButton
          color="secondary"
          onClick={onCardTextClick}
        >
          <SettingsIcon />
        </IconButton>
      </CardText>
    </>)
    : (<>
      <PieCountdown
        {...countdownProps}
      />
      <Countdown
        msLeft={msLeft}
        style={styles.text}
      />
    </>);
};


export default Banner;

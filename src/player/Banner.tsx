import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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

const buildPieCountdownProps = ({ currentItem, msLeft, msTotal }: BannerProps): PieCountdownProps => {
  const fractionDone = 1 - msLeft / msTotal;
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';
  return {
    fractionDone,
    invertColors: isBreak,
    text
  };
}

const buildCardTextProps = (props: BannerProps) => {
  const { title, description } = props;
  return {
    title,
    description,
    gridArea: 'text',
  };
}

const Banner: React.FC<BannerProps> = (props) => {
  const { short, playState, msLeft, onClose } = props;
  const countdownProps = buildPieCountdownProps( props );
  const cardTextProps = buildCardTextProps(props);

  return playState === 'stopped'
    ? (<>
      <Avatar
        text={short}
        gridArea='avatar'
      />
      <CardText
        {...cardTextProps}
      >
        <IconButton
          color='secondary'
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </CardText>
    </>)
    : (<>
      <PieCountdown
        {...countdownProps}
        gridArea='avatar'
      />
      <Countdown
        msLeft={msLeft}
        gridArea='text'
      />
    </>);
};


export default Banner;

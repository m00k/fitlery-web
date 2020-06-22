import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent } from 'react';
import { isBreakItem } from "../playlist/PlaylistItem";
import { usePlaylistStore } from '../playlist/store';
import PieSlice from './PieSlice';
import { useCountdownStore } from './store';
import useColors from './useColors';
import withMargin from './withMargin';


export interface PieCountdownProps extends BoxProps {
}

const PieSliceWithMargin = withMargin(PieSlice);

const PieCountdown: FunctionComponent<PieCountdownProps> = ({ ...rootProps }) => {
  const theme = useTheme();
  const [ countdownState, ] = useCountdownStore();
  const { msLeft, msTotal } = countdownState;
  const fractionDone = 1 - msLeft / msTotal;
  const [ playlistState, ] = usePlaylistStore();
  const { items, currentItemIndex } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  const isBreak = isBreakItem(currentItem);
  const text = isBreak ? 'Ready' : 'Go!';
  const [ left, done ] = useColors(!isBreak);

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      position='relative'
      display='grid'
      alignItems='center'
      justifyContent='center'
      width='100%'
      height='100%'
      {...rootProps}
    >
      <PieSliceWithMargin
        bgcolor={left.bgcolor}
        color={left.color}
        clipIf={fractionDone > 0}
        fractionStart={fractionDone}
        fractionEnd={1}
        text={text}
      />
      <PieSliceWithMargin
        bgcolor={done.bgcolor}
        color={done.color}
        clipIf={(fractionDone < 1)}
        fractionStart={0}
        fractionEnd={fractionDone}
        text={text}
      />
    </Box >
  );
};

export default PieCountdown;

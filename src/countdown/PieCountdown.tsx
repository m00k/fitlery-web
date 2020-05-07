import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import PieSlice from './PieSlice';
import useColors from './useColors';
import WithMargin from './WithMargin';


export interface PieCountdownProps extends BoxProps {
  fractionDone: number;
  invertColors: boolean;
  text: string;
  style?: any;
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone, invertColors, text, style } = props;
  const theme = useTheme();
  const [left, done] = useColors(invertColors);

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      position="relative"
      style={style}
    >
      <WithMargin>
        <PieSlice
          bgcolor={left.bgcolor}
          color={left.color}
          clipIf={fractionDone > 0}
          fractionStart={fractionDone}
          fractionEnd={1}
          text={text}
        />
      </WithMargin>
      <WithMargin>
        <PieSlice
          bgcolor={done.bgcolor}
          color={done.color}
          clipIf={(fractionDone < 1)}
          fractionStart={0}
          fractionEnd={fractionDone}
          text={text}
        />
      </WithMargin>
    </Box >
  );
};

export default PieCountdown;

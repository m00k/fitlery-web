import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { PropsWithChildren } from 'react';
import PieSlice from './PieSlice';


const WithMargin = ({ children }: PropsWithChildren<any>) => {
  return (
    <Box
      m={1}
      position="absolute">
      {children}
    </Box>
  );
}

const useColors = (invertColors: boolean) => {
  const theme = useTheme();
  const light = {
    bgcolor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
  };
  const dark = {
    bgcolor: theme.palette.primary.light,
    color: theme.palette.secondary.contrastText,
  };
  const [left, done] = invertColors ? [dark, light] : [light, dark];
  return [left, done];
}

export interface PieCountdownProps extends BoxProps {
  fractionDone: number;
  invertColors: boolean;
  size: number
  text: string;
}

const PieCountdown = (props: PieCountdownProps) => {
  const { fractionDone, invertColors, size, text } = props;
  const theme = useTheme();
  const [left, done] = useColors(invertColors);

  return (
    <Box
      width={size} // TODO: 100%
      height={size}
      bgcolor={theme.palette.primary.main}
      position="relative"
    >
      <WithMargin>
        <PieSlice
          bgcolor={left.bgcolor}
          color={left.color}
          clipIf={fractionDone > 0}
          fractionStart={fractionDone}
          fractionEnd={1}
          size={size}
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
          size={size}
          text={text}
        />
      </WithMargin>
    </Box >
  );
};

export default PieCountdown;

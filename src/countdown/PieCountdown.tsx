import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { FunctionComponent } from 'react';
import PieSlice from './PieSlice';
import useColors from './useColors';
import withMargin from './withMargin';


export interface PieCountdownProps extends BoxProps {
  fractionDone: number;
  invertColors: boolean;
  text: string;
}

export interface PieCountdownPropsAndStyles {
  props: PieCountdownProps;
  style: React.CSSProperties;
}

const PieSliceWithMargin = withMargin(PieSlice);

const PieCountdown: FunctionComponent<PieCountdownPropsAndStyles> = ({ props, style }) => {
  const { fractionDone, invertColors, text } = props;
  const theme = useTheme();
  const [left, done] = useColors(invertColors);

  return (
    <Box
      bgcolor={theme.palette.primary.main}
      position="relative"
      display="grid"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      style={style}
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

import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { CSSProperties } from 'react';

export interface AvatarProps {
  text: string;
}

export type AvatarStyles = CSSProperties;

export interface AvatarPropsAndStyles {
  props: AvatarProps;
  style: AvatarStyles;
}

const useStyles = () => {
  const theme = useTheme();
  const root: BoxProps = {
    bgcolor: theme.palette.primary.main,
    display: 'grid',
    p: 1,
  };
  const inner: BoxProps = {
    bgcolor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
  };
  return { root, inner };
}

const CardAvatar: React.FunctionComponent<AvatarPropsAndStyles> = ({props, style}) => {
  const { text } = props;
  const { root, inner } = useStyles();
  const VIEWBOX_SIZE = 100;

  return (
    <Box
      {...root}
      style={style}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
      >
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          fill={inner.bgcolor}
        >
        </circle>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          fill={inner.color}
          fontSize={4 / 5 * VIEWBOX_SIZE / 2}
          fontWeight="700"
          textAnchor="middle"
          fontFamily="Roboto"
        >
          {text}
        </text>
      </svg>
    </Box>
  );
};

export default CardAvatar;
import Box, { BoxProps } from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';


const useStyles = () => {
  const theme = useTheme();
  const root: BoxProps = {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: theme.palette.primary.main,
    p: 1,
  };
  const inner: BoxProps = {
    bgcolor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: '50%',
    lineHeight: `${theme.variables.avatar.height}px`,
    width: theme.variables.avatar.height,
    height: theme.variables.avatar.height,
    textAlign: 'center',
  };
  return { root, inner };
}

const CardAvatar = (props: any) => {
  const { text, style } = props;
  const { root, inner } = useStyles();

  return (
    <Box 
      {...root}
      style={style}
    >
      <Box {...inner}>
        {text}
      </Box>
    </Box>
  );
};

export default CardAvatar;
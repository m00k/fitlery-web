import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const CardAvatar = (props: any) => {
  const { workout } = props;
  const theme = useTheme();

  return (
    <Box
      display='grid'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        bgcolor={theme.palette.background.paper}
        color={theme.palette.secondary.dark}
        fontSize={theme.typography.h2.fontSize}
        fontWeight={theme.typography.fontWeightBold}
        borderRadius='50%'
        lineHeight='112px'
        width={112}
        height={112}
        textAlign='center'
      >
        {workout.short}
      </Box>
    </Box>
  );
};

export default CardAvatar;
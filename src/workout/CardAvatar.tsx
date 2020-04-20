import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';

const CardAvatar = (props: any) => {
  const { text } = props;
  const theme = useTheme();

  return (
    <Box
      display='grid'
      alignItems='center'
      justifyContent='center'
      bgcolor={theme.palette.primary.main}
      p={1}
    >
      <Box
        bgcolor={theme.palette.background.paper}
        color={theme.palette.secondary.dark}
        fontSize={theme.typography.h2.fontSize}
        fontWeight={theme.typography.fontWeightBold}
        borderRadius='50%'
        lineHeight='112px' // TODO: magic numbers 
        width={112} // TODO: magic numbers 
        height={112} // TODO: magic numbers 
        textAlign='center'
      >
        {text}
      </Box>
    </Box>
  );
};

export default CardAvatar;
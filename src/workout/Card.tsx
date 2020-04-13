import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import GridItem from './GridItem';


const Card = (props: any) => {
  const theme = useTheme();
  const { children, workout } = props;

  return (
    <GridItem
      key={workout.title}
      bgcolor={theme.palette.primary.main}
      borderRadius={1}
      display='grid'
      gridColumn={['span 6', 'span 4', 'span 3']}
      gridTemplateRows='5fr 2fr'
      boxShadow={8}
    >
      {children}
    </GridItem>
  );
};

export default Card;
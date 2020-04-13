import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import GridItem from './GridItem';

const CardText = (props: any) => {
  const { workout } = props;
  const theme = useTheme();

  return (
    <GridItem
      bgcolor={theme.palette.primary.dark}
      color={theme.palette.secondary.contrastText}
      p={1}
      gridRow={'span 2'}
      overflow='hidden'
      style={{ opacity: .8 }}
    >
      <Typography variant="subtitle1" noWrap>
        {workout.title}
      </Typography>
      <Typography variant="caption" component="p" noWrap>
        {workout.description}
      </Typography>
    </GridItem>
  );
};

export default CardText;
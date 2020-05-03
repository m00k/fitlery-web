import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Grid from '../shared/Grid';
import Box from '@material-ui/core/Box';


// TODO: generic title, description
const CardText = (props: any) => {
  const { workout } = props;
  const theme = useTheme();

  return (
    <Grid
      display="grid"
      alignItems="center"
      bgcolor={theme.palette.primary.dark}
      color={theme.palette.secondary.contrastText}
      p={1}
      gridRow={'span 2'}
      overflow='hidden'
    >
      <Box>
        <Typography
          variant="subtitle1"
          noWrap>
          {workout.title}
        </Typography>
        <Typography
          variant="caption"
          component="p"
          noWrap
        >
          {workout.description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CardText;
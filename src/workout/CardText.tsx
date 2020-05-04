import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Grid from '../shared/Grid';
import Box from '@material-ui/core/Box';


export interface CardTextProps {
  title: string;
  description: string;
}

// TODO: generic title, description
const CardText = (props: CardTextProps) => {
  const { title, description } = props;
  const theme = useTheme();

  return (
    <Grid
      alignItems="center"
      bgcolor={theme.palette.primary.dark}
      color={theme.palette.secondary.contrastText}
      display="grid"
      gridRow={'span 2'}
      overflow='hidden'
      p={1}
    >
      <Box
        minWidth={0}
      >
        <Typography
          variant="subtitle1"
          noWrap>
          {title}
        </Typography>
        <Typography
          variant="caption"
          component="p"
          noWrap
        >
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CardText;
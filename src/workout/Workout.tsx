import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import { style } from '@material-ui/system';
import React from 'react';
import styled from 'styled-components';
import { WorkoutData } from './data';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.dark,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      gridRow: 'span 4',
      padding: theme.spacing(7),
    },
    content: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.secondary.contrastText,
      opacity: .6,
      padding: theme.spacing(1),
      gridRow: 'span 2',
      overflow: 'hidden',
      marginTop: theme.spacing(1),
    },
  }),
);

const gridColumn = style({
  prop: 'gridColumn',
  themeKey: 'breakpoints',
});

const gridTemplateColumns = style({
  prop: 'gridTemplateColumns',
  themeKey: 'spacing',
});

const gridTemplateRows = style({
  prop: 'gridTemplateRows',
  themeKey: 'spacing',
});

const GridItem = styled(Box)`${gridColumn}${gridTemplateColumns}${gridTemplateRows}`;

const Workout = (props: { workout: WorkoutData }) => {
  const { workout } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <GridItem
      key={workout.title}
      bgcolor={theme.palette.secondary.main}
      borderRadius={1}
      display='grid'
      gridColumn={['span 6', 'span 4', 'span 3']}
      gridTemplateRows='4fr 2fr'
      pt={1}
    >
      <Box
        display='grid'
        alignItems='center'
        justifyContent='center'
      >
        <Avatar className={classes.avatar}>
          {workout.short}
        </Avatar>
      </Box>
      <div className={classes.content}>
        <Typography variant="subtitle1" noWrap>
          {workout.title}
        </Typography>
        <Typography variant="caption" component="p" noWrap>
          {workout.description}
        </Typography>
      </div>
    </GridItem>
  );
}

export default Workout;
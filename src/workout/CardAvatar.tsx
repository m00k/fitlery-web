import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.secondary.dark,
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      gridRow: 'span 5',
      padding: theme.spacing(7),
    },
  }),
);

const CardAvatar = (props: any) => {
  const classes = useStyles();
  const { workout } = props;

  return (
    <Box
      display='grid'
      alignItems='center'
      justifyContent='center'
    >
      <Avatar className={classes.avatar}>
        {workout.short}
      </Avatar>
    </Box>
  );
};

export default CardAvatar;
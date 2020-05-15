import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText,
    display: 'grid',
    overflow: 'hidden',
    padding: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
  description: {
    whiteSpace: 'inherit',
  },
}));

export interface CardTextProps {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const CardText: React.FC<CardTextProps> = ({ style, ...props }) => {
  const { title, description } = props;
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div
      className={classes.root}
      style={style}
    >
      <Box
        minWidth={0}
      >
        <Typography
          variant="subtitle1"
          noWrap
        >
          {title}
        </Typography>
        <Typography
          className={classes.description}
          variant="caption"
          component="p"
          noWrap
        >
          {description}
        </Typography>
      </Box>
    </div>
  );
};

export default CardText;
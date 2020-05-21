import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = (rootStyle?: React.CSSProperties) => makeStyles((theme) => ({
  root: {
    alignContent: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText,
    display: 'grid',
    gridTemplateAreas: `
      "title title title title ."
      "desc desc desc desc desc"
    `,
    gridTemplateColumns:'repeat(4, 1fr) min-content',
    overflow: 'hidden',
    padding: theme.spacing(1),
    position: 'relative',
    whiteSpace: 'nowrap',
    ...rootStyle,
  },
  description: {
    gridArea: 'desc',
    whiteSpace: 'inherit',
  },
}));

export interface CardTextProps {
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const CardText: React.FC<CardTextProps> = ({ style, children, ...props }) => {
  const { title, description } = props;
  const theme = useTheme();
  const classes = useStyles(style)(theme);

  return (
    <Box
      className={classes.root}
      onClick={(ev) => ev.stopPropagation()}
    >
      <Typography
        variant='subtitle1'
        noWrap
        style={{
          gridArea: 'title'
        }}
      >
        {title}
      </Typography>
      <Typography
        className={classes.description}
        variant='caption'
        component='p'
        noWrap
      >
        {description}
      </Typography>
      <Box
        style={{
          position: 'absolute',
          top: 0,
          right: -theme.spacing(1),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CardText;
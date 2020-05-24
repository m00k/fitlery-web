import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import CardDescription from './CardDescription';
import CardTitle from './CardTitle';

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
    gridTemplateColumns:'repeat(5, 1fr)',
    overflow: 'hidden',
    padding: theme.spacing(1),
    position: 'relative',
    whiteSpace: 'nowrap',
    ...rootStyle,
  }
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
      data-testid='card-text'
      className={classes.root}
      onClick={(ev) => ev.stopPropagation()}
    >
      <CardTitle>
        {title}
      </CardTitle>
      <CardDescription>
        {description}
      </CardDescription>
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
import { IconButton, makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import Typography from '@material-ui/core/Typography';
import MoreVerticon from '@material-ui/icons/MoreVert';
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

const CardText: React.FC<CardTextProps> = ({ style, ...props }) => {
  const { title, description } = props;
  const theme = useTheme();
  const classes = useStyles(style)(theme);

  return (
    <Box
      className={classes.root}
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
        <IconButton
          color='secondary'
          onClick={(ev) => ev.stopPropagation()}
        >
          <MoreVerticon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CardText;
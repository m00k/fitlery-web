import { BoxProps, makeStyles, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import CardTitle from '../../shared/card/CardTitle';
import { EditResult } from '../../shared/EditText';
import EditToggle from '../../shared/EditToggle';

const useStyles = makeStyles(theme => ({
  textfield: {
    padding: theme.spacing(1),
  },
}));

export interface CardTitleEditProps extends BoxProps {
  title: string;
  onUpdate: ({ value, error }: EditResult) => void; // TODO: type
}

const CardTitleEdit: React.FC<CardTitleEditProps> = ({ title, onUpdate, ...rootProps }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <EditToggle
      onOk={onUpdate}
      { ...rootProps }
      inputEl={
        <TextField
          defaultValue={title}
          inputProps={{ required: true }}
          className={classes.textfield}
        />
      }
      displayEl={
        <CardTitle>
          {title}
        </CardTitle>
      }
    />
  );
};

export default CardTitleEdit;
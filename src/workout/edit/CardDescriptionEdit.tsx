import { BoxProps, makeStyles, TextField, useTheme } from '@material-ui/core';
import React from 'react';
import { EditResult } from '../../shared/EditText';
import EditToggle from '../../shared/EditToggle';
import CardDescription from '../../shared/card/CardDescription';

const useStyles = makeStyles(theme => ({
  textfield: {
    padding: theme.spacing(1),
  },
}));

export interface CardDescriptionEditProps extends BoxProps {
  description: string;
  onUpdate: ({ value, error }: EditResult) => void; // TODO: type
}

const CardDescriptionEdit: React.FC<CardDescriptionEditProps> = ({ description, onUpdate, ...rootProps }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <EditToggle
      onOk={onUpdate}
      { ...rootProps }
      inputEl={
        <TextField
          defaultValue={description}
          inputProps={{required: true}}
          multiline
          rows={3}
          className={classes.textfield}
        />
      }
      displayEl={
        <CardDescription>
          {description}
        </CardDescription>
      }
    />
  );
};

export default CardDescriptionEdit;
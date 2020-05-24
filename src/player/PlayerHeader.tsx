import React from 'react';
import Avatar from '../shared/Avatar';
import CardText from '../shared/card/CardText';

export interface PlayerHeaderProps {
  description: string;
  short: string;
  title: string;
}

const PlayerHeader: React.FC<PlayerHeaderProps> = (props) => {
  const { description, short, title  } = props;
  return (
    <>
      <Avatar
        text={short}
        gridArea='avatar'
      />
      <CardText
        description={description}
        gridArea='text'
        title={title}
      >
      </CardText>
    </>
  );
}

export default PlayerHeader;
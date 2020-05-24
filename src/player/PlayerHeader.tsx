import React from 'react';
import Avatar from '../shared/Avatar';
import CardDescription from '../shared/card/CardDescription';
import CardText from '../shared/card/CardText';
import CardTitle from '../shared/card/CardTitle';

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
        gridArea='text'
        description={
          <CardDescription>
            {description}
          </CardDescription>
        }
        title={
          <CardTitle>
            {title}
          </CardTitle>
        }
        
      >
      </CardText>
    </>
  );
}

export default PlayerHeader;
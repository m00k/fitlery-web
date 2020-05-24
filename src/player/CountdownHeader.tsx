import React from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown, { PieCountdownProps } from '../countdown/PieCountdown';


export interface CountdownHeaderProps extends PieCountdownProps {
  msLeft: number;
}

const CountdownHeader: React.FC<CountdownHeaderProps> = (props) => {
  const { msLeft } = props;
  return (
    <>
      <PieCountdown
        {...props}
        gridArea='avatar'
      />
      <Countdown
        msLeft={msLeft}
        gridArea='text'
      />
    </>
  );
}

export default CountdownHeader;

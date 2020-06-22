import React from 'react';
import Countdown from '../countdown/Countdown';
import PieCountdown, { PieCountdownProps } from '../countdown/PieCountdown';


export interface CountdownHeaderProps extends PieCountdownProps {

}

const CountdownHeader: React.FC<CountdownHeaderProps> = ({...rootProps}) => {
  return (
    <>
      <PieCountdown
        gridArea='avatar'
      />
      <Countdown
        {...rootProps}
        gridArea='text'
      />
    </>
  );
}

export default CountdownHeader;

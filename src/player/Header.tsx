import React from 'react';
import CountdownHeader from './CountdownHeader';
import HeaderAction from './HeaderAction';
import PlayerHeader from './WorkoutHeader';
import usePlayerPageStore from './usePlayerPageStore';


export interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onClose } = props;
  const [ state, ] = usePlayerPageStore();
  const { playlistState, playerState } = state;
  const { playState } = playerState;
  const { short, name: title, description } = playlistState;
  const HeaderImpl = playState === 'stopped'
    ? (
      <PlayerHeader
        description={description}
        short={short}
        title={title}
      />
    )
    : (
      <CountdownHeader />
    );
  return (
    <>
      {HeaderImpl}
      <HeaderAction
        onClose={onClose}
      />
    </>
  );
};


export default Header;

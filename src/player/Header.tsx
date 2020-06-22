import React from 'react';
import { usePlaylistStore } from '../playlist/store';
import CountdownHeader from './CountdownHeader';
import HeaderAction from './HeaderAction';
import { usePlayerStore } from './store';
import PlayerHeader from './WorkoutHeader';


export interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onClose } = props;
  const [ playlistState, ] = usePlaylistStore();
  const [ playerState, ] = usePlayerStore();
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

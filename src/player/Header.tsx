import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistAtom } from '../playlist/store';
import CountdownHeader from './CountdownHeader';
import HeaderAction from './HeaderAction';
import { playerAtom } from './store';
import PlayerHeader from './WorkoutHeader';


export interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onClose } = props;
  const playlistState = useRecoilValue(playlistAtom);
  const playerState = useRecoilValue(playerAtom);
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

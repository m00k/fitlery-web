import useTheme from '@material-ui/core/styles/useTheme';
import React from 'react';
import Grid from '../shared/Grid';
import { workouts } from '../workout/data';
import Banner from './Banner';
import Controls from './Controls';
import Playlist, { isBreak } from './Playlist';
import PlaylistItem from './PlaylistItem';
import { PlaylistItemData } from './store';
import usePlayerStore from './usePlayerStore';


const Player = () => {
  const theme = useTheme();
  const [ state, dispatch ] = usePlayerStore();
  const { countdownState, playlistState } = state;
  const { currentItemIndex, items, playState } = playlistState;
  const currentItem = currentItemIndex > -1 ? items[currentItemIndex] : items[0];
  if (isBreak(currentItem)) {
    const nextItem = items.find((item: PlaylistItemData, index: number) => index >= currentItemIndex && !isBreak(item));
    currentItem.name = `next up: ${nextItem?.name}`;
  }
  const { msLeft, msTotal } = countdownState;
  const itemsWoBreaks = items
    .filter(item => !isBreak(item));

  return (
    <>
      <Grid
        alignItems="center"
        display="grid"
        justifyItems="center"
        width={1}
        bgcolor={theme.palette.background.paper} // TODO
        boxShadow={8}
      >
        <Banner
          workout={workouts[0]} // TODO
          playState={playState}
          msLeft={msLeft} // TODO: context or store
          msTotal={msTotal}
          currentItem={currentItem}
        >
        </Banner>
        <Controls
          playState={playState}
          onClick={dispatch}
        />
        <PlaylistItem
          item={currentItem}
          isBreak={isBreak(currentItem)}
          isCurrent={true}
          isNext={false}
        />
      </Grid>
      <Playlist
        items={itemsWoBreaks}
      />
    </>
  );
}

export default Player;
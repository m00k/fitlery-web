import { ExerciseData } from "../exercise/data";
import { PlaylistData, PlaylistItemData } from "../playlist/store";
import uid from "../util/uid";
import { WorkoutData } from "./store/state";

function toPlaylistItemData(workMs: number, breakMs: number, exercise: ExerciseData): [PlaylistItemData, PlaylistItemData] {
  const { id, name } = exercise;
  const b = {
    id,
    name: `next up: ${name}`,
    durationMs: breakMs,
    tags: {
      isBreak: true,
    },
  };
  const w = {
    id: uid(), // TODO: meh
    name,
    durationMs: workMs,
    tags: {
      breakWork: `${breakMs/1000}/${workMs/1000}`,
    }
  };
  return [b, w];
}

const expand = (acc: PlaylistItemData[], [b, w]: [PlaylistItemData, PlaylistItemData]): PlaylistItemData[] => [...acc, b, w];

export default function toPlaylistData(workout: WorkoutData): PlaylistData {
  const { short, title: name, description, exercises, workMs, breakMs } = workout;
  const toPlaylistItemDataBound = toPlaylistItemData.bind(null, workMs, breakMs);
  const items: PlaylistItemData[] = exercises
    .map(toPlaylistItemDataBound)
    .reduce(expand, [])
  ;
  return {
    short,
    name,
    description,
    items,
  };
}

import { ExerciseData } from "../exercise/data";
import { PlaylistData, PlaylistItemData } from "../playlist/store";
import { WorkoutData } from "./store/state";

function toPlaylistItemData(workMs: number, breakMs: number, name: string): [PlaylistItemData, PlaylistItemData] {
  const b = {
    name: `next up: ${name}`,
    durationMs: breakMs,
    tags: {isBreak: true},
  };
  const w = {
    name,
    durationMs: workMs,
  };
  return [b, w];
}

const pickName = (exercise: ExerciseData): string => exercise.name;
const expand = (acc: PlaylistItemData[], [b, w]: [PlaylistItemData, PlaylistItemData]): PlaylistItemData[] => [...acc, b, w];

export default function toPlaylistData(workout: WorkoutData): PlaylistData {
  const { short, title: name, description, exercises, workMs, breakMs } = workout;
  const toPlaylistItemDataBound: (name: string) => [PlaylistItemData, PlaylistItemData] = toPlaylistItemData.bind(null, workMs, breakMs);
  const items: PlaylistItemData[] = exercises
    .map(pickName)
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

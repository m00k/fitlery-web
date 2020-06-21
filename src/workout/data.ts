import { WorkoutData } from "./store/state";

const SEC = 100;

// TODO: storage
export const workouts: WorkoutData[] = [
  { 
    id: '0007-8238-0868-fe98',
    short: '18',
    title: '18min',
    description: '12 exercises that will make the 12 labors of hercules look like a walk in the park',
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { id: "35c8-3c89-bc6a-f12e", name: "Wall Sit" },
      { id: "b8a7-3c8e-23f3-1268", name: "Lunge" },
      { id: "fb38-496c-92c8-0ebd", name: "Plank" },
      { id: "9e8f-0788-9ed6-6fd8", name: "Plank +" },
      { id: "1eca-03e8-655b-7008", name: "Reverse Crunch" },
      { id: "f05b-6748-3df8-8636", name: "Shadow Boxing" },
      { id: "627e-a8a9-7398-bce8", name: "Side Plank" },
      { id: "b738-a1a3-456c-f181", name: "Side Plank (Left)" },
      { id: "7358-c9e8-2b7e-5818", name: "Side Plank (Right)" },
      { id: "4469-16cf-d4d8-009c", name: "Knee Strikes" },
      { id: "2338-3a1d-a2d2-5e15", name: "Lunge (Fwd)" },
      { id: "cd18-67fc-7652-3596", name: "Lunge (Bwd)" },
      { id: "9762-f7b8-07e8-704b", name: "Knee High Running" },
      { id: "ce62-0688-0a38-3d8f", name: "Jumping Jacks" },
      { id: "dd5d-90a8-5b88-5798", name: "Push ups" },
      { id: "8e78-4428-7008-f828", name: "Squats" },
    ]
  },
  { 
    id: 'ba98-94f8-2c1a-9408',
    short: 'TB',
    title: 'TABATA',
    description: 'Hakuna Tabata?',
    workMs: 40 * SEC,
    breakMs: 20 * SEC,
    exercises: [
      { id: '1d38-cee8-78f8-16c8', name: 'Squat Jumps' },
      { id: '84a8-03ee-8368-9d4a', name: 'Push Ups' },
      { id: 'e31d-68a3-b971-0634', name: 'Burpees' },
      { id: 'f3e8-6931-251b-c6d8', name: 'Jumping Jacks' },
      { id: '57d8-8378-90db-3ef8', name: 'High Knees' },
    ]
  },
  { 
    id: '9998-1f96-0a08-c0f8',
    short: 'MP',
    title: 'Master Planker',
    description: 'Toughest planker on the block',
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { id: '8a48-8744-5803-4b68', name: 'Ellbow Plank' },
      { id: '6f68-4389-5bd8-eb6a', name: 'Full Plank' },
      { id: '4b98-6698-fb78-be5a', name: 'Side Plank' },
      { id: 'e848-e39b-8ae5-6778', name: 'Side Plank Knee Tucks (1)' },
      { id: 'fa6d-c1ec-a33e-1618', name: 'Side Plank Knee Tucks (2)' },
      { id: 'ccd8-0cb8-8958-422c', name: 'Plank Arm Raise' },
      { id: '0158-19a8-2533-70d8', name: 'Plank Leg Raise' },
      { id: 'ba77-2cd2-2468-0fe9', name: 'Reverse Plank' },
    ]
  },
  { 
    id: '66c7-f1e9-3972-c014',
    short: 'AB',
    title: 'ABS-olutely fantastic',
    description: 'A six pack is just the beginning',
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
    { id: '3d7b-a598-3f9f-0c78', name: 'Hollow Body' },
    { id: '9b4f-93fc-a2cf-d1b9', name: 'Superman Hold' },
    { id: '5848-44a3-4ff8-785e', name: 'Leg Raises'},
    { id: 'b88c-e448-1a79-0b36', name: 'V Ups'},
    { id: '5774-5ee8-28be-d3e8', name: 'Flutter Kicks'},
    { id: '3873-0198-16b8-4219', name: 'Star Toe Touch'},
    ]
  },
  {
    id: '96e4-f079-4386-4358',
    short: 'OO',
    title: 'Obliques obligatory',
    description: `Should I google that for you?`,
    workMs: 60 * SEC,
    breakMs: 30 * SEC,
    exercises: [
      { id: '5b0a-9258-7f58-9628', name: 'Wood Choppers' },
      { id: '8902-baf8-e328-1715', name: 'Side Plank' },
      { id: '7081-6588-3f68-0de4', name: 'Ankle Touches'},
      { id: '5021-1f8d-8f88-49c1', name: 'Plank Rotation'},
      { id: '7b31-2145-2c58-c448', name: 'Russian Twist'},
    ]
  },
  {
    id: 'ba61-0bc7-fea8-b098',
    short: 'JJ',
    title: 'Jump Jack!',
    description: `I don't care what your real name is`,
    workMs: 300 * SEC,
    breakMs: 10 * SEC,
    exercises: [
      { id: 'f6c3-fd74-1b4a-093e', name: 'Jumping Jacks' },
      { id: '3db8-c0c8-2cd8-5948', name: 'Oblique Jacks' },
      { id: '42c9-8ba8-7cb8-4db8', name: 'Cross Jacks' },
    ]
  },
];

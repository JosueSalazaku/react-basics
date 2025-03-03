export interface Joke {
  id: number;
  joke: string;
  likes: number;
}

export const allJokes: Joke[] = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms?",
    likes: 0,
  },
  {
    id: 2,
    joke: "Because they make up everything!",
    likes: 0,
  },
  {
    id: 3,
    joke: "Why did the scarecrow win an award?",
    likes: 0,
  },
  {
    id: 4,
    joke: "Because he was outstanding in his field!",
    likes: 0,
  },
];

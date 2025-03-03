import LikeDislike from "./LikeDislike";

interface JokesProps {
  jokes: { id: number; joke: string; likes: number }[];
  handleLikes: (id: number) => void;
  handleDislike: (id: number) => void;
}

function Jokes({ jokes, handleLikes, handleDislike }: JokesProps) {
  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
          <p>Likes: {joke.likes}</p>
          <LikeDislike
            id={joke.id}
            likes={joke.likes}
            handleLikes={handleLikes}
            handleDislike={handleDislike}
          />
        </div>
      ))}
    </div>
  );
}

export default Jokes;

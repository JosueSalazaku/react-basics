import { FormEvent, useState } from "react";
import "./App.css";
import JokesForm from "./components/JokesForm";
import Jokes from "./components/Jokes";
import { allJokes, Joke } from "./AllJokes";
import SortJokes from "./components/SortJokes";

function App() {
  const [jokes, setJokes] = useState(allJokes);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting");
  };

  const addNewJoke = (input: string) => {
    const newJoke = { id: jokes.length + 1, joke: input, likes: 0 };
    setJokes([newJoke, ...jokes]);
    console.log(jokes);
  };

  const handleLikes = (id: number) => {
    const updatedJokes = jokes.map((joke) =>
      joke.id === id ? { ...joke, likes: joke.likes + 1 } : joke
    );
    setJokes(updatedJokes);
  };

  const handleDislike = (id: number) => {
    const updatedJokes = jokes.map((joke) =>
      joke.id === id ? { ...joke, likes: joke.likes - 1 } : joke
    );
    setJokes(updatedJokes);
  };

  const handleJokesSort = () => {
    console.log("Sort by L!IKES");
    
    const sortedJokes = [...jokes].sort((a: Joke, b: Joke) => b.likes - a.likes);
    setJokes(sortedJokes)
  }

  return (
    <div>
      <h1>Lets add some Jokes</h1>
      <JokesForm handleSubmit={handleSubmit} addNewJoke={addNewJoke} />
      <Jokes
        handleLikes={handleLikes}
        handleDislike={handleDislike}
        jokes={jokes}
      />
      <SortJokes handleJokesSort={handleJokesSort} />
    </div>
  );
}

export default App;

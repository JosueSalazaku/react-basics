interface SortJokesProps {
  handleJokesSort: () => void;
}

function SortJokes({ handleJokesSort }: SortJokesProps) {
  return <button className="sort-button" onClick={() => handleJokesSort()}>Sort By most Likes!</button>;
}

export default SortJokes;

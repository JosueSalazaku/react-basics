import React, { FormEvent, useState } from "react";

interface JokesFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  addNewJoke: (inputValue: string) => void;
}

function JokesForm({ handleSubmit, addNewJoke }: JokesFormProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    handleSubmit(event);
    addNewJoke(inputValue);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    console.log(inputValue);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={handleInput} />
      <button className="submit">Submit</button>
    </form>
  );
}

export default JokesForm;

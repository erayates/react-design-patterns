import { useState, useEffect } from "react";

export const ControlledForm = () => {
  const [nameInputError, setNameInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  const handleSubmit = () => {};

  useEffect(() => {
    if (name.length < 2) {
      setNameInputError("Name must be two or more charachters.");
      return;
    }
    setNameInputError("");
  }, [name]);

  return (
    <form onSubmit={handleSubmit}>
      {nameInputError && <p style={{ color: "red" }}>{nameInputError}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

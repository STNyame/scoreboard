// src/components/AddPlayerForm.js
import { useState } from "react";
export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");

  const newPlayer = () => {
    props.addPlayer(name);
    set_name("");
  };
  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => set_name(event.target.value)}
          placeholder="Name"
        />{" "}
        <button onClick={newPlayer}>Add</button>
      </p>
    </div>
  );
}

// src/components/AddPlayerForm.js
import { useState } from "react";
export default function AddPlayerForm(props) {
  const [name, set_name] = useState("");
  const [tribe, set_tribe] = useState("ants");

  const newPlayer = () => {
    console.log(tribe);
    props.addPlayer(name, tribe);
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
        <select
          name="tribes"
          id="tribes"
          onChange={(e) => set_tribe(e.target.value)}
        >
          <option value="ants">Ants</option>
          <option value="bees">Bees</option>
          <option value="beetles">Beetles</option>
          <option value="crickets">Crickets</option>
          <option value="dragonflies">Dragonflies</option>
          <option value="ladybugs">ladybugs</option>
          <option value="mantis">Praying Mantis</option>
          <option value="spiders">Spiders</option>
        </select>
        <button onClick={newPlayer}>Add</button>
      </p>
    </div>
  );
}

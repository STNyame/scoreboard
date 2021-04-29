// src/components/Scoreboard.js

import AddPlayerForm from "../AddPlayerForm/AddPlayerForm";
import Player from "../Player/Player";
import { useState } from "react";
import "./Scoreboard.scss";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compareName(a, b) {
  return a.name.localeCompare(b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compareName);

  const change_sorting = (event) => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const addNewPlayer = (newName) => {
    const newPlayerList = [
      ...players,
      {
        id: players.length + 1,
        name: newName,
        score: 0,
      },
    ];

    return set_players(newPlayerList);
  };
  const resetScore = () => {
    const updatedScore = players.map((player) => {
      return {
        ...player,
        score: player.score - player.score,
      };
    });
    return set_players(updatedScore);
  };

  const randomScore = () => {
    const updatedScore = players.map((player) => {
      return {
        ...player,
        score: player.score - player.score + Math.round(Math.random() * 100),
      };
    });
    return set_players(updatedScore);
  };

  const incrementScore = (player) => {
    const id = player;
    const new_players_array = players.map((player) => {
      if (player.id === id && player.score < 100) {
        return {
          ...player,

          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    return set_players(new_players_array);
  };

  return (
    <div className="Scoreboard">
      <p>Player's scores:</p>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={resetScore}>reset</button>
        <button onClick={randomScore}>randomize</button>
      </p>
      <ul>
        {players_sorted.map((player) => {
          return (
            <li>
              <Player
                id={player.id}
                name={player.name}
                score={player.score}
                incrementScore={incrementScore}
              />
            </li>
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addNewPlayer} />
    </div>
  );
}

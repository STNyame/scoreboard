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
    {
      id: 1,
      name: "Violeta",
      score: 0,
      cities: 0,
      healers: 0,
      teachers: 0,
      shamans: 0,
      farms: 0,
      mines: 0,
      workers: 0,
      coins: 0,
      lumen: 0,
      food: 0,
      iron: 0,
    },
    {
      id: 2,
      name: "Eszter",
      score: 0,
      cities: 0,
      healers: 0,
      teachers: 0,
      shamans: 0,
      farms: 0,
      mines: 0,
      workers: 0,
      coins: 0,
      lumen: 0,
      food: 0,
      iron: 0,
    },
    {
      id: 3,
      name: "Jeroen v2",
      score: 0,
      cities: 0,
      healers: 0,
      teachers: 0,
      shamans: 0,
      farms: 0,
      mines: 0,
      workers: 0,
      coins: 0,
      lumen: 0,
      food: 0,
      iron: 0,
    },
    {
      id: 4,
      name: "Lisa",
      score: 0,
      cities: 0,
      healers: 0,
      teachers: 0,
      shamans: 0,
      farms: 0,
      mines: 0,
      workers: 0,
      coins: 0,
      lumen: 0,
      food: 0,
      iron: 0,
    },
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

  const incrementScore = (player, currentValue) => {
    const id = player;
    const new_players_array = players.map((player) => {
      if (player.id === id && player.score < 100) {
        return {
          ...player,

          [currentValue]: player[currentValue] + 1,
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
                cities={player.cities}
                farms={player.farms}
                mines={player.mines}
                healers={player.healers}
                teachers={player.teachers}
                shamans={player.shamans}
                worker={player.workers}
                coin={player.coins}
                lumen={player.lumen}
                food={player.food}
                iron={player.iron}
              />
            </li>
          );
        })}
      </ul>
      <AddPlayerForm addPlayer={addNewPlayer} />
    </div>
  );
}

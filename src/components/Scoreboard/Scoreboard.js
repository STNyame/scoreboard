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
      scholars: 0,
      cities: 1,
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
      scholars: 0,
      cities: 1,
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
      scholars: 0,
      cities: 1,
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
      scholars: 0,
      cities: 1,
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
        scholars: 0,
        cities: 1,
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

  const incrementValue = (player, currentValue) => {
    const id = player;
    const foodOrIron = currentValue.name === "farms" ? "food" : "iron";
    const new_players_array = players.map((player) => {
      if (
        player.id === id &&
        currentValue.name === "cities" &&
        player[currentValue.name] < 4 &&
        player.food >= 3 &&
        player.coins >= 3 &&
        player.workers >= 3
      ) {
        return {
          ...player,

          food: player.food - 3,
          coins: player.coins - 3,
          workers: player.workers - 3,

          [currentValue.name]: player[currentValue.name] + 1,
        };
      } else if (
        player.id === id &&
        currentValue.id === "scholarbtn" &&
        player.scholars < 4
      ) {
        return {
          ...player,
          scholars: player.scholars + 1,
          [currentValue.name]: player[currentValue.name] + 1,
        };
      } else if (
        player.id === id &&
        currentValue.id === "resourceBuild" &&
        player[currentValue.name] < 5
      ) {
        return {
          ...player,
          [foodOrIron]: player[foodOrIron] + 1,
          [currentValue.name]: player[currentValue.name] + 1,
        };
      } else {
        return player;
      }
    });
    return set_players(new_players_array);
  };

  const incrementIncome = (playerId, player) => {
    const id = playerId;
    let coinAmount = 0;
    let workerAmount = 0;
    let lumenAmount = 0;

    switch (player.cities) {
      case 1:
        (coinAmount += 2) && (workerAmount += 1);
        break;
      case 2:
        (coinAmount += 3) && (workerAmount += 2);
        break;
      case 3:
        (coinAmount += 4) && (workerAmount += 3);
        break;
      default:
        (coinAmount += 5) && (workerAmount += 4);
    }
    switch (player.farms) {
      case 0:
        workerAmount += 0;
        break;
      case 1:
      case 2:
        workerAmount += 1;
        break;
      default:
        workerAmount += 2;
    }
    switch (player.mines) {
      case 0:
        coinAmount = coinAmount;
        break;
      case 1:
        coinAmount += 1;
        break;
      case 2:
      case 3:
        coinAmount += 2;
        break;
      default:
        coinAmount += 3;
    }

    const coinFromTeacher = player.teachers > 0 ? player.teachers * 3 : null;
    coinAmount += coinFromTeacher;

    const workFromHealer = player.healers > 0 ? player.healers * 2 : null;
    workerAmount += workFromHealer;

    const lumenFromShaman = player.shamans > 0 ? player.shamans * 2 : null;
    lumenAmount += lumenFromShaman;

    const new_players_array = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,

          workers: player.workers + workerAmount,
          coins: player.coins + coinAmount,
          lumen: player.lumen + lumenAmount,
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
                scholars={player.scholars}
                incrementScore={incrementValue}
                incrementIncome={incrementIncome}
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

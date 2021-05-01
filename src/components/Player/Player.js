import "./Player.scss";
export default function Player(props) {
  // the event listener callback
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <p>
        Cities: {props.cities} Farms: {props.farms} Mines: {props.mines}
      </p>
      <p>
        Healers: {props.healers} Teachers: {props.teachers} Shamans:{" "}
        {props.shamans}{" "}
      </p>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {props.name} Score: {props.score} Worker: {props.worker} Coin:
        {props.coin} Lumen: {props.lumen}
        <button onClick={onClickIncrement}>increment</button>
      </p>
      <p>
        Food: {props.food} Iron:{props.iron}
      </p>
    </li>
  );
}

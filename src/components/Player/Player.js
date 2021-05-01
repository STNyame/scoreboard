import "./Player.scss";
export default function Player(props) {
  // the event listener callback
  const onClickIncrement = (propname) => {
    // call the callback prop passed down from the scoreboard
    const currentProp = propname.target.name;
    console.log(props[currentProp]);
    props.incrementScore(props.id, currentProp);
  };
  return (
    <li className="Player">
      <div>
        <button name="cities" onClick={onClickIncrement}>
          Cities: {props.cities}
        </button>
        <button name="farms" onClick={onClickIncrement}>
          Farms: {props.farms}
        </button>
        <button name="mines" onClick={onClickIncrement}>
          Mines: {props.mines}
        </button>
      </div>
      <div>
        Healers: {props.healers} Teachers: {props.teachers} Shamans:{" "}
        {props.shamans}{" "}
      </div>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <div>
        {props.name} Score: {props.score} Worker: {props.worker} Coin:
        {props.coin} Lumen: {props.lumen}
        <button className="income-button" onClick={onClickIncrement}>
          increment
        </button>
      </div>
      <div>
        Food: {props.food} Iron:{props.iron}
      </div>
    </li>
  );
}

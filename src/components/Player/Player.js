import "./Player.scss";
export default function Player(props) {
  // the event listener callback
  const onClickIncrement = (propname) => {
    // call the callback prop passed down from the scoreboard
    const currentProp = propname.target.name;
    console.log(props[currentProp]);
    props.incrementScore(props.id, currentProp);
  };

  const onClickIncome = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementIncome(props.id, props);
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
        <button name="healers" onClick={onClickIncrement}>
          Healers: {props.healers}
        </button>
        <button name="teachers" onClick={onClickIncrement}>
          Teachers: {props.teachers}
        </button>
        <button name="shamans" onClick={onClickIncrement}>
          Shamans:{props.shamans}
        </button>
      </div>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <div>
        {props.name} Score: {props.score} Worker: {props.worker} Coin:
        {props.coin} Lumen: {props.lumen}
        <button className="income-button" onClick={onClickIncome}>
          increment
        </button>
      </div>
      <div>
        Food: {props.food} Iron:{props.iron}
      </div>
    </li>
  );
}

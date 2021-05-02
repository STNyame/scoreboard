import "./Player.scss";
export default function Player(props) {
  // the event listener callback
  const onClickIncrement = (propname) => {
    // call the callback prop passed down from the scoreboard
    const currentProp = propname.target;
    console.log(propname.target);

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
        <button id="resourceBuild" name="farms" onClick={onClickIncrement}>
          Farms: {props.farms}
        </button>
        <button id="resourceBuild" name="mines" onClick={onClickIncrement}>
          Mines: {props.mines}
        </button>
      </div>
      <div>
        <button id="scholarbtn" name="healers" onClick={onClickIncrement}>
          Healers: {props.healers}
        </button>
        <button id="scholarbtn" name="teachers" onClick={onClickIncrement}>
          Teachers: {props.teachers}
        </button>
        <button id="scholarbtn" name="shamans" onClick={onClickIncrement}>
          Shamans:{props.shamans}
        </button>
      </div>
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <div>
        {props.name} Scholars: {props.scholars} Worker: {props.worker} Coin:
        {props.coin} Lumen: {props.lumen}
        <button className="income-button" onClick={onClickIncome}>
          increment
        </button>
      </div>
      <div>
        <button name="food" onClick={onClickIncrement}>
          Food: {props.food}{" "}
        </button>{" "}
        <button name="iron" onClick={onClickIncrement}>
          Iron: {props.iron}
        </button>
      </div>
    </li>
  );
}

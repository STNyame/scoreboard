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
      <h1>{props.name}</h1>
      <div className="resource-button">
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
      <div className="resource-button">
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
        {/* <p>Scholars: {props.scholars}</p> */}
        <p>Workers: {props.worker}</p>
        <p>Coins: {props.coin}</p>
        <p>Lumen: {props.lumen}</p>
        <button className="income-button" onClick={onClickIncome}>
          increment
        </button>
      </div>
      <div className="resource-button">
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

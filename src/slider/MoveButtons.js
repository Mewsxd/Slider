import { useState } from "react";
import "./MoveButtons.css";
function MoveButtons(props) {
  // const [btnLeft, setBtnLeft] = useState(0);
  // const [btnRight, setBtnRight] = useState(0);
  const [curPick, setCurPick] = useState(0);
  function leftBtnHandler() {
    if (curPick > 0) {
      setCurPick((prevState) => prevState - 1);
      // setCurPick((val) => {
      //   return val - 1;
      // });
      props.onCounterHandler(curPick);
      console.log(curPick);
    }
  }
  function rightBtnHandler() {
    if (curPick <= 4) {
      // setCurPick((val) => {
      //   return val++;
      // });
      setCurPick((prevState) => prevState + 1);
      props.onCounterHandler(curPick);
      console.log(curPick);
    }
  }
  return (
    <div className="buttons">
      <button className="button left-button" onClick={leftBtnHandler}>
        <h3>LEFT</h3>
      </button>
      <button className="button right-button" onClick={rightBtnHandler}>
        <h3>RIGHT</h3>
      </button>
    </div>
  );
}
export default MoveButtons;

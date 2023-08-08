import { useState } from "react";
import "./ImageFrame.css";
// import MoveButtons from "./MoveButtons";

function ImageFrame(props) {
  const [curIndex, setCurIndex] = useState(0);
  const btnLeftHolder = () => {
    const isFirstSlide = curIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : curIndex - 1;
    setCurIndex(newIndex);
  };
  const btnRightHolder = () => {
    const isLastSlide = curIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : curIndex + 1;
    setCurIndex(newIndex);
  };
  return (
    <div>
      <button className="btn-left" onClick={btnLeftHolder}>
       ❰ 
      </button>
      <button className="btn-right" onClick={btnRightHolder}>
        ❱
      </button>
      {/* style={{ backgroundImage: props.slides[curIndex] }} */}
      <div className="slider">{props.slides[curIndex]}</div>
    </div>
  );

  //   const [counter, setCounter] = useState(0);
  //   function counterHandler(count) {
  //     setCounter((val) => {
  //       return count;
  //     });
  //     props.onCounterHandler(counter);
  //     // console.log(counter);
  //   }
  //   return (
  //     <div>
  //       <MoveButtons onCounterHandler={counterHandler} />
  //       <div className="img">{props.image}</div>
  //     </div>
  //   );
  // }
}
export default ImageFrame;

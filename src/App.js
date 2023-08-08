// import logo from "./logo.svg";
import "./App.css";
// import salah from "./photos/salah.jpg";
import ImageFrame from "./slider/ImageFrame";
import { useState } from "react";
function App() {
  const img1 = <img className="imgs" src={require("./photos/salah.jpg")}></img>;
  const img2 = <img className="imgs" src={require("./photos/cat.jpg")}></img>;
  const img3 = <img className="imgs" src={require("./photos/messi.jpg")}></img>;
  const img4 = <img className="imgs" src={require("./photos/house.jpg")}></img>;
  const images = [img1, img2, img3, img4];
  const [state, setState] = useState([]);
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-07-07&sortBy=publishedAt&apiKey=3c5463cb6b5e4e2caef1918645fe9e78"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  // console.log(state);

  // const requestData = async () => {
  //   const response = await fetch(
  //     "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=3c5463cb6b5e4e2caef1918645fe9e78"
  //   );
  //   if (response.ok === false) {
  //     throw new Error("Error");
  //   }
  //   const responseData = await response.json();
  //   return responseData;
  // };
  // const data = requestData();
  // console.log(data);
  // const
  return (
    <></>
    // <div className="App">
    //   <h2> HELLO </h2>
    //   <ImageFrame image={images[counter]} onCounterHandler={counterHandler} />
    //   <ImageFrame slides={images}></ImageFrame>
    // </div>
  );
}

export default App;

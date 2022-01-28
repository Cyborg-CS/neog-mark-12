import { useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");

  function checkTriangle() {
    const firstAngle = Number(document.querySelector("#first-angle").value);
    const secondAngle = Number(document.querySelector("#second-angle").value);
    const thirdAngle = Number(document.querySelector("#third-angle").value);
    var totalAngle = firstAngle + secondAngle + thirdAngle;

    if (totalAngle === 180) {
      setResult(<h1>Your angles make can form a Triangle 👍</h1>);
    } else {
      setResult(<h1>Oops ! your all angles doesnt form a Triangle</h1>);
    }
  }

  return (
    <div className="App">
      <nav
        style={{
          border: "solid",
          borderWidth: "3px",
          padding: "1rem"
        }}
      >
        <h2>Is this text ? lol...</h2>
        <div style={{ textAlign: "left" }}>
          <a href="">Triangle Check</a>
          <a href="">Quiz</a>
          <a href="">Lol</a>
          <a href="">Lol</a>
        </div>
      </nav>
      <div>
        <h5>Input angle-1</h5>
        <input id="first-angle" type="number" />
        <h5>Input angle-2</h5>
        <input id="second-angle" type="number" />
        <h5>Input angle-3</h5>
        <input id="third-angle" type="number" />
      </div>
      <button onClick={checkTriangle}>Check</button>
      <div>{result}</div>
    </div>
  );
}

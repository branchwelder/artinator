import "./App.css";
import { useState } from "react";

export default function App() {
  const [art, setArt] = useState([]);
  const [text, setText] = useState("");

  function fetchRandomArt() {
    fetch("/randart")
      .then((response) => response.json())
      .then((data) => setArt([...art, data.art]));
  }
  function send() {
    // props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }
  return (
    <div className='appContainer'>
      <header>
        <h1>ASCII Artinator</h1>
      </header>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={fetchRandomArt}>random</button>
      {art.map((i) => (
        <div className='artItem'>{i}</div>
      ))}
    </div>
  );
}

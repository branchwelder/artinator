import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);
  const [username, setUsername] = useState("anon");

  useEffect(() => {
    fetch("/read_entries")
      .then((response) => response.json())
      .then((data) => setEntries(data.entries));
  }, []);

  function addEntry() {
    fetch("/add_entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, text: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        setEntries([...entries, data]);
        setText("");
      });
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      addEntry();
    }
  }

  return (
    <div className='appContainer'>
      <header>
        <h1>ASCII Artinator</h1>
      </header>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onKeyPress}
      />
      <br />
      <div>
        {entries
          .slice()
          .reverse()
          .map((entry, index) => (
            <div className='entry' key={index}>
              <span className='username'>{entry.username}</span>
              <br />
              <span className='text'>{entry.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

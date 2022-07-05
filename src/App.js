import React from "react";
import Card from "./components/Card/Card";

const Tags = [
  { title: "mindfullness", color: "#00e676" },
  { title: "mind", color: "#bbdefb" },
  { title: "C++", color: "#0d47a1" },
];

function App() {
  return (
    <div className="w-full p-4">
      <Card Tags={Tags} title="Mindfullness" icon="🏌️" />
      <Card Tags={Tags} title="Productivity Tools" icon="🌍" />
      <Card Tags={Tags} title="Creativity" icon="🏌️" />
      <Card Tags={Tags} title="Brain Biology" icon="🕺" />
      <Card Tags={Tags} title="BookShelf" icon="🧾" />
    </div>
  );
}

export default App;

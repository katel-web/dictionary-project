import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header">Dictionary App </header>
      <Dictionary defaultKeyword="sunset" />
      <footer className="mb-4">
        Coded by{" "}
        <a href="https://katelemass.com/" target="_blank" rel="noreferrer">
          Kate Lemass
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/katel-web/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

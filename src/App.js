import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App container">
      <header className="App-header">Dictionary App </header>
      <Dictionary />
      <footer>
        Coded by Kate Lemass and{" "}
        <a
          href="https://github.com/katel-web/dictionary-project"
          target="_blank"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

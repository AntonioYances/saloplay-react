import { useMemo } from "react";
import HistoryItem from "./HistoryItem.jsx";
import Button from "../../components/ui/Button.jsx";

// HistoryPage: muestra apuestas guardadas en localStorage
export default function HistoryPage() {
  const bets = useMemo(() => JSON.parse(localStorage.getItem("bets") || "[]"), []);

  function clearHistory() {
    localStorage.removeItem("bets");
    window.location.reload();
  }

  return (
    <main className="container">
      <h1 className="title">Historial de apuestas</h1>
      <p className="subtitle">Apuestas guardadas en el navegador (localStorage).</p>

      {bets.length === 0 ? (
        <div className="card">
          <b>No hay apuestas registradas.</b>
          <div className="small">Realiza una apuesta en la sección Apuestas.</div>
        </div>
      ) : (
        <div className="stack">
          {bets.map((b, idx) => (
            <HistoryItem key={idx} bet={b} />
          ))}
        </div>
      )}

      <div className="spacer" />
      <Button type="button" variant="secondary" onClick={clearHistory}>
        Limpiar historial (demo)
      </Button>
    </main>
  );
}
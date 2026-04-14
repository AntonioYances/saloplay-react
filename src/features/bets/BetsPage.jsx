import { useMemo, useState } from "react";
import MatchCard from "./MatchCard.jsx";
import Button from "../../components/ui/Button.jsx";
import Input from "../../components/ui/Input.jsx";

// BetsPage: lista de partidos + selección de cuota + creación de apuesta (demo)
export default function BetsPage() {
  const matches = useMemo(
    () => [
      {
        id: 1,
        name: "Bayern vs Dortmund",
        time: "Hoy 8:00 PM",
        odds: [
          { label: "Local", value: 2.1 },
          { label: "Empate", value: 3.0 },
          { label: "Visitante", value: 2.8 },
        ],
      },
      {
        id: 2,
        name: "Real Madrid vs Barca",
        time: "Mañana 7:00 PM",
        odds: [
          { label: "Local", value: 1.9 },
          { label: "Empate", value: 3.2 },
          { label: "Visitante", value: 3.1 },
        ],
      },
    ],
    []
  );

  const [selected, setSelected] = useState(null); // { match, odd }
  const [stake, setStake] = useState("");

  function handleSelectOdd(match, odd) {
    setSelected({ match, odd });
  }

  function handlePlaceBet() {
    if (!selected) {
      alert("Selecciona una cuota primero.");
      return;
    }

    const stakeNumber = Number(stake);
    if (!stakeNumber || stakeNumber <= 0) {
      alert("Ingresa un monto válido.");
      return;
    }

    const bets = JSON.parse(localStorage.getItem("bets") || "[]");
    bets.unshift({
      match: selected.match.name,
      selection: selected.odd.label,
      odd: selected.odd.value,
      stake: stakeNumber,
      status: "PENDING",
      date: new Date().toLocaleString(),
    });
    localStorage.setItem("bets", JSON.stringify(bets));

    alert("Apuesta registrada (demo). Ve al historial.");
    setStake("");
    setSelected(null);
  }

  const potentialReturn =
    selected && stake ? (Number(stake) * Number(selected.odd.value)).toFixed(2) : "0.00";

  return (
    <main className="container">
      <h1 className="title">Haz tu apuesta</h1>
      <p className="subtitle">Selecciona una cuota y registra una apuesta (demo).</p>

      <div className="grid">
        <section className="grid-left">
          {matches.map((m) => (
            <MatchCard key={m.id} match={m} onSelectOdd={handleSelectOdd} />
          ))}
        </section>

        <aside className="card grid-right">
          <h2 className="section-title">Boleto de apuesta</h2>

          {selected ? (
            <>
              <div className="small"><b>Partido:</b> {selected.match.name}</div>
              <div className="small"><b>Selección:</b> {selected.odd.label} ({selected.odd.value})</div>

              <div className="spacer" />

              <Input
                label="Monto"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
                placeholder="10000"
              />

              <div className="small" style={{ marginTop: 10 }}>
                Ganancia potencial: <b>${potentialReturn}</b>
              </div>

              <div className="spacer" />
              <Button type="button" onClick={handlePlaceBet}>
                Confirmar apuesta
              </Button>
            </>
          ) : (
            <p className="small">Selecciona una cuota para ver el resumen aquí.</p>
          )}
        </aside>
      </div>
    </main>
  );
}
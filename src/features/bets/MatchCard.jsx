import Button from "../../components/ui/Button.jsx";

// MatchCard: tarjeta reutilizable para mostrar un partido y cuotas
export default function MatchCard({ match, onSelectOdd }) {
  return (
    <div className="card">
      <div className="match">
        <div>
          <h3 className="match-title">{match.name}</h3>
          <div className="small">{match.time}</div>
        </div>
      </div>

      <div className="odds">
        {match.odds.map((odd) => (
          <button
            key={odd.label}
            className="odd"
            onClick={() => onSelectOdd(match, odd)}
            type="button"
          >
            <div className="small">{odd.label}</div>
            <b>{odd.value}</b>
          </button>
        ))}
      </div>

      <div className="spacer" />
      <Button type="button" variant="secondary" onClick={() => alert("Detalle (demo)")}>
        Ver detalle
      </Button>
    </div>
  );
}
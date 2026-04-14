import StatusBadge from "../../components/ui/StatusBadge.jsx";

// HistoryItem: renderiza una apuesta en el historial
export default function HistoryItem({ bet }) {
  return (
    <div className="card">
      <div className="match">
        <div>
          <h3 className="match-title">{bet.match}</h3>
          <div className="small">{bet.date}</div>
          <div className="small">
            Selección: <b>{bet.selection}</b> | Cuota: <b>{bet.odd}</b> | Monto:{" "}
            <b>${bet.stake}</b>
          </div>
        </div>

        <StatusBadge status={bet.status} />
      </div>
    </div>
  );
}
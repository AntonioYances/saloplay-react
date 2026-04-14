// Badge reutilizable para estados de apuesta: Ganada / Perdida / Pendiente
export default function StatusBadge({ status }) {
  const normalized = (status || "").toUpperCase();

  let className = "badge badge-pending";
  let text = "Pendiente";

  if (normalized === "WON") {
    className = "badge badge-win";
    text = "Ganada";
  } else if (normalized === "LOST") {
    className = "badge badge-lose";
    text = "Perdida";
  }

  return <span className={className}>{text}</span>;
}
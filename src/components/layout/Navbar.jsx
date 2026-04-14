import { NavLink } from "react-router-dom";

// Navbar: navegación principal del módulo (usabilidad)
export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">Saloplay</div>

        <nav className="nav-links">
          <NavLink to="/bets" className={({ isActive }) => (isActive ? "active" : "")}>
            Apuestas
          </NavLink>
          <NavLink to="/history" className={({ isActive }) => (isActive ? "active" : "")}>
            Historial
          </NavLink>
          <NavLink to="/login">Salir</NavLink>
        </nav>
      </div>
    </header>
  );
}
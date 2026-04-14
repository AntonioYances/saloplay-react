import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";

// LoginPage: pantalla de inicio de sesión (demo sin backend)
export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Simulación: valida que haya datos y redirige a apuestas
  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Por favor completa usuario y contraseña.");
      return;
    }

    // Guardamos sesión demo
    localStorage.setItem("sessionUser", username.trim());
    navigate("/bets");
  }

  return (
    <main className="container">
      <h1 className="title">Iniciar sesión</h1>
      <p className="subtitle">Accede para realizar apuestas deportivas.</p>

      <form className="card" onSubmit={handleSubmit}>
        <Input
          label="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="usuario"
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />

        <div className="spacer" />

        <Button type="submit">Ingresar</Button>

        <div className="spacer" />

        <Link to="/register">
          <Button type="button" variant="secondary">
            Crear nueva cuenta
          </Button>
        </Link>
      </form>
    </main>
  );
}
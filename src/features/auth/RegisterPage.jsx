import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/ui/Input.jsx";
import Button from "../../components/ui/Button.jsx";

// RegisterPage: registro básico (demo)
export default function RegisterPage() {
  const navigate = useNavigate();

  const [documentId, setDocumentId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!documentId.trim() || !fullName.trim() || !email.trim()) {
      alert("Completa todos los campos.");
      return;
    }

    // Registro demo (sin backend)
    localStorage.setItem("registeredUser", JSON.stringify({ documentId, fullName, email }));
    alert("Registro completado (demo). Ahora inicia sesión.");
    navigate("/login");
  }

  return (
    <main className="container">
      <h1 className="title">Registrarse</h1>
      <p className="subtitle">Crea tu cuenta para empezar a apostar.</p>

      <form className="card" onSubmit={handleSubmit}>
        <Input
          label="Documento"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value)}
          placeholder="CC / TI"
        />
        <Input
          label="Nombre completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Antonio..."
        />
        <Input
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@ejemplo.com"
        />

        <div className="spacer" />

        <Button type="submit">Completar registro</Button>

        <div className="spacer" />

        <Link to="/login">
          <Button type="button" variant="secondary">
            Volver
          </Button>
        </Link>
      </form>
    </main>
  );
}
import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const { user } = useAuth();

useEffect(() => {
  if (user) {
    navigate("/");
  }
}, [user, navigate]);
 
 
  const manejarLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/"); // 🔥 redirige al dashboard
  } catch (error) {
    alert("Error: " + error.message);
  }
};

  return (

  <div className="login-container">

    <div className="login-card">

      <h1>Condominio Los Robles</h1>

      <h3>Acceso residencial</h3>

      <form onSubmit={manejarLogin}>

        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </div>

  </div>
  );
}
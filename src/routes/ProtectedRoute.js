import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // 🔥 Mientras carga, no hacer nada
 if (loading) {
  console.log("Cargando...");
  return <h1>Cargando...</h1>;
}

  // 🔐 Si no hay usuario, redirigir
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ✅ Si todo bien, mostrar contenido
  return children;
}
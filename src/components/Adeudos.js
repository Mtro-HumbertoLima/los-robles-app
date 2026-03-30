import { useEffect, useState } from "react";
import { agregarAdeudo, obtenerAdeudos, eliminarAdeudo, editarAdeudo } from "../services/adeudosService";
import "./Adeudos.css";

export default function Adeudos() {
  const [adeudos, setAdeudos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    cargarAdeudos();
  }, []);

  const cargarAdeudos = async () => {
    try {
      const data = await obtenerAdeudos();
      setAdeudos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error al cargar adeudos:", error);
      setAdeudos([]);
    }
  };

  const handleEliminar = async (id) => {
    try {
      await eliminarAdeudo(id);
      cargarAdeudos();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  const handleEditar = (adeudo) => {
    setNombre(adeudo.nombre);
    setMonto(adeudo.monto);
    setEditandoId(adeudo.id || adeudo._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación
    if (!nombre || !monto) {
      alert("Completa todos los campos");
      return;
    }

    const datos = {
      nombre,
      monto: Number(monto),
      fecha: new Date().toISOString().split("T")[0]
    };

    try {
      if (editandoId !== null) {
        await editarAdeudo(editandoId, datos);
        setEditandoId(null);
      } else {
        await agregarAdeudo(datos);
      }

      setNombre("");
      setMonto("");
      cargarAdeudos();

    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  return (
    <div>
      <h2>Adeudos</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Monto"
          value={monto}
          required
          onChange={(e) => setMonto(e.target.value)}
        />

        <button type="submit">
          {editandoId !== null ? "Actualizar" : "Agregar"}
        </button>
      </form>

      {/* Lista */}
      <ul>
        {adeudos.length === 0 ? (
          <p>No hay adeudos</p>
        ) : (
          adeudos.map((a) => (
            <li key={a.id || a._id}>
              {a.nombre} - ${a.monto} - {a.fecha}

              <button onClick={() => handleEditar(a)}>Editar</button>
              <button onClick={() => handleEliminar(a.id || a._id)}>
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
import { useEffect, useState } from "react";

import {
  agregarDiscusion,
  obtenerDiscusiones,
  votarDiscusion
} from "../services/discusionesService";

export default function Discusiones() {

  // ESTADOS DEL FORMULARIO
  const [problema, setProblema] = useState("");
  const [propuesta, setPropuesta] = useState("");
  const [fechaLimite, setFechaLimite] = useState("");

  // ESTADO DE DISCUSIONES
  const [discusiones, setDiscusiones] = useState([]);

  // CARGAR DISCUSIONES AL ABRIR
  useEffect(() => {
    cargarDiscusiones();
  }, []);

  // OBTENER DISCUSIONES
  const cargarDiscusiones = async () => {

    const data = await obtenerDiscusiones();

    setDiscusiones(data);
  };

  // CREAR DISCUSIÓN
  const handleSubmit = async (e) => {

    e.preventDefault();

    const nuevaDiscusion = {
      problema,
      propuesta,
      fechaLimite,
      votosFavor: 0,
      votosContra: 0
    };

    await agregarDiscusion(nuevaDiscusion);

    setProblema("");
    setPropuesta("");
    setFechaLimite("");

    cargarDiscusiones();
  };

  // VOTAR A FAVOR
  const votarFavor = async (discusion) => {

    await votarDiscusion(
      discusion.id,
      {
        votosFavor: discusion.votosFavor + 1
      }
    );

    cargarDiscusiones();
  };

  // VOTAR EN CONTRA
  const votarContra = async (discusion) => {

    await votarDiscusion(
      discusion.id,
      {
        votosContra: discusion.votosContra + 1
      }
    );

    cargarDiscusiones();
  };

  // INTERFAZ VISUAL
  return (

    <div>

      <h2>Discusiones del Condominio</h2>

      {/* FORMULARIO */}
      <form
        onSubmit={handleSubmit}
        className="form-discusion"
        >

        <input
          type="text"
          placeholder="Problema"
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Propuesta"
          value={propuesta}
          onChange={(e) => setPropuesta(e.target.value)}
        />

        <br /><br />

        <input
          type="date"
          value={fechaLimite}
          onChange={(e) => setFechaLimite(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Crear discusión
        </button>

      </form>

      <hr />

      {/* LISTA DE DISCUSIONES */}
      <h3>Discusiones activas</h3>

      {discusiones.map((d) => (

        <div key={d.id} className="card">

          <h4>{d.problema}</h4>

          <p>
            <strong>Propuesta:</strong> {d.propuesta}
          </p>

          <p>
            <strong>Fecha límite:</strong> {d.fechaLimite}
          </p>

          <p>
            👍 {d.votosFavor}

            <button onClick={() => votarFavor(d)}>
              A favor
            </button>
          </p>

          <p>
            👎 {d.votosContra}

            <button onClick={() => votarContra(d)}>
              En contra
            </button>
          </p>

          <hr />

        </div>

      ))}

    </div>

  );
}
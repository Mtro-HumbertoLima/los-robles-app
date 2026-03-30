import { useState } from "react";
import Menu from "../components/Menu";
import Perfil from "../components/Perfil";
import Reportes from "../components/Reportes";
import QR from "../components/QR";
import Adeudos from "../components/Adeudos";
import Incidencias from "../components/Incidencias";

export default function Dashboard() {
  const [vista, setVista] = useState("perfil");

  function renderVista() {
    switch (vista) {
      case "perfil":
        return <Perfil />;

      case "reportes":
        return <Reportes />;

      case "qr":
        return <QR />;

      case "adeudos":
        return <Adeudos />;

      case "incidencias":
        return <Incidencias />;

      default:
        return <Perfil />;
    }
  }

  return (
    <div>
      <header>
        <h1>Condominio Los Robles</h1>
        <h2>Sistema de Administración</h2>
      </header>

      <Menu setVista={setVista} />

      {/* AQUÍ CAMBIA LA PANTALLA */}
      {renderVista()}
    </div>
  );
}
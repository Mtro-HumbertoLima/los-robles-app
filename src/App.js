import "./App.css";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App() {

const [qr,setQr] = useState("");

function generarQR(){

let codigo = "INV-" + Math.floor(Math.random()*100000);

setQr(codigo);

}

return (

<div>

<header>
<h1>Condominio Los Robles</h1>
<h2>Sistema de Administración</h2>
</header>

<section>

<h3>Perfil del Residente</h3>

<input placeholder="Nombre"/>
<input placeholder="Número de casa"/>
<input placeholder="Teléfono"/>

<button>Guardar</button>

</section>

<section>

<h3>Reportes a Mesa Directiva</h3>

<textarea placeholder="Escriba su reporte"></textarea>

<button>Enviar reporte</button>

</section>

<section>

<h3>QR para Invitados</h3>

<button onClick={generarQR}>
Generar Código QR
</button>

<br/><br/>

{qr && (
<div>

<QRCodeCanvas value={qr} size={180} />

<p>Código generado: {qr}</p>

</div>
)}

</section>

<section>

<h3>Adeudos</h3>

<table>

<tr>
<th>Casa</th>
<th>Propietario</th>
<th>Adeudo</th>
</tr>

<tr>
<td>12</td>
<td>Juan Pérez</td>
<td>$1500</td>
</tr>

</table>

</section>

</div>

);

}

export default App;
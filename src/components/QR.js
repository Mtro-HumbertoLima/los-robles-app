import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QR(){

const [qr,setQr] = useState("");

function generarQR(){

let codigo = "INV-" + Math.floor(Math.random()*100000);

setQr(codigo);

}

return(

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

);

}

export default QR;
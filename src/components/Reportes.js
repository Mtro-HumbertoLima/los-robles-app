import { useState } from "react";

function Reportes(){

const [reporte,setReporte] = useState("");
const [lista,setLista] = useState([]);

function enviarReporte(){

if(reporte==="") return;

setLista([...lista, reporte]);
setReporte("");

}

return(

<section>

<h3>Reportes a Mesa Directiva</h3>

<textarea
value={reporte}
onChange={(e)=>setReporte(e.target.value)}
placeholder="Escriba su reporte"
/>

<button onClick={enviarReporte}>
Enviar reporte
</button>

<h4>Reportes enviados:</h4>

<ul>

{lista.map((item,index)=>(
<li key={index}>{item}</li>
))}

</ul>

</section>

);

}

export default Reportes;
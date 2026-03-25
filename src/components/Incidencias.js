import { useState } from "react";

function Incidencias(){

const [lista,setLista] = useState([]);
const [texto,setTexto] = useState("");

function agregar(){

if(texto==="") return;

setLista([...lista, texto]);
setTexto("");

}

return(

<section>

<h3>Panel de Incidencias</h3>

<input
value={texto}
onChange={(e)=>setTexto(e.target.value)}
placeholder="Describe la incidencia"
/>

<button onClick={agregar}>Agregar</button>

<ul>

{lista.map((item,index)=>(
<li key={index}>{item}</li>
))}

</ul>

</section>

);

}

export default Incidencias;
function Adeudos(){

const datos = [
{casa: 12, nombre: "Juan Pérez", adeudo: 1500},
{casa: 8, nombre: "María López", adeudo: 800},
{casa: 5, nombre: "Carlos Ruiz", adeudo: 1200}
];

return(

<section>

<h3>Adeudos del Condominio</h3>

<table>

<thead>
<tr>
<th>Casa</th>
<th>Propietario</th>
<th>Adeudo</th>
</tr>
</thead>

<tbody>

{datos.map((item,index)=>(
<tr key={index}>
<td>{item.casa}</td>
<td>{item.nombre}</td>
<td>${item.adeudo}</td>
</tr>
))}

</tbody>

</table>

</section>

);

}

export default Adeudos;
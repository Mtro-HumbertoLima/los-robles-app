function Menu({setVista}){

return(

<nav>

<button onClick={()=>setVista("perfil")}>
Perfil
</button>

<button onClick={()=>setVista("reportes")}>
Reportes
</button>

<button onClick={()=>setVista("qr")}>
QR
</button>

<button onClick={()=>setVista("adeudos")}>
Adeudos
</button>

<button onClick={()=>setVista("incidencias")}>
Incidencias
</button>

<button onClick={() => setVista("discusiones")}>
Discusiones
</button>

</nav>

);

}

export default Menu;
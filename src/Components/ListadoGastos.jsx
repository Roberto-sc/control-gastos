import Gasto from "./Gasto"

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    gastosfiltrados,
    filtro}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
        
        {gastos.map( gasto => (
            <Gasto
            key={gasto.id}
            gasto={gasto}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
 
            />
            
        /*
        
        {filtro && gastosfiltrados ? (
            
            gastosfiltrados.map( gasto => (
                <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
    
                />
          ))
          ) : (
            gastos.map( gasto => (
              <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
              
         ))
          )
        }
        */
        ))}



       </div>
  )
}

export default ListadoGastos
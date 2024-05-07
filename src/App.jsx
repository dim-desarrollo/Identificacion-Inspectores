import { Route, Routes } from "react-router-dom"
import GenerateQR from "./components/generate/GenerateQR"
import CardAgente from "./components/card/CardAgente"
import ViewAgentes from "./components/scanner/ViewAgentes"
import ListInspectors from "./components/list/ListInspectors"
import InsertImg from "./components/insertImg/InsertImg"
import CardInspectores from "./components/card2/CardInspectores"



  {/*
  
              acceder desde el 3010 es direccion al contenedor    
              ngix -> acceder desde el 3010 es dereccion al desde ngix 

  
      rutas explicacion 

      /lista -> es para uso interno, debe tener una ip local:3020. no un dominio, ya que no puede ser accedida por no tener disponible el servicio de dns internamente.

      /inspectores/:numeroAfiliado  para eso externo debe consultar al dim.smt al dominio publico


    */}

function App() {
  

  return (
    <Routes>
      <Route path='/generar' element={ <GenerateQR /> } />
      <Route path='/inspectores/:numeroAfiliado' element={ <CardInspectores /> } />
      <Route path='/scaner' element={ <ViewAgentes /> } />
      <Route path='/lista' element={ <ListInspectors /> } />  
      <Route path='/insert/:numeroAfiliado' element={ <InsertImg /> } />
    </Routes>
  )
}

export default App

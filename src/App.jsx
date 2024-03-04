import './App.css'
import Navbars from './components/Navbars'
import { Routes , Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './view/Home'
import Pokemon  from './view/Pokemon'
import Detalle from './view/Detalle'

function App() {

  return (
    <>
        <Navbars/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='home' element={<Home/>}/>
          <Route path='pokemones' element={<Pokemon/>}/>
          <Route path="/pokemones/:name" element={<Detalle />}
        />
        </Routes>
    </>
  )
}

export default App

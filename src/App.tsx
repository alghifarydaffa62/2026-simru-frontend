import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DaftarRuang from './pages/DaftarRuang'
import DataPeminjaman from './pages/DataPeminjaman'
import Peminjaman from './pages/Peminjaman'
import RiwayatPeminjaman from './pages/RiwayatPeminjaman'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='DaftarRuangan' element={<DaftarRuang/>}/>
          <Route path='DataPeminjaman' element={<DataPeminjaman/>}/>
          <Route path='Peminjaman' element={<Peminjaman/>}/>
          <Route path='RiwayatPeminjaman' element={<RiwayatPeminjaman/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

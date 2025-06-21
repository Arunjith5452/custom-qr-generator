import { Navigate, Route, Routes } from "react-router-dom"

import QRDesigner from './pages/QRDesigner'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/link"/>} />
      <Route path="/link" element={<QRDesigner/>} />
    </Routes>
  )
}

export default App

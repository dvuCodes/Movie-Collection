import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import "./styles/App.css"

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  )
}

export default App

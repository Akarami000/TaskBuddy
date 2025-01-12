import Login from "./Components/Login"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
       <Route path="/"  element={<Login/>}/>
    </Routes>
     
  </Router>
  )
}

export default App

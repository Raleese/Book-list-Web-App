import Home from "./Pages/Home"
import Favorites from "./Pages/Favorites";
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { Footer } from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer message={"Bienvenidos al catálogo de bebidas alcoholicas mas grande de zona sur."} />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>   
  )
}



import { Footer, NavBar } from "./components";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer message={"Bienvenidos al catálogo de bebidas alcoholicas mas grande de zona sur."} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
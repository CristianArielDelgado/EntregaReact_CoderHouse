import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer, ItemDetailContainer,  } from "./components";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer message={"Bienvenidos al catálogo de bebidas alcohólicas más grande de zona sur."}/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

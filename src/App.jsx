import { Route, Routes } from "react-router-dom";

// importar vistas
import Detalle from "./views/Detalle.jsx";
import Home from "./views/Home.jsx";
import Carrito from "./views/Carrito.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/pizzas/:id" element={<Detalle />} />
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
};
export default App;

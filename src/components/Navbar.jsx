import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";
import { formatoNumero } from "../formatoNumero.js";

const Navbar = () => {
  const { calcularTotal } = useContext(PizzasContext);

  return (
    <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <Link to="/" className="logo-nombre mx-1 mb-0">
            <h4 className="mb-0">&#127829; Pizzería Mamma Mia!</h4>
          </Link>
          <Link to="/carrito" className="logo-nombre mx-1 mb-0">
            <h5 className="mb-0">
              &#128722;= Total: ${formatoNumero(calcularTotal())}{" "}
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

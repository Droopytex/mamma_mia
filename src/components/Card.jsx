import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProvider";
import { formatoNumero } from "../formatoNumero.js";

const Card = () => {
  const { pizzas, agregarCarrito } = useContext(PizzasContext);

  const navigate = useNavigate();

  if (!pizzas) return <div>Loading...</div>;

  return (
    <>
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="col">
          <div className="card">
            <img className="card-img-top" src={pizza.img} alt="" />
            <div className="card-body">
              <h4 className="card-title text-capitalize">Pizza {pizza.name}</h4>
              <hr />
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>
              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>&#127829; {ingredient}</li>
                ))}
              </ul>
            </div>
            <h2 className="text-center text-dark pb-3">
              Precio: ${formatoNumero(pizza.price)}
            </h2>
            <div className="d-flex justify-content-around mb-4">
              <button
                className="btn btn-info text-white"
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
              >
                Ver Más &#128064;
              </button>
              <button
                className="btn btn-danger"
                onClick={() => agregarCarrito(pizza)}
              >
                Añadir &#128722;
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

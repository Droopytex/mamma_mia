import { createContext, useEffect, useState } from "react";

// Creación del context
export const PizzasContext = createContext();

// Provider con la fuente de datos
const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  // Obtener las pizzas
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  // Funciones para el carro
  function agregarCarrito({ id, name, price, img }) {
    const producto = { id, name, price, img, count: 1 };
    const indicePizzas = carrito.findIndex((pedido) => pedido.id === id); // Si la pizza existía en el carrito devolvemos, su posición, o si no devuelve -1.
    if (indicePizzas >= 0) {
      carrito[indicePizzas].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  }
  console.log(carrito);

  const sumarCantidad = (id) => {
    const nuevoCarrito = carrito.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCarrito(nuevoCarrito);
  };

  const restarCantidad = (id) => {
    const nuevoCarrito = carrito
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, pizza) => total + pizza.price * pizza.count,
      0
    );
  };

  return (
    <PizzasContext.Provider
      value={{
        pizzas,
        setPizzas,
        carrito,
        setCarrito,
        agregarCarrito,
        sumarCantidad,
        restarCantidad,
        calcularTotal,
      }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;

# Prueba fina módulo reactII
###" Pizzería Mamma Mia
## Se evalua: 
- React Router para controlar rutas y redireccionamientos.
- Utilizar Context API almacenar y modificar el estado global.

## Descripción: 
La pizzería italiana Mamma Mia! SPA le solicita realizar su aplicación web para mostrar y vender sus pizzas. Esta app deberá mostrar los distintos tipos de pizzas y sus ingredientes a través de una archivo JSON que estará a tu disposición en el material de apoyo y en donde encontrarás un arreglo de objetos correspondientes a cada tipo de pizza con su nombre, ingredientes, imagen, descripción, ID y precio.
La aplicación debe incluir un carrito y una vista de detalle por cada pizza seleccionada en el catálogo ubicado en la vista principal.
Para la estética de esta aplicación contará con algunas imágenes de referencia, sin embargo, el diseño quedará a su criterio siempre y cuando cumpla con los requerimientos.

## Requerimientos
1. Crear vistas y componentes para desarrollar las interfaces de las siguientes rutas:
a. /Home: Mostrar el catálogo de pizzas.
b. /pizza/:id: Mostrar el detalle de una pizza seleccionada en el catálogo.
c. /carrito: Mostrar las pizzas añadidas al carrito con sus precios y total a pagar.
(3 puntos)

2. Usar React Router como gestor de rutas de la aplicación. (3 puntos)
   
3. Manejar el estado global de la aplicación con Context API. (4 puntos)

4. Crear la lógica en el carrito para incrementar y decrementar la cantidad de pizzas a comprar.
(Opcional)

5. Calcular el total de la compra y mostrarlo en los componentes que correspondan según las imágenes de referencia.
(Opcional)

## Registro: 
Vista del home, en el navbar aparece el monto de compra (carro)
![Captura de Pantalla 2024-06-23 a la(s) 21 07 26](https://github.com/Droopytex/mamma_mia/assets/151586858/3396aeb8-9c09-48fe-98e3-ce6991f5dd58)

Vista del detalle de cada pizza y el boton para agregar al carro
![Captura de Pantalla 2024-06-23 a la(s) 21 07 26](https://github.com/Droopytex/mamma_mia/assets/151586858/f5a17857-83e4-4dbd-8b19-9b73c32062d9)

Vista de carro de compra, donde se puede agregar o quitar la cantidad de productos. Este ajuste actualiza el total a pagar. Al dar click en el botón "ir a pagar" aparece un alert
![Captura de Pantalla 2024-06-23 a la(s) 21 07 02](https://github.com/Droopytex/mamma_mia/assets/151586858/c8391bb5-9609-46b0-86cf-71d9731de057)


## link del deploy:
https://mmpiza.netlify.app 



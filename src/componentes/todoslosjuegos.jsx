import React, { useState } from 'react';
import juegosData from './data/db';
import './todoslosjuegos.css'; // Importa el archivo CSS aquí
import useCarrito from './data/carrito';
import './carrito.css'; // Importa el archivo de estilos del carrito


// Importa la imagen de carrito
import carritoImage from './carrito.png'; // Ajusta la extensión según el tipo de imagen y el nombre

function TodosLosJuegos() {
  const [filtroLanzamiento, setFiltroLanzamiento] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const { productos, agregarAlCarrito, eliminarDelCarrito, mostrarCarrito, toggleMostrarCarrito, incrementarCantidad, decrementarCantidad, total } = useCarrito();

  const handleFiltroLanzamiento = (event) => {
    setFiltroLanzamiento(event.target.value);
  };

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  const juegosFiltrados = juegosData.filter((juego) => {
    return (
      (filtroLanzamiento === '' || juego.lanzamiento === filtroLanzamiento) &&
      (busqueda === '' || juego.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    );
  });

  const handleCarritoClick = (event) => {
    event.stopPropagation();
    toggleMostrarCarrito();
  };

  return (
    <main className="product container">
      <div className="carrito-container">
        <img src={carritoImage} alt="Carrito" onClick={handleCarritoClick} />
        {mostrarCarrito && (
          <div className="carrito-lista" id="carrito" onClick={(event) => event.stopPropagation()}>
            {productos.map((producto, index) => (
              <div className="carrito-item" key={index}>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen} alt={producto.nombre} />
                <p>Precio: {producto.precio}</p>
                <div>
                  <button onClick={() => decrementarCantidad(index)}>-</button>
                  <span>{producto.cantidad}</span>
                  <button onClick={() => incrementarCantidad(index)}>+</button>
                </div>
                <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </div>
            ))}
            <div className="total">Total a pagar: {total}</div> {/* Mostrar el total a pagar */}
          </div>
        )}
      </div>
      <h2>Todos los Juegos</h2>
      <div className="filtro">
        <label htmlFor="filtroLanzamiento">Filtrar por Año de Lanzamiento:</label>
        <select id="filtroLanzamiento" value={filtroLanzamiento} onChange={handleFiltroLanzamiento}>
          <option value="">Todos</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
        </select>
      </div>
      <div className="busqueda">
        <input type="text" placeholder="Buscar Juego..." value={busqueda} onChange={handleBusqueda} />
      </div>
      <div className="product-content">
        {juegosFiltrados.map((juego) => (
          <div className="product-1" key={juego.id}>
            <img src={juego.imagen} alt={juego.alt} />
            <div className="product-txt">
              <h3>{juego.nombre}</h3>
              <p>Año de Lanzamiento: {juego.lanzamiento}</p>
              <div className="price">
                <p>{juego.precio}</p>
                <button className="btn-2" onClick={() => agregarAlCarrito(juego)}>Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default TodosLosJuegos;
import React from 'react';
import Footer from './componentes/footer';
import Header from './componentes/header';
import JuegosPopulares from './componentes/juegospopulares';
import TodosLosJuegos from './componentes/todoslosjuegos';
import Suscribite from './componentes/suscribite';

function App() {
  return (
    <div>
      <Header
        logo="Cueva Gamer"
        menuIcon="imagenes de los juegos/menu.png"
        navLinks={["Inicio", "juegos populares", "Productos", "Contacto"]}
        title="Compra tu juego favorito aquí"
        description="En nuestra página encontrarás variedad de videojuegos al mejor precio. Además, puedes suscribirte a nuestro blog para que nos pidas algún juego que no se encuentre en nuestro catálogo, así te lo vendemos al mejor precio."
        button1Text="Información"
        button2Text="Juegos"
      />
      <JuegosPopulares/>
      <TodosLosJuegos/>
      <Suscribite title="Suscribite a Nuestro Blog" placeholder="Escribe tu Correo" buttonText="Enviar" />
      <Footer />
    </div>
  );
}

export default App;

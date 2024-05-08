import React from 'react';

function Suscribite(props) {
  return (
    <section className="contact container">
      <div className="contact-content">
        <h3>{props.title}</h3>
        <form>
          <input type="email" placeholder={props.placeholder} />
          <input type="submit" className="btn-3" value={props.buttonText} />
        </form>
      </div>
    </section>
  );
}

export default Suscribite;

import React from 'react';
import '../styles/panier.css';
import { useState } from 'react';
function Panier() {

  const handlePayment = () => {
    // il faut ajouter une redirection vers la page Product ou une autre
    alert('Paiement effectué !\r Votre commande a bien été prise en compte.');
  };

  const [Prix, setPrix] = useState([]);
  const addProduct = (e) => {
    let prixU = Math.round((e.target.value * 9.99) * 100) / 100;
    setPrix.append(prixU)
  }


  return (
    <>
      <div className="pagePanier">
        <div className="containerPanier">
          {/* <div className="panier1">
            <div className="contenant-image">
              <img src="https://i.imgur.com/2DsA49b.webp"
                // className="img-fluid rounded-3"
                // style={{ width: 120 }}
                alt="Book"
              /></div>
            <div className="titre+text+blablabla"></div>
          </div> */}

          {/* <div className="panier1">
            <div className="contenant-image"><img
              src='https://lisez2.cdnstatics.com/usuaris/libros/fotos/9782412092/m_libros/9782412091128ORI.jpg'
              // src="https://i.imgur.com/Oj1iQUX.webp"
              // className="img-fluid rounded-3"
              // style={{ width: 120 }}
              alt="Book"
            /></div>
            <div className="titre+text+blablabla"></div>
          </div> */}

{/* ---- ---- */}

          <section>
            <div className='contenuePanier'>
              <div className='contenue'>
                <img
                  src="https://i.imgur.com/2DsA49b.webp"
                  className="img-fluid rounded-3"
                  style={{ width: 120 }}
                  alt="Book"
                />
              </div>
              <div className='contenue'>
                <p className="title" >Thinking, Fast and Slow</p>
                <p className="author">Daniel Kahneman</p>
              </div>

              <div className='contenue'>
                <p style={{ fontWeight: 500 }}>
                  Quantité:
                </p>
                <input
                  id="form1"
                  min={0}
                  name="quantity"
                  defaultValue={2}
                  type="number"
                  className="form-control form-control-sm"
                  style={{ width: 50 }}
                  onChange={addProduct} />
              </div>
              <div className='contenue'>
                <p style={{ fontWeight: 500 }}>
                  Prix:
                </p>$9.99{Prix}
              </div>
            </div>

            <div className='contenuePanier'>
              <div className='contenue'>
                <img
                  src="https://i.imgur.com/Oj1iQUX.webp"
                  className="img-fluid rounded-3"
                  style={{ width: 120 }}
                  alt="Book"
                />
              </div>
              <div className='contenue'>
                <p style={{ fontWeight: 500 }}>
                  Livre:
                </p>
                <p className="title" >Homo Deus: A Brief History of Tomorrow</p>
                <p style={{ fontWeight: 500 }}>
                  Auteur:
                </p>
                <p className="author">Yuval Noah Harari</p>
              </div>

              <div className='contenue'>
                <p style={{ fontWeight: 500 }}>
                  Quantité:
                </p>
                <input
                  id="form1"
                  min={0}
                  name="quantity"
                  defaultValue={2}
                  type="number"
                  className="form-control form-control-sm"
                  style={{ width: 50 }}
                  onChange={addProduct} />
              </div>
              <div className='contenue'>
                <p style={{ fontWeight: 500 }}>
                  Prix:
                </p>${Prix}8.99</div>

            </div>
            <button className="payment-button" onClick={handlePayment}>Payer</button>
          </section>

          {/* ---- ---- */}
        </div>
      </div >
    </>
  );
}
export default Panier;
import React from "react";

const Item = ({id, nombre, descripcion, precio,imagen}) =>{
    return(
        <div className="col-md-3 py-3" >
            <div key={id} className="card">
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"><b>${precio}</b></p> 
                    <a href="/#" className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </div>
    );
};

export default Item;
import React from "react";
import Item from "../components/Item";

const ItemList = ({items}) =>{

    return(
        <div className="row mt-5">
            {items.map(item => <Item id={item.id} key={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen}/> )}
        </div>
    )
};

export default ItemList;
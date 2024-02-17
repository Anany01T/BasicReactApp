import React from 'react'

const Cardsp = (props) => {
  return (
    
    <div>
        <div className="card" >
  <img src="{props.src}" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2>{props.h2}</h2>
    <p className="card-text">{props.h3}</p>
    <button >${props.price}</button>
  </div>
  
</div>
    </div>
  );
}

export default Cardsp;

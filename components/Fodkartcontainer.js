import React from 'react'
import {BASE_URL} from "../App.js"
import Cardsp from './Cardsp.js'


const Fodkartcontainer = ({ data }) => {
  return (

    <div className='cardkart'>
      {data?.map(({name,image,text,price})=>
       
          <Cardsp key={name} src={BASE_URL + image} h2={name} h3={text} price={price}/>
       )}
    </div>
  );
};

export default Fodkartcontainer;

import React from 'react';
import "./Loader.css";
import loaderImg from "../../images/loader.jpeg"

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
    <img src={loaderImg} alt=" loader logo" />
    </div>
  );
}

export default Loader;

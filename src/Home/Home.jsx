import React from 'react';
import avataaars from '../imgs/avataaars.svg';

export default function Home() {
  return <>
   <header className="home  text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <img className=" mb-5 " src={avataaars} alt="" />
            <h1 className=" text-uppercase mb-0">Start React</h1>
            <div className="lines ">
                <div className="line"></div>
                <div className="star"><i className="fas fa-star"></i></div>
                <div className="line"></div>
            </div>
            <p className="mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </header>
  </>
}

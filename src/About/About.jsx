import React from 'react'

export default function Abour() {
  return <>
   <section className="about text-white py-5">
    <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
        <div className="lines ">
            <div className="line"></div>
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="line"></div>
        </div>
        <div className="row ">
            <div className="col-md-2"></div>
            <div className=" col-md-4 ">
            <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
             CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            

            <div className=" col-md-4">
            <p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers,
             and add your email address to the contact form to make it fully functional!</p>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
   </section>
  </>
}

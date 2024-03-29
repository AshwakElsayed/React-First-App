import React from 'react'

export default function Contact() {
  return <>
   <section className="contact py-5">
     <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">CONTACT ME</h2>
        <div className="lines ">
            <div className="line"></div>
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="line"></div>
        </div>
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Name</label>
                            <input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." aria-invalid="false"/>
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." aria-invalid="false"/>
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." aria-invalid="false"/>
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." aria-invalid="false"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <br/>
                    <div id="success"></div>
                    <div className="form-group"><button className="btn btn-primary btn-xl " id="sendMessageButton" type="submit">Send</button></div>
                </form>
            </div>
        </div>
     </div>
   </section>
  </>
}

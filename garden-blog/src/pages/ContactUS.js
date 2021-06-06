/* ./src/pages/ContactUS
informations de contact */

import React from 'react';
import Layout from '../components/Layout';

const ContactUS = () => {
    return (
        <Layout>
            <div className="container">
                <div className="row mb60 text-center">
                    <div className="col-sm-12">
                        <h3 className="section-title">Contactez-moi</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="mb60">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptatem possimus, ut maiores minima, autem assumenda error et blanditiis quae, asperiores dolorem enim repellat? Ab eum dolor debitis nulla facere qui aspernatur quo, modi sequi architecto quas repellat repudiandae placeat voluptas, molestiae quaerat dolorum, nisi labore sapiente veritatis enim? Molestiae!</p>
                                    </div>
                                    <div className="col-sm-8 col-sm-offset-1">
                                        <div className="row">
                                            <div id="message" className="col-sm-12"></div>
                                            <div className="col-sm-12">
                                                <form method="post" action="sendemail.php" id="contactform" className="main-contact-form">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control col-md-4 mb20" name="name" placeholder="Votre Nom *" id="name" required data-validation-required-message="Please enter your name." />
                                                        <input type="text" className="form-control col-md-4 mb20" name="email" placeholder="Vore Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                                        <input type="text" className="form-control col-md-4 mb20" name="website" placeholder="Votre URL " id="website" required data-validation-required-message="Please enter your web address." />
                                                    </div>
                                                    <textarea name="comments" className="form-control mb20" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                                    <input className="btn btn-primary mt30 pull-right" type="submit" name="submit" value="envoyer" />
                                                </form>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>                           
                        <div id="mapwrapper"></div>                            
                    </div>
                </div>
            </div>
        </Layout>
            
    );
}

export default ContactUS;

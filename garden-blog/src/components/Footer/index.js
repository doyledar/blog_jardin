import React from 'react';
import style from './style.css'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    console.log(props)
    return (
     <div>
        <footer id="footer-wrapper" className="dark-wrapper">
            <div className="container">
                <div className="row mb90">
                    <div className="col-md-3 col-xs-6">
                        <div className="text-widget widget">
                            <div className="widget-content">
                                <img alt="" className="img-responsive" src="assets/images/logo-light.png" />
                            </div>
                        </div>
                    </div>
                    
                   {/*  <div className="col-md-6 col-xs-6">
                        <div className="text-widget widget">
                            <h4 className="widget-title mb40">Actions</h4>
                            <div className="widget-content">
                            <ul className="nav">
                                <li><NavLink to={{pathname:'/actions/create'}} >Ajouter un post</NavLink></li>
                                
                            </ul>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
                <div className="row sub-footer">
                    <div className="col-md-6 footer-social">
                        <a className="facebook" href="#">Facebook</a>
                        <a className="google" href="#">Google</a>
                        <a className="twitter" href="#">Twitter</a>
                        <a className="pinterest" href="#">Pinterest</a>
                    </div>
                    <div className="col-md-6 text-right">
                        <p className="copyright"><small>© 2019. Designed and Developed by <a href="http://www.distinctivethemes.com" target="_blank">Distinctive Themes</a></small></p>
                    </div>
                </div>
            </div>
        </footer>

        <a href="#" id="back-to-top"><i className="fa fa-angle-up"></i></a>
      </div>
    );
}

export default Footer;

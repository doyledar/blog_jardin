import React from 'react';
/* import './style.css' */

const Topbar = () => {
    return (
    <div id="top-bar" className="hidden-xs">
        <div className="container">
            <div className="col-sm-4">
                <ul className="header-social list-inline">
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a className="blog" href="#"><i className="fa fa-rss"></i></a></li>
                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                </ul>
            </div>
            
        </div>
    </div>
        
    );
}

export default Topbar;

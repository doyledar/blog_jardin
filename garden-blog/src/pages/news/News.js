import React from 'react';
import { NavLink } from 'react-router-dom'

const News = () => {
    return (
        <div className="col-sm-12 nopaddingleftright blog-list-item mb90">
            <div className="hover-effect smoothie mb40">
                <a href="#" className="smoothie">
                <img src="assets/images/blog/blog-1.jpg" alt="Image" className="img-responsive smoothie" /></a>
                <div className="hover-overlay smoothie text-center">
                    <div className="vertical-align-bottom">
                        <h4>The Glamorous Lifestyle</h4>
                        <span className="item-category-span">Lifestyle</span>
                    </div>
                </div>
                <div className="hover-caption dark-overlay smoothie text-center">
                    <div className="vertical-align-bottom">
                        <NavLink to="posts" className="btn btn-primary pull-right mb20">Read Now</NavLink>
                    </div>
                </div>
            </div>
            <p className="mb20">Professionally engage excellent manufactured products whereas go forward synergy. Collaboratively synergize sticky ideas before client-centric markets. Rapidiously synergize distinctive potentialities whereas team driven channels. Objectively deploy distinctive data whereas bricks-and-clicks bandwidth. Seamlessly fashion vertical intellectual capital and magnetic e-business.</p>
            <NavLink to="news" className="btn btn-primary pull-right">Read Now</NavLink>
        </div>
    );
}

export default News;

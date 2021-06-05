import React from 'react';
import style from './style.css'

const Sidebar = () => {
    return (
        <div className="col-sm-3 col-sm-offset-1 sidebar">
            <div className="gallery-widget widget mb40">
                <h4 className="widget-title mb40">Actions</h4>
                <div className="widget-content">
                    <div className="gallery-list actions">
                        <button className="btn btn-primary">Update</button>
                        
                        <button className="btn btn-primary">Delete</button>
                        {/* <a className="thumb" href="#">
                            <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=548" />
                        </a>
                        <a className="thumb" href="#">
                            <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=659" />
                        </a>
                        <a className="thumb" href="#">
                            <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=974" />
                        </a>
                        <a className="thumb" href="#">
                            <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image748" />
                        </a>
                        <a className="thumb" href="#">
                            <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=484" />
                        </a>
                        <a className="thumb" href="#">
                            <img alt="" className="img-responsive" src="https://unsplash.it/300/300?image=298" />
                        </a> */}
                    </div>
                </div>
            </div>
            {/* <div className="text-widget widget mb40">
                <h4 className="widget-title mb40">Location</h4>
                <div className="widget-content">
                    <p>Conveniently enhance high-quality imperatives vis-a-vis team driven technologies. Intrinsicly fashion economically sound communities rather than principle-centered deliverables. Synergistically impact.</p>
                </div>
            </div> */}
            {/* <div className="useful-link-widget widget mb40">
                <h4 className="widget-title mb40">Actions</h4>
                <div className="widget-content">
                    <div className="useful-link-list">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <ul className="list-unstyled">
                                    <li>
                                        <button>Modifier</button>
                                    </li>
                                    <li>
                                        <button>Supprimer</button>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="mailing-widget widget">
                <h4 className="widget-title mb40">Mailing List</h4>
                <div className="content-wiget">
                    <p className="mb40">Subscribe to our newsletter for the latest updates and offers.</p>
                    <form action="index.html">
                        <div className="input-group">
                            <input className="form-control form-email-widget" placeholder="Email address" type="text" /><span className="input-group-btn"><input className="btn btn-email" type="submit" value="✓" /></span>
                        </div>
                    </form>
                    <p></p>    
                </div>                                
            </div>
        </div>
    );
}

export default Sidebar;

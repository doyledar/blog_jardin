/*
    ./src/components/Sidebar
    barre latérale affichée dans le détail des posts
*/

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
                       
                    </div>
                </div>
            </div>
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

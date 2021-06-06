/*
    ./src/components/Layout
    layout de base (header + footer)
*/

import React, {Component} from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Layout extends Component {

    
    render() {
        return (
            <React.Fragment>
                <Header/>
                <section className="white-wrapper">
                    <div className="section-inner">
                        {this.props.children}
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}



export default Layout;

import React, {Component} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import base from '../../config/base'



class Layout extends Component {

    
    render() {
        //const {posts} = this.props
        //console.log(this.props.posts) //donnera notamment un tableau avec les posts
        //const { posts } = this.props.posts
        //console.log(this.state.posts)
        //console.log('layout ' + this.posts)

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

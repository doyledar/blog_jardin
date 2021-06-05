import React from 'react';
import Sidebar from '../../components/Sidebar';
import News from './News';
import Layout from '../../components/Layout'

const PostsList = (props) => {
    return (
        <Layout>
            <div className="container">
                <div className="row mb60 text-center">
                    <div className="col-sm-12">
                        <h3 className="section-title">News List</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div class="col-sm-8">
                        <div class="col-sm-12 nopaddingleftright blog-list-item mb90">
                            <News />
                            <News />
                            <News />
                        </div>
                    </div>
                    
                    <Sidebar />  
                </div>
            </div>
        </Layout>
    );
}

export default PostsList;

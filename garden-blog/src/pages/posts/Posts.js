import React, { useState, useEffect, Component } from 'react'
import Layout from '../../components/Layout';
import Card from '../../components/UI/Cards/Card'
//import _, { result } from 'lodash'
import postsList from '../../data/blog.json'
import base from '../../config/base'
import posts from '../../liste'

export class Posts extends Component {


    handleMore(){
        this.setState({limit: this.state.limit + 3})
    }
    
    render() {
        
        
        const posts = Array.from(this.props.posts)
         
                           
        return (
            
            <Layout>
                <div className="container">
                    <div className="row mb60 text-center">
                        <div className="col-sm-12">
                            <h3 className="section-title">garden colors</h3>
                            <p className="section-sub-title">Là où la nature reprend ses droits </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {  
                            posts && posts.map(post => {
                                return(
                                    post.id < 3 ? 
                                                <div titre={post.blogTitle} key={post.id} className="col-md-6 match-height mb40">
                                                    <Card post = { post }></Card>
                                                </div> 
                                                : 
                                                <div titre={post.blogTitle} key={post.id} className="col-md-4 match-height mb30">
                                                    <Card post = { post }></Card>
                                                </div>
                                        
                                );
                            })
                        }  
                       
                         
                    </div>
                    <button className="more btn red darken-3" onClick={() => this.props.handleMore(this.props.limit + 3)}>More</button>
                </div>
                {/* <button onClick={this.chargerPosts}>Test</button> */}
        </Layout>
    );
                
        
    }
}

export default Posts

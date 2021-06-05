import React, { Component } from 'react';
import Posts from './posts/Posts'
import base from '../config/base'
const postsPerPage = 10;
let arrayForHoldingPosts = []

class Home extends Component {

    state = {
        posts : [],
        limit: 10
    }
 
        
    componentDidMount(){
        
        this.ref = base.syncState(`/posts`, {
        context: this,
        state: 'posts',
        asArray: true,
        queries: {
            orderByChild: 'id',
            limitToLast: this.state.limit
        }
        })
    }

    componentDidUpdate(previousProps, previousState){
        if(previousState.limit !== this.state.limit){
            this.ref = base.syncState(`/posts`, {
            context: this,
            state: 'posts',
            asArray: true,
            queries: {
                orderByChild: 'id',
                limitToLast: this.state.limit
            }
            })
        }
    }
        
    

    //quand le composant se ferme, on supprime la liaison avec firebase pour ne pas écraser des infos qui ne nous appartiennent pas
    componentWillUnmount(){
        
        base.removeBinding(this.ref)
      }


    handleMore= (limitPosts) => {
        this.setState({limit: limitPosts})
    }  


    render() {
        
        return (
            <div id="master-wrapper">
                <div className="site-overlay"></div>
                <Posts posts={this.state.posts} handleMore={this.handleMore} limit={this.state.limit}/>
                {/* <Posts posts={ posts } /> */}
                
            </div>
    
        );
    }
}



export default Home;

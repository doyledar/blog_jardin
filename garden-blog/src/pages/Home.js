/* ./src/pages/Home.js */


import React, { Component } from 'react';
import Posts from './posts/Posts'
import base from '../config/base'

class Home extends Component {

    state = {
        posts : [],
        limit: 5
    }
 
    /* Chargement des 5 derniers posts (cfr limit du state)*/        
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

    /* On vérifie la limite du state pour voir si on a cliqué sur le bouton more, si elle
    a changé, on recharge les posts en fonction de la nouvelle limite */
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
        
    

    //quand le composant se ferme, on supprime la liaison avec firebase pour ne pas écraser des infos qui ne nous 
    //appartiennent pas
    componentWillUnmount(){
       base.removeBinding(this.ref)
    }


    // augmente le nombre de posts chargé quand on clique sur more
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

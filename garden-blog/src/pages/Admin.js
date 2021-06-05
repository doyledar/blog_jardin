import React, { Component } from 'react'
import Layout from '../components/Layout'
import CreatePost from '../pages/posts/CreatePost'
import firebase from 'firebase/app'
import 'firebase/auth'
import base, {firebaseApp} from '../config/base'
import Login from '../components/Login/index'

class Admin extends Component{
    state = {
        posts : [],
        users: [],
        uid: null
     }
 
     
    
    componentDidMount(){
        this.ref1 = base.syncState(`/posts`, {
        context: this,
        state: 'posts' 
        })

        this.ref2 = base.syncState(`/blogCategories`, {
            context: this,
            state: 'categories' 
            })
    }

    

    
    //quand le composant se ferme, on supprime la liaison avec firebase pour ne pas écraser des infos qui ne nous appartiennent pas
    componentWillUnmount(){
        base.removeBinding(this.ref1)
      }

    handleAuth = async authData =>{
        this.setState({
            uid: authData.user.uid,
              
        })
    }
    
    
    authenticate = () =>{
        const authProvider = new firebase.auth.FacebookAuthProvider

        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    
      
    createPost = post =>{
        const posts={ ...this.state.posts }
        const next = this.state.posts.length
        // on ajoute un timestamp au post pour avoir une clé unique
        //posts[`post-${Date.now()}`] = post
        posts[next] = post
        this.setState({ posts })
    }
     
    

      render() {
        //console.log(this.state)
        //const logout= <button className="btn red lighten-1" onClick={this.logout}>Déconnexion</button>
        //console.log(this.state.posts)
        if(!this.state.uid){
            return <Login authenticate= {this.authenticate}> </Login>
        }

        return (
            <Layout>
                <CreatePost id={this.state.posts.length} posts={this.state.posts} categories={this.state.categories} createPost={this.createPost}>
                </CreatePost>                
                
            </Layout>
    
        );
    }
}



export default Admin;






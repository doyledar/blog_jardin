/* ./src/pages/Admin
state : posts - uuid (identifiant d'un utilisateur authentifié)
on charge les posts et les catégories et on lance l'authentification avant d'accéder à l'ajout des posts */

import React, { Component } from 'react'
import Layout from '../components/Layout'
import CreatePost from '../pages/posts/CreatePost'
import firebase from 'firebase/app'
import 'firebase/auth'
import base, {firebaseApp} from '../config/base'
import Login from '../components/Login/index'


export const AuthContext = React.createContext(null);

class Admin extends Component{
    state = {
        posts : [],
        uid: null,
    }
 
        
    componentDidMount(){
        // chargement des posts - laiaison bi-directionnelle
        this.ref1 = base.syncState(`/posts`, {
            context: this,
            state: 'posts' 
        })

        //chargement des catégories - liaison unidirectionnelle (fb -> app)
        this.ref2 = base.bindToState(`/blogCategories`, {
            context: this,
            state: 'categories' 
            })
    }

    

    
    //quand le composant se ferme, on supprime la liaison avec firebase pour ne pas écraser des infos qui ne nous appartiennent pas
    componentWillUnmount(){
        base.removeBinding(this.ref1)
        
      }

      
    
    // on vérifie si l'utilisateur est authentifié

    handleAuth = async authData =>{
        this.setState({
            uid: authData.user.uid,
        })
    }

    // authentification facebook
    authenticate = () =>{
        const authProvider = new firebase.auth.FacebookAuthProvider

        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }


    // authentification login (mail) / pwd
    // connexion
    loginUser = (email, password) =>{
        const authProvider = new firebase.auth.EmailAuthProvider   
        
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.handleAuth)
    } 

    // logout
    signoutUser = () =>
        firebaseApp
            .auth().signOut()
    

    // création d'un post        
    createPost = post =>{
        const posts={ ...this.state.posts }
        //const next = this.state.posts.length
        // on ajoute un timestamp au post pour avoir une clé unique
        posts[`post-${Date.now()}`] = post
        //posts[next] = post
        this.setState({ posts })
    }
     
    

    render() {
        // si l'utilisateur n'est pas authentifié, on lui affiche le formulaire d'authentifcation
        if(!this.state.uid){
            return <Login authenticate= {this.authenticate} loginUser={this.loginUser}> </Login>
        }
        // si l'utilisateur est authentifié, on lui affiche le formulaire d'ajout d'un post
        return (
            <Layout>
                <CreatePost id={this.state.posts.length} 
                            posts={this.state.posts} 
                            categories={this.state.categories} 
                            createPost={this.createPost}>
                </CreatePost>                
                
            </Layout>
    
        );
    }
}



export default Admin;






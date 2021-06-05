import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Redirect } from 'react-router'
import base from '../../config/base'
import Select from '../../components/Select'



class CreatePost extends Component {

    constructor(props){
    super(props)
    const today = new Date()
    this.state ={
        blogTitle: '',
        blogText: '',
        author: '',
        postedOn: today.getDate() + '/' + (today.getMonth() + 1 ) + '/' + today.getFullYear(),
        slug: '',
        isAdmin: true,
        blogCategory: 'catégorie',
        id: props.id
    }
}
     
      
    
    handleChange = (e) => {
        console.log(e);
        e.target.id !== "blogTitle" ?
                this.setState({
             // on va chercher l'id de l'élément sur lequel il y a un chgt, on prend la valeur et on va la mettre dans le state
                [e.target.id]: e.target.value
                }) :
                this.setState({
                    slug : this.convertToSlug(e.target.value),
                    [e.target.id] : e.target.value
                })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        //base.removeBinding(this.ref)
        //this.state.categories = ''
        const post = { ...this.state }
        this.props.createPost(post)
        //reset du formulaire*/
        Object.keys(post).forEach(item => {
            post[item] = ''
        })
        this.setState({...post, isPushed: true}) 
    }

    logout = async() =>{
        console.log('déconnexion')
        await firebase.auth().signOut()
        this.setState({ uid:null, isAdmin: false, isPushed: false })
    }

    convertToSlug = (Text) => {
        return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
    }

    /* changeColor = (s) => {
        if(s.options[s.selectedIndex].value == "") {
            s.style.color = "#a9a9a9";
        }
         
        else {
            s.style.color = "black";
        }
    } */


    

    render() {
             
        
         const categories = this.props.categories
         const id = this.props.id
        //  console.log('l90 ' + categories)

        if(this.state.isAdmin){
            return (
                this.state.isPushed ? <Redirect to='/' push={true}/> :          
                <div className="container">
                    <form onSubmit={ this.handleSubmit } className="white">
                        <h5 className="grey-text text-darken-3">Ajouter un post</h5>
                        
                            <div className="input-field">
                                
                                <input type="hidden" value={id}  id="id" name="id"/>
                            </div>
                            <div className="input-field">
                               <input placeholder="auteur" value={this.state.author} type="text" id="author" name="author" onChange={ this.handleChange }/>
                            </div>
                            
                            
                            <select required className="browser-default cat" id="blogCategory" value={this.state.blogCategory} onChange={this.handleChange}>
                                    <option className= "catFirst" value= "">Sélectionnez une catégorie</option>    
                                    {categories && categories.map((categorie) =>(
                                    <option className= "catall" value={categorie}>{categorie}</option>
                                    ))
                                }   
                            </select>
                        

                            <div className="input-field">
                                <input placeholder="titre" value={this.state.blogTitle} type="text" id="blogTitle" name="blogTitle" onChange={ this.handleChange} />
                            </div>
                            <div className="input-field">
                                {/* <label htmlFor="slug">slug</label> */}
                                <input type="hidden" value={this.convertToSlug(this.state.blogTitle)} id="slug" name="slug"  />
                            </div>
                            <div className="input-field">
                                <textarea  placeholder="contenu" value={this.state.blogText} id="blogText" name="blogText" className="materialize-textarea" onChange={ this.handleChange } ></textarea>
                            </div>
                            <div className="input-field">
                                <textarea  placeholder="image" value={this.state.blogImage} id="blogImage" name="blogImage" className="materialize-textarea" onChange={ this.handleChange } ></textarea>
                            </div>
                            
                        <div className="actions">
                            <div className="input-filed">
                                <button className="btn red darken-3 z-depth-0">Add</button>
                            </div>
                            
                        </div>
                        
                    </form>
                    <div className="input-filed">
                        <button onClick={this.logout} className="logout btn red ligthen-1 z-depth-0">Logout</button>
                    </div>
                </div>
                      
            )
                
        }
        return (
            <Redirect to='/' push={true}/>
        )
    }
}



 /* const mapDispatchToProps = (dispatch) => {
    return {
        // au sein du composant, quand on fera props.createPost, on appellera l'action creator createPost à laquelle on passera 
        // le post qu'on a mis en paramètre.   L'action creator va retourner la fonction qui va mettre le dispatch en pause
        // faire un appel asynchrone et relancer le dispatch pour transmettre les data au reducer qui va mettre le state à jour
        createPost: (post) => dispatch(createPost(post))
    }
} */ 

export default CreatePost

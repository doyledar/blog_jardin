/* ./src/pages/posts/CreatePost
création d'un post puis redirection sur la racine du site (affichage des posts)
state: infos d'un post (titre, txte, auteur, ...) */

import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Redirect } from 'react-router'

class CreatePost extends Component {

    constructor(props){
    super(props)
    this.fileInput = React.createRef()
    const today = new Date()
    this.state ={
        blogTitle: '',
        blogText: '',
        author: '',
        postedOn: today.getDate() + '/' + (today.getMonth() + 1 ) + '/' + today.getFullYear(),
        slug: '',
        isAdmin: true,
        blogCategory: 'catégorie',
        id: props.id,
        blogImage: React.createRef()
    }
}
     
    // fonction utilisée dans le traitement du form pour l'upload de l'image
    encode = (data) => {
    const formData = new FormData()

    for (const key of Object.keys(data)){
        formData.append(key, data[key])
    }
    return formData
    }     
    
    // liaison bidirectionnelle entre les inputs et le state
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

    handleChangeImg = e =>{
        this.setState({blogImage : this.fileInput.current.files[0].name})
    } 

    // envoi du formulaire
    handleSubmit = e => {
        e.preventDefault();
        
        // upload de l'image 
        const form = e.target
        fetch("/", {
            method: "POST",
            body: this.encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .catch(error => alert(error))
        
        const post = { ...this.state }
        this.props.createPost(post)
        
        //reset du formulaire*/
        Object.keys(post).forEach(item => {
            post[item] = ''
        })
        this.setState({...post, isPushed: true}) 
    }

    // logout uitilisateur
    logout = async() =>{
        console.log('déconnexion')
        await firebase.auth().signOut()
        this.setState({ uid:null, isAdmin: false, isPushed: false })
    }

    // conversion du titre en slug
    convertToSlug = (Text) => {
        return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
    }

    // on met le nom du fichier dans le state pour l'envoyer à fb
    handleAttachment = e => {
        this.setState({ [e.target.name ] : e.target.files[0] })
    }

    

    render() {
             
        
         const categories = this.props.categories
         const id = this.props.id
        
        // si utilisateur authentifié
        if(this.state.isAdmin){
            return (
                this.state.isPushed ? <Redirect to='/' push={true}/> :          
                <div className="container">
                    <form onSubmit={ this.handleSubmit } className="white" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        
                        <h5 className="grey-text text-darken-3">Ajouter un post</h5>
                            
                            <input type="hidden" name="form-name" value="file-upload"/>
                            <p hidden>
                                <label>
                                    Don't fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange}/>
                                </label>
                            </p>
                            
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
                                <input type="hidden" value={this.convertToSlug(this.state.blogTitle)} id="slug" name="slug"  />
                            </div>
                            <div className="input-field">
                                <textarea  placeholder="contenu" value={this.state.blogText} id="blogText" name="blogText" className="materialize-textarea" onChange={ this.handleChange } ></textarea>
                            </div>
                            {/* input non contrôlé car sa valeur ne peut être sélectionnée que par l'utilisateur */}
                            <div className="input-field">
                                <input type="file"  ref={this.fileInput}  id="blogImage" className="" onChange={ this.handleChangeImg }/>
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


export default CreatePost

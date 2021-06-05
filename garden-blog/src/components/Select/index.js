import React, { Component } from 'react'
import base from '../../config/base'

export class Select extends Component {

    state = {
        categories: [],
        blogCategory: 'Potager'
    }


    componentDidMount(){
        this.ref = base.bindToState(`blogCategories`, {
        context: this,
        state: 'categories',
        asArray: true
        })
    }

    handleChange(e){
        this.setState({blogCategory: e.target.value})
    }
    
  


    render() {
        
        const categories = this.state.categories
        console.log(categories)
        console.log(this.state)
    
        return (
            <select className="browser-default" id='blogCategory' name='blogCategory' value={this.state.blogCategory} onchange={ this.handleChange }>
                <label htmlFor="blogCagegory">catégorie</label>
                {categories && categories.map((categorie, index) =>(
                    <option value={categorie}>{categorie}</option>
                ))
                }  
            </select>
        )
    }
}

export default Select

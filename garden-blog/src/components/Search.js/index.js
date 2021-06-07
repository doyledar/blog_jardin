import React from 'react';
import {useState, useEffect} from 'react'
import base from '../../config/base'


const Search = () => {
    const [datas, setDatas] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        this.ref = base.syncState(`/posts`, {
            context: this,
            state: 'posts',
            asArray: true,
        })
    }, [])

    // recherche
    const submitSearch = (e) => {
        e.preventDefault()
        alert(e.target.value)
    }

    
    return (
        <form onSubmit={ submitSearch }className="form-inline">
            <button type="submit" className="btn btn-default pull-right"><i class="glyphicon glyphicon-search"></i></button>
            <input type="text" className="form-control pull-left" placeholder="Search" />
        </form>
    );
}

export default Search;

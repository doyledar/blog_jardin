/* ./src/components/UI/Cards/Card
affichage d'un post dans une card */

import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'



const Card = ({ post }) => {

  console.log(post)
    return (
        
            <div className="hover-effect smoothie">
                <a href="#" className="smoothie">
                    <img src={`/assets/images/blog/${ post.blogImage }`} alt={post.blogImage} className="img-responsive smoothie" />
                </a>
                <div className="hover-overlay smoothie text-center">
                    <div className="vertical-align-bottom">
                        <h4>{ post.children }</h4>
                        <span className="item-category-span">{post.blogCategory }</span>
                    </div>
                </div>
                <div className="hover-caption dark-overlay smoothie text-center">
                    <div className="vertical-align-top">
                        <p className="mb20"><small>{ post.blogText.substr(0,800) }</small></p>
                    </div>
                    <div className="vertical-align-bottom">
                        {/* <NavLink post={post} key={post.id} to={`posts/${post.slug}`} className="btn btn-primary pull-right mb20">Read Now</NavLink> */}
                        <NavLink to={{
                            pathname: "posts/"+ post.slug,
                            postProp: {post} 
                        }}
                        className="btn btn-primary pull-right mb20">Read Now</NavLink>
                    </div>
                </div>
            </div>
      );
}

export default Card;



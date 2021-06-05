import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar'
import posts from '../../data/blog.json'

const Post = (props) => {
    console.log(props)
    const [post, setPost] = useState({})
    const [slug, setSlug] = useState('')

    // useEffect() sera appelée après chaque rendu (attention, il faut l'importer)
    // on utilise ceci à la place de devoir écrire le même code dans componentDidMount et componentDidUpdate
    useEffect(() => {
        const slug = props.match.params.slug 
        let post = props.location.postProp.post
        setPost(post)
        setSlug(slug)
    }, [post, props.match.params.slug])
    
    
    return (
         // améliorer les images avec un compossant image et src={require('../path/blogPostImages/' + props.Imagesarray[i])} après 
         // avoir construit ImagesArray dans Posts.js et boucler si nécessaire (cfr min 26 + video 2 dans index.js)     
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="owl-carousel remove-item-paddings mb60" data-items="1">
                            <div className="match-height nopaddingleftright">
                                <div className="hover-effect smoothie">
                                    <img src="assets/images/blog/blog-slider-1.jpeg" alt="Image" className="img-responsive smoothie" />
                                </div>
                            </div>
                            <div className="match-height nopaddingleftright">
                                <div className="hover-effect smoothie">
                                    <img src="assets/images/blog/blog-slider-2.jpeg" alt="Image" className="img-responsive smoothie" />
                                </div>
                            </div>
                        </div>
                        <h1 className="section-title mb20">{post.blogTitle}</h1>
                        <div className="item-metas text-muted mb30 white">
                            <span className="meta-item"><i className="pe-icon pe-7s-folder"></i> POSTED IN <span className="secondary-font">News</span></span>
                            <span className="meta-item"><i className="pe-icon pe-7s-ticket"></i> TAGS <span className="secondary-font">Photography</span></span>
                            <span className="meta-item"><i className="pe-icon pe-7s-user"></i> AUTHOR <span className="secondary-font">Danny Jones</span></span>
                            <span className="meta-item"><i className="pe-icon pe-7s-comment"></i> COMMENTS <span className="secondary-font">3</span></span>
                        </div>
                        <p className="lead">{post.blogText}</p>
                        <div className="mb90 clearfix"></div>

                        <div id="comments-list" className="wow fadeIn" data-wow-delay="0.2s">
                            <div className="mt60 mb50 single-section-title">
                                <h3>3 Comments</h3>
                            </div>
                            <div className="media">
                                <div className="pull-left">
                                    <img className="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/9" alt="" />
                                </div>
                                <div className="media-body">
                                    <div className="well">
                                        <div className="media-heading">
                                            <span className="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                                        </div>
                                        <p>Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.</p>
                                        <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                    </div>
                                    <div className="media">
                                        <div className="pull-left">
                                            <img className="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/5" alt="" />
                                        </div>
                                        <div className="media-body">
                                            <div className="well">
                                                <div className="media-heading">
                                                    <span className="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                                                </div>
                                                <p>Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the. Abode stuff noisy manor blush yet the far. Up colonel so between removed so do.</p>
                                                <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media mb60">
                                <div className="pull-left">
                                    <img className="avatar comment-avatar" src="http://lorempixel.com/g/80/80/people/6" alt="" />
                                </div>
                                <div className="media-body">
                                    <div className="well">
                                        <div className="media-heading">
                                            <span className="heading-font">Dave Evans</span>&nbsp; <small>30th Jan, 2015</small>
                                        </div>
                                        <p>Quitting informed concerns can men now. Projection to or up conviction uncommonly delightful continuing. In appetite ecstatic opinions hastened by handsome admitted.</p>
                                        <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                    </div>
                                </div>
                            </div>

                            <div id="comments-form" className="row wow fadeIn" data-wow-delay="0.2s">
                                <div className="col-md-12">
                                    <div className="mt60 mb50 single-section-title">
                                        <h3>Leave A Reply</h3>
                                    </div>
                                    <div id="message"></div>
                                    <form method="post" id="commentform" className="comment-form">
                                        <input type="text" className="form-control col-md-4 mb20" name="name" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." />
                                        <input type="text" className="form-control col-md-4 mb20" name="email" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." />
                                        <input type="text" className="form-control col-md-4 mb20" name="website" placeholder="Your URL *" id="website" required data-validation-required-message="Please enter your web address." />
                                        <textarea name="comments" className="form-control mb40" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                        <a className="btn btn-primary pull-right mt30" href="#">Reply</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Sidebar />

                </div>
            </div>
        </Layout>
        
    );
}

export default Post;

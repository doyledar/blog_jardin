import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home';
import ContactUS from './pages/ContactUS';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NewsList from './pages/news/NewsList';
import Post from './pages/posts/Post'
import News from './pages/news/News'
import CreatePost from './pages/posts/CreatePost'
import Admin from './pages/Admin'
import { AuthProvider } from './config/auth'


class App extends Component {

render() {
  
  return (
    <AuthProvider>
      <Router>

        <div>
          
          <Route exact path='/' component={ Home }/>
          <Route path='/contact' component={ ContactUS }/>
          <Route path='/about' component={ About }/>
          <Route path='/news' component={ NewsList }/>
          <Route path='/posts/:slug' component={ Post }/>
          <Route path='/news/:newsId' component={ News }/>
          <Route path='/createPost' component={ CreatePost }/>
          <Route path='/admin' component={ Admin }/>

        </div>

      </Router>
    </AuthProvider>
    
    
  );
}
}
export default App;

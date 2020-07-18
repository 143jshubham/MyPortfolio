import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/home/home'
import About from './components/about/about'
import Blog from './components/blogs/Blog'
import Resume from './components/resume/Resume'
import DragDrop from './components/dragdrop/DragDrop'
import Contact from './components/contact/email'
import Project from './components/project/Project'
function App() {
  return (
    <div className="App">
      <switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/blog" component={Blog} ></Route>
        <Route path="/resume" component={Resume} ></Route>
        <Route path="/dragdrop" component={DragDrop} ></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route path="/project" component={Project} ></Route>
        
      </switch>
      
      
    </div>
  );
}

export default App;

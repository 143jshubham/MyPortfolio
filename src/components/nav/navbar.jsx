import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Toggle from './toggle'

class navbar extends Component {
    state={
        isdisplay:false,
    }
    ToggleClick = () => {
        this.setState((prevState) => {
          return { isdisplay: !prevState.isdisplay };
        });
      };
    render() {
        let mainClasses="nav-header";
        if (this.state.isdisplay){
            mainClasses="is-visible";
        }
            
        return (
            
                <nav className={mainClasses}>
                    <Toggle toggleClick={this.ToggleClick} isdisplay={this.state.isdisplay}/>
                    <div className="nav-inner mt-5">
                        <div className="nav-img">
                        <img src="images/shu.jpeg" alt="Avatar" className="avatar" />
                        </div>
                        <ul className="nav-main">
                            <li >
                                <NavLink to="/" >
                                 Home
                                </NavLink>
                               
                            </li>
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/resume" >
                                Resume
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/blog" >
                                Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/project" >
                                Project
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" >
                                contact
                                </NavLink>
                            </li>
                            
                        </ul>
                        <p className="nav-copy"></p>
                    </div>
                </nav>
                
            
        )
    }
}
export default navbar
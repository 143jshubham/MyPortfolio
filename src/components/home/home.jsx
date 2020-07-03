import React, { Component } from 'react'
import Navbar from '../nav/navbar'

class home extends Component {
    render() {
        return (
            <div className="container-fluid home">
                <div className="row justify-content-center" style={{textAlign:"center"}}>
                    <div className="col-md-2">
                        <Navbar/>
                    </div>
                    <div className="col-md-10 col-10 description">
                        <h1>Hi , I am 
                         <span>Shubham Kumar Raj</span></h1>
                         <p style={{color:'#BDC3C7'}}>I am a frontend web developer. 
                         I can provide clean code and pixel perfect design.
                          I also make website more & more interactive with web animations.</p>
                        <ul>
                            <li><a><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a><i className="fa fa-medium" aria-hidden="true"></i></a></li>
                            <li><a><i className="fa fa-github" aria-hidden="true"></i></a></li>
                            <li><a><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                        
                        
                    </div>
                </div>
                
            </div>
        )
    }
}
export default home
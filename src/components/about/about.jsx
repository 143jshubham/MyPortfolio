import React, { Component } from 'react'
import Navbar from '../nav/navbar'

class about extends Component {
    render() {
        return (
            <div className="about">
                <div className="container-fluid">
           
                <h1 className="subhead">About Me</h1>
                <spam className="bighead" style={{color:'#fff'}}>About Me</spam>
                <div className="row  mt-2">
                    <div className="col-md-2">
                       <Navbar />
                    </div>
                    <div className="col-md-10 col-12" >
                            <div className="row description">
                                <div className="col-md-7 col-12">
                                        <img src="images/shu.jpeg"></img>
                                    
                                </div>
                                <div className="col-md-5 col-12">
                                    <h3>I am <span style={{color:'blue'}}>Shubham kumar Raj</span></h3>
                                    <p style={{color:'#BDC3C7',marginTop:20}}>I am a frontend web developer. I can provide clean code and pixel 
                                    perfect design. I also make website more & more interactive with web animations</p>
                                    <ul>
                                        <li style={{color:'#fff'}}><span style={{fontWeight:'bold'}}>Full Name</span> <span style={{marginLeft:8,marginRight:6}}>:</span> Shubham Kumar Raj</li>
                                        <li style={{color:'#fff'}}><span style={{fontWeight:'bold'}}>Age</span> <span style={{marginLeft:53,marginRight:6}}>:</span> 20</li>
                                        <li style={{color:'#fff'}}><span style={{fontWeight:'bold'}}>Nationality</span><span style={{marginLeft:3,marginRight:6}}>:</span>India</li>
                                        <li style={{color:'#fff'}}><span style={{fontWeight:'bold'}}>Language</span> <span style={{marginLeft:9,marginRight:6}}>:</span>English,Hindi</li>
                                        <li style={{color:'#fff'}}><span style={{fontWeight:'bold'}}>Address</span> <span style={{marginLeft:23,marginRight:6}}>:</span>Haldia,west Bengal ,India</li>
                                    </ul>
                                    <button type="button" class="btn btn-primary btn-lg mt-4">DOWNLORD CV</button>
                                </div>

                            </div>

                            <h1 className="subhead-service">Services</h1>
                            <div className="row mt-5 mb-5 service">
                                <div className="col-md-4 col-12">
                                <div className="card">
                                        <div className="card-body">
                                            <i className="fa fa-mobile fa-4x" aria-hidden="true" style={{color:'blue'}}></i>
                                            <h4 style={{color:'#fff',marginTop:5}}>Web Development</h4>
                                            <p style={{color:'#BDC3C7'}}>I am a frontend web developer. I can provide clean code and pixel 
                                            perfect design. I also make website more & more interactive with web animations</p>
                                        </div>
                                           
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                <div className="card">
                                        <div className="card-body">
                                            <i className="fa fa-mobile fa-4x" aria-hidden="true" style={{color:'blue'}}></i>
                                            <h4 style={{color:'#fff',marginTop:5}}>Data Analytics</h4>
                                            <p style={{color:'#BDC3C7'}}>I have worked on So many Real world Dataset .I can provide all 
                                            the analysis of datasets
                                           ,I have Worked on IPL dataset, Covid-19 dataset.</p>
                                        </div>
                                           
                                    </div>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <i className="fa fa-mobile fa-4x" aria-hidden="true" style={{color:'blue'}}></i>
                                            <h4 style={{color:'#fff',marginTop:5}}>Web Design</h4>
                                            <p style={{color:'#BDC3C7'}}>I am a frontend web developer. I can provide clean code and pixel 
                                            perfect design. I also make website more & more interactive with web animations</p>
                                        </div>
                                           
                                    </div>
                                </div>

                            </div>


                            <h1 className="subhead-reviews">Reviews</h1>
                            <div className="row mt-5 mb-5 reviews">
                                <div className="col-md-6 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p style={{color:'#BDC3C7'}}>I am a frontend web developer. I can provide clean code and pixel 
                                            perfect design. I also make website more & more interactive with web animations</p>
                                        </div>       
                                    </div>
                                    <h5 style={{marginTop:20,color:'#fff'}}>Nitish Singh</h5>
                                    <p style={{color:'#BDC3C7'}}>Founder at Campusx</p>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <p style={{color:'#BDC3C7'}}>Hi, 
                                                    I am Shipra saxena and I am a part of the Data Science Team at Analytics Vidhya.
                                                     We like your article and would like to add it to and feature
                                                      it on our Medium publication(https://medium.com/analytics-vidhya). </p>
                                        </div>      
                                    </div>
                                    <h5 style={{marginTop:20,color:'#fff'}}>Shipra saxena</h5>
                                    <p style={{color:'#BDC3C7'}}>Analytics Vidhya</p>
                                </div>
                                

                            </div>
                   
                   
                   
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
export default about
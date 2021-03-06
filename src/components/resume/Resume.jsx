import React, { Component } from 'react'
import Navbar from '../nav/navbar'
import Skill from './skill'


class Resume extends Component {
    render() {
        return (
          
            <div className="resume-area section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <Navbar />
                        </div>
                        <div className="col-md-9 mt-5">
                            <Skill />
                                <div className="sectiontitle mb-3" style={{marginTop:80}}>
                                    <h1 style={{color:'#fff',textTransform:"uppercase"}}>Resume</h1>
                                    <span className="bighead">resume</span>
                                </div>
                                <div className="working">
                                    <div className="smalltitle">
                                        <span className="mi-smalltitle-icon" style={{color:'#BDC3C7'}}>
                                        <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                                        </span>
                                        <h4 style={{color:'#fff',marginLeft:13}}>Working Experience</h4>
                                    </div>
                                    <div className="resume-wrapper">
                                            <div className="resume">
                                                <div className="resume-summary">
                                                    <h5 className="mi-resume-year" style={{color:'#BDC3C7'}}>2020 - Present</h5>
                                                </div>
                                                <div className="resume-details">
                                                    <h4 style={{color:'#037fff'}}>Frontend Web Developer</h4>
                                                    <h6 className="mi-resume-company text-white">CampusX</h6>
                                                    <p style={{color:'#BDC3C7'}}>
                                                    CampusX is an online education platform built to bridge the industry-academic skill gap
                                                    by providing quality online Mentorship programs in popular technologies.
                                                    
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="resume">
                                                <div className="resume-summary">
                                                    <h5 className="mi-resume-year" style={{color:'#BDC3C7'}}>2020 - Present</h5>
                                                </div>
                                                <div className="resume-details">
                                                    <h4 style={{color:'#037fff'}}>Technical Writer</h4>
                                                    <h6 className="mi-resume-company text-white">Analytics Vidhya Medium Publication</h6>
                                                    <p style={{color:'#BDC3C7'}}>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                                    Quas, magni mollitia, aspernatur consequatur accusamus vero
                                                    eum facere exercitationem velit suscipit ipsam placeat libero.
                                                    Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="resume">
                                                <div className="resume-summary">
                                                    <h5 className="mi-resume-year" style={{color:'#BDC3C7'}}>2020 - Present</h5>
                                                </div>
                                                <div className="resume-details">
                                                    <h4 style={{color:'#037fff'}}>Production Manager</h4>
                                                    <h6 className="mi-resume-company text-white">HSR Hi-Tech Solutions</h6>
                                                    <p style={{color:'#BDC3C7'}}>
                                                    Our seasoned team of technology experts works with you to provide technology 
                                                    solutions for all your business needs – both big and small. With proactive technology planning,
                                                     sustainable enterprise-level solutions, and monthly system health checks,
                                                      we deliver solutions that directly impact and improve your business
                                                    </p>
                                                </div>
                                            </div>
                                            
                                    </div>
                                        
                                </div>

                                <div className="education" style={{marginTop:100}}>
                                    <div className="smalltitle">
                                        <span className="mi-smalltitle-icon">
                                        <i class="fa fa-briefcase fa-2x" aria-hidden="true"></i>
                                        </span>
                                        <h4 style={{color:'#fff',marginLeft:13}}>Education  Qualification</h4>
                                    </div>
                                    <div className="resume-wrapper">
                                            <div className="resume" >
                                                <div className="resume-summary ">
                                                    <h5 className="mi-resume-year" style={{color:'#BDC3C7'}}>2018-2020</h5>
                                                </div>
                                                <div className="resume-details">
                                                    <h4 style={{color:'#037fff'}}>Btech (IT)</h4>
                                                    <h6 className="mi-resume-company text-white">Information Technology</h6>
                                                    <h6 className="mi-resume-company text-white">Haldia Institute Of Technology , Haldia, West Bengal </h6>
                                            
                                                </div>
                                            </div>
                                            <div className="resume">
                                                <div className="resume-summary">
                                                    <h5 className="mi-resume-year" style={{color:'#BDC3C7'}}>2015-2017</h5>
                                                </div>
                                                <div className="resume-details">
                                                    <h4 style={{color:'#037fff'}}>Intermediate</h4>
                                                    <h6 className="mi-resume-company text-white">PCM</h6>
                                                    <h6 className="mi-resume-company text-white">City College Bhagalpur ,Bhagalpur, Bihar </h6>
                                                    
                                                </div>
                                            </div>
                                            <div className="resume">
                                                <div className="resume-summary ">
                                                    <h5 className="mi-resume-year" style={{color:'#BDC3C7'}}>2015</h5>
                                                </div>
                                                <div className="resume-details">
                                                    <h4 style={{color:'#037fff'}}>High School</h4>
                                                    <h6 className="mi-resume-company text-white">DAV Public School , Mathurapur ,Bhagalpur,Bihar</h6>
                                                </div>
                                            </div>
                                    </div>
                                        
                                </div>

                         </div>
                   
                    </div>
                </div>
            </div>
        )
    }
}
export default Resume

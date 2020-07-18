import React, { Component } from 'react'
import Navbar from '../nav/navbar'

class email extends Component {

    render() {
        return (
            <div className=" container email mt-5">
            <div className="row">
                <div className="col-md-2">
                <Navbar />
                
                </div>
                <div className="col-md-9">
                    <div className="sectiontitle mb-2 mt-5">
                        <h1 style={{color:'#fff'}} className="subhead-reviews" >Contact Us</h1>
                        <spam className="bighead" style={{color:'#fff'}}>Contact Us</spam>
                    </div>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h4 style={{color:'#fff',fontSize:30}} >Get in Touch</h4>
                        <div  >
                            <form autocomplete="off" >
                                <div className="form-field">
                                    <label >Your Name</label>
                                    <input type="text" name="name" style={{color:'#BDC3C7',paddingLeft:15}}  />
                                </div>
                                <div className="form-field">
                                    <label>Your Email</label>
                                    <input type="email" name="email" style={{color:'#BDC3C7',paddingLeft:15}} />
                                </div>
                                <div className="form-field">
                                    <label>Your Message</label>
                                    <textarea   rows="5" cols="37" style={{color:'#BDC3C7',paddingTop:15,paddingLeft:10}} ></textarea>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg mt-4 ">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-12">
                        <div className="container">
                            <div className="row mt-4">
                                <div className="col-md-12 mt-5">
                                    <div className="card mail p-3 ">
                                        <i class="fa fa-envelope fa-3x" aria-hidden="true" style={{textAlign:"center",color:'#fff'}}></i>
                                        <a style={{textAlign:"center" ,marginTop:5,color:'#BDC3C7'}} href="mailto:143jshubham@gmail.com">Email Us</a>
                                    </div>
                                    
                                </div>
                                <div className="col-md-12 mt-5">
                                    <div className="card phone p-3 " >
                                        <i class="fa fa-map-marker fa-3x" aria-hidden="true" style={{textAlign:"center",color:'#fff'}}></i>
                                        <a style={{textAlign:"center" ,marginTop:5,color:'#BDC3C7'}} href="https://www.google.com/maps/place/Haldia+Institute+Of+Technology/@22.0505971,88.0700185,17z/data=!3m1!4b1!4m5!3m4!1s0x3a02f0bd0fcacc69:0x409c7ac845fe6280!8m2!3d22.0505921!4d88.0722126">Haldia,west Bengal</a>
                                    </div>
                                    
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
{/*    */}
export default email
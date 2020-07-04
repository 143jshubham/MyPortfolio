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
                    <div className="sectiontitle mb-5">
                        <h2 style={{color:'#fff',fontSize:38}}>Contact Us</h2>
                    </div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 style={{color:'#fff',fontSize:30}} >Get in Touch</h4>
                        <div  style={{width:'30rem'}}>
                            <form autocomplete="off" >
                                <div className="form-field">
                                    <label >Your Name</label>
                                    <input type="text" name="name" autoautocomplete="off" />
                                </div>
                                <div className="form-field">
                                    <label>Your Email</label>
                                    <input type="email" name="email" autocomplete="off" />
                                </div>
                                <div className="form-field">
                                    <label>Your Message</label>
                                    <textarea   rows="5" cols="57"></textarea>
                                </div>
                                <button type="button" class="btn btn-primary btn-lg mt-4 ">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>

                </div>
            </div>
            
            
                    

                
           
               

                
            </div>
        )
    }
}
export default email
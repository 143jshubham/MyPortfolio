import React, { Component } from 'react'

class skill extends Component {
    render() {
        return (
            <div className="skill">
                <div className="sectiontitle mb-3" style={{marginTop:80}}>
                    <h1 style={{color:'#fff',textTransform:"uppercase"}}>Skill</h1>
                    <span className="bighead">Skill</span>
                </div>
                <div className="row">
                    <div className="col-md-4 col-6">
                        <div className="skill-name html" style={{marginTop:-10}}>
                            <p style={{fontSize:17}}>Html <span style={{marginLeft:10,fontSize:20}}>90%</span></p>
                        </div>
                        <div className=" skill-name css" style={{marginTop:30}}>
                            <p style={{fontSize:17}}>CSS <span style={{marginLeft:10,fontSize:20}}>80%</span></p>
                        </div>
                        <div className="skill-name python" style={{marginTop:30}}>
                            <p style={{fontSize:17}}>Python <span style={{marginLeft:10,fontSize:20}}>75%</span></p>
                        </div>
                        <div className=" skill-name anlysis" style={{marginTop:30}}>
                            <p style={{fontSize:17}}>Data Anlysis<span style={{marginLeft:10,fontSize:20}}>80%</span></p>
                        </div>
                       
                       
                    </div>
                    <div className="col-md-2 "></div>
                    <div className="col-md-4 col-6 rightside">
                        <div className="skill-name javascript" style={{marginTop:-10}}>
                            <p style={{fontSize:17}}>javascript <span style={{marginLeft:5,fontSize:20}}>75%</span></p>
                        </div>
                        <div className=" skill-name react" style={{marginTop:28}}>
                            <p style={{fontSize:17}}>ReactJs <span style={{marginLeft:5,fontSize:20}}>80%</span></p>
                        </div>
                        <div className="skill-name dash" style={{marginTop:28}}>
                            <p style={{fontSize:17}}>Dash <span style={{marginLeft:5,fontSize:20}}>75%</span></p>
                        </div>
                        <div className=" skill-name flask" style={{marginTop:28}}>
                            <p style={{fontSize:17}}>Flask<span style={{marginLeft:5,fontSize:20}}>80%</span></p>
                        </div>
                       

                    </div>
                </div>
            </div>
        )
    }
}
export default skill
import React, { Component } from 'react'

class card extends Component {
    state={
        back: false,
    
    }
    handleClick = (e) => {
        this.setState((prevState) => {
          return { back: !prevState.back };
        });
      };
    
    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }
    render() {
        let toggleClasses = "card";
        if (this.state.back) {
        toggleClasses = "card is-flipped";
        }
        const {task}=this.props
        return (
            <div className="col-md-4">
                                <div className="scene" style={{width:110,height:90}}
                                    onDragOver={(e)=>this.onDragOver(e)}
                                    onDrop={(e)=>{this.onDrop(e, "r1")}}>
                                        <div className={toggleClasses} onClick={this.handleClick}  style={{width:110,height:105}} >
                                            <div className="card__face card__face--front" >
                                                <div 
                                                    onDragStart = {(e) => this.onDragStart(e, 1)}
                                                    draggable
                                                    className="draggable"
                                                    style = {{backgroundColor: "red"}}
                                                
                                                >
                                                    1
                                                </div>
                                            </div>
                                            <div className="card__face card__face--back">
                                                {tasks.r2}
                                            </div>
                                        </div>
                                       
                                </div>
                            </div>
        )
    }
}
export default card
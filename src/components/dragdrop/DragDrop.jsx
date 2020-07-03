import React, { Component } from 'react'

class DragDrop extends Component {
    state = {
        tasks: [
            {name:"1",category:"r1", bgcolor: "yellow"},
            {name:"2", category:"r2", bgcolor:"pink"},
            {name:"3", category:"r3", bgcolor:"skyblue"},
            {name:"4",category:"r4", bgcolor: "yellow"},
            {name:"5", category:"r5", bgcolor:"pink"},
            {name:"6", category:"r6", bgcolor:"skyblue"},
            {name:"7",category:"r7", bgcolor: "yellow"},
            {name:"8", category:"r8", bgcolor:"pink"},
            {name:"9", category:"r9", bgcolor:"skyblue"}
          ],
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
        var tasks = {
            r1: [],
            r2: [],
            r3: [],
            r4: [],
            r5: [],
            r6: [],
            r7: [],
            r8: [],
            r9: []
        }
       

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });
        let toggleClasses = "card";
        if (this.state.back) {
        toggleClasses = "card is-flipped";
        }
        console.log(this.state.back)
        return (
            <div className="container dragdrop mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                        <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r1")}}>
                                
                                {tasks.r1}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r2")}}>
                                
                                {tasks.r2}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r3")}}>
                                
                                {tasks.r3}
                            </div>
                            </div>
                            <div className="col-md-4" style={{marginLeft:0}}>
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r4")}}>
                                
                                {tasks.r4}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r5")}}>
                                
                                {tasks.r5}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r6")}}>
                                
                                {tasks.r6}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r7")}}>
                                
                                {tasks.r7}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r8")}}>
                                
                                {tasks.r8}
                            </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card" style={{width:110,height:100}}
                                onDragOver={(e)=>this.onDragOver(e)}
                                onDrop={(e)=>{this.onDrop(e, "r9")}}>
                                
                                {tasks.r9}
                            </div>
                            </div>
                        </div>
                           

                        </div>
                    </div>
                </div>
            
            
        );
    }
}
export default DragDrop
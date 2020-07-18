import React from 'react'

function ProjectCard({projects,page}) {
    if (page.pageno==1){
        projects=projects.slice(0,4)
    }
    if (page.pageno==2){
       projects=projects.slice(4,7)
    }
      return(
       projects.map((project,index)=>{
           return (
               <div className="col-md-6 col-12 mt-5 project" key={project.id}>
                   <div className="card">
                   <img src={project.img}/>
                       <p style={{color:'#BDC3C7',marginTop:-60,marginLeft:25}}>{project.p}</p> 
                      
                       <a className="github"  style={{color:'#BDC3C7',marginTop:-40,marginLeft:'80%',fontSize:22}} href={project.a}><i class="fa fa-github" aria-hidden="true"></i></a> 
                       <a  className="crome" style={{color:'#BDC3C7',marginTop:-33,marginLeft:'90%',fontSize:22}} href={project.a}><i class="fa fa-chrome" aria-hidden="true"></i></a>   
                      
               </div>
              
           </div>
           )
       })
      )
}
export default ProjectCard
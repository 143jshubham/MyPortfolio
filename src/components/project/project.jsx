import React, { useState  } from 'react'
import Navbar from '../nav/navbar'
import Projectcard from './ProjectCard'
import Pagination from './Pagination'

function Project () {
   
    const [projects, setprojects]=useState([
        {id:1,a:"https://medium.com/hsr-hi-tech-solutions/machine-learning-and-its-impact-on-our-generation-4c0dbc201c1a",p:'Meme Generator Using React',img:'images/machine.jpeg'},
        {id:2,a:"https://medium.com/analytics-vidhya/building-a-content-based-movie-recommendation-system-f7585ca35ed0",p:'Resume Maker Using React',img:'images/resume.jpeg'},
        {id:3,a:'https://medium.com/hsr-hi-tech-solutions/machine-learning-and-its-impact-on-our-generation-4c0dbc201c1a',p:'Project on Covid-19',img:'images/covid.png'},
        {id:4,a:"https://medium.com/analytics-vidhya/the-mathematics-behind-principle-component-analysis-feef17d87348",p:'Movie Recommendation System',img:'images/movie.png'},
        {id:5,a:"https://medium.com/analytics-vidhya/email-spam-classifier-using-naive-bayes-a51b8c6290d4",p:'Email-spam-Classifier',img:"images/email.png"},
      

    ]);

    const [page,setpage]=useState(
        {pageno:1
        }
    )
    function paginationClick1(){
        setpage({
            pageno:1
        })
    }
    function paginationClick2(){
        setpage({
            pageno:2
        })
    }
    

    
        return (
            <div className="container-fluid main-blog">
            <div className="row">
                <div className="col-md-3">
                    <Navbar />
                </div>
                <div className="col-md-9">
                 <h1 className="subhead-reviews">Projects</h1>
                 <spam className="bighead" style={{color:'#fff'}}>Projects</spam>
                            <div className="row mt-5 mb-5 blog">
                                <Projectcard projects={projects} page={page}/>
                            </div>
                        <Pagination paginationClick1={paginationClick1} paginationClick2={paginationClick2}/>
                        
                </div>
                
            </div>
            </div>
        )
    }

export default Project
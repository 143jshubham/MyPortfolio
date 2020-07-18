import React, { useState } from 'react'
import Navbar from '../nav/navbar'
import Blogcard from './Blogcard'
import Pagination from './Pagination'

function Blog () {
    const [blogs, setblogs]=useState([
        {id:1,a:"https://medium.com/hsr-hi-tech-solutions/machine-learning-and-its-impact-on-our-generation-4c0dbc201c1a",p:'Machine Learning',img:'images/machine.jpeg'},
        {id:2,a:"https://medium.com/analytics-vidhya/building-a-content-based-movie-recommendation-system-f7585ca35ed0",p:'Movie Recommendation System',img:'images/movie.png'},
        {id:3,a:'https://medium.com/hsr-hi-tech-solutions/machine-learning-and-its-impact-on-our-generation-4c0dbc201c1a',p:'Project on Covid-19',img:'images/covid.png'},
        {id:4,a:"https://medium.com/analytics-vidhya/the-mathematics-behind-principle-component-analysis-feef17d87348",p:'Principle Component Analysis',img:"images/maths.jpg"},
        {id:5,a:"https://medium.com/analytics-vidhya/email-spam-classifier-using-naive-bayes-a51b8c6290d4",p:'Email-spam-Classifier',img:"images/email.png"},
        {id:6,a:"https://medium.com/analytics-vidhya/implementing-pca-using-sklearn-a88987e5a127",p:'Implementing PCA using Sklearn',img:"images/pca.jpg"}

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
                 <h1 className="subhead-reviews">Recent Blogs</h1>
                 <spam className="bighead" style={{color:'#fff'}}>Recent Blogs</spam>
                            <div className="row mt-5 mb-5 blog">
                                <Blogcard blogs={blogs} page={page}/>
                            </div>
                        <Pagination paginationClick1={paginationClick1} paginationClick2={paginationClick2}/>
                        
                </div>
                
            </div>
            </div>
        )
    }

export default Blog

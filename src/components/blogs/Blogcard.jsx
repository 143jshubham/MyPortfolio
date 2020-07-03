import React from 'react'

function Blogcard ({blogs,page}) {
   
     if (page.pageno==1){
         blogs=blogs.slice(0,4)
     }
     if (page.pageno==2){
        blogs=blogs.slice(4,7)
     }
       return(
        blogs.map((blog,index)=>{
            return (
                <div className="col-md-6 col-12 mt-5" key={blog.id}>
                    <a href={blog.a}>
                    <div className="card">
                    <img src={blog.img}/>
                        <p style={{color:'#BDC3C7',marginTop:-60,marginLeft:25,fontSize:22}}>{blog.p}</p>   
                </div>
                </a>
            </div>
            )
        })
       )
    }

export default Blogcard

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
                <div className="col-md-6 col-12 mt-5 blog-card" key={blog.id}>
                  
                    <div className="card">
                    <img src={blog.img}/>
                        <p style={{color:'#BDC3C7',marginTop:-60,marginLeft:25}}>{blog.p}</p>   
                        <a className="github"  style={{color:'#BDC3C7',marginTop:-40,marginLeft:'90%',fontSize:22}} href={blog.a}><i class="fa fa-medium" aria-hidden="true"></i></a> 
                </div>
               
            </div>
            )
        })
       )
    }

export default Blogcard

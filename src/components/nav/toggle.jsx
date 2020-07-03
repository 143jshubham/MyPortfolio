import React from 'react'

 function toggle(props) {
     console.log(props.isdisplay)
     let iconClasses="fa fa-bars";
     if (props.isdisplay){
         iconClasses="fa fa-times";
     }
    return (
        <div>
             <button className="head-toggle" onClick={props.toggleClick}>
                <i className={iconClasses} aria-hidden="true" style={{color:'#fff'}}></i>
            </button>
        </div>
    )
}
export default toggle
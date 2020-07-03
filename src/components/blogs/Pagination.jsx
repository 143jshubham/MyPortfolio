import React, { Component } from 'react'

class Pagination extends Component {

    render() {
       
        return (
            <div className="pagination">
            <ul style={{color:'#fff'}}>
                <li><a onClick={this.props.paginationClick1}>1</a></li>
                <li><a onClick={this.props.paginationClick2}>2</a></li>
                
            </ul>
        </div>
        )
    }
}
export default Pagination


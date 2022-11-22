import React, { Component } from 'react'

export default class Pagination extends Component {
   // state={
    //    activePage: 1,
   //     totalPage:4
   // }
   handleClick =(page) => {
    this.props.paginateStudent(page)
   }
    render() {
        let paginationBar= []
        for (let index = 1; index <= this.props.totalPage; index++) {
            let PaginationItem = <div className={`pagination-item ${this.props.activePage === index ? 'active':''}`} key={index}>
                <button onClick={() =>this.handleClick(index)}>{index}</button>
            </div>
            paginationBar.push(PaginationItem)
            
        }
        return (
            <div className={'pagination-bar'}>
                 {paginationBar}
            </div>
             
        )
    }
}

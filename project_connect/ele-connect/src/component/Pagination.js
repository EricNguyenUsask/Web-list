import React, { Component } from 'react'

export default class Pagination extends Component {
    handleClick = (page) => {
        this.props.paginateStudent(page)
    }
    render() {
        const { activePage, totalPage } = this.props
        let paginationBar = []
        for (let index = 1; index <= totalPage; index++) {
            let PaginationItem = <div
                className={`pagination-item ${activePage === index ? 'active' : ''}`}
                key={index}
            >
                <button onClick={() => this.handleClick(index)}>{index}</button>
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

// 1 2 3 4 5 6 7 8 9 10
// trang hoat dong 2

//activePage = 2




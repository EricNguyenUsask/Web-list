import React, { Component } from 'react'

export default class StudentForm extends Component {
    state = {
        name: '',
        textSearch: ''
    }

    handleClickSearch = () => {
        this.props.searchStudent(this.state.textSearch)
    }
    handleChangeTextSearch = (e) => {
        this.setState({ textSearch: e.target.value });
        if (e.target.value === '') {
            this.props.searchStudent("")
        } else {
            this.props.searchStudent(e.target.value);
        }
    };
    render() {  
        return (
            <div className={'form'}>
                <input
                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                    placeholder='Nhập tên'
                />

                <button onClick={() => {
                    this.props.addNewStudent(this.state.name)
                }}>Thêm mới</button>

                <br></br>

                <input 
                    onChange={this.handleChangeTextSearch}
                    placeholder='Nhập tên tìm kiếm'
                />
                <button onClick={this.handleClickSearch}> Tìm kiếm </button>

            </div>
        )
    }
}
import React, { Component } from 'react'

export default class StudentTable extends Component {
    state = {
        name: '',
        id: null
    }

    handleClickDelete = (id) => {
        this.props.deleteStudent(id)
    }

    handleClickEdit = (item) => {
        this.setState({ name: item.name, id: item._id })
        // alert(`name: ${item.name} - id:${item.id}`)
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleClickUpdate = () => {
        this.props.updateStudent(this.state)
    }

    render() {
        let dataTable = []
        if (this.props.listStudent) {
            dataTable = this.props.listStudent.map((item, idx) => {
                return (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={() => this.handleClickDelete(item._id)}>
                                Xóa
                            </button>
                        </td>
                        <td>
                            <button onClick={() => this.handleClickEdit(item)} >
                                Sửa
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        return (
            <> 
            <div className={'form'}>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder='Sửa tên'

                />
                <button onClick={this.handleClickUpdate}>Cập nhật</button>
                <br></br>

            </div>

                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataTable}
                    </tbody>
                </table>
            </>
        )
    }
}

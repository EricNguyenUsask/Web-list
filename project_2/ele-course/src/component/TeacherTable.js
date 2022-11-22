import React, { Component } from 'react'
 
export default class TeacherTable extends Component {
    render() {
        let dataTable = []
        if (this.props.listTeacher) {
            dataTable = this.props.listTeacher.map((item, idx) => {
                return (
                    <tr key={idx}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                )
            })
        }
        return (
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
        )
    }
}
 
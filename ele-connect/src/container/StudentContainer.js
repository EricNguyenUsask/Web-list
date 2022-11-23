import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../action/studentAction'
import * as actions from '../action/deleteAction'
 
import StudentTable from '../component/StudentTable'
import StudentForm from '../component/StudentForm'
import Pagination from '../component/Pagination'

 
class StudentContainer extends Component {
    
    componentDidMount() {
    //    this.props.initLoad()    
       this.props.paginateStudent(1)
    }
    render() {
            return (
                <>
                    <StudentForm 
                    initLoad={this.props.initLoad}
                    addNewStudent={this.props.addNewStudent}
                    searchStudent={this.props.searchStudent} 
                    />

                    <StudentTable
                    listStudent={this.props.listStudent}
                    deleteStudent={this.props.deleteStudent}
                    updateStudent={this.props.updateStudent}                           
                    />

                    <Pagination
                    activePage={this.props.activePage}
                    totalPage={this.props.totalPage}
                    paginateStudent={this.props.paginateStudent}
                    />
                </>
            )
        }
    }
 
const mapDispatchToProps = (dispatch) => {
    // Khai báo các hàm phát action
    return {
        initLoad: function () {
            dispatch(action.getStudentRequest())
        },
        addNewStudent: function (dulieu) {
            dispatch(action.addStudentRequest(dulieu))
        },
        deleteStudent: function (id) {
            dispatch(actions.deleteStudentRequest(id))
        },
        updateStudent: function(dulieu) {
            dispatch(action.updateStudentRequest(dulieu))
        },
        searchStudent: function(textSearch) {
            dispatch(action.searchStudentRequest(textSearch))
        },
        paginateStudent: function(page){
            dispatch(action.paginateStudentRequest(page))
        }
    }
}

const mapStateToProps = (state) => {
    // state từ store
    return {
        listStudent: state.student.listStudent,
        isFetching: state.student.isFetching,
        activePage: state.student.activePage,
        totalPage: state.student.totalPage
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)

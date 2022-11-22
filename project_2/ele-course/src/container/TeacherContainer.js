import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTeacherRequest} from '../action/teacherAction'
import TeacherTable from '../component/TeacherTable'


 
class TeacherContainer extends Component {
    componentDidMount() {
        this.props.initLoad()
    }
    render() {
        return (
            <>
               
               {
                    this.props.isFetching
                        ? <>Loading</>
                        : <TeacherTable
                            listTeacher={this.props.listTeacher}
                            isFetching={this.props.isFetching}
                        />
                }
            </>
        )
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: function (){
            dispatch(getTeacherRequest())
        }
 }
}
    

 
const mapStateToProps = (state) => {
    return {
        listTeacher: state.teacher.listTeacher,
        isFetching: state.teacher.isFetching

    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TeacherContainer)
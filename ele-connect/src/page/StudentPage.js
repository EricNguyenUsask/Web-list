import React from 'react'
import StudentContainer from '../container/StudentContainer'
 
export default function StudentPage() {
    return (
        <div className={'page'}>
            <div className={'container'}>
                <h2 className={'page-title'}>Trang Học viên</h2>
                <StudentContainer />
            </div>
        </div>
    )
}
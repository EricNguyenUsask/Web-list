import React from 'react'
import TeacherContainer from '../container/TeacherContainer'
 
export default function TeacherPage() {
    return (
        <div className={'page'}>
            <div className={'container'}>
                <h2 className={'page-title'}>Trang Giáo Viên </h2>
                <TeacherContainer/>
            </div>
        </div>
    )
}
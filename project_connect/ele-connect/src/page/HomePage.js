import React from 'react'
import StudentContainer from '../container/StudentContainer'
 
export default function HomePage() {
    return (
        <div className={'page'}>
            <div className={'container'}>
                <h2 className={'page-title'}>Trang chủ</h2>
                <a href={'/student'}> Xem học viên </a>
                <StudentContainer />
            </div>
        </div>
    )
}

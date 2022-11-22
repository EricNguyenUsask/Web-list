import {LIMIT}  from '../constant'

function getStudent() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/tasks/'
        const config = { method: 'GET' }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}
 
function addStudent(newStudent) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/tasks/'
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newStudent)
        }
 
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function updateStudent(updateStudent) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/tasks/' + updateStudent.id
        const config = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateStudent)
        }
 
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function searchStudent(textSearch) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/tasks?q=${textSearch}`
        const config = {
            method: 'GET'
        }
 
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

function getPaginateStudent(page) {
    
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/tasks/paginate?page=${page}&limit=${LIMIT}`
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}



export {
    getStudent,
    addStudent,
    updateStudent,
    searchStudent,
    getPaginateStudent
}

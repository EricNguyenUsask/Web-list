function deleteStudent(studentId) {
    console.log("ation ",studentId);
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/students/' + studentId
        const config = {
            method: 'DELETE'
        }
 
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export default deleteStudent

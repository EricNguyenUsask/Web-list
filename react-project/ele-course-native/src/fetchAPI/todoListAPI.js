import {DOMAIN} from '../contant'

function getTaskAPI() {
    return new Promise((resolve, reject) => {
        const url = DOMAIN + '/tasks'
        const config = {
            method: 'GET'
        }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

export{
    getTaskAPI
};
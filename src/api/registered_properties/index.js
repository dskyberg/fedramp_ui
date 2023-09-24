import getData from '../core/getData'
import postData from '../core/postData'
import deleteData from '../core/deleteData'

const API_ROOT = "http://localhost:8080"


export function getRegisteredProperties() {
    return getData(API_ROOT + '/registered_property')
        .then(data => {
            console.log('getRegisteredProperties:', data);
            return data
        })

}

export function postRegisteredProperty(property) {
    return postData(API_ROOT + '/registered_property', property)
        .then(data => {
            console.log('postRegisteredProperties:', data);
            return data
        })

}

export function deleteRegisteredProperty(name) {
    console.log('Deleting', name)
    return deleteData(API_ROOT + '/registered_property/' + name)
        .then(data => {
            console.log('deleteRegisteredProperties:', data);
            return data
        })
}

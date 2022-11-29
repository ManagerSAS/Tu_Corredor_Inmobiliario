import Api from './Api'

const forms = '/api/v1/forms'

export default {
    async SendProperty( data ){
        const response = await Api.post( forms + '/SendProperty', data)
        return response.data
    },
    async SendContact( data ){
        const response = await Api.post( forms + '/SendContact', data)
        return response.data
    }, 
}
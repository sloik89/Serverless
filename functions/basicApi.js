const data = require('../assets/data')
exports.handler = async(event,context) => {
    return {
        headers:{
            'Access-Control-Allow-Orgin': '*'
        },
        statusCode:200,
        body:JSON.stringify(data)
    }
}
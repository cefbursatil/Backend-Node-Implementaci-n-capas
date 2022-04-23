const axios = require('axios')

axios.get('http://localhost:8000/api/productos', {
    params: {
        id: '1'
    },

})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => { console.log('END')})



axios.post('http://localhost:8000/api/cart', 
data, 
{
    params: {
        productos: [],
        userId: 1,
    },
    headers: {
        'Content-Type': 'application/json'
    }  
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => { console.log('END')})
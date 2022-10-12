const aplicacion = document.querySelector('.container')

const getUrl = new URLSearchParams(window.location.search)

id = getUrl.get('id')
console.log(id)

const API_URL = 'https://jsonplaceholder.typicode.com/users'

fetch(`${API_URL}/${id}`)
.then(res => res.json())
.then(data => console.log(data))

const idUserLogado = localStorage.getItem('userId')

console.log(idUserLogado)

async function getName(){

    const url = await fetch(`http://localhost:5080/usuario/${idUserLogado}`)
    const user = await url.json()

    console.log(user)

console.log(user.nome)
const username = document.getElementById('username')
username.textContent = user.nome
}

getName()
const button = document.getElementById('criarConta')

async function criarConta(){

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value


    if(email === '' || senha === '' || nome === ''){
        alert('Preencha os Campos Corretamente....')
    } else {

        const newConta = {
            nome,
            email,
            senha
        }

        const url = 'http://localhost:5080/usuario'
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newConta)
        }
        
        fetch(url, options)

        alert('User Cadastrado!!')
        window.location.href = '../screens/tela-home.html'

    }
}

window.onload = () => {
    button.addEventListener('click', criarConta)
}
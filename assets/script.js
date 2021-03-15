let email = document.querySelector('#email')
let emailOk = false

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Invalido'
        txtEmail.style.color = 'red'
        emailOk = false
    }else {
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function varificar_email() {
    input_text_um.value == input_text_dois.value ? mostrar_login() : alert("e-mails NÃO coincidem ! Tente novamente !")
}


function eu_quero() {
    if (input_text_um.value.indexOf("@") > input_text_um.value.indexOf(".com") || input_text_um.value == "" || input_text_um.value.indexOf("@") == "-1") {
        alert("Insira um e-mail válido, por favor !")
    } else if (input_text_um.value != input_text_dois.value) {
        alert("e-mails NÃO coincidem ! Tente novamente !")
    } else if (check_um.checked || check_dois.checked || check_tres.checked) {
        contato.style.display = "none";
        contato_resultado.style.display = "block";
    } else {
        alert("Selecione pelo menos uma das caixinhas !")
    }
}

function mostrar_cadastro() {
    inf_login.style.display = "none";
    inf_cadastro.style.display = "block";
}

function criar() {
    if (senha_cadastro.value.length < 8 || senha_cadastro.value.length > 16) {
        alert("Senhas devem possuir, no mínimo, 8 caracteres e no máximo 16.")
    } else if (senha_cadastro.value != confirme_senha.value) {
        alert("Senhas não conferem, tente novamente!")
    }
}

function entrar() {
    if (usuario.value == "" || senha_usuario.value == "") {
        alert("Preencha os campos corretamente.")
    } else if (usuario.value == "breno.freitas@bandtec.com.br" && senha_usuario.value == "breno123") {
        window.location.href = "homepage.html";
    } else {
        alert("E-mail ou senha incorretos, tente novamente !")
    }
}

function saiba_mais() {
    window.location.href = "#sec_sobre";
}

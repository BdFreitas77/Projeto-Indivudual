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
    usuario.value = '';
    senha_usuario.value = '';
}

function criar() {
    if (senha_cadastro.value.length < 8 || senha_cadastro.value.length > 16) {
        alert("Senhas devem possuir, no mínimo, 8 caracteres e no máximo 16.")
    } else if (senha_cadastro.value != confirme_senha.value) {
        alert("Senhas não conferem, tente novamente!")
    } else {
        inf_login.style.display = "block";
        inf_cadastro.style.display = "none";
    }
    email.value = '';
    senha_cadastro.value = '';
    confirme_senha.value = '';
}

function entrar() {
    if (usuario.value == "" || senha_usuario.value == "") {
        alert("Preencha os campos corretamente.")
    } else if (usuario.value == "breno.freitas@bandtec.com.br" && senha_usuario.value == "breno123") {
        window.location.href = "social.html";
    } else {
        alert("E-mail ou senha incorretos, tente novamente !")
    }
}

function saiba_mais() {
    window.location.href = "#sec_sobre";
}

function mostrar_perfil() {
    box.style.display = 'block'
    perfil.style.display = 'block';
    amigos.style.display = 'none';
    chat.style.display = 'none';
}



function mostrar_amigos() {
    box.style.display = 'block'
    perfil.style.display = 'none';
    amigos.style.display = 'block';
    // chat.style.display = 'none';
    mostrar_pessoas_online();
    mostrar_usuarios();
}


var aleatorio = parseInt(Math.random() * 501);

function mostrar_pessoas_online() {
    if (aleatorio > 100) {
        span_pessoas.style.color = "green";
    } else {
        span_pessoas.style.color = "red";
    }
    span_pessoas.innerHTML = `${aleatorio}`;
}

var aleatorio_dois = parseInt(Math.random() * 3 + 1)
// var pessoa_atual = aleatorio_dois;

function mostrar_usuarios() {
    if (aleatorio_dois == 1) {
        andreia.style.display = 'block';
        alisson.style.display = 'none';
        roberta.style.display = 'none';
    } else if (aleatorio_dois == 2) {
        andreia.style.display = 'none';
        alisson.style.display = 'block';
        roberta.style.display = 'none';
    } else if (aleatorio_dois == 3) {
        andreia.style.display = 'none';
        alisson.style.display = 'none';
        roberta.style.display = 'block';
        
    }
}

function mandar_pedido() {
    if (aleatorio_dois == 1) {
        alert('Pedido de amizade enviado para Andréia !')
    } else if (aleatorio_dois == 2) {
        alert('Pedido de amizade enviado para Alisson!')
    } else {
        alert('Pedido de amizade enviado para Roberta!')
    }
}

function proximo() {

    var gerar_novo = parseInt(Math.random() * 3 + 1);
    if (gerar_novo == aleatorio_dois) {
        while (gerar_novo == aleatorio_dois) {
            gerar_novo = parseInt(Math.random() * 3 + 1)
        }
        // alert(gerar_novo)
        if (gerar_novo == 1) {
            andreia.style.display = 'block';
            alisson.style.display = 'none';
            roberta.style.display = 'none';
            aleatorio_dois = 1;
        } else if (gerar_novo == 2) {
            andreia.style.display = 'none';
            alisson.style.display = 'block';
            roberta.style.display = 'none';
            aleatorio_dois = 2;
        } else if (gerar_novo == 3) {
            andreia.style.display = 'none';
            alisson.style.display = 'none';
            roberta.style.display = 'block';
            aleatorio_dois = 3;
        }
    } else if (gerar_novo == 1) {
        andreia.style.display = 'block';
        alisson.style.display = 'none';
        roberta.style.display = 'none';
        aleatorio_dois = 1;
    } else if (gerar_novo == 2) {
        andreia.style.display = 'none';
        alisson.style.display = 'block';
        roberta.style.display = 'none';
        aleatorio_dois = 2;
    } else if (gerar_novo == 3) {
        andreia.style.display = 'none';
        alisson.style.display = 'none';
        roberta.style.display = 'block';
        aleatorio_dois = 3;
    }
}









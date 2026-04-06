function validarLogin(){

    const mostrarMensagem = (divDaMensagem,mensagem) => {
        divDaMensagem.innerHTML = mensagem;
        divDaMensagem.style.display = "flex";

        setTimeout(() => {
            divDaMensagem.classList.remove("opacity-0", "-translate-x-full");
            divDaMensagem.classList.add("opacity-100", "translate-x-0");
        },20)

        setTimeout(() => {
            divDaMensagem.classList.remove("opacity-100", "translate-x-0");
            divDaMensagem.classList.add("opacity-0", "-translate-x-full");
            divDaMensagem.style.display = "hidden";
        }, 3000);
    }


    const validarEmail = (email) => {
        if(email.trim() === ""){
            throw new Error("Digite um e-mail");
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!regex.test(email)){
            throw new Error("E-mail inválido");
        }

    }

    const validarSenha = (senha) => {
        if(!senha){
            throw new Error("Digite uma senha")
        }

        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;

        if(!regex.test(senha)){
            throw new Error("Senha inválida!")
        }

    }

    const divErro = document.getElementById("divErro")
    const divSucesso = document.getElementById("divSucesso");
    const formulario = document.getElementById("form");
    formulario.addEventListener("submit", e => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value

        try{
            validarEmail(email);
            validarSenha(senha);
            mostrarMensagem(divSucesso,"Login válido")
            setTimeout(() => {
                window.location.href = "../index.html";
            },3000);
        }catch(err){
            mostrarMensagem(divErro,err.message)
        }
    })
}

validarLogin();
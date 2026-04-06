function site(){
    const criarTransicao = (mostrarTarefa) => {
        const criar = setTimeout(() => {
            mostrarTarefa.classList.remove('opacity-0', '-translate-y-full');
            mostrarTarefa.classList.add('opacity-100', 'translate-y-0');
        }, 20);
        return criar;
    }

    const criarTarefa = (mostrarTarefa, inputLista) => {
        const novaTarefa = document.createElement("div");
        novaTarefa.className = "flex mt-8 opacity-0 -translate-y-full transition-all duration-500 ease-out";
        novaTarefa.innerHTML = `<div class="bgCheck flex items-center gap-4 bg-white shadow-lg p-2 ml-10">
                        <div class="flex gap-4 pl-6 py-2 cursor-pointer">
                            <i class="bi bi-circle circuloLista"></i>
                            <div class="resultado border-none w-[1000px] focus:outline-none  focus:placeholder:text-[#70757a] placeholder:text-blue-500 hover:border border-[#70757a]">
                                <span class="textInput">${inputLista}</span>
                            </div>
                        </div>
                    </div>
                    <button class="removerTarefa bg-red-400 py-2 px-4 w-28 rounded-tr-md  rounded-br-md hover:bg-red-600 cursor-pointer transition-all duration-300 ease-in">Remover</button>`;

        mostrarTarefa.appendChild(novaTarefa);
        criarTransicao(novaTarefa);
        criarTransicao(mostrarTarefa);

        const circuloCheck = novaTarefa.querySelector(".circuloLista");
        const text = novaTarefa.querySelector(".textInput");
        const bgCheck = novaTarefa.querySelector(".bgCheck");
        const removerBtn = novaTarefa.querySelector(".removerTarefa");

        circuloCheck.addEventListener("click", () => {
            text.classList.toggle("line-through");
            bgCheck.classList.toggle("bg-white");
            bgCheck.classList.toggle("bg-green-100");
            bgCheck.classList.add("transition-all", "duration-200", "ease-in")
            circuloCheck.classList.toggle("bi-circle");
            circuloCheck.classList.toggle("bi-check-circle-fill");
        });

        removerBtn.addEventListener("click", () => {
            novaTarefa.remove();
        });
    }


    const limparInput = (input) => {
        input.value = "";
        input.focus();
    }

    const verificarInput = (valorInput,inputLista) => {
        if (valorInput.trim() === "" || valorInput.length < 4) {
            limparInput(inputLista);
            throw new Error("Digite uma tarefa válida");
        }
    }

    const removerDivError = (divErro) => {
        setTimeout(() => {
            divErro.classList.remove("opacity-100", "translate-x-0")
            divErro.classList.add("opacity-0", "-translate-x-full");
            divErro.style.display = "hidden";
        }, 2000);
    }

    const divErro = (divErro, error) => {
        divErro.style.display = "flex";
        divErro.innerHTML = `${error.message}`;
        setTimeout(() => {
            divErro.classList.remove('opacity-0', '-translate-x-full');
            divErro.classList.add('opacity-100', 'translate-x-0');
            removerDivError(divErro);
        }, 20);
    }


    const botaoAdicionarTarefa = document.getElementById("botaoAdicionar");
    const inputLista = document.getElementById("inputLista");
    inputLista.addEventListener("keypress", (e) => {
        if(e.key === "Enter"){
            botaoAdicionarTarefa.click();
        }
    })
    let valorDaLista = inputLista.value;
    const mostrarTarefa = document.getElementById("mostrarTarefa");
    const divError = document.getElementById("divErro");
    botaoAdicionarTarefa.addEventListener("click", (e) => {
        e.preventDefault();
        valorDaLista = inputLista.value
        try {
            verificarInput(valorDaLista,inputLista)
            criarTarefa(mostrarTarefa, valorDaLista);
            limparInput(inputLista);
        } catch (error) {
            divErro(divError, error);
        }
    });
    const bgMenu = document.querySelector(".bg-Menu");
    const removerElements = document.querySelectorAll(".remover");
    const fecharMenu = document.getElementById("fecharMenu");
    fecharMenu.addEventListener("click", e => {
        let elementos;
        for(elementos of removerElements){
            elementos.classList.toggle("hidden");
        }
        if(!elementos.classList.contains("hidden")){
            bgMenu.style.background = "white";
            bgMenu.classList.toggle("shadow-xl");
        }else{
            bgMenu.style.background = "transparent";
            bgMenu.classList.remove("shadow-xl");
        }
    })
}
site();

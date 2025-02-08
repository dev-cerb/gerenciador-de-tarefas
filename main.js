const textoTarefa = document.querySelector(".tarefaAdicionada");
const buttonAddTarefa = document.querySelector(".adicionarTarefa");
const tarefasEmAndamento = document.querySelector(".tarefasEmAndamento");
const tarefasConcluidas = document.querySelector(".tarefasConcluidas");
const limparTarefasConcluidas = document.querySelector(".limparTarefas");

buttonAddTarefa.addEventListener("click", eventoAdicionarTarefa)
limparTarefasConcluidas.addEventListener("click", eventoLimparTarefa);

function eventoAdicionarTarefa(){
    var tarefaContent = document.createElement("div");
    var tarefaCriada = document.createElement("li");
    var excluirTarefa = document.createElement("button");
    var editarTarefa = document.createElement("button");
    var concluirTarefa = document.createElement("button");

    tarefaCriada.innerHTML = textoTarefa.value;
    excluirTarefa.innerHTML = "Excluir";
    editarTarefa.innerHTML = "Editar";
    concluirTarefa.innerHTML = "Concluir"

    tarefaContent.classList.add("tarefaListada");
    excluirTarefa.classList.add("excluirTarefa");
    editarTarefa.classList.add("editarTarefa");

    excluirTarefa.addEventListener("click", eventoExcluirTarefa);
    editarTarefa.addEventListener("click", eventoEditarTarefa);
    concluirTarefa.addEventListener("click", eventoConcluirTarefa);

    tarefasEmAndamento.appendChild(tarefaContent);
    tarefaContent.appendChild(tarefaCriada);
    tarefaContent.appendChild(excluirTarefa);
    tarefaContent.appendChild(editarTarefa);
    tarefaContent.appendChild(concluirTarefa);
}

function eventoExcluirTarefa(){
    var buttonExcluir = event.target;
    var divTarefa = buttonExcluir.parentNode;
    divTarefa.remove();

}

function eventoEditarTarefa(){
    var editarButton = event.target;
    var div = editarButton.parentNode;
    var li = div.firstChild;
    
    var textoTarefaAlterada = prompt("Para qual nome deseja editar a tarefa");
    li.innerHTML = textoTarefaAlterada;
}

function eventoConcluirTarefa(){
    var concluirButton = event.target;
    var div = concluirButton.parentNode;

    tarefasConcluidas.appendChild(div);
    var buttonExcluir = div.querySelector(".excluirTarefa");
    var buttonEditar = div.querySelector(".editarTarefa");

    buttonExcluir.remove();
    buttonEditar.remove();
    concluirButton.remove();

}

function eventoLimparTarefa(){
    while(tarefasConcluidas.firstChild != null ){
        var tarefa = tarefasConcluidas.querySelector("div");
        tarefa.remove();
    }
}
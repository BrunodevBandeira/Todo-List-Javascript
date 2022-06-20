'use strict'

let banco = [
    {'tarefa':'estudar JS', 'status':''},
    {'tarefa':'netFlix', 'status':'checked'}
]

const criarItem = (tarefa, status, index) => {
    const item = document.createElement("label");
    item.classList.add("todo__item");
    item.innerHTML = `
        <input type="checkbox" ${status} data-index = ${index}>
        <div> ${tarefa} </div>
        <input type="button" value="X" data-index = ${index}>
    `
    document.getElementById("todoList").appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById("todoList");
    while(todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach((item, index) => {
        criarItem(item.tarefa, item.status, index)
    });
}


const inserirItem = (evento) => {
    const tecla = evento. key;
    const texto = evento.target.value;
    if(tecla === 'Enter') {
        banco.push({'tarefa': texto, 'status':''});
        atualizarTela();
        evento.target.value = ""; 
    }
}

const removerItem = (index) => {
    banco.splice(index, 1);
    atualizarTela()
}


const atualizarItem = (index) => {
    banco[index].status = banco[index].status === "" ? "checked" : " ";
    atualizarTela()
}

const clickItem = (evento) => {
    const elemento = evento.target;
    //console.log(elemento);
    if(elemento.type === "button") {
        const index = elemento.dataset.index;
        removerItem(index);
    } else if(elemento.type === "checkbox") {
        const index = elemento.dataset.index;
        atualizarItem(index);
    }
}


document.getElementById("newItem").addEventListener("keypress", inserirItem);
document.getElementById("todoList").addEventListener("click", clickItem);
atualizarTela();

//51:00


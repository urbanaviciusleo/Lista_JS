function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}


function EditarItem(){
    criar_textbox.readOnly = false
}
function SalvarItem(){
    criar_textbox.readOnly = true
    console.log(criar_textbox.readOnly)
}
function CriarBotaoSalvar(){
    const botao_salvar = document.createElement('button')
    botao_salvar.classList.add("btn", "btn-success")
    botao_salvar.type = "button"
    botao_salvar.innerHTML = "Salvar"
    botao_salvar.addEventListener("click", SalvarItem() )
    return botao_salvar
}

function CriarBotaoEdit(){
    const botao_edit = document.createElement('button')
    botao_edit.classList.add("btn", "btn-warning")
    botao_edit.type = "button"
    botao_edit.innerHTML = "  Edit  "
    botao_edit.addEventListener("click", EditarItem )
    
    return botao_edit
}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')
    criar_textbox = document.createElement('input')
    criar_textbox.type = 'text'
    criar_textbox.readOnly = true

    novo_item_lista = document.createElement("li")
    lista.appendChild(novo_item_lista)
    criar_textbox.value = valor.value

    novo_item_lista.appendChild(criar_textbox)
    novo_item_lista.appendChild(CriarBotaoEdit())
    novo_item_lista.appendChild(CriarBotaoSalvar())

    novo_item_lista.appendChild(CriarBotaoDelete())



    document.getElementById("item").value = ""
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}

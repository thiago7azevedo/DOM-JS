var listElement = document.querySelector('#app ul'); //variavel que liga ao MOD no html <ul> dentro da div app 
var inputElement = document.querySelector('#app input'); // variavel que liga o campo de input na div app
var buttonElement = document.querySelector('#app button'); // variavel que liga ao button no html na div app

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){ // função para renderizar a lista todos acima 
    listElement.innerHTML = ''; // remove todos itens da lista antes de passar nova lista para não duplicar quando for add novo valor
    for (todo of todos){ // função for each onde percorre cada elemento do array
        var todoElement = document.createElement('li'); // cria elemento <li> list
        var todoText = document.createTextNode(todo); // copia o texto de cada elemento do array para a variavel

        var linkElement = document.createElement('a'); //cria um link que vai servir para excluir algum item da lista
        linkElement.setAttribute('href', '#'); //precisa do href com a # para dar o sublinhado com o link
    
        var pos = todos.indexOf(todo); // joga pra variavel pos o valor da posição que o ítem foi lido
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');// se for clicado o link, passa a função deletar a partir da pos

        var linkText = document.createTextNode(' Excluir'); // o texto do link que acaba de ser criado

        linkElement.appendChild(linkText); //coloca dentro do link o texto que acaba de ser criado
        
        todoElement.appendChild(todoText); //adiciona a lista os stextos percorridos no array
        todoElement.appendChild(linkElement); //coloca dentro do todo element, ou seja, dentro do bloco de lista que vai para o HTML
        //também o botão de excluir, além do texto da lista.
        listElement.appendChild(todoElement);//adiciona a ul ou lista do HTML os elementos da li+ texto percorridos pelo for each
    }
}
renderTodos();

function addTodo() {
    var todoText = inputElement.value; //pega o valor digitado no input pelo usuario

    todos.push(todoText); // push para inserir o valor digitado pelo usuario ao final da lista ou array
    inputElement.value = ''; // limpa o campo de input para vazio antes de renderizar na tela a lista nova
    renderTodos(); // chama a função para renderizar novamente na tela a lista atualizadas
    saveToStorage();
}
buttonElement.onclick = addTodo; // ao clicar no botão ele recebe a adição do texto digitado

function deleteTodo(pos){ //deletar ítel da lista pela posição no array
    todos.splice(pos, 1); //splice recebe a posição e elimina o 1 item dela
    renderTodos(); //renderiza a lista atualizando a mesma
    saveToStorage(); // salva as alterações no storage
}
function saveToStorage(){//função para salvar as alterações mesmo que atualize a pagina
    localStorage.setItem('list_todos', JSON.stringify(todos));
    //variavel global localStorage - seta um valor list_todos e passa o valor de lista (todos)
    //JSON converte o vetor todos para uma string 
}
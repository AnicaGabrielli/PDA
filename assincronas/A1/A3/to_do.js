
document.getElementById("to_do").addEventListener('submit', function(event){

    event.preventDefault();

    const tarefa = document.getElementById('tarefa').value;

    let form_lista = document.createElement('form');
    form_lista.id = "lista";
    let div = document.createElement("div");
    form_lista.appendChild(div);

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'minhaLista';
    let label = document.createElement('label');
    label.id = 'label';
    label.textContent = tarefa;
    div.appendChild(checkbox);
    div.appendChild(label);
    document.body.appendChild(form_lista);
    document.getElementById("tarefa").value = " ";
});


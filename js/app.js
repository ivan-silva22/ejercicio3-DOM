let input = document.querySelector('input');
let btn = document.getElementById('btnAgregarTarea');
let ul = document.querySelector('ul');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let tarea = input.value;

    if(tarea !== ''){
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = tarea;
        p.className = "d-inline";

        li.appendChild(p);
        li.appendChild(btnEliminar())
        ul.appendChild(li);

        input.value = '';
    }
    
})

function btnEliminar(){
    let btn = document.createElement('button');
    btn.innerHTML = "X";
    btn.className = "btn btn-danger ms-5 mt-1";

    btn.addEventListener('click', (e) =>{
        let item = e.target.parentElement;
        ul.removeChild(item);
    });
    return btn;
}
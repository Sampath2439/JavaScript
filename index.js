const listContainer = document.getElementById("list-container");
const listInput = document.getElementById("input");

function addTask(){
    if(input.value === ''){
        alert("Please enter a task");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);


    }

    input.value = '';
    saveTask();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveTask();
    }

    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask();
    }
});


function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

loadTask(); 
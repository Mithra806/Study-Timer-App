const timerLink=document.getElementById("timer-link");
if(timerLink){
    timerLink.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href="./index.html";
    });
}

const calendarLink=document.getElementById("calendar-link");
if(calendarLink){
    calendarLink.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href="./calendar.html";
    });
}

const todoLink=document.getElementById("todo-link");
if(todoLink){
    todoLink.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href="./todo.html";
    });
}



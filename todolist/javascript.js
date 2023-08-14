const inputbox = document.getElementById('input-box');
const listitem = document.getElementById('listitems');


function addfunction(){
    if(inputbox.value === ''){
        alert("enter something")
    }
    else{
        const li = document.createElement('li');
        li.innerHTML=inputbox.value;
        listitem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    saveData();
}

listitem.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
});

function saveData(){
    localStorage.setItem("data",listitem.innerHTML);
}
function showlist(){
    listitem.innerHTML=localStorage.getItem("data");
}
showlist();
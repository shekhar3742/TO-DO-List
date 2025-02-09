let ctr = 1;
function deletetodo(index){
     const element = document.getElementById(index);
     element.parentNode.removeChild(element);
}

function addtodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newdivEL = document.createElement("div");
    newdivEL.setAttribute("id", ctr);
   
    newdivEL.innerHTML = "<div>" + value + "</div><button onclick='deletetodo(" + ctr + ")'>delete</button>";
    ctr = ctr + 1 ;
    document.querySelector("body").appendChild(newdivEL)
    
}
function addtodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newdivEL = document.createElement("div");
    newdivEL.innerHTML = value;

    document.querySelector("body").appendChild(newdivEL)
    
}
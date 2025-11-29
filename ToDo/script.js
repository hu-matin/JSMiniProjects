const entry = document.getElementById('entry');
const listContainer = document.getElementById('list-container');
const addButton = document.getElementById('add-btn');

addButton.addEventListener('click', ()=>{
    if (entry.value === '') {
        alert("You should enter something!")
    }
    else{
        let li = document.createElement('li')
        li.textContent = entry.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.textContent = '\u00d7';
        li.appendChild(span);
    }
    entry.value = '';
    reload();
})
listContainer.addEventListener('click', function(e){
    if(e.target.tagName == "LI") {
        e.target.classList.toggle('checked')
        reload();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        reload();
    }
}, false);
function reload(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showReload() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showReload()
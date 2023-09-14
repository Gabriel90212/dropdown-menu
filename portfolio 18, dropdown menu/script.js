function show(word){
    document.querySelector('.textBox').value = word;
}

let Dropdown = document.querySelector('.Dropdown');
Dropdown.onclick = function(){
    Dropdown.classList.toggle('active');
}
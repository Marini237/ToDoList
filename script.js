var addToDoButton = document.getElementById('addToDo');
var ToDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputfield');

addToDoButton.onclick = function(){
   // verifions si le champ est vide
    if(inputField.value != ""){
        // si il n est pas nul null créer un paragraphe 
        var paragraph = document.createElement('p');
    }
    //valorisons le paragraphe avec la valeur de l'input
    paragraph.innerText = inputField.value;

    //Stylisons le paragraphe
    paragraph.classList.add('paragraph-style');

    //ajoutons un paragraphe dans le dotolist
    ToDoContainer.appendChild(paragraph);

    //vider le champ
    inputField.value = "";

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('line-through');
    });

    //supprimer le paragraphe quand on double clique dessus
    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    });
};
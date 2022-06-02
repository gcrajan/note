// console.log("test");
showNotes();
let addBtn= document.getElementById("addBtn");
addBtn.addEventListener("click",function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes== null) {
        notesObj= [];
    } else {
        notesObj= JSON.parse(notes);
    }
    let myObj={
        title:addTitle.value,
        text:addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    addTitle.value="";
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes== null) {
        notesObj= [];
    } else {
        notesObj= JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
        html +=`
        <div class="noteCard my-3 mx-3" style="width: 28%;height: 20%;background: linear-gradient(to left top, rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.3));
            padding: 10px 15px;
            margin: 10px 15px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            justify:center;
            align-items: center;">
          <div class="card-body">
            <h5 class="card-title" style="font-family: 'Indie Flower', cursive;font-size:22px">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn" style="font-size: 10px;background: rgb(250, 15, 15);">Delete</button>
          </div>
        </div>
        `
    });
    let notesElements= document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElements.innerHTML=html;
    }
    else{
        notesElements.innerHTML=`<div style="margin:50px;">Hey, add some notes.</div>`
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes== null) {
        notesObj= [];
    } else {
        notesObj= JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
    let searchTxt= document.getElementById("searchTxt");
    searchTxt.addEventListener("input",function () {
        inputValue=searchTxt.value.toLowerCase();
        let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        let cardTxt=cardText.toLowerCase();
        if(cardTxt.includes(inputValue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        })
    });


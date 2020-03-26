class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  
  }
  
  createElement(title){
    let newNote = document.createElement('div');//creëert een div.
    let NewP = document.createElement("p"); //creëert een p.
    let NewLink = document.createElement("a");//creëert een a.
    newNote.setAttribute("class", "card");//class toegevoegd aan div.
    NewLink.setAttribute("class", "card-remove");//class toegevoegd aan a.
    NewLink.setAttribute("href", "#");//href toegevoegd aan a.
    NewLink.textContent = "remove";//tekstinhoud toegevoeg.
    NewP.innerHTML = title;
    newNote.appendChild(NewP);//NewP wordt toegevoegd in div met classes card.
    newNote.appendChild(NewLink);
    let removeBtn =NewLink;
    removeBtn.addEventListener('click', this.remove.bind(newNote));
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector('.notes').appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    let storeNotes = JSON.parse(localStorage.getItem("to-dos")) || [];
    storeNotes.push(this.title);
    localStorage.setItem("to-dos", JSON.stringify(storeNotes));
    //console.log(this.title);
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove();
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector('#btnAddNote');
    this.btnAdd.addEventListener("click",this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let text = document.querySelector('#txtAddNote').value;
   //alert('Button is clicked');
    let note = new Note(text);
    // HINT🤩
    note.add();
  note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();
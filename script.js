let notesContainer=document.querySelector('.notes-container');
let btn=document.querySelector('.btn');
let notes=document.querySelector('.input-box');

btn.addEventListener('click',()=>{
 let inputBox=document.createElement('p');
 let img=document.createElement('img');
    inputBox.className='input-box';
    inputBox.setAttribute('contenteditable',true);
    img.src='delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    saveData();
})



notesContainer.addEventListener("click",function(e){
        if(e.target.tagName=="IMG"){
            e.target.parentElement.remove();
            saveData(); // save current state of data
        }
         else if(e.target.tagName==="p"){
            notes=document.querySelectorAll(".input-box");
            notes.forEach(nt=>{
                nt.onkeyup=function(){ //automattically save when key is released
                    saveData(); //save data when user type in any of input box 
                }
            })
        } 
    })

   function  saveData(){
        localStorage.setItem("notes",notesContainer.innerHTML);
    }


    function display(){
        notesContainer.innerHTML=localStorage.getItem('notes');
        notes = document.querySelectorAll(".input-box");
            notes.forEach(nt => {
                nt.onkeyup = function() {
                    saveData(); // Automatically save when a key is released
                }
            });
    }
    display();
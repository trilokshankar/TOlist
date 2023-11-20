const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addtask(){
    if(inputBox.value===''){
        alert("Write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li); // Create a new li element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
inputBox.value='';
savedata();
}        
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    
});
inputBox.addEventListener("keypress",function(e){
        if (e.key === "Enter") {
            addtask();
            
        }
    });
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
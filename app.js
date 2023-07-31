let result = document.getElementById("count");
let counter = 0;

function add(){
    counter++;
    result.innerHTML = counter ;
   
   if(counter > 0){
       result.style.color = "green";
       }else if(counter==0){
           result.style.color = "black";
       }
}

function reset(){
    counter = 0;
    result.innerHTML = "0"
    result.style.color = "black";
}

function sub(){
    counter--;
    result.innerHTML = counter ;
    if(counter < 0){
       result.style.color = "red";
       }else if(counter==0){
           result.style.color = "black";
       }
}

const mounths = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
var mounthNow = 0;
console.log(mounthNow);
if (Date.now.getYear == 22){
    mounthNow = Date.now.getMounth;
}
console.log(mounthNow);
for(const element of mounths){
    var newDiv = document.createElement("DIV");
    newDiv.className = "nav-button";
        
    var id = "#" + element
    var newA = document.createElement("A");
    newA.setAttribute("href", id);
    newA.innerHTML = "<center>" + element +"</center>";

    newDiv.appendChild(newA);
    document.getElementById("sidebar").appendChild(newDiv);
    if(element == mounths[mounthNow]){
        document.getElementById(element).style.backgroundColor = "magenta";
        newDiv.style.backgroundColor = "purple";
        console.log("Check");
    }
    
}



   /* var newDiv = document.createElement("DIV");
    newDiv.className = "nav-button"
    newDiv.innerHTML = "<h1>Привет!</h1>";
    document.getElementById("sidebar").appendChild(newDiv);
    */
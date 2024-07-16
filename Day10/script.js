var color=document.getElementById("color")
var body=document.body

color.addEventListener("input",function(){
    localStorage.color=color.value
})
function chandBodyColor() {

    body.style.backgroundColor=localStorage.color
}

if(localStorage.color){
    chandBodyColor()
}

// ----------------



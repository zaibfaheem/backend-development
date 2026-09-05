let heading = document.getElementById("title");
let message = document.getElementById("message");
let button = document.getElementById("showBtn");
console.log(heading.textContent);
console.log(message.textContent);
button.onclick = function(){
    alert(heading.textContent);
};
document.write("Welcome to my DOM practice!");
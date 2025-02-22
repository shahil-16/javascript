let newBtn = document.createElement("button")
newBtn.innerHTML="Click Me";

let page =document.querySelector("body");
page.prepend(newBtn);

newBtn.style.backgroundColor="red" 
newBtn.style.color="white";
let div =document.querySelector("div");
console.log(div);

let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText="click me";

div.append(newBtn);     //ending
div.prepend(newBtn);  //statrting

div.before(newBtn);   //outside div
div.after(newBtn);   //outside div

let newHeading =document.createElement("h1")
newHeading.innerHTML="<i> Golden Signature </i>"

let hello = document.querySelector("body")
hello.prepend(newHeading);

let dele= document.querySelector("p")
dele.remove();
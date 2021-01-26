function addItem() {
   var content = document.getElementById("inputItemList").value;
   if( content !== "") {
      var element = document.createElement("li");
      element.classList.add("list-group-item");
      element.innerText = content;
      document.getElementById("list").appendChild(element);
      document.getElementById("inputItemList").value = "";
   }
}

function changeTitle() {
   var title = document.getElementById("inputTitle").value;

   document.getElementById("title").innerHTML = title;
}

function setTitle() {
   var title = document.getElementById("inputTitle").value;

   if(title !== "") {
      document.getElementById("title").innerHTML = title;
      document.getElementById("inputTitle").value = "";
   }
}

function changeUrlImg() {
   document.getElementById("image").src = "https://miro.medium.com/max/852/1*sSgZ71s6I_m4f37-7N7eYw.jpeg";
   document.getElementById("image").style.height = "400px"
}

function removeClass() {
   var element = document.getElementsByClassName("list-group-item");
   console.log(element);
   for (var i = 0; i < element.length; i+1) {
      element[i].classList.remove("list-group-item");
      console.log(element);
   }
}
function changeClass() {
   document.getElementById("body").className = "new-body"
   var btns = document.getElementsByClassName("btn btn-primary mt-3");
   for (var i = 0; i < btns.length; i+1) {
      btns[i].className = "btn btn-light mt-3";
   }
} 
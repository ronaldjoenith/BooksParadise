var popupoverlay=document.querySelector(".popupoverlay")
var popup=document.querySelector(".popup")
var popupbutton=document.getElementById("popup-button")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popup.style.display="block"
})

var cancelbook=document.getElementById("cancelpopup")
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popup.style.display="none"
})

var addbook=document.getElementById("addbook")
var bookbox=document.querySelector(".bookbox")
var booktitleinput=document.getElementById("booktitleinput")
var bookauthorinput=document.getElementById("bookauthorinput")
var bookdescriptioninput=document.getElementById("bookdescriptioninput")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletecontent(event)">delete</button>`
    bookbox.append(div)
    popupoverlay.style.display="none"
    popup.style.display="none"
})

function deletecontent(event)
{
event.target.parentElement.remove()
}
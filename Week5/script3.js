function myClickEvent() {
 var element = document.getElementById('circle');
 element.style.opacity= 0.5;
}
function myLoadEvent() {
 var element = document.getElementById('circle');
 element.addEventListener('click', myClickEvent);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
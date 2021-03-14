function Mykeydown() {
	 var element = document.getElementById('circle');
	 var positionLeft = element.offsetLeft;
	 element.style.left = positionLeft -10 + 'px';
}

function myLoadEvent() {
 element.addEventListener('keydown', Mykeydown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
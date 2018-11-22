let btn = document.getElementById("menu-btn");
let ava = document.getElementById("avatar");
let menu = document.getElementById("fullmenu");
btn.addEventListener("click", function(){
	if(btn.classList.contains('btn-active')){
		btn.classList.remove('btn-active');
		menu.style.display="none";

	} else {
		btn.classList.add("btn-active")
		menu.style.display="block";
	}
})
window.onscroll=function(){
	if(window.pageYOffset>100){
		document.getElementsByClassName("java")[0].style.width="0%";
		document.getElementsByClassName("html-css")[0].style.width="0%";
		document.getElementsByClassName("js")[0].style.width="0%";
		document.getElementsByClassName("eng")[0].style.width="0%";
		document.getElementsByClassName("flexbox")[0].style.width="0%";
		document.getElementsByClassName("cssgrid")[0].style.width="0%";
		ava.style.opacity=(0.4);
		ava.style.filter  = 'blur(0)';
	}
	if(window.pageYOffset>300){
		ava.style.opacity=(0.35);
	}
	if(window.pageYOffset>500){
		ava.style.opacity=(0.3);
		ava.style.filter  = 'blur(10px)';

	}
	if(window.pageYOffset>700){
		ava.style.opacity=(0.25);
		ava.style.filter  = 'blur(15px)';
		document.getElementsByClassName("java")[0].style.width="20%";
		document.getElementsByClassName("html-css")[0].style.width="70%";
		document.getElementsByClassName("js")[0].style.width="60%";
		document.getElementsByClassName("eng")[0].style.width="30%";
		document.getElementsByClassName("flexbox")[0].style.width="60%";
		document.getElementsByClassName("cssgrid")[0].style.width="70%";
	}
	if(window.pageYOffset>1000){
		ava.style.filter  = 'blur(20px)';
		
	}
}
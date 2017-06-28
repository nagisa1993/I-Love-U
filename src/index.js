import './stylesheets/_heart.scss';

window.onload = () =>{
  window.addEventListener('click', (e) => {
  	let x = e.clientX, y = e.clientY,
  		heart = document.createElement("div"); 

  	heart.className = "heart";
	heart.style.opacity = Math.random();
  	heart.style.left = x + 'px';
	heart.style.top = y + 'px';
  	document.body.appendChild(heart);
  });
};
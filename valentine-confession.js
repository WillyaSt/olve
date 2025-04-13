const musica = document.getElementById("musica-fundo");

$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({ "backgroundColor": "#f48fb1" }, 2000);

		musica.currentTime = 50;
		musica.play();

		soltaCoracoes();


		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({ "backgroundColor": "#fce4ec" }, 2000);

		musica.pause();
		musica.currentTime = 0;

		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});
function soltaCoracoes() {
	for (let i = 0; i < 25; i++) {
	  const coracao = document.createElement('div');
	  coracao.innerText = '❤️';
	  coracao.classList.add('coraçao-solto');
	  coracao.style.left = Math.random() * 100 + 'vw';
	  coracao.style.fontSize = (Math.random() * 20 + 20) + 'px';
	  document.body.appendChild(coracao);
  
	  setTimeout(() => coracao.remove(), 3000);
	}
  }
  function coracoesContinuos() {
	setInterval(() => {
	  const coracao = document.createElement('div');
	  coracao.innerText = '❤️';
	  coracao.classList.add('coraçao-solto');
	  coracao.style.left = Math.random() * 100 + 'vw';
	  coracao.style.fontSize = (Math.random() * 20 + 20) + 'px';
	  document.body.appendChild(coracao);
	  setTimeout(() => coracao.remove(), 4000);
	}, 300); 
  }
  coracoesContinuos();
  function mostrarTextoVersiculo() {
	const texto = document.getElementById("texto-versiculo");
	texto.classList.toggle("show");
  }
  const frase = "Clique no coração";
let i = 0;
function digitar() {
	if (i < frase.length) {
		document.querySelector(".instruction").innerHTML += frase.charAt(i);
		i++;
		setTimeout(digitar, 60);
	}
}
digitar();

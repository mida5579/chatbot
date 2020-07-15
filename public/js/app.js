// Fiare afficher le blocdu chatbot au clic 
var btn = document.getElementById("btn");
var chatBloc = document.getElementById("chatBloc");
var btnFermer = document.getElementById("btnFermer");

btn.addEventListener('click', function () {
    chatBloc.classList.toggle('chatBlocView');
});

btnFermer.addEventListener('click', function(){
    chatBloc.classList.remove("chatBlocView");
});
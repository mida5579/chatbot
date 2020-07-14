



// Faire Afficher l'historique de la conversation au clic 
var converstaion = document.querySelectorAll("#conversation");
var allConversation = document.getElementById("allConversation");
var conversationClose = document.getElementById("conversationClose");


function modals(){
    converstaion.forEach((convers) => {
        convers.addEventListener('click', function () {
            allConversation.classList.add('conversationView');
        });
    })


    conversationClose.addEventListener('click', function () {
        allConversation.classList.remove('conversationView');
    });
}



function graphic(){
    var ctx = document.getElementById('test').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            datasets: [{
                label: 'nombre de vue de la semaine',
                data: [0, 3, 1, 5, 2, 5, 7],
                fill: false,
                backgroundColor: 'rgba(255, 200, 132, 0.2)',
                borderColor: 'rgba(255, 200, 142, 1)',
                borderWidth: 1
            }]
        }
    });
}

function slide() {
    const slidepage = document.querySelector('.slide');
    const nextBtn = document.querySelector('.next-0');
    const nextBtnFirst = document.querySelectorAll('.next-1');
    const nextBtnSec = document.querySelectorAll('.next-2');
    var activeColor = document.querySelector('#active');

    nextBtn.addEventListener('click', function () {
        slidepage.style.marginTop = '0%';
    });

    nextBtnFirst.forEach((nextBtnTwo) => {
        nextBtnTwo.addEventListener('click', function () {
            slidepage.style.marginTop = '-32%';
        });
    });

    nextBtnSec.forEach((nextBtnSeconde) => {
        nextBtnSeconde.addEventListener('click', function () {
            slidepage.style.marginTop = '-64%';
        });
    });

}

if (window.location.pathname == "/public/pages/accueilAdmin.html"){
    modals();
    graphic();
}else{
    slide();
}





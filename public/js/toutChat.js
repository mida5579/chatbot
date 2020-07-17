document.querySelector("#tout_chat").onclick = function() {
    if (window.getComputedStyle(document.querySelector('#contenu_chat')).display=='none'){
        document.querySelector("#contenu_chat").style.display="block";
    } else {
            document.querySelector("#contenu_chat").style.display="none";
            }
}
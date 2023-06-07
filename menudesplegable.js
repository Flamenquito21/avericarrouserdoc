// function abrirYcerrarDesplegable(){
//     var desplegable=document.getElementById("desplegable");
//     if(desplegable.className="menu-desplegable-cerrado"){
//         desplegable.classList.remove("menu-desplegable-cerrado");
//         desplegable.classList.add("menu-desplegable-abierto");
//     }else{
//         desplegable.classList.remove("menu-desplegable-abierto");
//         desplegable.classList.add("menu-desplegable-cerrado");
//     }


// }

function abrirYcerrarDesplegable() {
    var desplegable = document.getElementById("desplegable");
    var left = window.getComputedStyle(desplegable).getPropertyValue('left');

    console.log(left);
    console.log(typeof (left));
    if (left < "0px") {
        desplegable.classList.remove('menu-desplegable-cerrado');
        desplegable.classList.add('menu-desplegable-abierto');
    }
    else {
        desplegable.classList.remove('menu-desplegable-abierto');
        desplegable.classList.add('menu-desplegable-cerrado');
        // menuDesplegable.innerText = "menu-desplegable-cerrado";
    }


}
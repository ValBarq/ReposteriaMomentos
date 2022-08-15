window.onload = specialInicial;
function specialInicial(){
 
let menuDatos = document.getElementById("row-menu-datos");
let menuImg = document.getElementById("row-menu-img");
let urlImagen = "";
let httmlDinamico = "";

urlImagen = "assets/img/Menu/corona.jpg";
httmlDinamico += "<h3>Corona</h3>";
httmlDinamico += '<p>Una deliciosa rosca de hojaldre con diversos rellenos.  </p>';
httmlDinamico += '<p>Decide tu relleno favorito entre Pechuga de pollo con queso o bien carne de res desmechada.  </p>';

menuDatos.innerHTML = "";
menuDatos.innerHTML = httmlDinamico;
menuImg.src = "";
menuImg.src = urlImagen;
agregarElementos();

}
function menuSaladosDom(){
    let  menuDatos = document.getElementById("row-menu-datos");
    let menuImg = document.getElementById("row-menu-img");
    let tab = parseInt(this.name) ;
    let urlImagen = "";
    let httmlDinamico = "";
    
    agregarElementos();
    
    switch (tab) {
        case 1:
            urlImagen = "assets/img/Menu/corona.jpg";
            httmlDinamico += "<h3>Corona</h3>";
            httmlDinamico += '<p>Una deliciosa rosca de hojaldre con diversos rellenos.  </p>';
            httmlDinamico += '<p>Decide tu relleno favorito entre Pechuga de pollo con queso o bien carne de res desmechada.  </p>';
            break;
        case 2:
            urlImagen = "assets/img/Menu/enrollados.jpg";
            httmlDinamico += "<h3>Enrollados</h3>";
            httmlDinamico += '<p>¿Queréis un bocadito? un enrollado es para vos. </p>';
            httmlDinamico += "<p>Rellenos de Jamón, queso blanco, chile dulce con una cobertura de ajonjolí.</p>";
            break;
        case 3:
            urlImagen = "assets/img/Menu/palitosQue.jpg";
            httmlDinamico += "<h3>Palitos de queso</h3>";
            httmlDinamico += '<p>Los clásicos que combinan con un buen café.  </p>';
            break;
        case 4:
            urlImagen = "assets/img/Menu/Enchiladas.jpg";
            httmlDinamico += " <h3>Enchiladas</h3>";
            httmlDinamico += '<p>De los deliciosos platillos de la casa, las enchiladas fueron creadas con un relleno delicioso de picadillo de papa y carne que comer una no bastará.</p>';
            break;
        case 5:
            urlImagen = "assets/img/Menu/pastepollo.jpg";
            httmlDinamico += " <h3>Pastel de pollo</h3>";
            httmlDinamico += '<p>Sabrosos pasteles rellenos de nuestra receta única que combina el sabor del pollo con nuestras más selectas especias. </p>';
            break;
        case 6:
            urlImagen = "assets/img/Menu/pañuelo.jpg";
            httmlDinamico += "<h3>Pañuelos</h3>";
            httmlDinamico += '<p>Los clásicos que combinan con un buen café.  </p>';
            break;
        case 7:
            urlImagen = "assets/img/Menu/costilla.jpg";
            httmlDinamico += " <h3>Costillas</h3>";
            httmlDinamico += '<p>De los deliciosos platillos de la casa, las enchiladas fueron creadas con un relleno delicioso de picadillo de papa y carne que comer una no bastará.</p>';
            break;
        case 8:
            urlImagen = "assets/img/Menu/cachos.jpg";
            httmlDinamico += " <h3>Cachos</h3>";
            httmlDinamico += '<p>Sabrosos pasteles rellenos de nuestra receta única que combina el sabor del pollo con nuestras más selectas especias. </p>';
            break;
    }
    
    menuDatos.innerHTML = "";
    menuDatos.innerHTML = httmlDinamico;
    menuImg.src = "";
    menuImg.src = urlImagen;
    
    }
    //Agregar elementos
function agregarElementos(){
    
    let listItems = document.getElementsByClassName("menu-listitem");
    for (const item in listItems) {
        if (listItems[item].nodeName==="A") {
            listItems[item].onclick =  menuSaladosDom;
            
        }
    }
}
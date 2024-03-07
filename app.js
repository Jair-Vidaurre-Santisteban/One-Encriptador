let cajaTextoIngresado = document.querySelector("#textoIngresado");
let cajaTextoMostrado = document.querySelector("#textoMostrado");
let containerMostrarImg = document.querySelector("#container_mostrarImg");
let containerMostrarTexto = document.querySelector("#container_mostrarTexto");


function encriptar() {
    let textoEncriptado = "";

    if (validarTextoVacio()) {
        for (let i = 0; i < cajaTextoIngresado.value.length; i++) {
            let nuevaLetra = "";
            switch (cajaTextoIngresado.value.charAt(i)) {
                case 'a':
                    nuevaLetra = "ai";
                    break;
                case 'e':
                    nuevaLetra = "enter";
                    break;
                case 'i':
                    nuevaLetra = "imes";
                    break;
                case 'o':
                    nuevaLetra = "ober";
                    break;
                case 'u':
                    nuevaLetra = "ufat";
                    break;
            
                default:
                    nuevaLetra = cajaTextoIngresado.value.charAt(i);
                    break;
            }

            textoEncriptado += nuevaLetra;

        }
        cajaTextoMostrado.innerHTML=textoEncriptado;
    }else{
        console.log('no hay texto');
        
    }   
}
function desencriptar() {
    
    if(validarTextoVacio()){
        let textoModificado = cajaTextoIngresado.value.replace(/ufat/g, "u");
        textoModificado = textoModificado.replace(/ober/g, "o");
        textoModificado = textoModificado.replace(/imes/g, "i");
        textoModificado = textoModificado.replace(/enter/g, "e");
        textoModificado = textoModificado.replace(/ai/g, "a");
        cajaTextoMostrado.innerHTML=textoModificado;
    }
    
}

function validarTextoVacio() {
    if (cajaTextoIngresado.value == "") {
        containerMostrarImg.style.display ='block';
        containerMostrarTexto.style.display ='none';
        return false;
    }else{        
        


        containerMostrarImg.style.display ='none';
        containerMostrarTexto.style.display ='block';

        return true;
    }
}

 function copiar() {
    let texto = cajaTextoMostrado.value;
    navigator.clipboard.writeText(texto);
    return
}

function soloMinusculas() {

    let texto = document.getElementById("textoIngresado");
    let valor = texto.value;
    let ultimoCaracter = valor.charAt(valor.length - 1);

    if (/[A-Z]/.test(ultimoCaracter)) {
        alert("¡No se permiten letras mayúsculas!");
        texto.value = valor.slice(0, -1); 
    }

    if (/[áéíóúÁÉÍÓÚ]/.test(ultimoCaracter)) {
        alert("¡No se permiten tildes!");
        texto.value = valor.slice(0, -1); 
        
    } 
}
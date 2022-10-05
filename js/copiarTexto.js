const botonCopiar = document.querySelector("#copiar-texto");

botonCopiar.addEventListener("click",function(){
    const mensajeCodificado = document.querySelector("#mensaje-codificado");
    navigator.clipboard.writeText(mensajeCodificado.innerHTML);
});



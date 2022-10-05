const botonDesencriptar = document.querySelector("#boton-desencriptar");

botonDesencriptar.addEventListener("click",function(){
    const imagenEmpty = document.querySelector("#imagen-empty");
    imagenEmpty.classList.add("hide-element");

    const ingresaTexto = document.querySelector("#ingresa-texto");
    ingresaTexto.classList.add("hide-element");

    const textoATraducir = document.querySelector("#texto-a-traducir").value;
    const mensajeCodificado = document.querySelector("#mensaje-codificado");

    const alerta = document.querySelector("#alerta");
    if(textoATraducir.length <=0){
        document.querySelector("#label-alert").innerHTML = "El campo no puede esta vacio."
        alerta.classList.replace("hide-element","show-element");
        setTimeout(cerrarAlertF, 5000);
    }else if (/[^a-z\s]/g.test(textoATraducir) == true){
        document.querySelector("#label-alert").innerHTML = "Solo letras minusculas y sin acentos."
        alerta.classList.replace("hide-element","show-element");
        setTimeout(cerrarAlertF, 5000);
    }else{
        let codificarE = textoATraducir.replace("enter","e");
        let codificarI = codificarE.replace("imes","i");
        let codificarA = codificarI.replace("ai","a");
        let codificarO = codificarA.replace("ober","o");
        let codificarU = codificarO.replace("ufar","u");

        mensajeCodificado.innerHTML = codificarU;

        const botonCopiar = document.querySelector("#copiar-texto");
        botonCopiar.classList.add("show-element");
    }
});

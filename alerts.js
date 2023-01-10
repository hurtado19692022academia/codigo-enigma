//Selectors
const txtMsg = document.getElementById("mensaje");
const count = document.getElementById("counter");
const desplazamiento = document.getElementById("desplazamiento");
const btnCifrar = document.getElementById("cifrar");
const btnDecifrar = document.getElementById("decifrar");
const lblMsgResult = document.getElementById("lblMsgResult");
const txtMsg2 = document.getElementById("mensaje2");

//EventListeners
/* Limit characters*/
txtMsg.addEventListener("keyup", () =>{
    count.innerHTML = txtMsg.value.length + "/360";
});

/* Function cipher*/
btnCifrar.addEventListener("click",()=>{
    if(txtMsg.value == ""){
        alert("No has ingresado tu mensaje.");
    }else if(desplazamiento.value == ""){
        alert("Se te olvido ingresar tu contraseña.");
    }else{
        lblMsgResult.innerHTML = "Su mensaje cifrado es ";
        let mensaje2 = cifrar.encode(parseInt(desplazamiento.value),txtMsg.value);
        txtMsg2.innerHTML = mensaje2;
        openModal();
    }
});

function clearMsg(){
    txtMsg.value = "";
    txtMsg2.innerHTML = "";
    count.innerHTML = "0/360";
}
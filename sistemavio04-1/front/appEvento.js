document
.getElementById("form-selecao-data")
.addEventListener("submit", testeCalendario);

function testeCalendario(event){
    //previne o comportamento padrao do formulario, ou seja, impede que ele seja enviado e recarregue a pagina
    event.preventDefault();

    const data_recebida = document.getElementById("data").value;

    if(data_recebida){
     //console.log("Data recebida: ", data_recebida);
    alert("A data selecionada é: " + data_recebida);
}
else{
    alert("Por favor, selecionar uma data!")
}
}
//acessa o objeto "document" que representa a pagina html
//seleciona o elemento co o id indicado do formulario 
document
    .getElementById("formulario-registro")

    //adiciona o ouvinte de evento(submit) para capturar o envio do formulario 
    .addEventListener("submit", function(event){
        //previne o comportamento padrao do formulario, ou seja, impede que ele seja enviado e racarregue a pagina
    event.preventDefault();
    //captura os valores dos campos do formulario 
    const name = document.getElementById("nome");
    const cpf = document.getElementById("cpf");
    const email = document.getElementById("email"); 
    const password = document.getElementById("senha"); 

    //requisiçao http para o endpoint de cadastro de usuario
    fetch("http://localhost:5000/api/v1/user",{
        //realiza uma chamada http para o servidor (a rota definida)
        method: "POST", 
        headers:{
            "Content-Tpye":application/json
        },
        //transfoma os dados do formulario em uma string json para serem enviado no corpo da requisiçao
        body: json.stringfy({name, cpf, password, email}),
        });
    });
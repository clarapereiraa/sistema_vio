//acessa o objeto "document" que representa a pagina html
//seleciona o elemento co o id indicado do formulario
document
  .getElementById("formulario-registro")

  //adiciona o ouvinte de evento(submit) para capturar o envio do formulario
  .addEventListener("submit", function (event) {
    //previne o comportamento padrao do formulario, ou seja, impede que ele seja enviado e racarregue a pagina
    event.preventDefault();
    //captura os valores dos campos do formulario
    const name = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    //requisiçao http para o endpoint de cadastro de usuario
    fetch("http://localhost:5000/api/v1/user", {
      //realiza uma chamada http para o servidor (a rota definida)
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //transfoma os dados do formulario em uma string json para serem enviado no corpo da requisiçao
      body: JSON.stringify({ name, cpf, password, email }),
    })
      .then((response) => {
        //tratamento da resposta do servidos/api
        if (response.ok) {
          //verifica se a resposta foi bem sucessida(status 2xx)
          return response.json();
        }
        //convertendo o erro em formato json
        return response.json().then((err) => {
          //mensagem retornada do servidor, acessada pela chave "error"
          throw new Error(err.error);
        });
      }) //fechamento da then(response)
      .then((data) => {
        //exibe um alerta pra o usuario final (front) com o nome do usuario que acabdou de ser cadastrado
        alert("usuario cadastrado com sucesso!" + data.user.name);

        //exibe log no terminal
        console.log("usuario criado: ", data.user);


        //reseta os campos do formulario apos o sucesso do cadastro
        document.getElementById("formulario-registro").reset();
      })
      .catch((error) => {
        //captura qualquer arro que ocorra durante o processo de requisiçaõ/resposta

        //exibe alerta (front)com o erro processado
        alert("Error no cadastro: " + error.message);

        console.error("Error:", error.message);
      });
  });

const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Ola Mundo";

  console.log(input.value); // pega o valor em tempo real
  console.log(input.getAttribute("value")); //pega o valor do html
});

document.getElementById("type").addEventListener("click", function () {
  //input.type = input.type !== "date" ? "date" : "text"; // consque ir e voltar
  input.setAttribute("type", "radio"); // vira mão unica
});

document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite algo...";
});

document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});
/*- Por fim, podemos usar o poder dos atributos de dados do HTML dentro do javascript para aumentar ainda mais as nossas possiblidades:

Obs.: Repare no “Inspecionar” que podemos inserir atributos dinamicamente no elemento. */

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
  console.log(
    "O valor do atributo data-something-else agora é: " +
      input.dataset.somethingElse
  );
});

input.getAttribute('disabled') = true
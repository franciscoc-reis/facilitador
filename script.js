const copyButtons = document.querySelectorAll(".btnCopy");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const textArea = button.previousElementSibling.innerHTML;

    navigator.clipboard
      .writeText(textArea)
      .then(() => {
        //alert('Texto copiado com sucesso!');
      })
      .catch((err) => {
        //console.error('Erro ao copiar texto: ', err);
      });
  });
});


// constante para seleciona todos os botões de copiar = copyButtons

// adicionando evento de clique para cada botão = copyButtons.forEach((button)

// selecionar o texto relacionado ao botão = const textArea = button.previousElementSibling

// copia o texto para a área de transferência = navigator.clipboard.writeText(textArea)

Decodificador de Texto
Este projeto é um Decodificador de Texto desenvolvido em HTML, CSS e JavaScript. Ele permite que o usuário insira um texto e criptografe ou descriptografe utilizando um padrão de substituição de caracteres. O layout é simples e limpo, com elementos interativos para melhorar a experiência do usuário.

Funcionalidades
Criptografia de Texto: Substitui vogais específicas por sequências de caracteres predefinidas.
Descriptografia de Texto: Reverte o processo de criptografia, retornando o texto ao seu estado original.
Cópia do Texto: Após a criptografia ou descriptografia, o usuário pode copiar o resultado com um único clique.
Validação de Entrada: A interface notifica o usuário que apenas letras minúsculas sem acento podem ser utilizadas.

Demonstração

<img src="./estilos/Logo alura.png" alt="Logo da alura" style="width:300px;"> <img src="./estilos/person.png" alt="Personagem observando diamante">

Requisitos

Para executar o projeto localmente, você precisará de:

Um navegador web moderno (Chrome, Firefox, Edge, etc.)
Um servidor local opcional (se desejar trabalhar com múltiplas páginas HTML)
Como Usar
Clone ou baixe este repositório em sua máquina.
Abra o arquivo index.html em seu navegador.
Digite seu texto na área de entrada e clique em:
Criptografar: Para criptografar o texto.
Descriptografar: Para reverter o processo de criptografia.
O resultado aparecerá no lugar da imagem do personagem.
Use o botão Copiar para copiar o resultado final.

Estrutura da Criptografia
Vogais são substituídas pelos seguintes códigos:
e → enter
i → imes
a → ai
o → ober
u → ufat

Estrutura do Projeto

index.html: Estrutura básica do projeto (HTML).
style.css: Estilos personalizados para o layout e design.
script.js: Lógica de criptografia/descriptografia e interatividade.
Capturas de Tela
Tela Inicial: Exibe o campo de texto, o aviso de letras minúsculas e os botões de ação.
Após Criptografia/Descriptografia: Exibe o resultado no lugar da imagem do personagem.

Como Funciona
O JavaScript usado neste projeto contém duas funções principais:

Criptografar: Substitui as vogais no texto do usuário com padrões pré-definidos.
Descriptografar: Reverte o texto criptografado para o original, reconhecendo os padrões e substituindo-os por suas respectivas vogais.
A interface também faz com que a mensagem de "Nenhuma mensagem encontrada" desapareça quando o usuário digita algum texto, substituindo a imagem e a mensagem pelo texto decodificado ou criptografado.

Minha Experiência no Desenvolvimento
A realização deste challenge foi uma experiência extremamente enriquecedora. Ao longo do projeto, pude aplicar de forma prática todos os conhecimentos que adquiri ao longo do curso. Embora tenha enfrentado algumas dificuldades, especialmente na implementação da lógica em JavaScript, com paciência e a busca por soluções, consegui superar esses obstáculos e concluir o projeto com sucesso. Essa jornada me permitiu evoluir e consolidar ainda mais minhas habilidades.


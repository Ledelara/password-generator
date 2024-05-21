
# Gerador de senha

O Password Generator é uma aplicação web interativa que permite aos usuários criar senhas seguras e personalizadas com base em critérios específicos. Este projeto utiliza o Material-UI para componentes de interface de usuário modernos e responsivos, garantindo uma experiência de usuário consistente em dispositivos de diferentes tamanhos.


## Funcionalidades

- Gerar Senha Personalizada: Os usuários podem gerar senhas de acordo com suas necessidades, escolhendo a inclusão de letras maiúsculas, letras minúsculas, números e símbolos.

- Configuração de Comprimento: Permite aos usuários definir o comprimento desejado da senha para atender a requisitos específicos de segurança.

- Avaliação de Segurança: A senha gerada é avaliada e classificada como 'Baixa', 'Média' ou 'Alta' com base na sua complexidade e comprimento.

- Copiar para a Área de Transferência: Função integrada para copiar a senha gerada para a área de transferência com um único clique, facilitando o uso imediato.

- Interface Responsiva: A interface do usuário é otimizada para funcionar bem em dispositivos móveis, tablets e desktops, garantindo acessibilidade e usabilidade em todas as plataformas.



## Componentes principais

- PasswordConfig
Este é o componente principal que orquestra a geração da senha e permite que os usuários configurem suas preferências. Ele inclui subcomponentes para controle de comprimento, seleção de critérios de senha, exibição da força da senha e um botão para gerar a senha.

- Password
Exibe a senha gerada e inclui um botão para copiar a senha para a área de transferência. A interface é adaptativa para garantir que a senha seja visível e o botão de copiar esteja acessível em todas as resoluções de tela.

- Strength
Indica visualmente a força da senha gerada (Baixa, Média, Alta) utilizando ícones coloridos, proporcionando uma indicação rápida e clara da complexidade da senha.

- Generate
Um botão estilizado que, ao ser clicado, aciona a geração de uma nova senha com base nas configurações escolhidas pelo usuário.

- SliderMarker
Componente de controle deslizante que permite ao usuário selecionar o comprimento da senha, proporcionando uma interface intuitiva para ajuste fino.

- Checkers
Conjunto de caixas de seleção para que o usuário possa incluir ou excluir tipos específicos de caracteres na senha gerada (maiúsculas, minúsculas, números, símbolos).


## Demonstração

![Gif](https://i.ibb.co/tH7hT8Z/Design-sem-nome.gif)

![Tela principal](https://i.ibb.co/WFFMKRc/Captura-de-tela-2024-05-21-142545.png)
## Stack utilizada

- React: Biblioteca principal para construção da interface do usuário.

- Material-UI: Framework de componentes React para estilização e criação de interfaces de usuário responsivas.

- TypeScript: Linguagem de programação utilizada para adicionar tipagem estática ao JavaScript, melhorando a robustez e manutenção do código.

## Deploy

Para fazer o deploy desse projeto acesse o link do deploy na [Vercel](https://password-generator-chi-woad.vercel.app).


## Rodando localmente

Clone o projeto

```bash
  https://github.com/Ledelara/password-generator.git
```

Entre no diretório do projeto

```bash
  cd password-generator
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Abra o navegador e acesse
```bash
  http://localhost:3000
```


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias, correções de bugs e novas funcionalidades.


## Licença

Este projeto está sob a licença [MIT](https://choosealicense.com/licenses/mit/)


## Referência

 - [Front End Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh)


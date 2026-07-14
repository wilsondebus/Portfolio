# Portfólio pessoal — tema IDE

Estrutura de portfólio responsivo desenvolvida em HTML, CSS e JavaScript puro, com visual inspirado no VS Code/IntelliJ e paleta roxa escura.

## Páginas

- `index.html`: apresentação inicial resumida.
- `sobre.html`: biografia, trajetória e download do currículo.
- `projetos.html`: projetos concluídos e em andamento, separados por abas.
- `github.html`: estatísticas, linguagens e contribuições do GitHub.
- `stack-contato.html`: tecnologias e redes de contato.

## Personalização principal

1. Pesquise por `[SEU NOME]`, `[ONDE VOCÊ ESTUDA]` e outros campos entre colchetes nos arquivos HTML.
2. Troque `SEU_USUARIO` pelo seu usuário do GitHub, LinkedIn e demais redes.
3. Substitua `assets/images/foto-perfil-placeholder.svg` pela sua foto. Você pode manter o nome do arquivo ou atualizar o caminho no `index.html`.
4. Troque as imagens em `assets/images/projetos/` e ajuste os cards em `projetos.html`.
5. Coloque seu currículo em `assets/curriculo/seu-curriculo.pdf`.
6. Remova ou duplique cards conforme a quantidade de projetos e tecnologias.

## Estrutura

```text
portfolio/
├── index.html
├── sobre.html
├── projetos.html
├── github.html
├── stack-contato.html
└── assets/
    ├── css/style.css
    ├── js/script.js
    ├── images/
    └── curriculo/
```

## Executar localmente

Abra `index.html` no navegador. Para uma experiência mais confiável, use a extensão **Live Server** no VS Code.

## Publicar no GitHub Pages

Envie os arquivos para a raiz do repositório, acesse **Settings > Pages**, escolha a branch principal e a pasta `/root`.

## Observações

Os ícones, fontes e gráficos do GitHub são carregados por serviços externos e precisam de internet. Os gráficos só aparecerão corretamente depois que `SEU_USUARIO` for substituído por um usuário válido.

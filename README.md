# Portfolio Profissional - Dev Web

Site pessoal para apresentacao de portfolio, servicos e contato. Desenvolvido com React + Vite e estilizado com Tailwind CSS.

## Destaques
1. Secoes de Hero, Resumo/Projetos, Servicos e Contato
2. Cards com animacoes e hover
3. Layout responsivo (desktop e mobile)
4. Links de contato e redes sociais

## Tecnologias
1. React
2. Vite
3. TypeScript
4. Tailwind CSS
5. Motion (animations)
6. Lucide React (icons)

## Estrutura
1. `src/components` componentes principais do layout
2. `src/images` imagens locais
3. `src/types` declaracoes de tipos (assets)

## Como rodar localmente
1. Instale as dependencias
```bash
npm install
```
2. Rode o projeto
```bash
npm run dev
```
3. Acesse no navegador
`http://localhost:3000`

## Build
```bash
npm run build
```

## Preview do build
```bash
npm run preview
```

## Lint (TypeScript)
```bash
npm run lint
```

## Deploy (Firebase Hosting)
1. Gere o build
```bash
npm run build
```
2. Deploy
```bash
firebase deploy
```

## Observacoes
1. Se usar imagens locais com `.jpg` ou `.jpeg`, os tipos ja estao declarados em `src/types/images.d.ts`.
2. Caso use variaveis de ambiente, crie o arquivo `.env.local` seguindo `.env.example`.

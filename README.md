# BMM Site

Site da BMM Locadora e Serviços — landing / catálogo de equipamentos feito em React + TailwindCSS.

## Resumo
Projeto front-end com seções: Hero, Serviços, Catálogo, Contato e Footer. Assets (imagens/icons) ficam em `src/assets`. Usa alias `@` para imports (`@/assets/...`).

---

## Pré-requisitos
- Node.js >= 16
- npm, yarn ou pnpm
- Git (para versionamento / deploy)
- Windows (instruções de terminal abaixo são para PowerShell / CMD)

---

## Instalação (Windows)
Abra PowerShell ou CMD e execute:

PowerShell:
```powershell
cd D:\project\bmm-site
npm install
# ou
# yarn
# pnpm install
```

CMD:
```cmd
D:
cd \project\bmm-site
npm install
```

---

## Rodar em desenvolvimento
Verifique qual bundler seu projeto usa (Vite ou CRA). Use o script adequado:

Vite (comum em projetos modernos)
```powershell
npm run dev
# abra http://localhost:5173 (ou a porta exibida no terminal)
```

Create React App
```powershell
npm start
# abra http://localhost:3000
```

Se o script for diferente, cheque `package.json` em "scripts".

---

## Build / Preview (produção)
Gerar build:
```powershell
npm run build
```
Preview (se existir script `preview`):
```powershell
npm run preview
```
Ou depois do build, servir a pasta `dist`:
```powershell
npx serve dist
```

## Uso / Desenvolvimento rápido
- Estrutura principal:
  - src/components — componentes React (Hero, CatalogSection, Footer...)
  - src/assets — imagens e ícones
  - src/lib / src/utils — configurações e dados (ex.: `appsentings`)
- Para trocar imagens locais: importe no topo do componente
  ```js
  import img from '@/assets/catalogo/andaime.png'
  <img src={img} alt="..." />
  ```
  Se imagem não aparecer: verifique nome/maiúsculas-minúsculas, reinicie dev server.
- Para textos responsivos em botões:
  ```jsx
  <span className="hidden sm:inline">Texto completo</span>
  <span className="inline sm:hidden">Texto curto</span>
  ```
- Evitar overflow em mobile: use `break-words`, `truncate` (com `overflow-hidden`) ou ajuste `text-sm`.

---

## Configurações importantes
- Alias `@`: verifique `vite.config.js` ou `jsconfig.json/tsconfig.json` para garantir que `@` aponta para `src`.
- TailwindCSS: se estilos não aparecem, confirme que Tailwind está configurado e `index.css` importa `@tailwind base; @tailwind components; @tailwind utilities;`.
- Variáveis de ambiente: coloque em `.env` (não commit) e referencie conforme bundler (`VITE_` prefix para Vite).

---

## Problemas comuns / Soluções rápidas
- Imagem não aparece:
  - Confirme import: `import compactador from "@/assets/..."`.
  - Reinicie dev server.
  - Alternativa: mover imagem para `public/` e usar `/assets/...`.
- Texto longo estoura no mobile:
  - Adicione `break-words max-w-full` ou `text-sm`.
- Layout sobrepondo no mobile (Footer etc.):
  - Remova alturas fixas (evite `h-...`) e use `lg:col-span-2` sem altura fixa.

---

## Testes e CI (opcional)
Adicione scripts de teste no `package.json` (Jest / Vitest) conforme sua stack e configure GitHub Actions para build/test antes do deploy.

---

Se quiser, eu:
- gero um `.gitignore` mais completo,
- adapto o README com os scripts reais do seu `package.json`,
- crio instruções de deploy (GitHub Pages / Netlify / Vercel).

```// filepath: d:\project\bmm-site\README.md
# BMM Site

Site da BMM Locadora e Serviços — landing / catálogo de equipamentos feito em React + TailwindCSS.

## Resumo
Projeto front-end com seções: Hero, Serviços, Catálogo, Contato e Footer. Assets (imagens/icons) ficam em `src/assets`. Usa alias `@` para imports (`@/assets/...`).

---

## Pré-requisitos
- Node.js >= 16
- npm, yarn ou pnpm
- Git (para versionamento / deploy)
- Windows (instruções de terminal abaixo são para PowerShell / CMD)

---

## Instalação (Windows)
Abra PowerShell ou CMD e execute:

PowerShell:
```powershell
cd D:\project\bmm-site
npm install
# ou
# yarn
# pnpm install
```

CMD:
```cmd
D:
cd \project\bmm-site
npm install
```

---

## Rodar em desenvolvimento
Verifique qual bundler seu projeto usa (Vite ou CRA). Use o script adequado:

Vite (comum em projetos modernos)
```powershell
npm run dev
# abra http://localhost:5173 (ou a porta exibida no terminal)
```

Create React App
```powershell
npm start
# abra http://localhost:3000
```

Se o script for diferente, cheque `package.json` em "scripts".

---

## Build / Preview (produção)
Gerar build:
```powershell
npm run build
```
Preview (se existir script `preview`):
```powershell
npm run preview
```
Ou depois do build, servir a pasta `dist`:
```powershell
npx serve dist
```

---

## Publicar no GitHub (rápido)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

(Dica: adicione `.gitignore` adequado — já existe `node_modules` mas inclua `dist`, `.env`, `.DS_Store` etc.)

---

## Uso / Desenvolvimento rápido
- Estrutura principal:
  - src/components — componentes React (Hero, CatalogSection, Footer...)
  - src/assets — imagens e ícones
  - src/lib / src/utils — configurações e dados (ex.: `appsentings`)
- Para trocar imagens locais: importe no topo do componente
  ```js
  import img from '@/assets/catalogo/andaime.png'
  <img src={img} alt="..." />
  ```
  Se imagem não aparecer: verifique nome/maiúsculas-minúsculas, reinicie dev server.
- Para textos responsivos em botões:
  ```jsx
  <span className="hidden sm:inline">Texto completo</span>
  <span className="inline sm:hidden">Texto curto</span>
  ```
- Evitar overflow em mobile: use `break-words`, `truncate` (com `overflow-hidden`) ou ajuste `text-sm`.

---

## Configurações importantes
- Alias `@`: verifique `vite.config.js` ou `jsconfig.json/tsconfig.json` para garantir que `@` aponta para `src`.
- TailwindCSS: se estilos não aparecem, confirme que Tailwind está configurado e `index.css` importa `@tailwind base; @tailwind components; @tailwind utilities;`.
- Variáveis de ambiente: coloque em `.env` (não commit) e referencie conforme bundler (`VITE_` prefix para Vite).

---

## Problemas comuns / Soluções rápidas
- Imagem não aparece:
  - Confirme import: `import compactador from "@/assets/..."`.
  - Reinicie dev server.
  - Alternativa: mover imagem para `public/` e usar `/assets/...`.
- Texto longo estoura no mobile:
  - Adicione `break-words max-w-full` ou `text-sm`.
- Layout sobrepondo no mobile (Footer etc.):
  - Remova alturas fixas (evite `h-...`) e use `lg:col-span-2` sem altura fixa.

---

## Testes e CI (opcional)
Adicione scripts de teste no `package.json` (Jest / Vitest) conforme sua stack e configure GitHub Actions para build/test antes do deploy.

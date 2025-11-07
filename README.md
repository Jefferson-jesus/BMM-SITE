# BMM-SITE
Site da empresa BMM Soluções Premium em Locação de Andaimes e Equipamentos

## Observações e dicas rápidas
- Import de imagens:
  - Preferível importar imagens em `src` para que o bundler resolva: `import img from '@/assets/...'`
  - Alternativa: coloque em `public/` e use caminho absoluto `/assets/...`.
  - Se usar Vite e quiser construir caminhos dinamicamente: `new URL('@/assets/..', import.meta.url)`.
  - Reinicie o dev server após adicionar/renomear imagens.

- Responsividade / textos longos:
  - Evite overflow no mobile adicionando classes Tailwind como `break-words`, `truncate` (com `overflow-hidden`), e usar tamanhos responsivos `text-sm md:text-lg`.
  - Para botões que mudam o texto conforme breakpoint use:
    ```jsx
    <span className="hidden sm:inline">Texto completo</span>
    <span className="inline sm:hidden">Texto curto</span>
    ```

- Debug:
  - Verifique `package.json` scripts para confirmar `dev` / `start` / `build`.
  - Verifique aliases (ex.: `@`) em `vite.config.js` ou `jsconfig.json/tsconfig.json`.
  - Se imagens não aparecem, confirme nome e maiúsculas/minúsculas (Windows tolera, hosting pode não tolerar).

## Contato / Ajuda
Se quiser, envio instruções específicas para:
- Configurar CI/CD (GitHub Actions)
- Corrigir problemas de import de imagens (ex.: trocar para `public/` ou usar `new URL(...)`)
- Ajustar responsividade de componentes (forneça o arquivo que deseja ajustar)

---
README gerado automaticamente 
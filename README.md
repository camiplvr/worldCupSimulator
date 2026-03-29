# World Cup Simulator

Simulador de sorteio da Copa do Mundo 2026, feito em **React + TypeScript**.
Permite buscar e selecionar seleções para simulação de sorteio (fase de grupos).

---

## 🔹 Funcionalidades implementadas

- Componente `SearchSelect` com campo de busca (autocomplete simples)
- Hook `useTeams` gerenciando lista de times e filtro por query
- Utilitário `filterTeams` para busca com normalização de strings
- UI limpa, com mensagem “Nenhuma seleção encontrada” quando não há resultados

> ⚠️ Busca atual simples: utiliza `includes()`.
> Comentário de melhoria futura na função `filterTeams`: implementar ranking de relevância (startsWith > code match > includes), debounce e highlight do termo buscado.

---

## 🔹 Tecnologias

- **React** (Hooks)
- **TypeScript**
- **Vite** (ferramenta de build)
- **Tailwind CSS** para estilização
- **Zustand** (em breve para gerenciamento de estado global)

---

## 🔹 Rodando localmente

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/worldCupSimulator.git
```

2. Entre na pasta do projeto:

```bash
cd worldCupSimulator
```

3. Instale as dependências:

```bash
npm install
```

4. Rode em modo de desenvolvimento:

```bash
npm run dev
```

O app estará disponível em http://localhost:3000 .

## 🔹 Estrutura do projeto

```bash
src/
├─ components/ # Componentes UI (SearchSelect, etc.)
├─ data/ # Dataset das seleções (teams.json)
├─ hooks/ # Hooks customizados (useTeams, futuro useDrawStore)
├─ store/ # Zustand store (em breve)
├─ utils/ # Funções utilitárias (filterTeams, normalizeString)
└─ pages/ # Páginas do app (se houver)
```

## 🔹 Melhorias futuras

- Implementar ranking de resultados na busca (mais relevante para o usuário)
- Adicionar debounce na busca
- Highlight do termo pesquisado
- Integração com Zustand para seleção de times
- Função de sorteio de grupos (fase de grupos completa)
- Testes unitários e de integração
- Persistência avançada no LocalStorage ou API futura
- Compartilhamento do resultado (Web Share API)

## 🔹 Observações

- Projeto foi desenvolvido seguindo requisitos do desafio técnico Front-end Pleno | React + TypeScript
- Uso de IA para apoio (ChatGPT) documentado: auxiliar na arquitetura inicial e sugestões de melhorias. Todo código foi revisado manualmente.

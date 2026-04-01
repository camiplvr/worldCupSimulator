# 🌍 World Cup Draw Simulator

Aplicação web para simular o sorteio da fase de grupos da Copa do Mundo.

---

## 📌 Sobre o projeto

Este projeto permite ao usuário:

- Buscar e selecionar seleções participantes
- Definir dinamicamente:
  - número de grupos
  - número de times por grupo

- Realizar o sorteio automaticamente
- Re-sortear os grupos
- Persistir os dados no navegador (localStorage)

---

## 🚀 Funcionalidades

### 🔎 Catálogo de seleções

- Busca por nome ou código (ex: "Brasil", "BRA")
- Lista dinâmica com feedback visual de seleção
- Botão de **selecionar todos / remover todos**
- Interface acessível com:
  - `role="combobox"`
  - `role="listbox"`
  - `role="option"`

---

### ⚙️ Configuração do sorteio

- Definição de:
  - quantidade de grupos
  - times por grupo

- Validação automática:
  - impede sorteio sem times suficientes

---

### 🎲 Simulação do sorteio

- Distribuição automática dos times
- Criação dos grupos (ex: Grupo A, B, C...)
- Interface visual com os grupos organizados

---

### 💾 Persistência

- Dados salvos no `localStorage`:
  - seleções sorteadas
  - configuração (grupos × tamanho)

- Recuperação automática ao recarregar a página

---

## 🧱 Arquitetura

O projeto foi organizado separando responsabilidades:

```
src/
├── components/ # UI (React)
  ├── GroupCard
  ├── Navbar
  ├── Card
  ├── DrawPanel
├── domain/           # Regras de negócio (drawGroups)
├── hooks/            # Lógica reutilizável (useTeams)
├── store/            # Estado global (Zustand)
├── utils/            # Funções puras (filtro, normalização)
├── types/            # Tipagens
```

---

## 🧠 Decisões técnicas

### Zustand vs Redux

Foi utilizado **Zustand** por:

- Simplicidade e menor boilerplate
- Integração direta com React
- Ideal para aplicações pequenas/médias
- Melhor legibilidade no contexto do desafio

---

### Separação de domínio

A lógica de sorteio (`drawGroups`) foi isolada em `domain/`:

- Facilita testes
- Evita acoplamento com UI
- Permite evolução futura (API, regras FIFA, etc.)

---

### Persistência

O uso de `localStorage` garante:

- Experiência contínua para o usuário
- Simulação de estado real de aplicação

---

## 🧪 Testes

Foram implementados testes com **Vitest + Testing Library**:

### ✔️ Testes unitários

- `normalizedString`
- `filterTeams`
- `drawGroups`

### ✔️ Testes de integração

- Fluxo completo:
  - selecionar times
  - realizar sorteio

- Persistência com `localStorage`

---

## ♿ Acessibilidade

- Uso de roles semânticos (`combobox`, `listbox`, `option`)
- Navegação preparada para teclado
- Estrutura compatível com leitores de tela

---

## 🎨 UI/UX

- Layout responsivo (mobile-first)
- Grid adaptativo para exibição dos grupos
- Feedback visual de seleção
- Estados desabilitados (botão de sorteio)
- Mensagens de validação claras
- Scroll automático após sorteio
- Componentes reutilizáveis (Card, GroupCard)

---

## 📦 Tecnologias

- React
- TypeScript
- Zustand
- Vitest
- Testing Library
- Tailwind CSS

---

## ▶️ Como rodar o projeto

```bash
# instalar dependências
npm install

# rodar o projeto
npm run dev

# rodar testes
npm run test
```

---

## 📌 Melhorias futuras

- Drag & drop entre grupos
- Animação do sorteio
- Integração com API real de seleções
- Seeds e regras oficiais FIFA
- Melhorias visuais (UX/UI)

---

## 🤖 Uso de IA

Este projeto contou com auxílio de IA para:

- Refinamento de arquitetura
- Sugestões de testes
- Organização do código

Todas as decisões finais, implementação e validação foram realizadas manualmente.

---

## 👩‍💻 Autora

Camila Vicente

---

## 📎 Observações finais

O foco deste projeto foi:

- Clareza de código
- Separação de responsabilidades
- Cobertura de testes
- Aderência aos requisitos do desafio

---

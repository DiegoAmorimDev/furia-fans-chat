# Furia Fan Chat

Este é um projeto de chat web simples criado para fãs do time de CS da FURIA Esports. Ele permite que os usuários interajam com um bot para obter informações sobre a equipe.

## Funcionalidades

*   Interface de chat simples e reativa.
*   Bot conversacional que responde a perguntas sobre:
    *   Saudações
    *   Lineup atual do time de CS
    *   Redes sociais e link da HLTV
    *   Curiosidades sobre a FURIA
*   Respostas pré-definidas para outras interações comuns (agradecimentos, ajuda).

## Tecnologias Utilizadas

*   **Frontend:** React (com Vite), JavaScript
*   **Gerenciador de Pacotes:** pnpm
*   **Estilização:** CSS inline (pode ser refatorado para arquivos CSS ou Styled Components)

## Como Configurar e Executar

1.  **Pré-requisitos:**
    *   Node.js (versão 18 ou superior recomendada)
    *   pnpm (instale globalmente com `npm install -g pnpm`)

2.  **Clonar o Repositório (ou Descompactar o Projeto):**
    ```bash
    # Se estiver usando Git
    git clone <url-do-repositorio>
    cd furia-chat-app

    # Ou, se descompactou o projeto, navegue até a pasta raiz
    cd caminho/para/furia-chat-app
    ```

3.  **Instalar Dependências:**
    Execute o seguinte comando na pasta raiz do projeto (`furia-chat-app`):
    ```bash
    pnpm install
    ```

4.  **Executar o Servidor de Desenvolvimento:**
    Ainda na pasta raiz do projeto, execute:
    ```bash
    pnpm run dev
    ```
    Isso iniciará o servidor de desenvolvimento Vite. A aplicação estará geralmente disponível em `http://localhost:5173` (verifique o output do terminal para a URL exata).

5.  **Acessar o Chat:**
    Abra a URL fornecida pelo servidor de desenvolvimento no seu navegador.

## Estrutura do Projeto

```
furia-chat-app/
├── public/         # Arquivos estáticos
├── src/
│   ├── assets/       # Imagens, etc.
│   ├── components/
│   │   └── chat/     # Componentes específicos do chat (ChatInterface, MessageList, MessageInput)
│   ├── utils/        # Funções utilitárias (botLogic.js)
│   ├── App.css       # Estilos globais (se usados)
│   ├── App.tsx       # Componente principal da aplicação
│   ├── index.css     # Estilos base
│   └── main.tsx      # Ponto de entrada do React
├── .gitignore
├── index.html      # Template HTML principal
├── package.json    # Dependências e scripts do projeto
├── pnpm-lock.yaml  # Lockfile do pnpm
├── README.md       # Este arquivo
└── vite.config.ts  # Configuração do Vite
```

## Próximos Passos e Melhorias Possíveis

*   **Refatorar Estilos:** Mover estilos inline para arquivos CSS/SCSS ou usar bibliotecas como Styled Components/Tailwind CSS.
*   **Integração com APIs:** Conectar o bot a APIs externas para obter dados em tempo real (próximos jogos, resultados, notícias) - *Passo 6 original, pulado por enquanto*.
*   **Melhorar Lógica do Bot:** Utilizar processamento de linguagem natural (NLP) para entender melhor as intenções do usuário.
*   **Persistência de Mensagens:** Salvar o histórico de mensagens (ex: usando LocalStorage ou um backend).
*   **Autenticação:** Adicionar login de usuário (se necessário).
*   **Testes:** Implementar testes unitários e de integração.


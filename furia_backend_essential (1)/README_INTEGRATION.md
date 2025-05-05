# Documentação da Integração de IA - Furia Fan Chat

Este documento descreve a integração de um backend de Inteligência Artificial (IA) com o frontend do Furia Fan Chat.

## 1. Visão Geral

A solução implementada consiste em:

*   **Frontend:** A aplicação React existente (`furia-chat-app`), modificada para se comunicar com o backend via API.
*   **Backend:** Uma nova aplicação Flask (`furia_backend`) que expõe uma API REST para processar as mensagens do chat.
*   **API:** Um endpoint `/api/chat` (método POST) no backend que recebe a mensagem do usuário e retorna uma resposta gerada (atualmente por um placeholder).
*   **IA (Placeholder):** Uma função `get_rag_response` no backend que simula a resposta de um sistema RAG (Retrieval-Augmented Generation). Esta função deve ser substituída pela lógica real utilizando Langchain e uma base de conhecimento sobre a FURIA.

## 2. Como Executar o Projeto

**Pré-requisitos:**

*   Python 3.10+
*   Node.js e pnpm (ou npm/yarn)
*   (Opcional, para RAG real) Chave de API para um modelo de linguagem (ex: OpenAI, Google Gemini)

**Passos:**

1.  **Iniciar o Backend (Flask):**
    *   Navegue até o diretório do backend: `cd /home/ubuntu/furia_backend`
    *   Ative o ambiente virtual: `source venv/bin/activate`
    *   Inicie o servidor Flask: `python src/main.py`
    *   O backend estará rodando em `http://localhost:5001` (ou a porta definida na variável de ambiente `PORT`).

2.  **Iniciar o Frontend (React):**
    *   Navegue até o diretório do frontend: `cd /home/ubuntu/furia-chat-app/furia-chat-app`
    *   Instale as dependências (se ainda não o fez): `pnpm install`
    *   Inicie o servidor de desenvolvimento: `pnpm run dev`
    *   O frontend estará acessível em `http://localhost:5173` (ou a porta indicada pelo Vite).

3.  **Acessar o Chat:**
    *   Abra seu navegador e acesse o endereço do frontend (ex: `http://localhost:5173`).
    *   Envie mensagens no chat. O frontend enviará as mensagens para o backend (`http://localhost:5001/api/chat`), que responderá com a mensagem do placeholder.

## 3. Detalhes da API (`/api/chat`)

*   **URL:** `http://<backend_host>:<backend_port>/api/chat` (ex: `http://localhost:5001/api/chat`)
*   **Método:** `POST`
*   **Headers:** `Content-Type: application/json`
*   **Corpo da Requisição (JSON):**
    ```json
    {
      "message": "<mensagem_do_usuario>",
      "session_id": "<id_opcional_da_sessao>" // Opcional
    }
    ```
*   **Corpo da Resposta (JSON - Sucesso 200 OK):**
    ```json
    {
      "response": "<resposta_da_ia>"
    }
    ```
*   **Corpo da Resposta (JSON - Erro):**
    ```json
    {
      "error": "<mensagem_de_erro>"
    }
    ```

## 4. Próximos Passos: Implementando o RAG Real

O arquivo `/home/ubuntu/furia_backend/src/utils/rag_handler.py` contém a função `get_rag_response` que atualmente é um placeholder.

Para implementar a funcionalidade RAG completa:

1.  **Coleta de Dados:** Reúna informações sobre a FURIA de fontes confiáveis (site oficial, Liquipedia, HLTV, etc.). Salve esses dados em arquivos de texto ou outros formatos adequados.
2.  **Processamento e Indexação (Langchain):**
    *   Use `DocumentLoaders` do Langchain para carregar os dados.
    *   Use `TextSplitters` para dividir os documentos em chunks menores.
    *   Use uma biblioteca de `Embeddings` (ex: `OpenAIEmbeddings`, `HuggingFaceEmbeddings`) para gerar vetores para cada chunk.
    *   Use um `VectorStore` (ex: `Chroma`, `FAISS`) para armazenar os chunks e seus embeddings, criando um índice para busca rápida.
3.  **Criação do Pipeline RAG (Langchain):**
    *   Configure um `Retriever` a partir do seu VectorStore.
    *   Escolha um Modelo de Linguagem (LLM) compatível com Langchain (ex: `ChatOpenAI`, `ChatGoogleGenerativeAI`). Configure a chave de API necessária (via variáveis de ambiente - use `python-dotenv` e um arquivo `.env`).
    *   Crie uma `Chain` (ex: usando `RunnableSequence` ou `load_qa_chain`) que:
        *   Receba a pergunta do usuário.
        *   Use o `Retriever` para buscar documentos relevantes.
        *   Passe a pergunta e os documentos recuperados para o LLM gerar a resposta.
4.  **Integração no Backend:**
    *   Modifique a função `get_rag_response` em `rag_handler.py` para inicializar e executar o pipeline RAG criado.
    *   Certifique-se de que as dependências necessárias (Langchain, bibliotecas de LLM, vector store, etc.) estejam listadas em `requirements.txt`.

## 5. Estrutura dos Diretórios

```
/
├── furia-chat-app/         # Diretório do Frontend React
│   └── furia-chat-app/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   │   └── chat/
│       │   │       ├── ChatInterface.tsx  (Modificado para chamar API)
│       │   │       └── ...
│       │   ├── utils/
│       │   │   └── botLogic.js      (Lógica antiga, não mais usada)
│       │   └── ...
│       ├── index.html
│       ├── package.json
│       ├── vite.config.ts
│       └── ...
│
├── furia_backend/          # Diretório do Backend Flask
│   ├── venv/               # Ambiente virtual Python
│   ├── src/
│   │   ├── utils/
│   │   │   └── rag_handler.py (Contém o placeholder da IA)
│   │   ├── static/
│   │   ├── main.py          (Aplicação Flask principal com endpoint /api/chat)
│   │   └── ...
│   ├── requirements.txt    # Dependências Python
│   ├── app.log             # Log do servidor Flask
│   └── README_INTEGRATION.md (Este arquivo)
│
└── integration_plan.md     # Plano de integração inicial
```


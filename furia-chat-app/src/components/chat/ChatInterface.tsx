// src/components/chat/ChatInterface.tsx
import React, { useState } from 'react';
import MessageList from './MessageList'; // Importa .tsx
import MessageInput from './MessageInput'; // Importa .tsx
import { getBotResponse } from '../../utils/botLogic.js'; // Importa a lógica do bot

const ChatInterface = () => {
  // Estado inicial com uma mensagem de boas-vindas do bot
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Olá! Sou o Furia Bot. Como posso te ajudar a acompanhar a Furia hoje?' }
  ]);

  // Função para adicionar uma nova mensagem à lista
  const handleSendMessage = (text) => {
    // Adiciona a mensagem do usuário
    const newUserMessage = { sender: 'user', text };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    // Usa a lógica do bot para obter a resposta
    const botResponseText = getBotResponse(text);
    const botResponse = { sender: "bot", text: botResponseText };

    // Adiciona a resposta do bot após um pequeno atraso (simula pensamento)
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 500); // Atraso de 0.5 segundos
  };

  // Estilos básicos
  const chatContainerStyle = {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  return (
    <div style={chatContainerStyle}>
      <h2 style={titleStyle}>Furia Fan Chat</h2>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatInterface;


// src/components/chat/MessageList.jsx
import React, { useRef, useEffect } from 'react';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  // Função para rolar para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Rola para o final sempre que as mensagens mudarem
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Estilos básicos (podem ser movidos para CSS)
  const listStyle = {
    height: '400px', // Altura fixa para a lista de mensagens
    overflowY: 'auto', // Habilita scroll vertical
    border: '1px solid #ccc',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
  };

  const messageStyle = (sender) => ({
    marginBottom: '10px',
    padding: '8px 12px',
    borderRadius: '15px',
    maxWidth: '70%',
    wordWrap: 'break-word',
    backgroundColor: sender === 'user' ? '#dcf8c6' : '#fff', // Verde para usuário, branco para bot
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    marginLeft: sender === 'user' ? 'auto' : '0',
    marginRight: sender === 'user' ? '0' : 'auto',
    boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
  });

  const senderStyle = {
    fontSize: '0.8em',
    color: '#555',
    marginBottom: '3px',
    fontWeight: 'bold',
  };

  return (
    <div style={listStyle}>
      {messages.map((msg, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={messageStyle(msg.sender)}>
            <div style={senderStyle}>{msg.sender === 'user' ? 'Você' : 'Furia Bot'}</div>
            <div>{msg.text}</div>
          </div>
        </div>
      ))}
      {/* Elemento invisível para ajudar a rolar para o final */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;


// src/components/chat/MessageInput.jsx
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  // Atualiza o estado quando o texto no input muda
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Envia a mensagem quando o botão é clicado ou Enter é pressionado
  const handleSend = () => {
    if (inputText.trim()) { // Envia apenas se não estiver vazio
      onSendMessage(inputText);
      setInputText(''); // Limpa o campo de input
    }
  };

  // Permite enviar com a tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  // Estilos básicos (podem ser movidos para CSS)
  const formStyle = {
    display: 'flex',
    marginTop: '10px',
  };

  const inputStyle = {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px',
    fontSize: '1em',
  };

  const buttonStyle = {
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderLeft: 'none',
    backgroundColor: '#555',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '0 4px 4px 0',
    fontSize: '1em',
  };

  return (
    <div style={formStyle}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Digite sua mensagem..."
        style={inputStyle}
      />
      <button onClick={handleSend} style={buttonStyle}>
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;


// src/App.tsx
import React from 'react';
import ChatInterface from './components/chat/ChatInterface'; // Importa o componente principal do chat
import './App.css'; // Mantém os estilos padrão, se houver

function App() {
  return (
    <div className="App">
      {/* Renderiza a interface do chat */}
      <ChatInterface />
    </div>
  );
}

export default App;


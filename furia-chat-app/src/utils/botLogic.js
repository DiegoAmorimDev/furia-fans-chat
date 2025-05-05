// src/utils/botLogic.js

// Dados estáticos sobre a FURIA CS
const furiaData = {
  lineup: [
    { name: "FalleN", role: "AWP/IGL" },
    { name: "kscerato", role: "Rifler (Lurker)" },
    { name: "yuurih", role: "Rifler (Entry)" },
    { name: "chelo", role: "Rifler (Entry)" },
    { name: "Kye", role: "Rifler" },
  ],
  coach: "guerri",
  socialMedia: {
    twitter: "https://twitter.com/furia",
    instagram: "https://www.instagram.com/furia/",
    hltv: "https://www.hltv.org/team/8297/furia",
  },
  recentInfo: "A FURIA está sempre competindo nos maiores campeonatos de CS2 do mundo! Fique de olho nas classificatórias para os Majors e outros eventos Tier 1.",
  trivia: [
    "Sabia que a FURIA foi fundada em 2017?",
    "O KSCERATO é conhecido por sua mira incrível e clutches decisivos!",
    "A torcida da FURIA é uma das mais apaixonadas do cenário! #DIADEFURIA",
  ]
};

// Função para gerar respostas do bot com base no texto do usuário
export const getBotResponse = (userText) => {
  const text = userText.toLowerCase().trim();

  // 1. Saudações
  if (text.match(/^(olá|oi|opa|e aí|bom dia|boa tarde|boa noite)/)) {
    return "Olá! Sou o Furia Bot. Posso te ajudar com a lineup, redes sociais ou curiosidades sobre o time de CS. Em que posso ajudar?";
  }

  // 2. Pergunta sobre escalação/lineup
  if (text.includes("escalação") || text.includes("lineup") || text.includes("time") || text.includes("jogadores") || text.includes("quem joga")) {
    const lineupString = furiaData.lineup.map(p => `${p.name} (${p.role})`).join(", ");
    return `A lineup atual de CS2 da FURIA é: ${lineupString}. O técnico é o ${furiaData.coach}!`;
  }

  // 3. Pergunta sobre próximo jogo
  if (text.includes("próximo jogo") || text.includes("quando joga") || text.includes("agenda")) {
    return `Ainda não tenho acesso à agenda em tempo real. Para saber dos próximos jogos, confira o site da HLTV (${furiaData.socialMedia.hltv}) ou o Twitter oficial (${furiaData.socialMedia.twitter})!`;
  }

  // 4. Pergunta sobre último resultado
  if (text.includes("último jogo") || text.includes("resultado") || text.includes("ganhou") || text.includes("perdeu")) {
    return `Não tenho o resultado do último jogo aqui. Recomendo checar na HLTV (${furiaData.socialMedia.hltv}) para os resultados mais recentes e estatísticas detalhadas!`;
  }

  // 5. Pergunta sobre redes sociais
  if (text.includes("redes sociais") || text.includes("twitter") || text.includes("instagram") || text.includes("hltv")) {
    return `Claro! Siga a FURIA:\n- Twitter: ${furiaData.socialMedia.twitter}\n- Instagram: ${furiaData.socialMedia.instagram}\n- HLTV: ${furiaData.socialMedia.hltv}`;
  }

  // 6. Pedido de curiosidade/trivia
  if (text.includes("curiosidade") || text.includes("fato") || text.includes("trivia")) {
    const randomIndex = Math.floor(Math.random() * furiaData.trivia.length);
    return furiaData.trivia[randomIndex];
  }

  // 7. Informações gerais / O que faz
  if (text.includes("o que você faz") || text.includes("ajuda") || text.includes("info")) {
      return "Posso te informar sobre a lineup atual do time de CS, links para redes sociais e HLTV, e algumas curiosidades. Pergunte sobre a escalação, por exemplo!";
  }

  // 8. Agradecimento
  if (text.includes("obrigado") || text.includes("obg") || text.includes("valeu")) {
    return "De nada! Precisando, é só chamar. #DIADEFURIA";
  }

  // 9. Resposta padrão
  return `Desculpe, ainda estou aprendendo e não entendi "${userText}". Tente perguntar sobre a escalação, redes sociais ou pedir uma curiosidade.`;
};


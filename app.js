// Blackjack Strategy Data
const strategyData = {
  manos_duras: {
    '5-8': { '2': 'Pedir', '3': 'Pedir', '4': 'Pedir', '5': 'Pedir', '6': 'Pedir', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '9': { '2': 'Pedir', '3': 'Doblar', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '10': { '2': 'Doblar', '3': 'Doblar', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Doblar', '8': 'Doblar', '9': 'Doblar', '10': 'Pedir', 'A': 'Pedir' },
    '11': { '2': 'Doblar', '3': 'Doblar', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Doblar', '8': 'Doblar', '9': 'Doblar', '10': 'Doblar', 'A': 'Pedir' },
    '12': { '2': 'Pedir', '3': 'Pedir', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '13': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '14': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '15': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Rendirse', 'A': 'Pedir' },
    '16': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Pedir', '8': 'Pedir', '9': 'Rendirse', '10': 'Rendirse', 'A': 'Rendirse' },
    '17+': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Plantarse', '8': 'Plantarse', '9': 'Plantarse', '10': 'Plantarse', 'A': 'Plantarse' }
  },
  manos_suaves: {
    'A,2': { '2': 'Pedir', '3': 'Pedir', '4': 'Pedir', '5': 'Doblar', '6': 'Doblar', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    'A,3': { '2': 'Pedir', '3': 'Pedir', '4': 'Pedir', '5': 'Doblar', '6': 'Doblar', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    'A,4': { '2': 'Pedir', '3': 'Pedir', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    'A,5': { '2': 'Pedir', '3': 'Pedir', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    'A,6': { '2': 'Pedir', '3': 'Doblar', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    'A,7': { '2': 'Plantarse', '3': 'Doblar', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Plantarse', '8': 'Plantarse', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    'A,8': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Plantarse', '8': 'Plantarse', '9': 'Plantarse', '10': 'Plantarse', 'A': 'Plantarse' },
    'A,9': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Plantarse', '8': 'Plantarse', '9': 'Plantarse', '10': 'Plantarse', 'A': 'Plantarse' }
  },
  pares: {
    '2,2': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Dividir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '3,3': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Dividir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '4,4': { '2': 'Pedir', '3': 'Pedir', '4': 'Pedir', '5': 'Dividir', '6': 'Dividir', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '5,5': { '2': 'Doblar', '3': 'Doblar', '4': 'Doblar', '5': 'Doblar', '6': 'Doblar', '7': 'Doblar', '8': 'Doblar', '9': 'Doblar', '10': 'Pedir', 'A': 'Pedir' },
    '6,6': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Pedir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '7,7': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Dividir', '8': 'Pedir', '9': 'Pedir', '10': 'Pedir', 'A': 'Pedir' },
    '8,8': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Dividir', '8': 'Dividir', '9': 'Dividir', '10': 'Dividir', 'A': 'Dividir' },
    '9,9': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Plantarse', '8': 'Dividir', '9': 'Dividir', '10': 'Plantarse', 'A': 'Plantarse' },
    '10,10': { '2': 'Plantarse', '3': 'Plantarse', '4': 'Plantarse', '5': 'Plantarse', '6': 'Plantarse', '7': 'Plantarse', '8': 'Plantarse', '9': 'Plantarse', '10': 'Plantarse', 'A': 'Plantarse' },
    'A,A': { '2': 'Dividir', '3': 'Dividir', '4': 'Dividir', '5': 'Dividir', '6': 'Dividir', '7': 'Dividir', '8': 'Dividir', '9': 'Dividir', '10': 'Dividir', 'A': 'Dividir' }
  }
};

const tips = [
  '💡 Siempre divide Ases y 8s, son las mejores oportunidades',
  '💡 Nunca dividas 10s, 20 es una excelente mano',
  '💡 Dobla en 11 siempre (excepto contra As del dealer)',
  '💡 Contra cartas bajas del dealer (2-6), deja que se pase',
  '💡 El seguro nunca es una buena apuesta matemáticamente',
  '💡 Con mano suave puedes pedir sin riesgo inmediato de pasarte',
  '💡 La estrategia básica reduce la ventaja de la casa a ~0.5%',
  '💡 Practica hasta que las decisiones sean automáticas'
];

// Game State
let gameState = {
  correct: 0,
  incorrect: 0,
  streak: 0,
  currentHand: null,
  handFilter: 'all',
  examMode: false,
  examQuestions: [],
  examAnswers: [],
  examCurrentQuestion: 0
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeTrainingMode();
  initializeTablesMode();
  initializeExamMode();
  showRandomTip();
  generateNewHand();
});

function showRandomTip() {
  const tipElement = document.getElementById('tipOfDay');
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipElement.textContent = randomTip;
}

function initializeNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetMode = tab.dataset.tab;
      switchMode(targetMode);
      
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function switchMode(mode) {
  const modes = document.querySelectorAll('.mode-section');
  modes.forEach(m => m.classList.remove('active'));
  
  const targetMode = document.getElementById(`${mode}-mode`);
  if (targetMode) {
    targetMode.classList.add('active');
  }
}

function initializeTrainingMode() {
  const actionButtons = document.querySelectorAll('#actionButtons .btn--action');
  actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      handleAction(btn.dataset.action);
    });
  });

  document.getElementById('nextHand').addEventListener('click', () => {
    generateNewHand();
  });

  document.getElementById('handFilter').addEventListener('change', (e) => {
    gameState.handFilter = e.target.value;
    generateNewHand();
  });

  document.getElementById('resetStats').addEventListener('click', () => {
    gameState.correct = 0;
    gameState.incorrect = 0;
    gameState.streak = 0;
    updateStats();
  });

  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('congratsModal').style.display = 'none';
  });
}

function generateNewHand() {
  const filter = gameState.handFilter;
  let hand;

  if (filter === 'hard') {
    hand = generateHardHand();
  } else if (filter === 'soft') {
    hand = generateSoftHand();
  } else if (filter === 'pair') {
    hand = generatePairHand();
  } else {
    const types = ['hard', 'soft', 'pair'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    if (randomType === 'hard') hand = generateHardHand();
    else if (randomType === 'soft') hand = generateSoftHand();
    else hand = generatePairHand();
  }

  gameState.currentHand = hand;
  displayHand(hand);
  resetActionButtons();
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('nextHand').style.display = 'none';
}

function generateHardHand() {
  const dealerCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
  const dealerCard = dealerCards[Math.floor(Math.random() * dealerCards.length)];
  
  const hardTotals = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const total = hardTotals[Math.floor(Math.random() * hardTotals.length)];
  
  let card1, card2;
  do {
    card1 = Math.floor(Math.random() * 10) + 2;
    card2 = total - card1;
  } while (card2 < 2 || card2 > 11 || card1 === card2 || (card1 === 11 && card2 !== 11) || (card2 === 11 && card1 !== 11));

  return {
    type: 'hard',
    dealerCard,
    playerCard1: card1,
    playerCard2: card2,
    total
  };
}

function generateSoftHand() {
  const dealerCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
  const dealerCard = dealerCards[Math.floor(Math.random() * dealerCards.length)];
  
  const secondCard = Math.floor(Math.random() * 9) + 2;
  
  return {
    type: 'soft',
    dealerCard,
    playerCard1: 'A',
    playerCard2: secondCard,
    total: 11 + secondCard
  };
}

function generatePairHand() {
  const dealerCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
  const dealerCard = dealerCards[Math.floor(Math.random() * dealerCards.length)];
  
  const pairCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
  const pairCard = pairCards[Math.floor(Math.random() * pairCards.length)];
  
  return {
    type: 'pair',
    dealerCard,
    playerCard1: pairCard,
    playerCard2: pairCard,
    total: pairCard === 'A' ? 12 : (pairCard === '10' ? 20 : parseInt(pairCard) * 2)
  };
}

function displayHand(hand) {
  const dealerCardEl = document.getElementById('dealerCard');
  const playerCard1El = document.getElementById('playerCard1');
  const playerCard2El = document.getElementById('playerCard2');
  const handInfoEl = document.getElementById('handInfo');

  dealerCardEl.textContent = getCardDisplay(hand.dealerCard);
  dealerCardEl.className = 'card dealer-card' + (isRedCard(hand.dealerCard) ? ' red' : '');

  playerCard1El.textContent = getCardDisplay(hand.playerCard1);
  playerCard1El.className = 'card player-card' + (isRedCard(hand.playerCard1) ? ' red' : '');

  playerCard2El.textContent = getCardDisplay(hand.playerCard2);
  playerCard2El.className = 'card player-card' + (isRedCard(hand.playerCard2) ? ' red' : '');

  let handType = '';
  if (hand.type === 'soft') {
    handType = `Mano Suave (${hand.total})`;
  } else if (hand.type === 'pair') {
    handType = `Par de ${hand.playerCard1}s (${hand.total})`;
  } else {
    handType = `Mano Dura (${hand.total})`;
  }
  handInfoEl.textContent = handType;
}

function getCardDisplay(card) {
  if (card === 'A') return '🂡';
  if (card === '10' || card === 10) return '10';
  if (card === 'J') return 'J';
  if (card === 'Q') return 'Q';
  if (card === 'K') return 'K';
  return card.toString();
}

function isRedCard(card) {
  return Math.random() > 0.5;
}

function resetActionButtons() {
  const buttons = document.querySelectorAll('#actionButtons .btn--action');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('selected');
  });
}

function handleAction(action) {
  const correctAction = getCorrectAction(gameState.currentHand);
  const isCorrect = action === correctAction || correctAction.includes(action);

  if (isCorrect) {
    gameState.correct++;
    gameState.streak++;
    if (gameState.streak === 10) {
      document.getElementById('congratsModal').style.display = 'flex';
    }
  } else {
    gameState.incorrect++;
    gameState.streak = 0;
  }

  updateStats();
  showFeedback(action, correctAction, isCorrect);
  disableActionButtons();
  document.getElementById('nextHand').style.display = 'block';
}

function getCorrectAction(hand) {
  const dealerCard = hand.dealerCard;
  let handKey;

  if (hand.type === 'pair') {
    handKey = `${hand.playerCard1},${hand.playerCard2}`;
    return strategyData.pares[handKey][dealerCard];
  } else if (hand.type === 'soft') {
    handKey = `A,${hand.playerCard2}`;
    return strategyData.manos_suaves[handKey][dealerCard];
  } else {
    const total = hand.total;
    if (total <= 8) handKey = '5-8';
    else if (total >= 17) handKey = '17+';
    else handKey = total.toString();
    return strategyData.manos_duras[handKey][dealerCard];
  }
}

function showFeedback(userAction, correctAction, isCorrect) {
  const feedbackEl = document.getElementById('feedback');
  feedbackEl.style.display = 'block';
  feedbackEl.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');

  const resultText = isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto';
  const actionText = isCorrect 
    ? `Has elegido correctamente: <strong>${userAction}</strong>` 
    : `Has elegido: <strong>${userAction}</strong>. La acción correcta es: <strong>${correctAction}</strong>`;

  const explanation = getExplanation(gameState.currentHand, correctAction);

  feedbackEl.innerHTML = `
    <h3>${resultText}</h3>
    <p>${actionText}</p>
    <p>${explanation}</p>
  `;
}

function getExplanation(hand, action) {
  const explanations = {
    'Dividir': 'Dividir te da dos oportunidades de mejorar tu mano.',
    'Doblar': 'Doblar duplica tu apuesta cuando tienes ventaja estadística.',
    'Plantarse': 'Plantarte evita que te pases y deja que el dealer juegue su mano.',
    'Pedir': 'Pedir te da una carta adicional para mejorar tu mano.',
    'Rendirse': 'Rendirse minimiza pérdidas en situaciones muy desfavorables.'
  };

  let baseExplanation = explanations[action.split('/')[0]] || '';

  if (hand.type === 'pair' && (hand.playerCard1 === '8' || hand.playerCard1 === 'A')) {
    baseExplanation += ' Siempre divide Ases y 8s para maximizar tus probabilidades.';
  }

  if (hand.dealerCard >= '2' && hand.dealerCard <= '6') {
    baseExplanation += ' El dealer tiene carta baja, mayor probabilidad de pasarse.';
  } else if (['7', '8', '9', '10', 'A'].includes(hand.dealerCard)) {
    baseExplanation += ' El dealer tiene carta alta, probablemente tendrá una mano fuerte.';
  }

  return baseExplanation;
}

function disableActionButtons() {
  const buttons = document.querySelectorAll('#actionButtons .btn--action');
  buttons.forEach(btn => btn.disabled = true);
}

function updateStats() {
  document.getElementById('correct').textContent = gameState.correct;
  document.getElementById('incorrect').textContent = gameState.incorrect;
  document.getElementById('streak').textContent = gameState.streak;
  
  const total = gameState.correct + gameState.incorrect;
  const accuracy = total > 0 ? Math.round((gameState.correct / total) * 100) : 0;
  document.getElementById('accuracy').textContent = accuracy + '%';
}

// Tables Mode
function initializeTablesMode() {
  const tableTabs = document.querySelectorAll('.table-tab');
  tableTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tableType = tab.dataset.table;
      displayStrategyTable(tableType);
      
      tableTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
  
  displayStrategyTable('hard');
}

function displayStrategyTable(type) {
  const container = document.getElementById('strategyTableContainer');
  let data, title;

  if (type === 'hard') {
    data = strategyData.manos_duras;
    title = 'Manos Duras (sin As o con As contado como 1)';
  } else if (type === 'soft') {
    data = strategyData.manos_suaves;
    title = 'Manos Suaves (con As contado como 11)';
  } else if (type === 'pair') {
    data = strategyData.pares;
    title = 'Pares (dos cartas iguales)';
  }

  let html = `<div class="strategy-table"><h3>${title}</h3><table>`;
  html += '<thead><tr><th>Mano</th>';
  
  const dealerCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
  dealerCards.forEach(card => {
    html += `<th>${card}</th>`;
  });
  html += '</tr></thead><tbody>';

  Object.keys(data).forEach(handKey => {
    html += `<tr><td><strong>${handKey}</strong></td>`;
    dealerCards.forEach(dealerCard => {
      const action = data[handKey][dealerCard];
      const actionClass = getActionClass(action);
      const displayAction = action.split('/')[0];
      html += `<td class="${actionClass}">${displayAction}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

function getActionClass(action) {
  const baseAction = action.split('/')[0].toLowerCase();
  if (baseAction === 'plantarse') return 'plantarse';
  if (baseAction === 'pedir') return 'pedir';
  if (baseAction === 'doblar') return 'doblar';
  if (baseAction === 'dividir') return 'dividir';
  if (baseAction === 'rendirse') return 'rendirse';
  return '';
}

// Exam Mode
function initializeExamMode() {
  document.getElementById('startExam').addEventListener('click', startExam);
  document.getElementById('retryExam').addEventListener('click', startExam);
  document.getElementById('backToTraining').addEventListener('click', () => {
    switchMode('training');
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active');
      if (tab.dataset.tab === 'training') tab.classList.add('active');
    });
  });
}

function startExam() {
  gameState.examQuestions = [];
  gameState.examAnswers = [];
  gameState.examCurrentQuestion = 0;

  for (let i = 0; i < 20; i++) {
    const types = ['hard', 'soft', 'pair'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    let hand;
    if (randomType === 'hard') hand = generateHardHand();
    else if (randomType === 'soft') hand = generateSoftHand();
    else hand = generatePairHand();
    gameState.examQuestions.push(hand);
  }

  document.getElementById('examStart').style.display = 'none';
  document.getElementById('examResults').style.display = 'none';
  document.getElementById('examInProgress').style.display = 'block';

  showExamQuestion();
}

function showExamQuestion() {
  const questionNum = gameState.examCurrentQuestion;
  if (questionNum >= 20) {
    showExamResults();
    return;
  }

  const hand = gameState.examQuestions[questionNum];
  document.getElementById('examQuestion').textContent = questionNum + 1;

  const dealerCardEl = document.getElementById('examDealerCard');
  const playerCard1El = document.getElementById('examPlayerCard1');
  const playerCard2El = document.getElementById('examPlayerCard2');
  const handInfoEl = document.getElementById('examHandInfo');

  dealerCardEl.textContent = getCardDisplay(hand.dealerCard);
  dealerCardEl.className = 'card dealer-card' + (isRedCard(hand.dealerCard) ? ' red' : '');

  playerCard1El.textContent = getCardDisplay(hand.playerCard1);
  playerCard1El.className = 'card player-card' + (isRedCard(hand.playerCard1) ? ' red' : '');

  playerCard2El.textContent = getCardDisplay(hand.playerCard2);
  playerCard2El.className = 'card player-card' + (isRedCard(hand.playerCard2) ? ' red' : '');

  let handType = '';
  if (hand.type === 'soft') {
    handType = `Mano Suave (${hand.total})`;
  } else if (hand.type === 'pair') {
    handType = `Par de ${hand.playerCard1}s (${hand.total})`;
  } else {
    handType = `Mano Dura (${hand.total})`;
  }
  handInfoEl.textContent = handType;

  const examActionButtons = document.querySelectorAll('#examActionButtons .btn--action');
  examActionButtons.forEach(btn => {
    btn.classList.remove('selected');
    btn.onclick = () => handleExamAction(btn.dataset.action);
  });
}

function handleExamAction(action) {
  gameState.examAnswers.push(action);
  gameState.examCurrentQuestion++;
  showExamQuestion();
}

function showExamResults() {
  document.getElementById('examInProgress').style.display = 'none';
  document.getElementById('examResults').style.display = 'block';

  let correctCount = 0;
  const results = [];

  gameState.examQuestions.forEach((hand, index) => {
    const userAnswer = gameState.examAnswers[index];
    const correctAnswer = getCorrectAction(hand);
    const isCorrect = userAnswer === correctAnswer || correctAnswer.includes(userAnswer);
    
    if (isCorrect) correctCount++;
    
    results.push({
      hand,
      userAnswer,
      correctAnswer,
      isCorrect
    });
  });

  const percentage = Math.round((correctCount / 20) * 100);
  
  document.getElementById('examScore').innerHTML = `
    <h3>Puntuación: ${correctCount}/20</h3>
    <p style="font-size: 24px; margin-top: 12px;">Precisión: ${percentage}%</p>
  `;

  let analysisText = '';
  if (percentage >= 90) {
    analysisText = '🎉 ¡Excelente! Dominas la estrategia básica.';
  } else if (percentage >= 75) {
    analysisText = '👍 Muy bien, pero aún hay margen de mejora.';
  } else if (percentage >= 60) {
    analysisText = '📚 Necesitas más práctica. Revisa las tablas de estrategia.';
  } else {
    analysisText = '⚠️ Necesitas estudiar más la estrategia básica antes de jugar.';
  }

  const weakAreas = analyzeWeakAreas(results);
  
  document.getElementById('examAnalysis').innerHTML = `
    <h4>Análisis</h4>
    <p>${analysisText}</p>
    ${weakAreas ? `<p style="margin-top: 12px;">Áreas a mejorar: ${weakAreas}</p>` : ''}
  `;

  let reviewHTML = '<h4>Revisión de Respuestas</h4>';
  results.forEach((result, index) => {
    const hand = result.hand;
    const handDesc = `Dealer: ${hand.dealerCard}, Tu mano: ${hand.playerCard1}-${hand.playerCard2}`;
    reviewHTML += `
      <div class="review-item ${result.isCorrect ? 'correct' : 'incorrect'}">
        <h5>Pregunta ${index + 1}: ${handDesc}</h5>
        <p>Tu respuesta: ${result.userAnswer} ${result.isCorrect ? '✅' : '❌'}</p>
        ${!result.isCorrect ? `<p>Respuesta correcta: ${result.correctAnswer}</p>` : ''}
      </div>
    `;
  });

  document.getElementById('examReview').innerHTML = reviewHTML;
}

function analyzeWeakAreas(results) {
  const errors = { hard: 0, soft: 0, pair: 0 };
  const totals = { hard: 0, soft: 0, pair: 0 };

  results.forEach(result => {
    totals[result.hand.type]++;
    if (!result.isCorrect) {
      errors[result.hand.type]++;
    }
  });

  const weaknesses = [];
  if (totals.hard > 0 && errors.hard / totals.hard > 0.3) weaknesses.push('manos duras');
  if (totals.soft > 0 && errors.soft / totals.soft > 0.3) weaknesses.push('manos suaves');
  if (totals.pair > 0 && errors.pair / totals.pair > 0.3) weaknesses.push('pares');

  return weaknesses.length > 0 ? weaknesses.join(', ') : null;
}
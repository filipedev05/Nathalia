document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti-container');

    // Função para criar um único confetti
    const createConfetti = () => {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Posição inicial aleatória (largura total da tela)
        const startX = Math.random() * window.innerWidth;
        confetti.style.left = `${startX}px`;

        // Cor aleatória (para simular as cores da festa)
        const colors = ['#ff99aa', '#ffd1dc', '#f7d1ff', '#a0dfff', '#ffdf99'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;

        // Tamanho aleatório
        const size = Math.random() * 8 + 4; // 4px a 12px
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.borderRadius = size > 6 ? '50%' : '2px'; // Formato redondo ou quadrado
        
        // Duração e Atraso de animação (para parecer que estão caindo em momentos diferentes)
        const duration = Math.random() * 5 + 5; // 5s a 10s
        const delay = Math.random() * 5; // 0s a 5s

        // Aplica a animação
        confetti.style.animation = `fall ${duration}s linear ${delay}s infinite`;

        // Keyframes de queda
        const styleSheet = document.styleSheets[0];
        const fallKeyframes = `@keyframes fall {
            0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(105vh) rotate(720deg); opacity: 0.5; }
        }`;
        
        // Verifica se a regra já existe antes de adicionar
        if (!styleSheet.cssRules || Array.from(styleSheet.cssRules).every(rule => !rule.cssText.includes('fall {'))) {
            styleSheet.insertRule(fallKeyframes, styleSheet.cssRules.length);
        }

        confettiContainer.appendChild(confetti);

        // Remove o confetti após a animação para limpar o DOM (melhorar a performance)
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    };

    // Cria confetes em um intervalo contínuo
    const createConfettiInterval = () => {
        // Criar um "burst" (explosão) inicial de 20 confetes
        for (let i = 0; i < 20; i++) {
            createConfetti();
        }

        // Continua adicionando mais confetes suavemente
        setInterval(() => {
            createConfetti();
        }, 300); // Cria um novo a cada 300ms
    };

    createConfettiInterval();
});
document.addEventListener('DOMContentLoaded', () => {
    // Lógica da Música
    const musicBtn = document.getElementById('music-btn');
    const audio = document.getElementById('bg-music');
    
    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            musicBtn.innerHTML = "⏸️ Pausar Música";
        } else {
            audio.pause();
            musicBtn.innerHTML = "🎵 Tocar Música";
        }
    });
});
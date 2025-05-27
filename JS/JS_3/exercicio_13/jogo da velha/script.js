document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.getAttribute('data-index');
            if (!gameState[index] && !checkWinner()) {
                gameState[index] = currentPlayer;
                cell.textContent = currentPlayer;
                if (checkWinner()) {
                    alert(`Jogador ${currentPlayer} venceu!`);
                } else if (gameState.every(cell => cell)) {
                    alert('Empate!');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    resetButton.addEventListener('click', () => {
        gameState.fill(null);
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]             // Diagonais
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c];
        });
    }
});
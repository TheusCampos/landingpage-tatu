/**
 * Utilitários Globais
 */

/**
 * Limita a taxa de execução de uma função (Debounce)
 * Ideal para eventos de scroll e resize
 * @param {Function} func - A função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @param {boolean} immediate - Se deve executar imediatamente
 */
export function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * Verifica se é um dispositivo móvel
 */
export const isMobile = () => {
    return window.innerWidth <= 768;
};

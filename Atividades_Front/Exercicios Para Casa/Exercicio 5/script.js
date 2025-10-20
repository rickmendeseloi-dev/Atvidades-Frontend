const paragrafo = document.getElementById('mensagem');
const input = document.getElementById('refeicaoInput');

function normalize(text) {
    return text
        .trim()
        .toLowerCase()
        .normalize('NFD')                   
        .replace(/[\u0300-\u036f]/g, '')    
        .replace(/[^a-z0-9\s]/g, ' ')       
        .replace(/\s+/g, ' ')               
        .trim();
}

input.addEventListener('input', function() {
    const raw = input.value;
    const textoDigitado = normalize(raw);

    if (textoDigitado === '') {
        paragrafo.textContent = '';
        return;
    }

    const isBreakfast = (
        textoDigitado === 'pao com ovo' ||
        textoDigitado === 'pao e ovo' ||
        textoDigitado === 'pao ovo' ||
        (textoDigitado.includes('pao') && textoDigitado.includes('ovo'))
    );

    const isLunch = (
        textoDigitado === 'feijao com arroz' ||
        textoDigitado === 'feijao e arroz' ||
        textoDigitado === 'arroz com feijao' ||
        textoDigitado === 'arroz e feijao' ||
        (textoDigitado.includes('feijao') && textoDigitado.includes('arroz'))
    );

    if (isBreakfast) {
        paragrafo.textContent = 'É café da manhã';
    } else if (isLunch) {
        paragrafo.textContent = 'É almoço';
    } else {
        paragrafo.textContent = 'É jantar';
    }
});
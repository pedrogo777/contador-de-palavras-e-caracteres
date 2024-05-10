const inputTexto = document.querySelector('textarea');
const areaQntdCaracteres = document.querySelector('#cntCaracteres');
const areaQntdPalavras = document.querySelector('#cntPalavras')
let qtdCaracteres = 0;
let qtdPalavras = 0;

inputTexto.addEventListener('input', function() {
    qtdCaracteres = inputTexto.value.length;
    areaQntdCaracteres.textContent = `${qtdCaracteres} caractéres`;
    
    qtdPalavras = inputTexto.value.trim().split(' ');
    areaQntdPalavras.textContent = `${qtdPalavras.length} palavras`;
})
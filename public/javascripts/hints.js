function binaryHint() {
    if (document.getElementById('binaryHint1').textContent === '') {
        document.getElementById('binaryHint1').textContent = '(Fouille dans le code source, les commentaires sont souvent utiles !)'
    } else {
        document.getElementById('binaryHint2').textContent = 'Trouve le code dans les cookies et visite la page Admin'
    }
}

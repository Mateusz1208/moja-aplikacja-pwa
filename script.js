
console.log('Skrypt działa');


document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        heading.textContent = 'Kliknięto nagłówek!';
        console.log('Nagłówek został kliknięty.');
    });
});

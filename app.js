const images = document.querySelectorAll('img');
const textArea = document.getElementById('res');

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        console.log(e.target.alt);
        textArea.value = `You click on ${e.target.alt}`;
    })
})
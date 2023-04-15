const images = document.querySelectorAll('img');
const textArea = document.getElementById('res');

images.forEach((img) => {
    img.addEventListener('click', (e) => {
        let value = e.target.alt;
        // console.log(e.target.alt);
        textArea.value = `You click on ${value.charAt(0).toUpperCase() + value.substring(1)}`;
    });
});
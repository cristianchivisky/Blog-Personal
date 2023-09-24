const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_2u3ty6k';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'ENVIAR MENSAJE';
    alert('Mensaje enviado correctamente. Gracias por contactarme.');
    }, (err) => {
    btn.value = 'ENVIAR MENSAJE';
    alert(JSON.stringify(err));
    });
});
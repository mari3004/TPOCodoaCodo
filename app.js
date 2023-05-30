function carrito(){
    window.location.href = "https://media.tenor.com/4EAKayO3n_cAAAAC/kitten-cat.gif"
}

function ingresar(){
    window.location.href = "https://media.tenor.com/l37il_hI3tEAAAAC/smilecat.gif"
}

// Uso de API
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=4';

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=470e24e8-de87-4d54-9c66-5f450b5a125b';

const API_URL_FAVORITES_DELETE = (id) => `https://api.thecatapi.com/v1/favourites/${id}`;

const API_URL_UPLOAD = 'https://api.thecatapi.com/v1/images/upload';

const spanError = document.getElementById('error');

async function loadRandomMichis(){
    const res = await fetch(API_URL_RANDOM);
    const data =  await res.json();

    console.log('Random');
    console.log(data);
    
    if(res.status !== 200)
    {
        spanError.innerHTML = "Hubo un error: " + res.status;
    }else{
        const imgGato1 =document.getElementById('imgGato1');
        const imgGato2 =document.getElementById('imgGato2');
        const imgGato3 =document.getElementById('imgGato3');
        const imgGato4 =document.getElementById('imgGato4');

        const btn1 =document.getElementById('btn1');
        const btn2 =document.getElementById('btn2');
        const btn3 =document.getElementById('btn3');
        const btn4 =document.getElementById('btn4');
  
        imgGato1.src = data[0].url;
        imgGato2.src = data[1].url;
        imgGato3.src = data[2].url;
        imgGato4.src = data[3].url;

        btn1.onclick =  () => saveFavoriteMichis(data[0].id);
        btn2.onclick = () => saveFavoriteMichis(data[1].id);
        btn3.onclick =  () => saveFavoriteMichis(data[2].id);
        btn4.onclick = () => saveFavoriteMichis(data[3].id);
    }
}
loadRandomMichis();

// Validacion de Formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito tu nombre');
      return;
    }
    var email = document.getElementById('email').value;
    if (email.length < 6) {
      alert('El correo no es valido');
      return;
    }
    var message = document.getElementById('message').value;
    if (message.length < 6) {
      alert('No te olvides de dejarnos tu comentario');
      return;
    }
    this.submit();
  }
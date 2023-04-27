
const p = document.getElementById("text");
async function generar(){
fetch('https://www.affirmations.dev/', {
  mode: 'no-cors'
})
.then(response => {
  response.json
})
.then(data => {
  p.innerText = data;
})
.catch(error => {
  console.error('Error al obtener los datos:', error);
});
}

window.addEventListener('load', generar());

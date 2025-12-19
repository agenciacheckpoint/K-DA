//menu hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    nav.classList.remove("closed");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    nav.classList.add("closed");
})


// esto es del paralax del inicio, no tocar
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const parallax = document.querySelector('.parallax');
  const content = document.querySelector('.parallax-content');
  const isMobile = window.matchMedia("(max-width: 550px)").matches;
  const offset = isMobile ? 40 : 0;

  parallax.style.backgroundPositionY = `${offset + scrollTop * 0.5}px`;
  content.style.opacity = 1 - scrollTop / 400;
});


//botonera chicas

let ahri = document.getElementById("btnahri");
let akali = document.getElementById("btnakali");
let eve = document.getElementById("btneve");
let kai = document.getElementById("btnkai");
let img = document.getElementById("galleryimg");

//descripciones cambian

let infoTitle = document.getElementById("descripcion-title");
let infoDesc = document.getElementById("descripcion");

let buttons = [ahri, akali, eve, kai];

function selectButton(selectedBtn) {
  buttons.forEach(btn => {
    if (btn === selectedBtn) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

ahri.onclick = function() {
  img.src = "./images/ahri.jpg"
  selectButton(ahri);
  infoTitle.textContent = "ahri //"
  infoDesc.innerHTML = "Ahri es la líder, fundadora y vocalista principal de K/DA, y cumple un rol central dentro del grupo tanto en lo musical como en lo creativo.<br><br>Su carisma natural y su seguridad arriba del escenario hacen que destaque sin esfuerzo. Tiene una personalidad tranquila, pero firme, y transmite confianza a través de su forma de expresarse y de liderar al equipo. Valora la libertad creativa y la autenticidad, tanto la propia como la de sus compañeras.<br><br>Ahri disfruta descubrir nuevos talentos y acompañarlos en su crecimiento, ayudándolos a encontrar su propia voz sin perder identidad. Su visión está puesta en crear algo que trascienda, donde cada integrante pueda brillar por sí misma sin dejar de formar parte de un todo."

}

akali.onclick = function() {
  img.src = "./images/akali.jpg"
  selectButton(akali);
  infoTitle.textContent = "akali //"
  infoDesc.innerHTML = "Akali es la rapera principal de K/DA, conocida por su estilo punk, urbano y grafitero, y por una actitud audaz que no pasa desapercibida.<br><br>Su energía mantiene al grupo siempre alerta y enfocado, marcando un contraste fuerte con otras personalidades del equipo. Valora profundamente su independencia creativa y no teme romper esquemas cuando siente que su arte lo pide.<br><br>Akali está en constante movimiento, trabajando en proyectos nuevos y explorando ideas distintas. Para ella, la música es un espacio de expresión personal sin concesiones, y se niega a comprometer su identidad artística, incluso cuando eso implica ir en contra de lo establecido."



}

eve.onclick = function() {
  img.src = "./images/evelynn.jpg"
  selectButton(eve);
  infoTitle.textContent = "evelynn //"
  infoDesc.innerHTML = "Evelynn es una de las vocalistas principales de K/DA y su presencia sobre el escenario es simplemente hipnótica.<br><br>Disfruta ser el centro de atención y no le gusta quedarse a la sombra de nadie. Su estilo es elegante, provocador y calculado, y sabe exactamente cómo leer la reacción del público y jugar con ella.<br><br>Como cofundadora de K/DA junto a Ahri, Evelynn empuja constantemente al grupo hacia propuestas más arriesgadas y desafiantes. Le atraen los proyectos intensos y fuera de lo común, y siempre busca llevar la identidad del grupo a un lugar más atrevido y emocionante."

}

kai.onclick = function() {
  img.src = "./images/kaisa.jpg"
  selectButton(kai);
  infoTitle.textContent = "kai'sa //"
  infoDesc.innerHTML = "Como bailarina principal y coreógrafa del equipo, Kai’Sa solo se conforma con la perfección.<br><br>Su forma de trabajar es silenciosa pero intensa, siempre enfocada en cada detalle del movimiento y la puesta en escena. Tiene una mirada muy precisa sobre el ritmo, la coordinación y la expresión corporal, lo que eleva el nivel del grupo en cada presentación.<br><br>Kai’Sa tiene una visión cosmopolita de la vida: viaja, observa y absorbe influencias de distintas culturas, estilos y escenas urbanas. Cada rincón del mundo la inspira de una manera distinta, y esa mezcla de experiencias se refleja en coreografías que se sienten actuales, potentes y cuidadosamente pensadas."

}
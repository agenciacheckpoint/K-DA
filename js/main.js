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
  infoDesc.textContent = "Como líder, fundadora y vocalista principal de K/DA, Ahri deslumbra a los fans con su carisma y confianza. Ella es la pieza central del grupo. De carácter tranquilo, defiende la libertad de expresión y la naturalidad, tanto la suya como la de sus compañeras. Ahri se enorgullece de descubrir talentos nuevos y de ayudarles a alcanzar su máximo potencial."
}

akali.onclick = function() {
  img.src = "./images/akali.jpg"
  selectButton(akali);
  infoTitle.textContent = "akali //"
  infoDesc.textContent = "Akali es la rapera principal del grupo, con su estilo punk grafitero y su toque audaz y peligroso. Ella mantiene al equipo constantemente enfocado y valora su independencia creativa ante todo. Akali siempre está trabajando en proyectos nuevos y se niega a comprometer su arte."
}

eve.onclick = function() {
  img.src = "./images/evelynn.jpg"
  selectButton(eve);
  infoTitle.textContent = "evelynn //"
  infoDesc.textContent = "Evelynn es la vocalista líder de K/DA y su presencia sobre el escenario es sencillamente hipnótica. No le gusta estar a la sombra de nadie y se deleita con la reacción del público ante su apariencia estilizada. Como cofundadora de K/DA junto con Ahri, Evelynn empuja al grupo hacia sus proyectos creativos más arriesgados y emocionantes."
}

kai.onclick = function() {
  img.src = "./images/kaisa.jpg"
  selectButton(kai);
  infoTitle.textContent = "kai'sa //"
  infoDesc.textContent = "Como bailarina principal y coreógrafa del equipo, Kai'Sa solo se conforma con la perfección. Su enfoque silencioso pero intenso, su misticismo y su impecable atención al detalle impulsan a su equipo. Kai'Sa tiene una visión cosmopolita de la vida, por lo que cada rincón del mundo la inspira en una forma particular."
}
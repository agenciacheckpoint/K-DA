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




document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = Array.from(document.querySelectorAll('.miniaturas img'));
  const mainImage = document.getElementById('mainImage');
  const progressFill = document.querySelector('.progress-fill');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const thumbnailList = document.getElementById('miniaturasList');

  if (!thumbnailList || !mainImage) return;
  if (!thumbnails.length) return;

  let currentIndex = 0;
  let visibleThumbs = 7;
  let offset = 0;

  function getGap() {
    const g = parseFloat(getComputedStyle(thumbnailList).gap);
    return Number.isFinite(g) ? g : 8;
  }

  function calcVisibleThumbs() {
    const thumbW = thumbnails[0].getBoundingClientRect().width + getGap();
    const containerW = thumbnailList.parentElement.getBoundingClientRect().width;
    visibleThumbs = Math.max(1, Math.floor(containerW / thumbW));
  }

  function clampOffset() {
    const maxOffset = Math.max(0, thumbnails.length - visibleThumbs);
    if (offset > maxOffset) offset = maxOffset;
    if (offset < 0) offset = 0;
  }

  function updateTranslate() {
    const step = thumbnails[0].getBoundingClientRect().width + getGap();
    thumbnailList.style.transform = `translateX(${-offset * step}px)`;
  }

  function jumpThumbToLeft(index) {
    // Mueve el carrusel para que la miniatura seleccionada quede a la izquierda
    offset = index;
    clampOffset();
    updateTranslate();
  }

  function updateMainImage(index) {
    if (index < 0 || index >= thumbnails.length) return;

    thumbnails.forEach(t => t.classList.remove('active'));
    const t = thumbnails[index];
    t.classList.add('active');

    mainImage.src = t.dataset.large || t.src;
    currentIndex = index;

    if (progressFill) {
      const percent = ((index + 1) / thumbnails.length) * 100;
      progressFill.style.width = percent + '%';
    }

    jumpThumbToLeft(index); // aquí aplicamos el efecto
  }

  // Listeners
  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      updateMainImage(i);
    });
  });

  nextBtn?.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
      updateMainImage(currentIndex + 1);
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentIndex > 0) {
      updateMainImage(currentIndex - 1);
    }
  });

  window.addEventListener('resize', () => {
    calcVisibleThumbs();
    clampOffset();
    updateTranslate();
  });

  // Inicializar
  calcVisibleThumbs();
  updateMainImage(0);
});

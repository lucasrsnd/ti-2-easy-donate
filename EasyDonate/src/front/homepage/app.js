const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  function showSlide(index) {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (index + carouselItems.length) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
    updateCarousel();
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // Rotação automática
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 20000); // 20 segundos
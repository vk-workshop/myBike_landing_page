document.querySelectorAll('.compare__tilt-container').forEach(container => {
  const img = container.querySelector('.compare__tilt-img');

  container.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = container.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    const tiltX = y * 50;
    const tiltY = -x * 50;

    const shadowX = x * 40;
    const shadowY = y * 40;
    const shadowBlur = 16;

    img.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`;
    img.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(232, 232, 240, 0.4)`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    img.style.boxShadow = '';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const exploreButton = document.querySelector('.detail__explore-btn');
  const burger = document.querySelector('.header__icon--burger');
  const close = document.querySelector('.header__icon--close');
  const body = document.body;

  const addClass = () => {
    body.style.overflow = 'hidden'
  }

  const removeClass = () => {
    body.style.overflow = 'auto'
  }

  burger.addEventListener('click', addClass);
  close.addEventListener('click', removeClass);

  exploreButton.addEventListener('click', () => {
    const detailsSection = document.getElementById('detail');
    detailsSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// ========== ВЕРТИКАЛЬНЫЙ СЛАЙДЕР ==========
const portfolioSlider = document.querySelector('.portfolio-slider');
const slideRight = document.querySelector('.portfolio-right');
const slideLeft = document.querySelector('.portfolio-left');
const upButton = document.querySelector('.port-up-button');
const downButton = document.querySelector('.port-down-button');

// Считаем количество слайдов (прямые дети .portfolio-right)
const slides = slideRight.querySelectorAll(':scope > div');
const slidesLength = slides.length;

console.log('Найдено слайдов:', slidesLength); // Для отладки

let activeSlideIndex = 0;

// Начальная позиция: левая панель сдвинута вверх на (n-1) экранов
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Поддержка клавиш ↑ ↓
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') changeSlide('up');
    if (e.key === 'ArrowDown') changeSlide('down');
});

function changeSlide(direction) {
    const sliderHeight = portfolioSlider.clientHeight;
    console.log('Высота слайдера:', sliderHeight, 'Активный слайд:', activeSlideIndex);

    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    }

    console.log('Новый индекс:', activeSlideIndex);

    // Двигаем правую панель вверх (отрицательный translateY)
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    // Двигаем левую панель вниз (положительный translateY)
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

// ========== БУРГЕР-МЕНЮ ==========
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navLayers = document.querySelectorAll('.nav');

if (openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
        navLayers.forEach(nav => nav.classList.add('visible'));
    });

    closeBtn.addEventListener('click', () => {
        navLayers.forEach(nav => nav.classList.remove('visible'));
    });

    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener('click', () => {
            navLayers.forEach(nav => nav.classList.remove('visible'));
        });
    });
}

// ========== ОБНОВЛЕНИЕ ПРИ ИЗМЕНЕНИИ РАЗМЕРА ОКНА ==========
window.addEventListener('resize', () => {
    const sliderHeight = portfolioSlider.clientHeight;
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
});
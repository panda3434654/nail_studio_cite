//БУРГЕР-МЕНЮ
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const navLayers = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    navLayers.forEach(nav => nav.classList.add('visible'));
});

closeBtn.addEventListener('click', () => {
    navLayers.forEach(nav => nav.classList.remove('visible'));
});

// Закрытие меню при клике на ссылку
const menuLinks = document.querySelectorAll('.menu-list a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLayers.forEach(nav => nav.classList.remove('visible'));
    });
});



//  ФОРМА ЗАПИСИ 
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');
const manualLink = document.getElementById('manualLink');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('clientName').value.trim();
        const phone = document.getElementById('clientPhone').value.trim();
        const service = document.getElementById('serviceType').value;
        const date = document.getElementById('bookingDate').value || 'не указана';
        const time = document.getElementById('bookingTime').value || 'не указано';
        const comment = document.getElementById('bookingComment').value.trim() || 'нет';

        const message = `🌸 *НОВАЯ ЗАПИСЬ* 🌸\n\n` +
                       `👤 Имя: ${name}\n` +
                       `📞 Телефон: ${phone}\n` +
                       `💅 Услуга: ${service}\n` +
                       `📅 Дата: ${date}\n` +
                       `⏰ Время: ${time}\n` +
                       `📝 Пожелания: ${comment}`;

        const encodedMessage = encodeURIComponent(message);
        const telegramUrl = `https://t.me/+wvjd4HcWhzQzYzdi?text=${encodedMessage}`;

        bookingForm.style.display = 'none';
        bookingSuccess.style.display = 'block';
        manualLink.href = telegramUrl;

        window.open(telegramUrl, '_blank');
    });
}
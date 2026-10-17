/*
Theme Name: Zarabotok Live Авторская
Theme URI: https://zarabotoklive.ru
Author: Strannik / Aleksandr
Description: Чистая и быстрая уникальная тема, сверстанная вручную.
Version: 1.0
*/




// Ждем, пока вся страница полностью загрузится
window.addEventListener('load', function() {
    // Находим наш белый экран
    const preloader = document.querySelector('.preloader');

    // Через 1000 миллисекунд (1 секунду) плавно его скрываем
    setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = '0.5s'; // Плавное исчезновение за полсекунды
    }, 1000);
});
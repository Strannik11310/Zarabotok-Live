/*
Theme Name: Zarabotok Live Авторская
Theme URI: https://zarabotoklive.ru
Author: Strannik / Aleksandr
Description: Чистая и быстрая уникальная тема, сверстанная вручную.
Version: 1.0
*/





window.addEventListener('load', function() {
 
    const preloader = document.querySelector('.preloader');

 
    setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        preloader.style.transition = '0.5s'; // Плавное исчезновение за полсекунды
    }, 1000);
});

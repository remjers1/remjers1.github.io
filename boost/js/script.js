var main_strong = document.getElementById('main__strong');
var gamburger = document.getElementById('main__box-gamburger');
var bul = false;
var nav = gamburger.querySelector('nav');

function gamburgerButton(el) {
    if (main_strong.classList.contains('main-top')) {
        main_strong.classList.remove('main-top');
    } else {
        main_strong.classList.add('main-top');
    }
    if (main_strong.classList.contains('main-bottom')) {
        main_strong.classList.remove('main-bottom');
    } else {
        main_strong.classList.add('main-bottom');
    }
    if (main_strong.classList.contains('main-center')) {
        main_strong.classList.remove('main-center');
    } else {
        main_strong.classList.add('main-center');
    }

    if (bul == false) {
        gamburger.style.cssText = 'left:0;';
        bul = true;
    } else {
        gamburger.style.cssText = 'left:-100%;';
        bul = false;
    }
}

function Clics(el) {
    gamburger.style.left = '-100%';
    bul = false;
    main_strong.classList.remove('main-center');
    main_strong.classList.remove('main-bottom');
    main_strong.classList.remove('main-top');
}

// Добавляем обработчики событий для всех ссылок внутри навигации
var links = nav.querySelectorAll('a');
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        closeGamburger();
    });
});

function closeGamburger() {
    gamburger.style.left = '-100%';
    bul = false;
    main_strong.classList.remove('main-center');
    main_strong.classList.remove('main-bottom');
    main_strong.classList.remove('main-top');
}




// Меняем прозрачность HEADER
window.onscroll = function() {changeHeaderBackground()};

  function changeHeaderBackground() {
    var header = document.querySelector(".header");
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
      header.style.backgroundColor = "rgba(119, 17, 221, 0.8)";
    } else {
      header.style.backgroundColor = "rgba(119, 17, 221, 1)";
    }
  }
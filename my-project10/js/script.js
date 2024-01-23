var div__header = document.getElementsByClassName('div__header')[0];
var imghead = document.getElementsByClassName('imghead')[0];
var value = false;

function Hover(el) {
div__header.style.display = 'flex';
imghead.style.transform = 'rotate(360deg)';
}

function HideDiv(el) {
div__header.style.display = 'none';
imghead.style.transform = 'rotate(180deg)';
}




function HeadEr(el) {
    if (value == false) {
        div__header.style.display = 'flex';
        imghead.style.transform = 'rotate(360deg)';
        value = true;
    } else {
        div__header.style.display = 'none';
        imghead.style.transform = 'rotate(180deg)';
        value = false;
    }
}





// ICON-MENU
document.addEventListener('click', documentClick);

function documentClick(e) { 
    const targetItem = e.target;
    const menu = document.querySelector('.menu');
    const isMenuIconClicked = targetItem.closest('.icon-menu') !== null;

    if (isMenuIconClicked) {
        document.documentElement.classList.toggle('menu-open');
        // Предотвращаем прокрутку body при открытом меню
        document.body.style.overflow = document.documentElement.classList.contains('menu-open') ? 'hidden' : '';
    } else if (menu !== null && menu.contains(targetItem)) {
        // Если клик произошел внутри меню, не закрывать меню и не предотвращать прокрутку body
    } else {
        // Закрываем меню и восстанавливаем прокрутку body
        document.documentElement.classList.remove('menu-open');
        document.body.style.overflow = '';
    }
}

const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.documentElement.classList.remove('menu-open');
        // Восстанавливаем прокрутку body при закрытии меню
        document.body.style.overflow = '';
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 500);
    });
});




// Foto
function triggerFileInput() {
            var input = document.getElementById("imageInput");
            input.click();
        }

        document.getElementById("imageInput").addEventListener("change", function() {
            // Здесь можно добавить логику обработки выбранного файла, если необходимо
            var file = this.files[0];
            console.log("Выбран файл:", file.name);
});





// WIDEO OR FOTO STAP
// Получаем все элементы с классом 'myVideo'
    var videoElements = document.getElementsByClassName('myVideo');

    // Итерируем по каждому элементу с классом 'myVideo'
    for (var i = 0; i < videoElements.length; i++) {
        var videoElement = videoElements[i];
        var sourceElement = videoElement.querySelector('source');

        // Проверяем наличие пути к видео
        if (!sourceElement || !sourceElement.getAttribute('src').trim()) {
            videoElement.style.display = 'none';
        }
    }


// Получаем все элементы с классом 'myImage'
    var imageElements = document.getElementsByClassName('myImage');

    // Итерируем по каждому элементу с классом 'myImage'
    for (var i = 0; i < imageElements.length; i++) {
        var imageElement = imageElements[i];

        // Проверяем наличие пути к изображению
        if (!imageElement || !imageElement.getAttribute('src').trim()) {
            imageElement.style.display = 'none';
        }
    }




// Кнопка для видео PLAY
function playVideo(button) {
            var videoContainer = button.closest('.myVideo');
            var videoElement = videoContainer.querySelector('video');
            var value2 = false;
            var pauseTime = 0;

            videoElement.addEventListener('playing', function() {
                button.style.display = 'none';
            });

            videoElement.addEventListener('pause', function() {
                if (videoElement.ended) {
                    button.style.display = 'block';
                    pauseTime = 0;
                } else {
                    button.style.display = 'block';
                    pauseTime = videoElement.currentTime;
                }
            });

            videoElement.addEventListener('ended', function() {
                button.style.display = 'block';
                pauseTime = 0;
            });

            if (value2 == false) {
                try {
                    if (pauseTime > 0) {
                        videoElement.currentTime = pauseTime;
                    }
                    videoElement.play();
                    value2 = true;
                } catch (error) {
                    console.error('Ошибка при воспроизведении видео:', error);
                }
            } else {
                videoElement.pause();
                pauseTime = videoElement.currentTime;
                value2 = false;
            }
        }
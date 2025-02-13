const button = document.getElementById('myButton');
const redirectButton = document.getElementById('redirectButton');
const container = document.querySelector('.container');
const fourthButton = document.getElementById('fourthButton');

// Butona mouse ile gelindiğinde rastgele yer değiştirme
button.addEventListener('mouseover', () => {
    const randomX = Math.random() * (container.clientWidth - button.clientWidth);
    const randomY = Math.random() * (container.clientHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

// Yönlendirme butonuna tıklama olayı
redirectButton.addEventListener('click', () => {
    window.location.href = 'nami2.html';
});

// Doja butonuna tıklama olayı
document.getElementById('audioButton').addEventListener('click', function () {
    const audio = new Audio('dojan.mp3');
    audio.play();
});

// Dördüncü butona tıklama olayı
fourthButton.addEventListener('click', function () {
    const audio = new Audio('yes.mp3');
    audio.play();
});

// Rastgele yerlerde Sevgililer Günü emojileri oluştur
function createValentineEmojis(count) {
    const emojis = ['❤️'];
    for (let i = 0; i < count; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'question-mark';
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        let randomX, randomY;
        let isOverlapping;

        do {
            randomX = Math.random() * (container.clientWidth - 30);
            randomY = Math.random() * (container.clientHeight - 30);
            isOverlapping = false;

            const buttonBounds = button.getBoundingClientRect();
            const redirectButtonBounds = redirectButton.getBoundingClientRect();
            const audioButtonBounds = document.getElementById('audioButton').getBoundingClientRect();
            const fourthButtonBounds = fourthButton.getBoundingClientRect();
            const catImageBounds = document.querySelector('.cat-image').getBoundingClientRect();
            const funnyImageBounds = document.querySelector('.funny-image').getBoundingClientRect();
            const bojackImageBounds = document.querySelector('.bojack-image').getBoundingClientRect(); // Bojack resmi için ekleme

            // Çakışma kontrolü
            if (
                (randomX < buttonBounds.right && randomX + 30 > buttonBounds.left && randomY < buttonBounds.bottom && randomY + 30 > buttonBounds.top) ||
                (randomX < redirectButtonBounds.right && randomX + 30 > redirectButtonBounds.left && randomY < redirectButtonBounds.bottom && randomY + 30 > redirectButtonBounds.top) ||
                (randomX < audioButtonBounds.right && randomX + 30 > audioButtonBounds.left && randomY < audioButtonBounds.bottom && randomY + 30 > audioButtonBounds.top) ||
                (randomX < fourthButtonBounds.right && randomX + 30 > fourthButtonBounds.left && randomY < fourthButtonBounds.bottom && randomY + 30 > fourthButtonBounds.top) ||
                (randomX < catImageBounds.right && randomX + 30 > catImageBounds.left && randomY < catImageBounds.bottom && randomY + 30 > catImageBounds.top) ||
                (randomX < funnyImageBounds.right && randomX + 30 > funnyImageBounds.left && randomY < funnyImageBounds.bottom && randomY + 30 > funnyImageBounds.top) ||
                (randomX < bojackImageBounds.right && randomX + 30 > bojackImageBounds.left && randomY < bojackImageBounds.bottom && randomY + 30 > bojackImageBounds.top) // Bojack resmi için çakışma kontrolü
            ) {
                isOverlapping = true; // Çakışma varsa
            }
        } while (isOverlapping); // Çakışma yoksa döngüden çık

        emoji.style.position = 'absolute';
        emoji.style.left = `${randomX}px`;
        emoji.style.top = `${randomY}px`;
        document.body.appendChild(emoji);

        // Emojiye tıklama olayı ekle
        emoji.addEventListener('click', function () {
            const audio = new Audio('Wryyy.m4a');
            audio.play();
        });
    }
}

// Sevgililer Günü emojilerini oluştur
createValentineEmojis(10); // 20 tane emoji oluştur
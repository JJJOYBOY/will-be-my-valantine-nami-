function createRain() {
    const emojis = ['❤️', '💚', '💋', '💕', '😍', '💖', '🌈', '🌼', '🦎']; // Yeşil çiçek ve iguana eklendi
    const star = '⭐'; // Yıldız simgesi
    for (let i = 0; i < 100; i++) { // 100 emoji oluştur
        let emoji = document.createElement('div');
        emoji.className = 'emoji';
        // Emoji ve yıldızı birleştir
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)] + ' ' + star;
        emoji.style.left = Math.random() * 100 + 'vw'; // Rastgele konum
        emoji.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Rastgele süre
        emoji.style.fontSize = (Math.random() * 20 + 20) + 'px'; // Rastgele boyut
        document.body.appendChild(emoji);

        // Animasyonu başlat
        setTimeout(() => {
            emoji.style.animationName = 'fall';
        }, 100);
    }
}
createRain();
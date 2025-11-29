document.addEventListener('DOMContentLoaded', function() {
    const bear = document.getElementById('bear');
    const confettiBtn = document.getElementById('confettiBtn');
    const musicBtn = document.getElementById('musicBtn');
    const animateBearBtn = document.getElementById('animateBear');
    const hugBearBtn = document.getElementById('hugBear');
    const changeBgEffectBtn = document.getElementById('changeBgEffect');
    const sendWishBtn = document.getElementById('sendWish');
    const wishInput = document.querySelector('.wish-input');
    const wishesContainer = document.getElementById('wishesContainer');
    const floatingHearts = document.getElementById('floatingHearts');
    const typingMessage = document.getElementById('typingMessage');
    const bearBgEffect = document.getElementById('bearBgEffect');
    
    let currentBgEffect = 0;
    const bgEffects = ['bubbles', 'sparkles', 'pulse', 'rainbow', 'mixed'];
    
    // Tambahkan hati yang mengambang
    function createFloatingHearts() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 8 + 's';
            heart.style.fontSize = (Math.random() * 20 + 16) + 'px';
            floatingHearts.appendChild(heart);
        }
    }
    
    createFloatingHearts();
    
    // Fungsi untuk membuat efek gelembung
    function createBubbles() {
        bearBgEffect.innerHTML = '<div class="bg-pulse"></div>';
        
        for (let i = 0; i < 15; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bg-bubble';
            bubble.style.width = Math.random() * 60 + 20 + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 15 + 's';
            bubble.style.animationDuration = Math.random() * 10 + 10 + 's';
            
            // Warna gelembung acak
            const colors = [
                'rgba(255, 182, 193, 0.2)',
                'rgba(255, 209, 220, 0.2)',
                'rgba(255, 215, 230, 0.2)',
                'rgba(255, 240, 245, 0.2)'
            ];
            bubble.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            bearBgEffect.appendChild(bubble);
        }
    }
    
    // Fungsi untuk membuat efek sparkle
    function createSparkles() {
        bearBgEffect.innerHTML = '<div class="bg-pulse"></div>';
        
        for (let i = 0; i < 30; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'bg-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            sparkle.style.animationDuration = Math.random() * 2 + 2 + 's';
            
            bearBgEffect.appendChild(sparkle);
        }
    }
    
    // Fungsi untuk efek pulse saja
    function createPulse() {
        bearBgEffect.innerHTML = '<div class="bg-pulse"></div>';
    }
    
    // Fungsi untuk efek rainbow
    function createRainbow() {
        bearBgEffect.innerHTML = '<div class="bg-rainbow"></div>';
    }
    
    // Fungsi untuk efek campuran
    function createMixedEffect() {
        bearBgEffect.innerHTML = '<div class="bg-pulse"></div>';
        
        // Tambahkan gelembung
        for (let i = 0; i < 10; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bg-bubble';
            bubble.style.width = Math.random() * 60 + 20 + 'px';
            bubble.style.height = bubble.style.width;
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 15 + 's';
            bubble.style.animationDuration = Math.random() * 10 + 10 + 's';
            bubble.style.background = 'rgba(255, 182, 193, 0.15)';
            
            bearBgEffect.appendChild(bubble);
        }
        
        // Tambahkan sparkle
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'bg-sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            sparkle.style.animationDuration = Math.random() * 2 + 2 + 's';
            
            bearBgEffect.appendChild(sparkle);
        }
    }
    
    // Inisialisasi efek pertama
    createBubbles();
    
    // Tombol untuk mengubah efek latar belakang
    changeBgEffectBtn.addEventListener('click', function() {
        currentBgEffect = (currentBgEffect + 1) % bgEffects.length;
        
        switch(bgEffects[currentBgEffect]) {
            case 'bubbles':
                createBubbles();
                break;
            case 'sparkles':
                createSparkles();
                break;
            case 'pulse':
                createPulse();
                break;
            case 'rainbow':
                createRainbow();
                break;
            case 'mixed':
                createMixedEffect();
                break;
        }
    });
    
    // Animasi beruang melompat
    animateBearBtn.addEventListener('click', function() {
        bear.style.animation = 'bearJump 0.8s ease';
        setTimeout(() => {
            bear.style.animation = '';
        }, 800);
        
        createConfetti();
    });
    
    // Peluk beruang
    hugBearBtn.addEventListener('click', function() {
        bear.style.animation = 'heartBeat 1.2s ease';
        setTimeout(() => {
            bear.style.animation = '';
        }, 1200);
        
        // Tambahkan efek hati
        const heart = document.createElement('div');
        heart.style.position = 'absolute';
        heart.style.top = '50%';
        heart.style.left = '50%';
        heart.style.fontSize = '40px';
        heart.style.color = '#ff6b8b';
        heart.innerHTML = '💖';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.zIndex = '10';
        bear.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1500);
    });
    
    // Efek konfeti
    confettiBtn.addEventListener('click', function() {
        createConfetti();
    });
    
    // Musik
    let audio = null;
    let isPlaying = false;
    musicBtn.addEventListener('click', function() {
        if (!audio) {
            // Menggunakan audio dari sumber eksternal (ganti dengan URL musik Anda)
            audio = new Audio('gambar/musik.mp3');
            audio.loop = true;
        }
        
        if (isPlaying) {
            audio.pause();
            musicBtn.innerHTML = 'Putar Musik 🎵';
        } else {
            audio.play().catch(e => {
                console.log("Autoplay prevented. Please interact with the page first.");
                musicBtn.innerHTML = 'Klik lagi untuk memutar';
            });
            musicBtn.innerHTML = 'Jeda Musik ⏸️';
        }
        
        isPlaying = !isPlaying;
    });
    
    // Kirim ucapan
    sendWishBtn.addEventListener('click', function() {
        if (wishInput.value.trim() !== '') {
            const wishItem = document.createElement('div');
            wishItem.className = 'wish-item';
            
            // Tambahkan timestamp
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            wishItem.innerHTML = `
                <strong>Ucapan:</strong> ${wishInput.value}<br>
                <small>Dikirim pada: ${timeString}</small>
            `;
            
            wishesContainer.appendChild(wishItem);
            wishInput.value = '';
            
            // Auto scroll ke ucapan terbaru
            wishesContainer.scrollTop = wishesContainer.scrollHeight;
            
            // Animasi beruang melambai
            bear.style.animation = 'bearWave 1s ease';
            setTimeout(() => {
                bear.style.animation = '';
            }, 1000);
            
            // Efek konfeti kecil
            createSmallConfetti();
        }
    });
    
    // Fungsi untuk membuat konfeti
    function createConfetti() {
        const colors = ['#ff6b8b', '#ff99ac', '#ffc6d9', '#ffde7d', '#a3d9b1', '#9ac6ff'];
        const shapes = ['❤️', '⭐', '🎉', '🎊', '✨', '🎂'];
        
        for (let i = 0; i < 120; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            
            // Pilih antara bentuk warna atau emoji
            if (Math.random() > 0.5) {
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = Math.random() * 15 + 10 + 'px';
                confetti.style.height = Math.random() * 15 + 10 + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            } else {
                confetti.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
                confetti.style.fontSize = (Math.random() * 20 + 16) + 'px';
                confetti.style.background = 'transparent';
                confetti.style.width = 'auto';
                confetti.style.height = 'auto';
            }
            
            confetti.style.opacity = Math.random();
            confetti.style.animation = `fall ${Math.random() * 5 + 3}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            // Hapus confetti setelah animasi selesai
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 8000);
        }
    }
    
    // Konfeti kecil untuk ucapan
    function createSmallConfetti() {
        const colors = ['#ff6b8b', '#ff99ac', '#ffc6d9'];
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.borderRadius = '50%';
            confetti.style.opacity = Math.random();
            confetti.style.animation = `fall ${Math.random() * 3 + 1}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 4000);
        }
    }
    
    // Interaksi dengan beruang
    bear.addEventListener('click', function() {
        this.style.animation = 'bearJump 0.8s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 800);
        
        createConfetti();
    });
    
    // Tambah beberapa ucapan contoh
    const sampleWishes = [
        "Selamat ulang tahun yaa Semoga panjang umur dan sehat selalu ya zahraa.",
        "Happy Birthday. May all your dreams come true.",
        "Di hari spesialmu, kudoakan yang terbaik untukmu.",
        "Semoga bertambah usia, bertambah juga kebahagiaannya.",
        "Panjang umur, bahagia selalu, dan sukses dalam segala hal",
        "teruslah menjadi pribadi yang menyenangkan dan inspiratif yaa"
    ];
    
    sampleWishes.forEach(wish => {
        const wishItem = document.createElement('div');
        wishItem.className = 'wish-item';
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        wishItem.innerHTML = `
            <strong>Ucapan:</strong> ${wish}<br>
            <small>Dikirim pada: ${timeString}</small>
        `;
        
        wishesContainer.appendChild(wishItem);
    });
    
    // Efek ketik pada pesan
    setTimeout(() => {
        typingMessage.style.animation = 'none';
        typingMessage.style.borderRight = 'none';
        typingMessage.style.whiteSpace = 'normal';
    }, 4000);
});
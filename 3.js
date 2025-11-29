function showBirthdayWish() {
            const name = document.getElementById('nameInput').value.trim();
            const messageElement = document.getElementById('birthdayMessage');
            
            if (name === '') {
                alert('Silakan masukkan nama terlebih dahulu!');
                return;
            }
            
            const messages = [
                `Selamat ulang tahun, ${name}! 🎉 Semoga harimu dipenuhi kebahagiaan dan cinta seperti boneka beruang yang selalu menemani.`,
                `Happy Birthday, ${name}! 🧸💖 Di hari spesialmu ini, semoga semua impianmu menjadi kenyataan!`,
                `${name}, selamat ulang tahun! Layaknya boneka beruang yang selalu menghangatkan, semoga kamu selalu dikelilingi kehangatan dan kasih sayang.`,
                `Selamat bertambah usia, ${name}! 🎂🧸 Semoga tahun ini membawa lebih banyak kebahagiaan, kesuksesan, dan petualangan menyenangkan!`,
                `Untuk ${name} yang tersayang, selamat ulang tahun! 💕 Semoga kamu selalu sehat, bahagia, dan sukses dalam segala hal!`
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            
            messageElement.innerHTML = `
                <h2>Untuk ${name}</h2>
                <p>${randomMessage}</p>
                <div style="font-size: 30px;">🎂🎈🎁🎀</div>
            `;
            
            messageElement.style.display = 'block';
            
            // Membuat efek dekorasi
            createDecorations();
        }
        
        // Fungsi untuk membuat dekorasi (hati, bintang, dll)
        function createDecorations() {
            const container = document.querySelector('.container');
            
            // Hapus dekorasi sebelumnya jika ada
            const oldDecorations = document.querySelectorAll('.decoration');
            oldDecorations.forEach(el => el.remove());
            
            const symbols = ['❤', '✨', '🌟', '🎀', '🎈', '🎁'];
            
            for (let i = 0; i < 15; i++) {
                const decoration = document.createElement('div');
                decoration.classList.add('decoration');
                decoration.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
                decoration.style.left = Math.random() * 100 + '%';
                decoration.style.animationDuration = (Math.random() * 5 + 3) + 's';
                decoration.style.animationDelay = Math.random() * 2 + 's';
                container.appendChild(decoration);
            }
        }
        
        // Fungsi untuk membuka di tab baru
        function openInNewTab() {
            const name = document.getElementById('nameInput').value.trim();
            // Membuat URL dengan parameter nama
            const url = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;
            window.open(url, '_blank');
        }
        
        // Mengecek apakah ada parameter nama di URL
        window.onload = function() {
            const urlParams = new URLSearchParams(window.location.search);
            const name = urlParams.get('name');
            
            if (name) {
                document.getElementById('nameInput').value = name;
                showBirthdayWish();
            }
            
            createDecorations();
        };
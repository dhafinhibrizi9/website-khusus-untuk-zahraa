document.addEventListener('DOMContentLoaded', function() {
            const btnLove = document.getElementById('btnLove');
            const btnFriends = document.getElementById('btnFriends');
            const responseMessage = document.getElementById('responseMessage');
            const heartsContainer = document.getElementById('heartsContainer');
            
            // GANTI DENGAN USERNAME INSTAGRAM ANDA
            const yourInstagramUsername = "dhavinhibrizi";
            const instagramUrl = `https://www.instagram.com/dhavinhibrizi/`;
            
            // Membuat efek hujan hati
            function createHearts() {
                const heart = document.createElement('div');
                heart.classList.add('heart-particle');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 4 + 3 + 's';
                heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }
            
            // Menjalankan efek hujan hati secara berkala
            setInterval(createHearts, 400);
            
            // Efek hati ekstra
            function createHeartsBurst(count) {
                for (let i = 0; i < count; i++) {
                    setTimeout(() => {
                        createHearts();
                    }, i * 100);
                }
            }
            
            // Tombol "Aku Juga Menyukaimu" diklik
            btnLove.addEventListener('click', function() {
                responseMessage.innerHTML = `
                    <h2>💖 Aku Sangat Senang! 💖</h2>
                    <p>Kamu tidak tahu betapa bahagianya aku mendengar ini  .</p>
                    <p>Aku benar-benar ingin mengenalmu lebih dalam dan membangun sesuatu yang indah bersama.</p>
                    <p>Mari kita mulai perjalanan ini dengan berbicara lebih lanjut. Kirim pesan ke Instagram ku ya!</p>
                    <a href="${instagramUrl}" class="ig-direct" target="_blank">
                        <i class="fab fa-instagram"></i> Chat Aku di Instagram
                    </a>
                    <p style="margin-top: 20px; font-size: 1rem; color: #7c3a5c;">
                        Jangan lupa follow juga akun Instagram ku ya! 😊
                    </p>
                `;
                responseMessage.style.display = 'block';
                btnLove.innerHTML = '<i class="fas fa-heart"></i> Kamu Membuatku Bahagia!';
                btnLove.style.background = 'linear-gradient(to right, #4CAF50, #45a049)';
                
                // Efek hati ekstra
                createHeartsBurst(15);
                
                // Scroll ke response message
                responseMessage.scrollIntoView({ behavior: 'smooth' });
            });
            
            // Tombol "Kita Tetap Berteman" diklik
            btnFriends.addEventListener('click', function() {
                responseMessage.innerHTML = `
                    <h2>🤝 Aku Menghargai Kejujuranmu</h2>
                    <p>Terima kasih sudah jujur tentang pendapatmu. Aku memahami dan menghormati pendapatmu.</p>
                    <p>Meskipun aku berharap kau suka, aku tetap menghargai pendaptmu mu.</p>
                    <p>Aku berharap kita bisa tetap berteman . Jika suatu hari kamu ingin berbicara, aku selalu siap mendengarkan.</p>
                    <a href="${instagramUrl}" class="ig-direct" target="_blank">
                        <i class="fab fa-instagram"></i> Tetap Terhubung di Instagram
                    </a>
                    <p style="margin-top: 20px; font-size: 1rem; color: #7c3a5c;">
                        Aku berharap yang terbaik untukmu selalu.
                    </p>
                `;
                responseMessage.style.display = 'block';
                btnFriends.innerHTML = '<i class="fas fa-handshake"></i> Terima Kasih Sudah Jujur';
                btnFriends.style.background = 'linear-gradient(to right, #6b7280, #4b5563)';
                
                // Scroll ke response message
                responseMessage.scrollIntoView({ behavior: 'smooth' });
            });
        });
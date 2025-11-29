// Photo Album with Poems (Without Upload Section)
class PhotoAlbum {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 4;
        this.poems = {
            1: {
                icon: '🌸',
                title: 'Bunga di Musim Semi',
                subtitle: 'Tentang Keindahan yang Abadi',
                content: `Dalam kelopak yang merekah
Di musim semi yang indah
Kau bagai bunga yang bermekaran
Menghiasi dunia dengan keelokan

Setiap kelopak adalah cerita
Setiap warna adalah bahagia
Di usia yang baru ini
Semoga kau terus bersinar

Seperti bunga di musim semi
Yang selalu tumbuh dengan indah
Demikianlah hidupmu nanti
Penuh warna dan sukacita`,
                date: 'oktober 2025'
            },
            2: {
                icon: '🌊',
                title: 'Ombak dan Pantai',
                subtitle: 'Tentang Kedamaian Hati',
                content: `Di tepian pantai yang sunyi
Ombak berbisik lembut
Membawa cerita tentang kehidupan
Dan kedamaian yang hakiki

Seperti ombak yang tak pernah lelah
Menghantam karang dan pantai
Demikianlah semangat hidupmu
Tak pernah padam oleh waktu

Di senja yang mulai memudar
Kutemukan kedamaian sejati
Dalam doa dan harapan
Untuk kebahagiaanmu nanti`,
                date: 'oktober 2025'
            },
            3: {
                icon: '🌻',
                title: 'Matahari dan Bunga',
                subtitle: 'Tentang Cahaya dalam Hidup',
                content: `Matahari terbit di timur
Menyinari bunga-bunga
Yang mengangguk riang
Menyambut hari baru

Kau bagai matahari pagi
Yang menghangatkan hati
Memberi cahaya dan semangat
Dalam setiap langkah hidup

Bunga-bunga bermekaran
Menerima kasih sang surya
Demikianlah hidup ini
Penuh berkah dan anugerah`,
                date: 'oktober 2025'
            },
            4: {
                icon: '🌿',
                title: 'Hijau yang Menenangkan',
                subtitle: 'Tentang Pertumbuhan dan Kedamaian',
                content: `Di tengah hutan yang hijau
Di mana daun-daun bergoyang
Kutemukan kedamaian
Yang tak ternilai harganya

Seperti pohon yang tumbuh
Kokoh dan penuh kehidupan
Demikianlah jiwamu
Yang terus berkembang dan belajar

Dalam kesunyian yang damai
Dalam keheningan yang berarti
Kusampaikan doa terbaik
Untuk kebahagiaanmu selamanya`,
                date: 'november 2025'
            }
        };
        this.initializeAlbum();
    }

    initializeAlbum() {
        this.bindEvents();
        this.startAutoSlide();
    }

    bindEvents() {
        // Navigation arrows
        document.querySelector('.prev-arrow-album').addEventListener('click', () => {
            this.prevSlide();
        });

        document.querySelector('.next-arrow-album').addEventListener('click', () => {
            this.nextSlide();
        });

        // Dot navigation
        document.querySelectorAll('.slider-dot-album').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideNumber = parseInt(e.target.getAttribute('data-slide'));
                this.goToSlide(slideNumber);
            });
        });

        // Poem buttons
        document.querySelectorAll('.view-poem-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const poemId = parseInt(e.currentTarget.getAttribute('data-poem'));
                this.showPoem(poemId);
            });
        });

        // Modal close
        document.getElementById('closePoemModal').addEventListener('click', () => {
            this.hidePoem();
        });

        // Share poem
        document.getElementById('sharePoem').addEventListener('click', () => {
            this.sharePoem();
        });

        // Close modal on background click
        document.getElementById('poemModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('poemModal')) {
                this.hidePoem();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hidePoem();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
    }

    goToSlide(slideNumber) {
        this.currentSlide = slideNumber;

        // Update slides visibility
        document.querySelectorAll('.album-slide').forEach(slide => {
            slide.classList.remove('active');
        });
        document.querySelector(`[data-slide="${slideNumber}"]`).classList.add('active');

        // Update navigation dots
        document.querySelectorAll('.slider-dot-album').forEach(dot => {
            dot.classList.remove('active');
        });
        document.querySelector(`.slider-dot-album[data-slide="${slideNumber}"]`).classList.add('active');

        // Update counter
        document.querySelector('.current-slide-album').textContent = slideNumber;

        // Reset auto slide timer
        this.resetAutoSlide();
    }

    nextSlide() {
        const nextSlide = this.currentSlide % this.totalSlides + 1;
        this.goToSlide(nextSlide);
    }

    prevSlide() {
        const prevSlide = (this.currentSlide - 2 + this.totalSlides) % this.totalSlides + 1;
        this.goToSlide(prevSlide);
    }

    showPoem(poemId) {
        const poem = this.poems[poemId];
        if (!poem) return;

        // Update modal content
        document.getElementById('modalPoemIcon').textContent = poem.icon;
        document.getElementById('modalPoemTitle').textContent = poem.title;
        document.getElementById('modalPoemSubtitle').textContent = poem.subtitle;
        document.getElementById('poemDate').textContent = poem.date;

        // Format poem content
        const poemContent = document.getElementById('poemContent');
        poemContent.innerHTML = poem.content.split('\n\n')
            .map(paragraph => {
                const lines = paragraph.split('\n')
                    .map(line => `<div class="poem-line">${line}</div>`)
                    .join('');
                return `<div class="poem-paragraph">${lines}</div>`;
            })
            .join('');

        // Show modal
        document.getElementById('poemModal').classList.add('show');

        // Animate poem lines
        setTimeout(() => {
            document.querySelectorAll('.poem-line').forEach((line, index) => {
                line.style.animationDelay = `${index * 0.2}s`;
            });
        }, 100);
    }

    hidePoem() {
        document.getElementById('poemModal').classList.remove('show');
    }

    sharePoem() {
        const title = document.getElementById('modalPoemTitle').textContent;
        const content = document.getElementById('poemContent').textContent;
        
        const shareText = `${title}\n\n${content}\n\n💝 Dari Album Kenangan Spesial`;
        
        if (navigator.share) {
            navigator.share({
                title: title,
                text: shareText
            }).catch(() => {
                this.fallbackShare(shareText);
            });
        } else {
            this.fallbackShare(shareText);
        }
    }

    fallbackShare(text) {
        // Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification('Puisi berhasil disalin! 📋');
        }).catch(() => {
            this.showNotification('Silakan salin puisi secara manual');
        });
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ff6b8b, #ff99ac);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            box-shadow: 0 8px 25px rgba(255, 107, 139, 0.4);
            z-index: 3000;
            animation: notificationSlideIn 0.5s ease-out;
            font-weight: 600;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'notificationSlideOut 0.5s ease-in forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500);
        }, 3000);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 6000); // Change slide every 6 seconds
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.startAutoSlide();
    }
}

// Add CSS animations
const albumStyles = `
    @keyframes notificationSlideIn {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes notificationSlideOut {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;

// Initialize the photo album
document.addEventListener('DOMContentLoaded', function() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = albumStyles;
    document.head.appendChild(styleSheet);
    
    new PhotoAlbum();
});
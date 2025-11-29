document.addEventListener('DOMContentLoaded', function() {
            // Create stars
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random properties
                const size = Math.random() * 3;
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                const opacity = Math.random() * 0.8 + 0.2;
                const animationDelay = Math.random() * 5;
                
                // Apply styles
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${left}%`;
                star.style.top = `${top}%`;
                star.style.opacity = opacity;
                star.style.animationDelay = `${animationDelay}s`;
                
                starsContainer.appendChild(star);
            }
            
            // Create love elements
            function createLove() {
                const love = document.createElement('div');
                love.classList.add('love');
                love.innerHTML = '❤';
                
                // Random properties
                const left = Math.random() * 100;
                const size = Math.random() * 20 + 10;
                const animationDuration = Math.random() * 4 + 3;
                
                // Apply styles
                love.style.left = `${left}%`;
                love.style.fontSize = `${size}px`;
                love.style.animationDuration = `${animationDuration}s`;
                
                document.body.appendChild(love);
                
                // Remove love after animation completes
                setTimeout(() => {
                    love.remove();
                }, animationDuration * 1000);
            }
            
            // Create love periodically
            setInterval(createLove, 300);
            
            // Add click event to all cards
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                card.addEventListener('click', function() {
                    // Only flip if not already flipped
                    if (!this.classList.contains('flipped')) {
                        this.classList.add('flipped');
                        
                        // Create extra love when card is flipped
                        for (let i = 0; i < 5; i++) {
                            setTimeout(() => {
                                createLove();
                            }, i * 200);
                        }
                    }
                });
                
                // Add event to back buttons
                const btnBack = card.querySelector('.btn-back');
                btnBack.addEventListener('click', function(e) {
                    e.stopPropagation();
                    card.classList.remove('flipped');
                });
            });
            
            // Add hover effect
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
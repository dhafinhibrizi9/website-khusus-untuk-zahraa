const msg = "semoga hari kamu selalu indah yaaa ✨💖";
    const typingEl = document.getElementById('typing');
    let ti = 0;
    (function type() {
      if (ti <= msg.length) {
        typingEl.innerHTML = msg.slice(0, ti) + (ti % 2 ? '|' : '&nbsp;');
        ti++;
        setTimeout(type, 80);
      } else {
        typingEl.innerHTML = msg; // bersihkan cursor
      }
    })();

    // ===== Floating hearts =====
    function createHeart() {
      const el = document.createElement('div');
      el.className = 'floating-heart';
      el.innerText = '💖';
      el.style.left = (Math.random() * 90) + 'vw';
      el.style.fontSize = (12 + Math.random() * 28) + 'px';
      el.style.opacity = (0.5 + Math.random() * 0.6);
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 6000);
    }
    setInterval(createHeart, 700);

    // ===== Confetti + play music on celebrate =====
    function createConfettiPiece() {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.background = `hsl(${Math.floor(Math.random()*360)}, 70%, 60%)`;
      c.style.transform = `rotate(${Math.random()*360}deg)`;
      c.style.width = (6 + Math.random()*10) + 'px';
      c.style.height = (8 + Math.random()*12) + 'px';
      document.body.appendChild(c);
      // remove after animation:
      setTimeout(()=> c.remove(), 4500);
    }

    document.getElementById('celebrateBtn').addEventListener('click', function() {
      const audio = document.getElementById('bg-music');
      audio.currentTime = 0;
      audio.play().catch(()=>{/* autoplay might be blocked until user interacts - button click is interaction so should play */});
      // burst confetti
      for (let i=0;i<60;i++){
        setTimeout(createConfettiPiece, i * 40);
      }
      // small bounce on button
      this.classList.add('clicked');
      setTimeout(()=> this.classList.remove('clicked'), 600);
    });
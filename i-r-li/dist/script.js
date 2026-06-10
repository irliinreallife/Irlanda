const customAudio = new Audio("https://files.catbox.moe/dxar50.mp3");
customAudio.volume = 0.5;

function switchTab(targetSectionId) {
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        customAudio.currentTime = 0;
        customAudio.play().catch(o => {});
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        targetSection.classList.add('active');
    }
}

// Escucha los clics del menú de la izquierda
const menuButtons = document.querySelectorAll('.sidebar-menu .menu-btn');
menuButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const targetSectionId = this.getAttribute('data-target');
        if (targetSectionId) {
            e.preventDefault(); 
            menuButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            switchTab(targetSectionId);
        }
    });
});

// Escucha los clics de las portadas internas y botones de volver
document.querySelector('.content-panel').addEventListener('click', function(e) {
    const clickable = e.target.closest('.subproject-btn, .back-btn');
    if (clickable) {
        const targetSectionId = clickable.getAttribute('data-target');
        if (targetSectionId) {
            e.preventDefault();
            switchTab(targetSectionId);
        }
    }
});

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 30 + 15; 
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = (Math.random() * 100) + 'vw';
    bubble.style.animationDuration = (Math.random() * 5 + 6) + 's';
    document.body.appendChild(bubble);
    setTimeout(() => { bubble.remove(); }, 11000);
}
setInterval(createBubble, 1500);
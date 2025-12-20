document.addEventListener('DOMContentLoaded', () => {


    const feature = document.querySelector('.feature');
    if (feature) {
        window.addEventListener('scroll', () => {
            const fromTop = window.scrollY;
            const blurValue = fromTop / 100;
            feature.style.filter = `blur(${blurValue}px)`;
        });
    }


    const trolBtn = document.createElement('button');
    trolBtn.innerText = "Klik hier voor een verrassing!";
    trolBtn.id = "trol-btn";


    Object.assign(trolBtn.style, {
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        padding: '12px 20px',
        zIndex: '10000',
        cursor: 'pointer',
        backgroundColor: '#bc3d3d',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        transition: 'all 0.2s ease'
    });

    document.body.appendChild(trolBtn);

    let attempts = 0;
    const maxAttempts = 3;

    const moveButton = () => {
        if (attempts < maxAttempts) {
            const x = Math.random() * (window.innerWidth - trolBtn.offsetWidth - 40);
            const y = Math.random() * (window.innerHeight - trolBtn.offsetHeight - 40);
            trolBtn.style.left = `${x}px`;
            trolBtn.style.top = `${y}px`;
            attempts++;
        } else {
            trolBtn.innerText = "OOH NEE, GOTCHA";
            trolBtn.style.backgroundColor = "green";
            trolBtn.style.left = '50%';
            trolBtn.style.top = '50%';
            trolBtn.style.transform = 'translate(-50%, -50%)';
        }
    };

    trolBtn.addEventListener('mouseenter', moveButton);
    trolBtn.addEventListener('click', () => {
        if (attempts >= maxAttempts) {
            window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
        }
    });
});
let pattern = ['p', 'x', 'l'];
let current = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === pattern[current]) {
        current++;
        if (pattern.length === current) {
            activateHackerMode();
            current = 0;
        }
    } else {
        current = 0;
    }
});

function activateHackerMode() {
    alert("Oei Je bent gehakt!");
    document.body.style.fontFamily = "'Courier New', monospace";
    document.body.style.color = "#00ff00";
    document.querySelectorAll('.card').forEach(c => c.style.borderColor = "#00ff00");
}

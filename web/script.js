
const textElement = document.getElementById('moving-text');


textElement.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.style.color = randomColor;
    
    this.style.animationDuration = '1s';
    
    setTimeout(() => {
        this.style.animationDuration = '4s';
    }, 1000);
    
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
});

textElement.addEventListener('mouseenter', function() {
    this.style.textShadow = '0 0 15px rgba(255,255,255,0.8)';
});

textElement.addEventListener('mouseleave', function() {
    this.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
});


console.log('Сайт загружен! Нажми на надпись "Привет, мир!" для эффекта 😊');
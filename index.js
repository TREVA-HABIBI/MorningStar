document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.querySelector('.login-container');
    const loginBtn = document.querySelector('.login-btn');
    
    // Mouse move effect for border
    loginContainer.addEventListener('mousemove', (e) => {
        const x = e.clientX - loginContainer.getBoundingClientRect().left;
        const y = e.clientY - loginContainer.getBoundingClientRect().top;
        
        // Update CSS variables for gradient position
        loginContainer.style.setProperty('--x', `${x}px`);
        loginContainer.style.setProperty('--y', `${y}px`);
        
        // Alternate between yellow and green based on position
        const intensity = (x + y) / (loginContainer.offsetWidth + loginContainer.offsetHeight);
        if (intensity % 0.2 < 0.1) {
            loginContainer.style.boxShadow = `0 0 15px 5px rgba(255, 235, 59, 0.5)`;
        } else {
            loginContainer.style.boxShadow = `0 0 15px 5px rgba(76, 175, 80, 0.5)`;
        }
    });

    // Reset border when mouse leaves
    loginContainer.addEventListener('mouseleave', () => {
        loginContainer.style.boxShadow = 'none';
    });

    // Button click effect
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            loginBtn.style.transform = 'scale(1)';
        }, 100);
    });
});

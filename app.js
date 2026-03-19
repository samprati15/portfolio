// Typing Effect Data
const typingPhrases = [
    "Java Full Stack Developer",
    "Cyber Security Enthusiast",
    "Problem Solver",
    "Tech Leader"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
const element = document.getElementById("typed-text");

function type() {
    const currentPhrase = typingPhrases[currentPhraseIndex];
    
    if (isDeleting) {
        element.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
    } else {
        element.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at the end
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length;
        typingSpeed = 500; // Pause before typing new word
    }

    setTimeout(type, typingSpeed);
}

// Start typing effect when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    if(element) {
        setTimeout(type, 1000);
    }
});

// Smooth scrolling for Anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // offset for navbar
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(3, 7, 18, 0.9)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(3, 7, 18, 0.6)';
        nav.style.boxShadow = 'none';
    }
});

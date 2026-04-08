const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
    { text: "Art is the signature of civilizations.", author: "Beverly Sills" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" }
];

let currentQuoteIndex = 0;

function nextQuote() {
    const textEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    
    textEl.style.opacity = 0;
    textEl.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        textEl.innerText = `"${quotes[currentQuoteIndex].text}"`;
        authorEl.innerText = quotes[currentQuoteIndex].author;
        textEl.style.opacity = 1;
        textEl.style.transform = 'translateY(0)';
    }, 500);
}

// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.1 });

// Add classes and observe sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(section);
});

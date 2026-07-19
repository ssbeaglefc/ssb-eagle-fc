// Fungsi Toggle Menu Mobile
function toggleMenu() {
    const nav = document.getElementById('nav-list');
    nav.classList.toggle('active');
}

// Smooth Scroll untuk link navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Tutup menu mobile jika sedang terbuka
        document.getElementById('nav-list').classList.remove('active');

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efek Navbar Transparan saat di atas, Solid saat discroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.98)';
        header.style.padding = '10px 0';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '15px 0';
    }
});

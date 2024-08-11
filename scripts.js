document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let index = 0;

    function showNextSlide() {
        index = (index + 1) % sliderWrapper.children.length;
        const offset = -index * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // Handle 3D rotation on hover and click
    document.querySelectorAll('.product-item').forEach(item => {
        const img = item.querySelector('img');
        
        // Hover effect
        item.addEventListener('mouseover', () => {
            img.style.transform = 'translateY(-10px) rotateY(15deg) rotateX(10deg)';
        });

        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('clicked')) {
                img.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
            }
        });

        // Click effect
        item.addEventListener('click', () => {
            if (item.classList.contains('clicked')) {
                img.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
                item.classList.remove('clicked');
            } else {
                img.style.transform = 'translateY(-20px) rotateY(30deg) rotateX(20deg)';
                item.classList.add('clicked');
            }
        });
    });
});

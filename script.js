<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize ScrollReveal
        ScrollReveal().reveal('.image', {
            duration: 1000,
            distance: '30px',
            origin: 'bottom',
            interval: 200
        });

        // Initialize Swiper for image slider
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        // Smooth scroll when clicking on navigation links
        const navLinks = document.querySelectorAll('#navbar ul li a');
        for (const link of navLinks) {
            link.addEventListener('click', smoothScroll);
        }

        function smoothScroll(event) {
            event.preventDefault();
            const target = document.querySelector(event.target.getAttribute('href'));
            const headerHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - headerHeight - startPosition;
            const duration = 1000;
            let startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }

        // Navbar scroll animation
        const navbar = document.querySelector('#navbar');
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100) {
                navbar.classList.add('scroll');
            } else {
                navbar.classList.remove('scroll');
            }
        });
    });
</script>

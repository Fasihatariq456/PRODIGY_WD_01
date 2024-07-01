        // nav-bar changes its color when the page is scrolled
        const navbar = document.querySelector('.nav-bar');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                navbar.style.backgroundColor = '#9B0000'; 
            } else {
                navbar.style.backgroundColor = '#D21312'; 
            }
        });

        // When the mouse hovers to an anchor tag, it adds a border to it.
        const navLink = document.querySelectorAll('.nav-bar a');
        navLink.forEach(link => {
            link.addEventListener('mouseover', () => {
                link.style.border = '1px solid whitesmoke';
            });

            link.addEventListener('mouseout', () => {
                link.style.border = 'none';
            });
        });

        // When the mouse hovers at the nav-bar, its background color changes
        const navbaar = document.querySelector('.nav-bar');
        navbaar.addEventListener('mouseover', () => {
            navbaar.style.backgroundColor = '#9B0000';
        });

        navbaar.addEventListener('mouseout', () => {
            navbaar.style.backgroundColor = '#D21312';
        });

        // When anchor tags are clicked in the nav-bar, the cursor moves to the particular section
        const navLinks = document.querySelectorAll('.nav-bar a');
        navLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const href = link.getAttribute('href');
                const section = document.querySelector(href);
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });
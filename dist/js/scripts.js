/*!
* Start Bootstrap - Freelance v7.0.7 (https://chanelmunezero.com/)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/freelance/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Shrink the navbar when page is scrolled
    const form = document.body.getElementById('contactForm');
    if (form) {
        console.log('form found', form);
        const f = new bootstrap.Form(form);
        f.addEventListener('submit', async function (event) {
            //event.preventDefault();
            console.log('try submitted');
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value; 
            const phone = document.getElementById('phone').value;

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message, phone }),
            });
        
            try {
                const result = await response.json();
                console.log('json result', result);
                
            } catch (error) {
                console.error(error);
                
            }
            console.log('submitted done');
            //event.stopPropagation();
        });
    }

});

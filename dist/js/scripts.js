/*!
* Start Bootstrap - Freelance v7.0.7 (https://chanelmunezero.com/)
* Copyright 2013-2026 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/freelance/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.querySelector('#mainNav');
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
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.querySelector('.navbar-toggler');
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

    // Contact form submission
    const form = document.getElementById('contactForm');
    if (form) {
        form.onsubmit = async function (event) {
            event.preventDefault();
            event.stopImmediatePropagation();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const phone = document.getElementById('phone').value;

            const successMsg = document.getElementById('submitSuccessMessage');
            const errorMsg = document.getElementById('submitErrorMessage');

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message, phone }),
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('json result', result);
                    if (successMsg) successMsg.classList.remove('d-none');
                    if (errorMsg) errorMsg.classList.add('d-none');
                    form.reset();
                } else {
                    if (errorMsg) errorMsg.classList.remove('d-none');
                    if (successMsg) successMsg.classList.add('d-none');
                }
            } catch (error) {
                console.error(error);
                if (errorMsg) errorMsg.classList.remove('d-none');
                if (successMsg) successMsg.classList.add('d-none');
            }
        }
    }

});

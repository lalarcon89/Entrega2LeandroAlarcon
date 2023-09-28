(function() {
    const menu = document.getElementById('menu');

    const toggleMenu = function(e) {
        e.preventDefault();

        menu.classList.toggle('abierto');
    }

    const menuBtns = document.querySelectorAll('.responsive-btn');
    menuBtns.forEach(btn => {
        btn.addEventListener('click', toggleMenu);
    });
})();
// Collapsable side-bar---

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const collapseExpandBtn = document.getElementById('collapse-expand');

    sidebar.classList.add('collapsed');

    collapseExpandBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
    });


    const mainContent = document.getElementById('main-content');
    mainContent.addEventListener('click', function () {
        if (window.innerWidth < 768) {
            sidebar.classList.add('collapsed');
        }
    });
});
document.getElementById('toggleBtn').addEventListener('click', function () {
    const sideNav = document.getElementById('sideNav');
    const mainContent = document.getElementById('mainContent');
    if (sideNav.style.left === '-250px') {
        sideNav.style.left = '0';
        mainContent.style.marginLeft = '250px';
    } else {
        sideNav.style.left = '-250px';
        mainContent.style.marginLeft = '0';
    }
});

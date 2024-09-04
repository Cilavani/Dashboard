document.getElementById('toggleBtn').addEventListener('click', function () {
    const sideNav = document.getElementById('sideNav');
    if (sideNav.style.left === '-250px') {
        sideNav.style.left = '0';
    } else {
        sideNav.style.left = '-250px';
    }
});

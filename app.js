var icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")) {
icon.src="./assets/darkmode/sun.png"; }
else {
    icon.src ="./assets/darkmode/moon.png";
}
}

document.getElementById('button-show').addEventListener('click', function () {
    document.getElementById('footer-content').style.display = 'block';
})
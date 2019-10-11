function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("closed");
    
}

var x = document.getElementById('hamBtn');
x.onclick = toggleMenu;
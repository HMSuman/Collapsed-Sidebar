let myNav = document.getElementById("mySidebar");
let main = document.getElementById("main")
let open = document.getElementById("open");
let close = document.getElementById('close');
open.addEventListener('click', () => {
    myNav.style.width = "250px";
    main.style.marginLeft = "250px";
});
close.addEventListener('click', () => {
    myNav.style.width = "0px";
    main.style.marginLeft = "0px";
});